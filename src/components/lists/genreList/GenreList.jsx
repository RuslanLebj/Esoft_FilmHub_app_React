import TagButton from "../../buttons/TagButton.jsx";

const GenreList = ({genres}) => {

    return (
        <div className='flex flex-wrap justify-center h-24'>
            {genres.length > 0 ? (
                genres.map((genre, index) => (
                    // Использование составного ключа т.к. API не предоставляет id к жанрам
                    // (Потенциальные проблемы с производительностью: Если данные изменяются часто, использование индексов может привести к неэффективному обновлению DOM.)
                    <TagButton key={`${genre.name}-${index}`}>
                        {genre.name}
                    </TagButton>
                ))
            ) : (
                <p className="text-sm text-gray-600">Жанры отсутствуют</p>
            )}
        </div>
    );
};

export default GenreList;