import firebase from 'firebase/app';
import 'bootstrap';
import $ from 'jquery';
import showAddForm from './component/AddEditFriends/addEditFriends';

import apiKeys from '../db/apiKeys.json';
import './index.scss';
import createNavbar from './component/Navbar/navbar';
import loginButton from './component/Auth/auth';
import authHelpers from './helpers/authHelpers';
import initializeFriendsPage from './component/FriendsPage/friendsPage';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  authHelpers.checkLoginStatus(initializeFriendsPage);
  loginButton();
  $('#show-friend-form').on('click', showAddForm);
};

initializeApp();
