import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'

class BooksApp extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({ books })
    })
}

moveBook = (book, newShelf) => {
  BooksAPI.update(book, newShelf).then(() => {
    book.shelf = newShelf;
    let booksOnShelf = this.state.books.filter(books => books.id !== book.id);
    booksOnShelf.push(book);
    this.setState({ books : booksOnShelf });
  })
}

  render() {
    const { books } = this.state;

    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <ListBooks books={books} moveBook={this.moveBook}/>
      )}/>
        <Route exact path="/search" render={() => (
        <Search moveBook={this.moveBook} myReads={books} />
        )}/>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BooksApp
