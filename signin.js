function signIn() {
            let user = prompt("Please enter your username:");
            let password = prompt("Please enter your password:");

            // List of valid usernames and passwords
            const validUsers = [
                {username: "admin", password: "password123"},
                {username: "user2", password: "password456"}
            ];

            // Check if the entered credentials match any of the valid users
            let isValid = validUsers.some(userObj => userObj.username === user && userObj.password === password);

            if (user === null || password === null) {
                alert("Sign in cancelled.");
            } else if (isValid) {
                alert("Welcome, " + user + "!");
            } else {
                alert("Invalid username or password.");
            }
        }

        // Call the signIn function when the page loads
        window.onload = signIn;
