AOS.init({
    offset: 120, 
    delay: 0, 
    duration: 900, 
    easing: 'ease', 
    once: false, 
    mirror: false, 
    anchorPlacement: 'top-bottom', 
  });

    function showProductInfo(name, price) {
        alert(`Product: ${name}\nPrice: ${price}`);
    }
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get input values
      var username = document.getElementById('username').value.trim();
      var password = document.getElementById('password').value.trim();
  
      // Check if username and password match
      if (username === 'JAMENDOZA' && password === 'pogi') {
          // Redirect to home page or desired URL
          window.location.href = 'home.html'; // Replace with your actual home page URL
      } else {
          alert('Invalid username or password. Please try again.'); // Show error message
      }
  });
  