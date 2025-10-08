// Hero button function
function learnMore() {
  alert("Welcome to Dahiru Farms! Explore our About and Products section to learn more.");
}

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting Dahiru Farms! We will get back to you soon.");
  this.reset();
});
