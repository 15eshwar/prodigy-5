document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simple alert for demonstration
    alert(`Thank you for your message, ${name}! We will get back to you soon.`);
  
    // Clear form fields
    document.getElementById('contact-form').reset();
  });
