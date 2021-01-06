import React from 'react';
import firebase from 'firebase';

import libraryData from '../../../helpers/data/libraryData';
import loanData from '../../../helpers/data/loanData';
import userData from '../../../helpers/data/userData';

import SecondaryNav from '../../shared/SecondaryNav/SecondaryNav'
import ViewLoanBookContainer from '../../shared/ViewLoanBookContainer/ViewLoanBookContainer';

import './DueSoon.scss';
import libraryBookShape from '../../../helpers/propz/libraryBookShape';

class DueSoon extends React.Component {
    state = {
        user: {},
        library: {},
        loans: [],
    }

    getUserAndLibrary = () => {
        const user = firebase.auth().currentUser;
        const userEmail = user.email;
        
        userData.getUserByEmail(userEmail)
        .then((user) => {
            this.setState({ user })
            libraryData.getLibraryByUserId(user.userId)
            .then((library) => {
                this.setState({ library })
            })
            .then(() => this.getLoans())
        })
    }

    getLoans = () => {
        const userId = this.state.user.userId;

        loanData.getDueSoonLoans(userId)
        .then((loans) => this.setState({ loans }))
        .catch((err) => console.log('could not get loans', err));
    }

    componentDidMount() {
        this.getUserAndLibrary();
    }

    render() {
        const { loans, library } = this.state;

        const buildLoans = loans.map((loan) => (
            <ViewLoanBookContainer key={loan.loanId} loan={loan} />
        ));

        return(
            <div className="DueSoon">
                <header className="page-header">
                    <h1>{library.libraryName}</h1>
                    <p></p>
                </header>
                <main className="container">
                    <div className="row">
                        <div className=" col-3 secondary-nav">
                            <SecondaryNav />
                        </div>
                        <div className="col-9 d-flex flex-wrap loans text-center">
                            <header className="loans-header">
                                <p>Due Soon:</p>
                            </header>
                            {buildLoans}
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default DueSoon;