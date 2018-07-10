import React, { Component } from 'react'
import './App.css'
import Book from './Book'

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
                        <Book book={book} moveBook={moveBook}/>
                        </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf