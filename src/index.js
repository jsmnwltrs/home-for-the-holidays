import $ from 'jquery';
import 'bootstrap';
import './index.scss';

$('#button').click(() => {
  $('#div').append('<p>Hey there!</p>');
});
