import React, { Component } from "react";
import BookSection from './components/BookSection';
import ButtonSection from './components/ButtonSection';
import * as BookAPI from './BooksAPI';

class MyReads extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      loading: true
    }
  }


  componentDidMount() {
    BookAPI.getAll()
      .then(books => {
        this.setState({ books })
        this.setState({ loading: false })
      })
  }

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>
    } else {
      return (
        <div className="container-fluid">
          <ButtonSection />
          <div className="row height-100">
            <BookSection
              name="Want to read"
              style="to-read"
              books={this.state.books}
            />
            <BookSection
              name="Currently reading"
              style="reading"
              books={[]}
            />
            <BookSection
              name="Read"
              style="read"
              books={[]}
            />
          </div>
        </div>
      );
    }
  }
}

export default MyReads;
