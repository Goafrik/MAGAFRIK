console.log("Magazine Africa JS loaded successfully.");
// Future use: Toggle nav for mobile
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  }
});// Mobile Nav Toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav ul');

  toggle.addEventListener('click', function () {
    nav.classList.toggle('active');
  });
});document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();

      const dropdown = this.parentElement;
      const menu = dropdown.querySelector(".dropdown-menu");

      // Close other dropdowns
      document.querySelectorAll(".dropdown-menu").forEach(function (m) {
        if (m !== menu) {
          m.classList.remove("show");
        }
      });

      // Toggle this one
      menu.classList.toggle("show");
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown-menu").forEach(function (m) {
        m.classList.remove("show");
      });
    }
  });
});function closePopup() {
  document.getElementById("privacy-popup").style.display = "none";
}function acceptAllCookies() {
  document.getElementById('cookieConsent').style.display = 'none';
  // Save preferences or trigger tracking logic here
}

function denyCookies() {
  document.getElementById('cookieConsent').style.display = 'none';
  // Clear or block tracking logic here
}

function saveCookies() {
  const marketing = document.getElementById('marketingToggle').checked;
  const functional = document.getElementById('functionalToggle').checked;
  document.getElementById('cookieConsent').style.display = 'none';
  // Save these preferences to localStorage or backend
}document.addEventListener("DOMContentLoaded", () => {
  const logos = document.querySelectorAll('.logos-grid img');
  logos.forEach((logo, index) => {
    logo.style.opacity = 0;
    logo.style.transform = "translateY(20px)";
    setTimeout(() => {
      logo.style.transition = "all 0.6s ease";
      logo.style.opacity = 1;
      logo.style.transform = "translateY(0)";
    }, 200 * index);
  });
});// JavaScript reserved for future animations or validations
console.log("Pricing page loaded.");
// Show the modal when button is clicked
const connectBtn = document.getElementById('connectBtn');
const modal = document.getElementById('connectionModal');
const closeBtn = document.querySelector('.close-btn');

connectBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

// Close modal on X
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Close modal by clicking outside the box
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});
document.querySelectorAll('.learn-more-btn').forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    alert("Redirecting to more resources...");
    // Example of action: you can modify this for redirection or popups
    window.location.href = '#resources'; // Change this to your desired URL
  });
});// scripts/audio.js
console.log("Audio page loaded.");function openSellForm() {
  document.getElementById("sellForm").style.display = "flex";
}

function closeSellForm() {
  document.getElementById("sellForm").style.display = "none";
}

function buyCourse(courseTitle) {
  alert("Thanks for choosing: " + courseTitle + ". We'll contact you shortly.");
}