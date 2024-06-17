import {useDispatch} from "react-redux";
import {removeComment} from "../../../store/slices/moviesSlice.js";
import CommentCard from "../../cards/commentCard/CommentCard.jsx";

const CommentsList = ({comments, movieId}) => {
    return (
        <ul>
            {comments.map(comment => (
                <li key={comment.id}>
                    <CommentCard comment={comment} movieId={movieId} key={comment.id}/>
                </li>
            ))}
        </ul>
    );
};

export default CommentsList;