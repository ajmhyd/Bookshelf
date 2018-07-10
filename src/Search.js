import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class Search extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        query: ''
      }

      updateQuery = (query) => {
        this.setState({ query: query.trim() })
      }

      clearQuery = () => {
        this.setState({ query: ''})
      }


      render() {

        const { query } = this.state
        let showingBooks

        // if (query) {
        // const match = new RegExp(escapeRegExp(query), 'i')
        // showingBooks = books.filter((book) => match.test(book.name))
        // } else {
        // showingBooks = books
        // }
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"
                value={query}
                onChange={(e) => this.updateQuery(e.target.value)}/>
              </div>
              </div>
              </div>
        )
      }
}

export default Search