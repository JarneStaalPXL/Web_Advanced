let name = '';
let password = '';
function getName()
{
    name = document.getElementById('name').value;
    password = document.getElementById('password').value;
    document.getElementById('LoggedInAs').innerHTML = 'Your username is ' + name +'<br>Your password is ' + password;
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');

}






