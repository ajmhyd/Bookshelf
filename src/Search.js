import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import './App.css'

class Search extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        books: [],
        query: ''
      }

      updateQuery = (query) => {
        this.setState({ query: query.trim() })
        this.onSearch(query);
      }

      clearQuery = () => {
        this.setState({ query: ''})
      }

      onSearch = (query) => {
        BooksAPI.search(query).then((books) => {
            this.setState({
                books: books
            })
        })
      }

      
      render() {

        const { query, books } = this.state

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
            <ListBooks title="Books Found" books={books} />
            </div>
        )
      }
}

export default Search