import { recipiesURL } from "./constants";

export const fetchRecipies = async()=> {
    const res = await fetch(recipiesURL);
    const data = await res.json();
    console.log(data);
    return data
}

