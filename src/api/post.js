import axios from "axios";

const url = "http://localhost:3001/"

const allPosts = () => {
    axios.get("http://localhost:3001/posts")
    .then(res => {
        // const persons = res.data;
       console.log(res)
      })
};

export default allPosts;