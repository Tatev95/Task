
import axios from "axios";

export const getMenu = async () => {
    try {
        const response = await axios.get('https://api.gonnago.am/categories/menu');
        return response.data; 
    } catch (error) {
        console.error("Error fetching menu:", error);
        throw error; 
    }
};
