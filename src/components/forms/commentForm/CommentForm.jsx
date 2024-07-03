import { useForm } from 'react-hook-form';
import AcceptButton from "../../buttons/AcceptButton.jsx";

const CommentForm = ({ onSubmit }) => {
    const { register, handleSubmit, reset } = useForm();

    const handleFormSubmit = (data) => {
        const newComment = {
            id: Date.now(),  // Простая генерация ID для примера
            user: "Анонимус",
            text: data.commentText,
            rating: data.commentRating,
            date: new Date().toLocaleString()  // Добавляем текущую дату и время
        };
        onSubmit(newComment);
        reset();
        // Функция reset в react-hook-form используется для сброса формы к её начальному состоянию. В контексте формы комментариев, вызов reset() после отправки формы очищает все поля ввода, возвращая их к пустым значениям или значениям по умолчанию.
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="w-1/4 gap-4 flex-wrap flex p-4">
            <textarea
                type="text"
                {...register('commentText', { required: true })}
                placeholder="Введите комментарий"
                className="bg-grey-lightest border-2 p-2 rounded-lg shadow-inner w-full"
            />
            <input
                type="number"
                {...register('commentRating', { required: true, min: 1, max: 10 })}
                placeholder="Введите рейтинг (1-10)"
                className="bg-grey-lightest border-2 p-2 rounded-lg shadow-inner w-full"
            />
            <AcceptButton type="submit"> Добавить комментарий</AcceptButton>
        </form>
    );
};

export default CommentForm;