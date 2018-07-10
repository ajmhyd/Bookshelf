import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'

class Search extends Component {

    state = {
        books: [],
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query })

        if(query) {
            BooksAPI.search(query).then((books) => {
                (books.length > 0 ? this.setState({ books }) : this.setState({ books: [] }))
            })
            } else {
                this.setState({ books: [] })
        }
    }

    render() {

    const { query, books } = this.state
    const { moveBook } = this.props

    return(
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                        value={query}
                        onChange={(e) => this.updateQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            {books.length > 0 ? (
                <Shelf title="Books Found" books={books} moveBook={moveBook}/>
            ) : (
            <div>
                <div className="book-top">
                    <h2>No Books Found</h2>
                </div>
            </div>
            )}
        </div>
        )
    }
}

export default Search