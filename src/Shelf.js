import React, { Component } from 'react'
import './App.css'
import Book from './Book'
import PropTypes from 'prop-types'

class Shelf extends Component {

    render() {
        const { books, moveBook } = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                        <li key={book.id}>
                        <Book book={book} shelf={books.shelf} moveBook={moveBook}/>
                        </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

//type checking
Shelf.propTypes = {
    books: PropTypes.array,
    moveBook: PropTypes.func
};

export default Shelf