import './auth.scss';
import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

import googleImage from './googleImage.png';

const loginButton = () => {
  const domString = `<button id="googleAuth" class="btn btn-secondary">
      <img src="${googleImage}">
    </button>`;
  $('#auth').html(domString);
  $('#googleAuth').on('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  });
};

export default loginButton;
