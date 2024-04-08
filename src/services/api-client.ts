import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "5ff637fc41fc4786bf04d5dece79b9d6"
    }
})