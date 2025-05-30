import { useState } from "react";
import { useEffect } from "react";
import { fetchRecipies } from "../services/Api";
import { Button, Modal } from "antd";


const RecipiesPage = () => {
    const [recipesData, setRecipesData] = useState([]);
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [SelectedRecipe,setSelectedRecipe] = useState(null)
        const showModal = (recipe) => {
            setIsModalOpen(true);
            setSelectedRecipe(recipe)
        };
        const handleOk = () => {
            setIsModalOpen(false);
            setSelectedRecipe(null)
        };
        const handleCancel = () => {
            setIsModalOpen(false);
            setSelectedRecipe(null)
        };
    // console.log(fetchRecipies());
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
     
    
    return(<>
        <div style={{ padding: '2rem', backgroundColor: '#f0f2f5' }} className="animate__animated animate__fadeIn mt-5">
            <h1 className="fw-bold">All Recipes</h1>
            <div className="row">
                {recipesData.map((recipe, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card">
                            <img src={recipe.imageUrl} className="card-img-top" alt={recipe.title} height={'350px'} />
                            <div className="card-body">
                                <h5 className="card-title">{recipe.title}</h5>
                                <p className="card-text">{recipe.description.slice(0,90)+"..."}</p>
                        <Button type="primary" onClick={()=>showModal(recipe)} className="mt-3">
                            Details
                        </Button>
                        </div>
                        </div>
                        
                    </div>

                ))}
                
               {
                SelectedRecipe && 
                  <Modal
                            title={SelectedRecipe.title}
                            closable={{ 'aria-label': 'Custom Close Button' }}
                            open={SelectedRecipe.title === SelectedRecipe.title && isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}>
                                <strong>Ingredients:</strong>
                               {console.log(SelectedRecipe.ingredients)}
                               { SelectedRecipe.ingredients &&
                                SelectedRecipe.ingredients.map((List,ind)=>(<p key={ind}>{ind+1}. {List}</p>))}

                                <strong className="mt-2">Steps</strong>
                                {SelectedRecipe.steps.map((List,ind)=>(
                                    <p key={ind}>{ind+1}. {List}</p>)
                                    )}
                                <strong>Description : </strong>
                                <p>{SelectedRecipe.description}</p>
                                <strong>Cooking Time:</strong> {SelectedRecipe.cookTime} minutes
                                <strong className="px-3">Servings:</strong> {SelectedRecipe.servings} servings
                  </Modal>
               }
            </div>
        </div>
    
    </>)
}

export default RecipiesPage;