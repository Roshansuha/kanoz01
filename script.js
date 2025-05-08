document.addEventListener("DOMContentLoaded", function () {
  // Navbar background on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 10);
  });

  // Search bar toggle
  const searchBox = document.getElementById("searchBox");
  const searchIcon = document.getElementById("searchIcon");

  searchIcon.addEventListener("click", () => {
    searchBox.classList.toggle("active");
  });

  // Hamburger menu toggle for mobile
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const navLinks = document.querySelector(".nav-links");

  hamburgerIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburgerIcon.classList.toggle("active");
  });

  // Slogan Typing Effect (Starts after page load)
  let slogans = ["Welcome-to-StyleStore Fashion-that-speaks----", "Be Unique, Be You--"];
  let sloganElement = document.getElementById("slogan");
  let currentIndex = 0;

  function changeSlogan() {
    sloganElement.innerText = "";
    let slogan = slogans[currentIndex];
    let i = 0;
    let typingInterval = setInterval(function () {
      sloganElement.innerText += slogan.charAt(i);
      i++;
      if (i > slogan.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          currentIndex = (currentIndex + 1) % slogans.length; // Corrected cycling
          changeSlogan();
        }, 2000); // Wait for 2 seconds before changing the slogan
      }
    }, 100); // Typing speed
  }

  changeSlogan();

  // Quick view (currently shows alert)
  document.querySelectorAll('.quick-view').forEach(button => {
    button.addEventListener('click', () => {
      alert('Quick view feature coming soon!');
    });
  });

  // Infinite scroll (optional feature)
  const track = document.getElementById("productTrack");
  if (track) {
    const cards = [...track.children];
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      track.appendChild(clone);
    });
  }

  // Testimonial Carousel Logic
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll(".testimonial");

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove("active");
      if (i === index) testimonial.classList.add("active");
    });
  }

  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }

  function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  }

  // Auto scroll
  setInterval(nextTestimonial, 7000);

  // Countdown Timer Logic (to Sunday 23:59)
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + (7 - deadline.getDay())); // Get next Sunday
  deadline.setHours(23, 59, 59, 999);

  function updateCountdown() {
    const now = new Date().getTime();
    const t = deadline - now;

    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Newsletter Form (with email validation)
  document.getElementById("newsletterForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("newsletterEmail").value.trim();
    const message = document.getElementById("newsletterMessage");

    if (!validateEmail(email)) {
      message.textContent = "❌ Please enter a valid email address.";
      message.style.color = "#dc3545";
      return;
    }

    message.textContent = "✅ Subscribed successfully!";
    message.style.color = "#28a745";
    this.reset();
  });

  function validateEmail(email) {
    const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return regex.test(email.toLowerCase());
  }

  // Filter logic for products (based on category)
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      document.querySelectorAll('.product-card').forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || filter === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove 'active' class from all buttons
      filterButtons.forEach(btn => btn.classList.remove("active"));
      // Add 'active' class to the clicked button
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      products.forEach(product => {
        const category = product.getAttribute("data-category");
        if (filter === "all" || filter === category) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      products.forEach(product => {
        const category = product.getAttribute("data-category");
        if (filter === "all" || filter === category) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  });
});

function changeImage(src) {
  document.getElementById("mainImage").src = src;
}

function updateQty(change) {
  const qtyInput = document.getElementById("qty");
  let currentQty = parseInt(qtyInput.value);
  if (currentQty + change >= 1) {
    qtyInput.value = currentQty + change;
  }
}
