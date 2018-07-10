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

    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <ListBooks books={books} />
      )}/>
        <Route exact path="/search" render={() => (
        <Search />
        )}/>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BooksApp
