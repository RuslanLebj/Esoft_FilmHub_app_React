import {useSelector, useDispatch} from 'react-redux';
import {addComment, removeComment} from '../../../store/slices/moviesSlice.js';
import CommentForm from '../../forms/commentForm/CommentForm.jsx';
import CommentCard from "../../cards/commentCard/CommentCard.jsx";
import CommentList from "../../lists/commentList/CommentList.jsx";
import PageTitle from "../../titles/pageTitle/PageTitle.jsx";

const CommentsSection = ({movieId}) => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.movies.comments[movieId] || []);

    const handleAddComment = (comment) => {
        dispatch(addComment({movieId, comment}));
    };


    return (
        <>
            <div className="my-3 mx-10">
                <PageTitle> Комментарии </PageTitle>
            </div>
            <CommentForm onSubmit={handleAddComment}/>
            <CommentList comments={comments} movieId={movieId}/>
        </>
    );
};

export default CommentsSection;