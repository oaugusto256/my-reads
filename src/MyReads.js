import React, { Component } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import BookSection from './components/BookSection';
import ButtonSection from './components/ButtonSection';
import { PropagateLoader } from 'react-spinners';
import * as BookAPI from './BooksAPI';

class MyReads extends Component {
  constructor(props) {
    super(props)

    this.state = {
      read: [],
      wantToRead: [],
      currentlyReading: [],
      loading: true
    }
  }


  componentDidMount() {
    BookAPI.getAll()
      .then(books => {
        this.setState({ wantToRead: books, loading: false })
      })
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="container height-100 animated fadeIn">
          <div className="flex-center height-100">
            <PropagateLoader
              size={15}
              sizeUnit={"px"}
              color={'#0984e3'}
            />
          </div>
        </div>
      )
    } else {
      return (
        <div className="container-fluid">
          <Header />
          <ButtonSection />
          <div className="row height-100">
            <BookSection
              name="Want to read"
              style="to-read"
              books={this.state.wantToRead}
            />
            <BookSection
              name="Currently reading"
              style="reading"
              books={this.state.currentlyReading}
            />
            <BookSection
              name="Read"
              style="read"
              books={this.state.read}
            />
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default MyReads;
