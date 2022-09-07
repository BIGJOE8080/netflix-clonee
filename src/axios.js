import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.themoviedb.org",
});

instance.get('/foo-bar');

export default instance;
