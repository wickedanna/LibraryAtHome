import React from 'react';
import firebase from 'firebase';

import userData from '../../../helpers/data/userData';
import libraryData from '../../../helpers/data/libraryData';

import './Home.scss';

class Home extends React.Component {
    state = {
        user: {},
        library: {},
    }

    getData = () => {
        const user = firebase.auth().currentUser;
        console.log('current user:', user.email);
        const userEmail = user.email;
        
        userData.getUserByEmail(userEmail)
        .then((user) => {
            this.setState({ user })
            libraryData.getLibraryByUserId(user.userId)
            .then((library) => this.setState({ library }))
        })
    }

    getLibrary = () => {
        const userId = this.state.user.userId;
        libraryData.getLibraryByUserId(userId)
        .then((library) => this.setState({ library }))
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const { library } = this.state;

        return(
            <div className="Home text-center">
                <h1>{library.libraryName}</h1>
            </div>
        )
    }
}

export default Home;