
import axios from "axios";

export const getCategory = async (id) => {
    try {
        const response = await axios.get(`https://api.gonnago.am/event/home-page?city_id=1&category_id=${id}`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching menu:", error);
        throw error; 
    }
};