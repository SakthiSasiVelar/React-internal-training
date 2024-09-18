import Styles from "../PostCard/postCard.module.css"
import ActionButton from "../ActionButton/ActionButton";

function PostCard({post}){
    return(
        <div className={Styles.post_card_outer_container}>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
            <h3>Views : {post.views}</h3>
            <h3>Likes : {post.reactions.likes}</h3>
            {
                post.userId === 123 && <ActionButton />
            }
        </div>
    )
}

export default PostCard;