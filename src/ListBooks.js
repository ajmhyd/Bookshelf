import React, { Component } from 'react';
import Shelf from './Shelf'
import PropTypes from 'prop-types'
class ListBooks extends Component {

    render() {
        //filter books by shelf
        const { books, moveBook } = this.props
        const currentlyReading = books.filter((book) => book.shelf ==='currentlyReading');
        const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
        const read = books.filter((book) => book.shelf === 'read');

        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>BookShelf</h1>
                    </div>
                </div>
                <div className="list-books-content">
                <Shelf books={currentlyReading} title={"Currently Reading"} moveBook={moveBook}/>
                <Shelf books={wantToRead} title={"Want To Read"} moveBook={moveBook}/>
                <Shelf books={read} title={"Read"} moveBook={moveBook}/>
                </div>
            </div>
        )
    }
}
//type checking
ListBooks.propTypes = {
    books: PropTypes.array,
    moveBook: PropTypes.func
};

export default ListBooks