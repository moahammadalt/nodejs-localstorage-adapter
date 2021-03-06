# nodejs-localstorage-adapter (WIP)

A tiny ES6 class for simulating localstorage browser behaviour in nodejs.

<br />

to install the package run:

`npm install nodejs-localstorage-adapter --save`

<br />

<b><h2>How to use:</h2></b>

first include the package to your project:

`var localStorage = require('nodejs-localstorage-adapter');`

<b>-Methods</b>
<ul>
  <li>
    <h3>setItem(keyName, keyValue)</h3>
    for setting a value: 
    
    localStorage.setItem("user_id", "12345");
  </li>
  
  <li>
    <h3>getItem(keyName)</h3>
    for getting a value: 
    
    var userId = localStorage.getItem("user_id");  // should return "12345"
  </li>
  
  <li>
    <h3>key(index)</h3>
    returns the key name string for that index: 
     
    localStorage.setItem("user_id", "12345");
    localStorage.setItem("user_name", "mark");
    localStorage.key(0); // should return "user_id"
  </li>
  
  <li>
    <h3>removeItem(keyName)</h3>
    remove specific item:
    
    localStorage.removeItem('user_id');
  </li>
  
  <li>
    <h3>clear()</h3>
    clear all items:
    
    localStorage.clear();
  </li>
  
</ul>

<br />

<b>-Properties</b>
<ul>
  <li>
    <h3>length</h3>
    to get amount of key value pairs in localstorage:
    
    localStorage.setItem('user_id', '12345');
    localStorage.setItem('user_name', 'mark');
    localStorage.setItem('user_age', '25');
    
    localStorage.length; // should return 3
  </li>
</ul>

<br />
