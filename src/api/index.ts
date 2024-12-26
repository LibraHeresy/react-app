import axios from "axios";

const api = {
  getPosts: async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  }
}

export default api;