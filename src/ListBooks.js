import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'

class ListBooks extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { books } = this.props
        const currentlyReading = books.filter((book) => book.shelf ==='currentlyReading');
        const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
        const read = books.filter((book) => book.shelf === 'read');

        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                </div>
                <div className="list-books-content">
                <Shelf books={currentlyReading} title={"Currently Reading"}/>
                <Shelf books={wantToRead} title={"Want To Read"}/>
                <Shelf books={read} title={"Read"}/>
                </div>
            </div>
        )
    }
}

export default ListBooks