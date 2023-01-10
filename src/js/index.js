import Post from "./post.js";
import "../style/style.css";

const post = new Post("Webpack Post Title");

console.log("Post to String", post.toString());
