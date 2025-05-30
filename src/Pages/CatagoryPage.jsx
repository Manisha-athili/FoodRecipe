import { Card, Row, Col, Typography, Button, Modal } from "antd";
const { Meta } = Card;
const { Title } = Typography;
import { useEffect, useState } from 'react';
import { fetchRecipies } from '../services/Api';

const Category = ({ item }) => {
    const [recipesData, setRecipesData] = useState([]);
     const [isModalOpen, setIsModalOpen] = useState(false);
        const showModal = () => {
            setIsModalOpen(true);
        };
        const handleOk = () => {
            setIsModalOpen(false);
        };
        const handleCancel = () => {
            setIsModalOpen(false);
        };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchRecipies();
                setRecipesData(data);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };
        fetchData();
    }, []);

    const filteredData = recipesData.filter(recipe => recipe.category === item);

    return (
        <div style={{ padding: '2rem', backgroundColor: '#f0f2f5' }} className="animate__animated animate__fadeIn mt-5">
            <Title level={2} style={{ textAlign: 'center' }}>{item} Recipes</Title>
            <Row gutter={[24, 24]} justify="start">
                {filteredData.map((recipe, index) => (
                    <Col span={8} key={index}>
                        <Card
                            hoverable
                            style={{ width: '100%' }}
                            cover={
                                <img
                                    alt={recipe.title}
                                    src={recipe.imageUrl}
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                            }
                        >
                            <Meta title={recipe.title} description={recipe.description} />
                            <Button type="primary" onClick={showModal} className="mt-3">
                          
                                Details
                            </Button>
                            <Modal
                                title={recipe.title}
                                closable={{ 'aria-label': 'Custom Close Button' }}
                                open={isModalOpen}
                                onOk={handleOk}
                                onCancel={handleCancel}
                            >
                                <strong>Ingredients:</strong>
                                {recipe.ingredients.map((List,ind)=>(<p key={ind}>{ind+1}. {List}</p>))}
                                <strong className="mt-2">Steps</strong>
                                {recipe.steps.map((List,ind)=>(
                                    <p key={ind}>{ind+1}. {List}</p>)
                                    )}
                                <strong>Description : </strong>
                                <p>{recipe.description}</p>
                                <strong>Cooking Time:</strong> {recipe.cookTime} minutes
                                <strong className="px-3">Servings:</strong> {recipe.servings} servings
                            </Modal>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Category;
