import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import UserPageAppBar from '../LandingPageBabbl/views/UserPageAppBar';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div>
    <UserPageAppBar />
    <div className="container">
      <h2>Hey, {user.username}! This is going to be a lot of fun!</h2>
      <p>Your ID is: {user.id}</p>
      {/* <LogOutButton className="btn" /> */}
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
