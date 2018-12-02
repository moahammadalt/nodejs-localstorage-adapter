# nodejs-localstorage-adapter
A tiny ES6 class for simulating localstorage browser behaviour in nodejs

<br />

first require the class in your file:

`var localStorage = require('./localStorage');`

<br />

<b>Properties</b>
<ul>
  <li>
    <h2>length</h2>
    to get amount of key value pairs in localstorage:
    
    localStorage.setItem('user_id', '12345');
    localStorage.setItem('user_name', 'mark');
    localStorage.setItem('user_age', '25');
    
    localStorage.length; // should return 3
  </li>
</ul>

<br />

<b>Methods</b>
<ul>
  <li>
    <h2>setItem(keyName, keyValue)</h2>
    for setting a value: 
    
    localStorage.setItem("user_id", "12345");
  </li>
  
  <li>
    <h2>getItem(keyName)</h2>
    for getting a value: 
    
    var userId = localStorage.getItem("user_id");  // should return "12345"
  </li>
  
  <li>
    <h2>key(index)</h2>
    returns the key name string for that index: 
     
    localStorage.setItem("user_id", "12345");
    localStorage.setItem("user_name", "mark");
    localStorage.key(0); // should return "user_id"
  </li>
  
  <li>
    <h2>removeItem(keyName)</h2>
    remove specific item:
    
    localStorage.removeItem('user_id');
  </li>
  
  <li>
    <h2>clear()</h2>
    clear all items:
    
    localStorage.clear();
  </li>
  
</ul>

<br />
