import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'

class BooksApp extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({ books })
    })
}

  render() {
    const { books } = this.state;
    const currentlyReading = books.filter((book) => book.shelf ==='currentlyReading');
    const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
    const read = books.filter((book) => book.shelf === 'read');
    return (
      <div className="app">
      <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
      </div>
      <Route exact path='/' render={() => (
        <div className="list-books-content">
          <ListBooks title="Currently Reading" books={currentlyReading} />
          <ListBooks title="Want To Read" books={wantToRead} />
          <ListBooks title="Read" books={read} />
            <div className="open-search">
              < Link to='/search'>Add a book</Link>
            </div>
        </div>
      )}/>
      <Route exact path="/search" render={() => (
        <Search />
        )}/>
      </div>
    )
  }
}

export default BooksApp
