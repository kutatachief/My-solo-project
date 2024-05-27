 
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting the traditional way
            
            // Example validation (this can be replaced with real validation/authentication logic)
            const username = document.getElementById('user').value;
            const password = document.getElementById('pass').value;
            const errorDiv = document.getElementById("error");
            
            if (username === 'admin' && password === 'password') {

                alert("Login successful!");

              // Redirect to another page
              window.location.href = 'orderPage.html'; //  Redirect orderPage.html page

            } else {
                errorDiv.style.display = "block";
            }
          });

    
        