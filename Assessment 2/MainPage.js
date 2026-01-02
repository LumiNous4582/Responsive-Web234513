// Form
document.getElementById("newsletter-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;

    alert(`Thanks for subscribing!\nEmail: ${email}`);

    this.reset();
});

// Quote 
document.addEventListener("DOMContentLoaded", function() {
  fetch("quotes.txt")
    .then(function(response) { return response.text(); })
    .then(function(text) {
      const lines = text.trim().split("\n");
      const randomLine = lines[Math.floor(Math.random() * lines.length)];

      const parts = randomLine.split("|");
      const quote = parts[0].trim();
      const author = parts[1].trim();

      document.getElementById("quote-text").textContent = '"' + quote + '"';
      document.getElementById("quote-author").textContent = "— " + author;
    })
    .catch(function(error) {
      console.error(error);
      document.getElementById("quote-text").textContent = '"If you can dream it, you can do it."';
      document.getElementById("quote-author").textContent = "— Walt Disney";
    });
});
