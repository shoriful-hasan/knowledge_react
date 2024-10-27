import Singlebook from "../booksingle/Singlebook";
import PropTypes from 'prop-types';
const Bookmark = ({bookmar,readtime}) => {
    return (
        <div className="md:w-1/3 border">
            <div className="text-center"><h2>Total reading time::{readtime}</h2></div>
            <h2 className="text-center">Bookmark{bookmar.length}</h2>
            {bookmar.map((book)=><Singlebook key={book.id} single={book}></Singlebook>)}
            
        </div>
        
    );
};
Bookmark.propTypes = {
    bookmar : PropTypes.object.isRequired,
    readtime : PropTypes.object.isRequired
};

export default Bookmark;


