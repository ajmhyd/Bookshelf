import React, { Component } from 'react';

class Book extends Component {

    render() {

        const { book, moveBook } = this.props
        let backGround = ''

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
                        <select value={book.shelf} onChange={(e) => moveBook(book, e.target.value)}>
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

export default Book