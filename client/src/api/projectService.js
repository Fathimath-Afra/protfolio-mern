import axios from 'axios';

const API_URL = 'https://afra-portfolio-backend.onrender.com/api/projects';

export const getProjects = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; 
    } catch (error) {
        console.error("Error fetching projects:", error);
        return []; 
    }
};