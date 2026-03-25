const toggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Toggle mobile menu
toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Optional: Add shadow on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 10) {
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        const offset = 100; // header height

        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

$(document).ready(function () {
    $(".hero-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: true,
        nav: false,
        animateOut: 'fadeOut'
    });
    function nextSlide() {
        var slider = $('.slider');
        var items = $('.item');
        slider.append(items.first());
    }

    // Function to move to the previous slide
    function prevSlide() {
        var slider = $('.slider');
        var items = $('.item');
        slider.prepend(items.last());
    }

    // Event listeners for manual navigation
    $('.next').on('click', nextSlide);
    $('.prev').on('click', prevSlide);

    // Set an interval to automatically move to the next slide every 3 seconds
    setInterval(nextSlide, 3000);
});

const ctx = document.getElementById('yieldChart').getContext('2d');

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const yieldData = [30, 45, 50, 60, 70, 85];
const upperBound = [35, 50, 58, 68, 78, 95];
const lowerBound = [25, 40, 45, 52, 60, 75];

new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            /* Upper Bound */
            {
                label: 'Upper Confidence',
                data: upperBound,
                borderColor: 'transparent',
                backgroundColor: 'rgba(255,183,162,0.2)',
                fill: '+1'
            },
            /* Lower Bound */
            {
                label: 'Lower Confidence',
                data: lowerBound,
                borderColor: 'transparent',
                backgroundColor: 'rgba(255,183,162,0.2)',
                fill: false
            },
            /* Main Yield Line */
            {
                label: 'Predicted Yield',
                data: yieldData,
                borderColor: '#FFB7A2',
                backgroundColor: '#FFB7A2',
                tension: 0.4,
                pointRadius: 4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: "#fff"
                }
            }
        },
        scales: {
            x: {
                ticks: { color: "#ccc" }
            },
            y: {
                ticks: { color: "#ccc" }
            }
        }
    }
});

const modal = document.getElementById("demoModal");
const form = document.getElementById("demoForm");
const error = document.getElementById("formError");
const box = document.getElementById("modalBox");

function openModal() {
    document.getElementById("demoModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("demoModal").style.display = "none";
}

/* close outside */
window.onclick = function (e) {
    const modal = document.getElementById("demoModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
}

/* FORM VALIDATION */
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        error.innerText = "Please fill all required fields";

        box.classList.add("shake");
        setTimeout(() => box.classList.remove("shake"), 300);
    } else {
        error.classList.add("success");
        error.innerText = "✅ Request submitted successfully!";

        form.reset();
    }
});




