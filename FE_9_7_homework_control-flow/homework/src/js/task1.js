let users = {
  admin: {
      password: 'SuperUser',
      name: 'User'
  }
};

function checkUserLogin() {
    let name = prompt(`Please enter your name`);
    if ( name === users.admin.name) {
        let password = prompt('Please enter your password');
        validateUserPass(password);
    } else if (name === '' || name === null) {
        alert('Canceled');
    } else if(name.length < 4 ) {
        alert('I don\'t know any users having name length less than 4 symbols');
    } else {
        console.log('I don’t know you');
    }
}
function validateUserPass(pass) {
    if (pass.length === 0 || pass === null) {
        alert('Canceled');
    } else if(pass !== users.admin.password) {
        alert('Wrong password');
    } else if(pass === users.admin.password) {
        alert(new Date().getHours() < 20 ? 'Good day!' : 'Good evening!');
    }
}
checkUserLogin();
