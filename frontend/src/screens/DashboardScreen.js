import React from 'react';
import { useDispatch } from 'react-redux';
import { signout } from '../actions/userActions';

function DashboardScreen(props) {

    const dispatch = useDispatch();
    const signoutHandler = () => {
      dispatch(signout());
    };
    return (
        <div>
            <button onClick={signoutHandler} className="primary">Sign Out</button>
        </div>
    );
}

export default DashboardScreen;