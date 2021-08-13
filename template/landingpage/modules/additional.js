import $ from 'jquery';

import sayHello from './say-hello';

sayHello('Hello from additional module!');

$('body').css({
  'font-size': '200%',
  'color': '#00ff00'
});
