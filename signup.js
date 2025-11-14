// Signup page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('.signup-form');
    const passwordInput = document.querySelector('input[type="password"]');
    const confirmPasswordInput = document.querySelectorAll('input[type="password"]')[1];
    
    // Form validation
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(signupForm);
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;
            
            // Basic validation
            if (password !== confirmPassword) {
                alert('Passwords do not match. Please try again.');
                confirmPasswordInput.focus();
                return;
            }
            
            if (password.length < 8) {
                alert('Password must be at least 8 characters long.');
                passwordInput.focus();
                return;
            }
            
            // If validation passes, you can submit the form
            console.log('Form submitted successfully');
            // Add your form submission logic here
            // For example: send data to server, redirect, etc.
        });
    }
    
    // Add smooth transitions for input focus
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.01)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
    
    // Back to home link handler
    const backLink = document.querySelector('.back-link');
    if (backLink) {
        backLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }
    
    // Sign in link handler
    const signInLink = document.querySelector('.signup-link');
    if (signInLink) {
        signInLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Sign in clicked');
            // Add your sign in navigation logic here
        });
    }
});

