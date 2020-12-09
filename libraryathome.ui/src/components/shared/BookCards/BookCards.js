import React from 'react';

import bookShape from '../../../helpers/propz/bookShape';

import './BookCards.scss';

class BookCards extends React.Component {
    static propTypes = {
        book: bookShape.bookShape,
    }

    render() {
        const { book } = this.props;

        return(
            <div className="BookCards my-2 col-md-3">
                <div className="card">
                    <img src={book.coverImage} className="card-img-top" alt={`cover of ${book.title}`} />
                    <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text">by {book.author}</p>
                        <a href="#" className="btn btn-primary">Add to library</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookCards;