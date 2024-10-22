firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
    } else {
      console.log(window.location.pathname == ' -/cultural.html');
      console.log(window.location.pathname + ' -/cultural.html');


      if (window.location.pathname == '/cultural.html') {
        window.location.href = 'index.html'; 
      }
    }
  });

  window.addEventListener('load', function () {

      //Listen for auth state changes
      // firebase.auth().onAuthStateChanged(onAuthStateChanged);
      document.getElementById('sign-out').addEventListener('click', function () {
        //Implement SignOut Function
        firebase.auth().signOut().then(() => {
          // Sign-out successful.
          location.href = 'index.html';
        }).catch((error) => {
          // An error happened.
          console.log('Logging fail', errorMessage);
        });
      });

  });