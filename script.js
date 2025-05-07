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
window.addEventListener('load', function () {
    let slogans = ["Welcome-to-StyleStore Fashion-that-speaks----  ", "Be Unique, Be You-- "];
    let sloganElement = document.getElementById("slogan");
    let currentIndex = 0;

    // Function to cycle through slogans with typing effect
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
                    currentIndex = (currentIndex + 5) % slogans.length;
                    changeSlogan();
                }, 2000); // Wait for 2 seconds before changing the slogan
            }
        }, 100); // Typing speed
    }

    changeSlogan();
});

document.querySelectorAll('.quick-view').forEach(button => {
    button.addEventListener('click', () => {
        alert('Quick view feature coming soon!');
        // Replace with modal trigger or product preview logic
    });
});

// Optional: Clone products for smoother infinite scroll
window.addEventListener('load', () => {
    const track = document.getElementById("productTrack");
    const cards = [...track.children];
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });
});


document.querySelectorAll('.look-item').forEach(item => {
    item.addEventListener('click', () => {
        alert('View full look coming soon!');
        // You could trigger a modal or link to full look detail page here
    });
});


// Set deadline (Sunday of this weekend)
const deadline = new Date();
deadline.setDate(deadline.getDate() + (7 - deadline.getDay()));
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

// Initial call
updateCountdown();
// Update every second
setInterval(updateCountdown, 1000);

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
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("emailInput").value.trim();
    const message = document.getElementById("formMessage");
  
    if (!email || !validateEmail(email)) {
      message.textContent = "Please enter a valid email address.";
      message.style.color = "#dc3545";
      return;
    }
  
    // Simulate success (you can replace this with AJAX request)
    message.textContent = "Thank you for subscribing! 🎉";
    message.style.color = "#28a745";
    this.reset();
  });
  
  function validateEmail(email) {
    const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return re.test(email.toLowerCase());
  }
  
// Simulate lazy-loading (or replace with real Instagram API logic)
document.addEventListener("DOMContentLoaded", () => {
    const feed = document.getElementById("instaFeed");
    const loader = document.getElementById("instaLoader");
  
    setTimeout(() => {
      loader.style.display = "none";
  
      // Dynamically add more images
      const newPosts = [
        { img: "images/insta3.jpg", likes: "670", caption: "Layered look 🔥" },
        { img: "images/insta4.jpg", likes: "945", caption: "Soft glam 🎀" },
      ];
  
      newPosts.forEach(post => {
        const div = document.createElement("div");
        div.className = "insta-post";
        div.innerHTML = `
          <img src="${post.img}" alt="Outfit" />
          <div class="insta-overlay">
            <span>❤️ ${post.likes}</span>
            <p>${post.caption}</p>
          </div>`;
        feed.appendChild(div);
      });
  
    }, 2000); // simulate loading delay
  });
  
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
  