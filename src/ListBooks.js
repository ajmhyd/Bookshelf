import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        query: ''
    }

    render() {
        const { books } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{
                                        width: 128,
                                        height: 192,
                                        backgroundImage:`url("${book.imageLinks.thumbnail}")`
                                    }}></div>
                                    <div className="book-shelf-changer">
                                    <select>
                                        <option value="move" disabled>Move to...</option>
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
                        </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default ListBooks