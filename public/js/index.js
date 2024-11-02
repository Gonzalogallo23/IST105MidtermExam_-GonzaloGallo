window.addEventListener('load', function () {

    document.getElementById('sign-in-button').addEventListener('click', function () {

        let provider = new firebase.auth.GoogleAuthProvider();

        provider.addScope('email');
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                console.log('Logging sucessfully', result.user);
                location.href = 'culturalConnections.html';
            })
            .catch(function (error) {
                console.log('Logging fail', error);
            });
    });

    document.getElementById('sign-in-2').addEventListener('click', function () {

        let emailTxt = document.getElementById('email').value;
        let passtxt = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(emailTxt, passtxt)
            .then((userCredential) => {
                // Signed in
                let user = userCredential.user;
                // ...
                console.log('Logging sucessfully');
                alert('Logging sucessfully');
                location.href = 'culturalConnections.html';
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                alert('Logging fail');
                console.log('Logging fail', errorMessage);
            });

    });

    document.getElementById('log-in-phonenumber').addEventListener('click', function () {
        const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')


        appVerifier.verify().then(function() {
            document.getElementById('phone-number').classList.remove('d-none');
            const phoneNumber = document.getElementById('phone-number').value; 

            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                .then((confirmationResult) => {
                    const code = prompt('Enter the verification code you received via SMS:', '');
                    return confirmationResult.confirm(code); 
                })
                .then((result) => {
                    const user = result.user;
                    console.log('Logging successfully with phone number:', user);
                    alert('Logging successfully with phone number');
                    location.href = 'culturalConnections.html';
                })
                .catch((error) => {
                    console.error('Error during phone number sign-in:', error);
                });
        }).catch(function(error) {
            console.error('Error during reCAPTCHA verification:', error);
        });
    });
});