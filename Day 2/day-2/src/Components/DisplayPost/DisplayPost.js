
import { posts } from "../../utils";
import Styles from "../DisplayPost/displayPost.module.css"
import PostCard from "../PostCard/PostCard";

function DisplayPost(){
    return (
       <div className={Styles.outer_container}>
          <h1 className={Styles.header}>Total Post : {posts[0].total}</h1>
          <div>
            {
                posts[0].posts.map((post)=> <PostCard key={post.id} post={post}/>)
            }
          </div>
       </div>
       
    )
}

export default DisplayPost;