import {removeComment} from "../../../store/slices/moviesSlice.js";
import {useDispatch} from "react-redux";
import CancelButton from "../../buttons/CancelButton.jsx";

const CommentsCard = ({comment, movieId}) => {
    const dispatch = useDispatch();

    const handleRemoveComment = (commentId) => {
        dispatch(removeComment({movieId, commentId}));
    };

    return (
        <div className="w-full flex justify-between items-center py-3 px-5 shadow-sm hover:bg-gray-200">
            <div>
                <p className="font-bold text-lg"> {comment.user} </p>
                <p className="text-sm"> {comment.date} </p>
                <p className="font-bold text-yellow-500"> {comment.rating}/10 </p>
            </div>
            <p> {comment.text} </p>
            <CancelButton onClick={() => handleRemoveComment(comment.id)}>Удалить</CancelButton>
        </div>
    );
};

export default CommentsCard;