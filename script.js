document.addEventListener('DOMContentLoaded', () => {

    // Dynamic Copyright Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        });
    });

    // Portfolio Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Formspree AJAX Form Submission
    const bookingForm = document.getElementById('bookingForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    bookingForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(bookingForm);
        
        submitBtn.disabled = true;
        submitBtn.innerText = 'Sending Request...';
        formStatus.style.color = '#3b82f6';
        formStatus.textContent = 'Submitting your request...';

        try {
            const response = await fetch('https://formspree.io/f/mrenkrab', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.style.color = '#4ade80';
                formStatus.textContent = 'Thank you! Your booking request has been sent successfully. Tyler will get back to you shortly.';
                bookingForm.reset();
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    formStatus.style.color = '#ef4444';
                    formStatus.textContent = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    formStatus.style.color = '#ef4444';
                    formStatus.textContent = 'Oops! There was a problem submitting your form.';
                }
            }
        } catch (error) {
            formStatus.style.color = '#ef4444';
            formStatus.textContent = 'Oops! Network error. Please try submitting again later.';
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerText = 'Submit Booking Request';
        }
    });
});

// Package Quick-Select
function selectPackage(packageName) {
    const packageSelect = document.getElementById('package');
    for (let i = 0; i < packageSelect.options.length; i++) {
        if (packageSelect.options[i].value.includes(packageName)) {
            packageSelect.selectedIndex = i;
            break;
        }
    }
}
