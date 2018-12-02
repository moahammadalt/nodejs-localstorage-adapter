var localStorage = require('./localStorage');

console.log( "localStorage length: ", localStorage.length );

var userId = localStorage.getItem("user_id");

console.log( "userId: ", userId );

if (!userId) {
    console.log('User ID not found. Setting the user id and token...');
    localStorage.setItem("token", "TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ");
    localStorage.setItem("user_id", "12345");
} else {
    console.log('User ID found.', userId);
    console.log('clearning the User ID...');
    localStorage.clear();
}
