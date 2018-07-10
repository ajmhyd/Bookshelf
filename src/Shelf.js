import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import './App.css'
import Book from './Book'

class Shelf extends Component {

    constructor(props) {
        super(props);
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
                        <Book book={book}/>
                        </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf