import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Book extends Component {

    render() {

        const { book, moveBook } = this.props
        let backGround = '';

        if(this.props.book.hasOwnProperty("imageLinks")) {
            backGround = `url("${book.imageLinks.thumbnail}")`;
        } else {
            backGround = '#aaa'
        }

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 192,
                        backgroundImage: backGround
                        }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select onChange={(e) => moveBook(book, e.target.value)} defaultValue={book.shelf || 'none'}>
                            <option value="move">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        )
    }
}

//type checking
Book.propTypes = {
    books: PropTypes.array,
    moveBook: PropTypes.func
};

export default Book