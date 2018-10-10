import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import SearchBar from "./components/SearchBar";
import AddButton from "./components/AddButton";
import BookSection from "./components/BookSection";
import SearchResult from "./components/SearchResult";

import { Route } from "react-router-dom";
import * as BookAPI from "./BooksAPI";

class MyReads extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      searchedBooks: [],
      loading: true,
      searchLoading: false,
      errorSearching: false
    };
  }

  componentDidMount() {
    BookAPI.getAll().then(books => {
      this.setState({ books: books, loading: false });
    });
  }

  searchBook = query => {
    this.setState({ searchLoading: true })

    BookAPI.search(query).then(books => {
      books.error === "empty query"
        ? this.setState({ errorSearching: true, searchLoading: false })
        : this.setState({ searchedBooks: books, errorSearching: false, searchLoading: false });
    });
  };

  moveBook = (book, moveTo) => {
    if (book.shelf !== moveTo) {
      if (moveTo.length !== 0) {
        this.setState({ loading: true });

        BookAPI.update(book, moveTo).then(() => {
          BookAPI.getAll().then(books => {
            this.setState({ books, loading: false });
          })
        })
      }
    }
  };

  eraseSearchedBooks = () => {
    this.setState({ searchedBooks: [] })
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="container-fluid">
          <Header />
          <Loading size={15} color={'#8181EC'} />
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <Header />
          <Route
            exact
            path="/"
            render={() => (
              <div className="row height-100">
                <AddButton />
                <BookSection
                  style="to-read"
                  type="wantToRead"
                  name="Want to read"
                  books={this.state.books}
                  moveBook={this.moveBook}
                />
                <BookSection
                  style="reading"
                  type="currentlyReading"
                  name="Currently reading"
                  books={this.state.books}
                  moveBook={this.moveBook}
                />
                <BookSection
                  type="read"
                  name="Read"
                  style="read"
                  books={this.state.books}
                  moveBook={this.moveBook}
                />
              </div>
            )}
          />
          <Route
            exact
            path="/search"
            render={() => (
              <div className="row height-100">
                <div className="search-section">
                  <SearchBar 
                    searchBook={this.searchBook} 
                  />
                  <SearchResult
                    moveBook={this.moveBook}
                    books={this.state.searchedBooks}
                    error={this.state.errorSearching}
                    loading={this.state.searchLoading}
                    cleanSection={this.eraseSearchedBooks}
                  />
                </div>
              </div>
            )}
          />
          <Footer />
        </div>
      );
    }
  }
}

export default MyReads;
