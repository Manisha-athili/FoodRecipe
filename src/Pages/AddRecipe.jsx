import {
  Button,
  Cascader,
  Form,
  Input,
  InputNumber,
  Mentions,
  Upload,
  TreeSelect,
  message,
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { fetchRecipies } from '../services/Api';
import {  useEffect, useState } from 'react';
import {recipiesURL} from '../services/constants'



const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const AddRecipe = () => {
  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);
  const [recipesData, setRecipesData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
        try {
            const data = await fetchRecipies();
            setRecipesData(data);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };
    fetchData();
},[])
  
  const onFinish = async (values) => {
  try {
    const recipeData = {
      id: recipesData.length,
      title: values.title,
      description: values.description,
      ingredients: values.ingredients
        ? values.ingredients.split(',').map(item => item.trim()) 
        : [],
      steps: values.steps,
      category: values.category?.[0] || '',  // cascader returns an array
      prepTime: values.prepTime,
      cookTime: values.cookTime || 0,       // default if not added yet
      servings: values.servings || 1,       // default
      imageUrl: values.upload?.[0]?.response?.url || ''
    };

    await fetch(recipiesURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipeData),
    });

    alert('Recipe added successfully!');
    form.resetFields();
  } catch (e) {
    console.error("Error in adding recipe", e);
    alert("Error in adding recipe");
  }
};


  return (
    <Form
      {...formItemLayout}
      form={form}
      variant={variant || 'filled'}
      style={{
        maxWidth: 700,
        margin: '4rem auto',
        padding: '2rem',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        color: '#000',
      }}
      initialValues={{ variant: 'filled' }}
      onFinish={onFinish}
    >
      <h3 className="text-center mb-4">Add Your Favorite Recipe</h3>

      <Form.Item label="Recipe Title" name="title" rules={[{ required: true }]}>
        <Input placeholder="E.g. Chicken Noodle Soup" />
      </Form.Item>

      <Form.Item label="Preparation Time (min)" name="prepTime" rules={[{ required: true }]}>
        <InputNumber min={1} max={240} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="Description" name="description" rules={[{ required: true }]}>
        <TextArea rows={4} placeholder="Describe the recipe..." />
      </Form.Item>

      <Form.Item label="Ingredients" name="ingredients" rules={[{ required: true }]}>
        <Input placeholder="E.g. Salt, Pepper, Olive Oil" />
      </Form.Item>

      <Form.Item label="Cooking Time (min)" name="cookTime">
        <InputNumber min={1} max={240} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="Servings" name="servings" rules={[{ required: true }]}>
        <InputNumber min={1} max={20} style={{ width: '100%' }} />
      </Form.Item>



      <Form.Item label="Category" name="category" rules={[{ required: true }]}>
        <Cascader
          placeholder="Select Category"
          options={[
            { value: 'Soup', label: 'Soup' },
            { value: 'Salads', label: 'Salads' },
            { value: 'Italian', label: 'Italian' },
            { value: 'Snack', label: 'Snack' },
            { value: 'Dessert', label: 'Dessert' },
            { value: 'Breakfast', label: 'Breakfast' },
            { value: 'Lunch', label: 'Lunch' },
            { value: 'Dinner', label: 'Dinner' },
          ]}
        />
      </Form.Item>
      
      <Form.Item
      name="upload"
      label="Upload"
      valuePropName="fileList"
      getValueFromEvent={(e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
      }}
      extra="Upload an image of your recipe"
    >
       <Upload
    name="file"
    action="https://api.cloudinary.com/v1_1/du5vnvt5x/image/upload"
    data={{
      upload_preset: 'Recipe_App',
    }}
    listType="picture"
    showUploadList={true}
    beforeUpload={(file) => {
      const isImage = file.type.startsWith('image/');
      if (!isImage) {
        message.error('Only image files are allowed!');
        return Upload.LIST_IGNORE;
      }
      return true;
    }}
  >
    <Button>Click to Upload</Button>
  </Upload>
    </Form.Item>

      <Form.Item label="Difficulty" name="difficulty" rules={[{ required: true }]}>
        <TreeSelect
          treeData={[
            { title: 'Easy', value: 'easy' },
            { title: 'Medium', value: 'medium' },
            { title: 'Hard', value: 'hard' },
          ]}
          placeholder="Select Difficulty"
        />
      </Form.Item>

      <Form.List name="steps" rules={[{ required: true }]}>
        {(fields, { add, remove }) => (
          <>
            <label style={{ marginLeft: '10px' }}>Cooking Steps</label>
            {fields.map((field, index) => (
              <Form.Item
                key={field.key}
                required={false}
                label={index === 0 ? 'Steps' : ''}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  noStyle
                  rules={[{ required: true, message: 'Step is required' }]}
                >
                  <Input placeholder={`Step ${index + 1}`} style={{ width: '80%' }} />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                    style={{ marginLeft: 10 }}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
              <Button
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
                style={{ width: '100%' }}
              >
                Add Step
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit Recipe
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddRecipe;
