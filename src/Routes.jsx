
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import Catagory from './Pages/CatagoryPage.jsx'
import PageNotFound from "./Pages/PageNotFound.jsx";
import AddRecipe from "./Pages/AddRecipe.jsx";
import RecipiesPage from "./Pages/RecipiesPage.jsx";

const RoutePage = ( )=> {

    return(<>
         <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Soups" element={<Catagory item = {"Soup"}/>}  />
        <Route path="/Salads" element={<Catagory item= {"Salad"}/> } />
        <Route path="/Italian" element={<Catagory  item= {"Italian"} /> } />
        <Route path="/Snacks" element={<Catagory  item= {"Snack"} /> } />
        <Route path="/Desserts" element={<Catagory item = {"Dessert"}/> } />
        <Route path="/Breakfast" element={<Catagory item = {"Breakfast"}/> } />
        <Route path="/Lunch" element={<Catagory item = {"Lunch"}/> } />
        <Route path="/Dinner" element={<Catagory item = {"Dinner"}/> } />
        <Route path="/recipes" element={<RecipiesPage/>} />
        <Route path="/Addrecipe" element={<AddRecipe/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>)
}

export default RoutePage;