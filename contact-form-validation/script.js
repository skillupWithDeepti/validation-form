 document.addEventListener("DOMContentLoaded", function() {
            const form = document.getElementById("contactForm");
            form.addEventListener("submit", function(event) {
                event.preventDefault();
                if (validateForm()) {
                    alert("Form submitted successfully!");
                    form.reset();
                }
            });
        
            function validateForm() {
                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                const message = document.getElementById("message").value;
                
                if (name.trim() === "") {
                    alert("Please enter your name.");
                    return false;
                }
                
                if (email.trim() === "") {
                    alert("Please enter your email.");
                    return false;
                } else if (!isValidEmail(email)) {
                    alert("Please enter a valid email address.");
                    return false;
                }
                
                if (message.trim() === "") {
                    alert("Please enter your message.");
                    return false;
                }
        
                return true;
            }
        
            function isValidEmail(email) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailPattern.test(email);
            }
        });