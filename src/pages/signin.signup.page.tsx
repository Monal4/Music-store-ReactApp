import { type } from 'os';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LogIn } from "../redux-files/Actions/user.actions/user.action";
import { RootStore } from '../redux-files/store';
import {user} from '../types/user.types';
import {LogInSignUp} from '../components/index';

const LogInPage = () => {
    
    const intialState: user = {
        firstname: '',
        lastname: '',
        email: ''
    };

    const [newUser, setUser] = useState(intialState);

    function handleinput(event: React.ChangeEvent<HTMLInputElement>) {
        const{firstname, lastname, email} = newUser;
    }

    // const message = useSelector((state: RootStore) => state.user.message);
    // const dispatch = useDispatch();

    // const u ={
    //     firstname: 'a',
    //     lastname: 'bc',
    //     email: 'abcc@gmail.com'
    // }

    // function handleclick() {
    //     dispatch(LogIn(u));
    //     console.log(message);
    // }

    return(
        // <button onClick={handleclick}> clickME </button>
        <LogInSignUp handleinput={handleinput} user={newUser}/>
    )
}

export default LogInPage;
