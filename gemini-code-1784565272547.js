document.addEventListener('DOMContentLoaded', () => {

    // Set Dynamic Copyright Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Sticky Navbar Background on Scroll
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

    // Close Mobile Menu on Nav Link Click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        });
    });

    // Portfolio Category Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
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

    // Booking Form Submission Handler
    const bookingForm = document.getElementById('bookingForm');
    const formStatus = document.getElementById('formStatus');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Retrieve values
        const name = document.getElementById('name').value;
        const selectedPackage = document.getElementById('package').value;

        // UI loading simulation
        formStatus.style.color = '#3b82f6';
        formStatus.textContent = 'Processing request...';

        setTimeout(() => {
            formStatus.style.color = '#4ade80';
            formStatus.textContent = `Thank you, ${name}! Your booking request for the ${selectedPackage} has been sent. Tyler will get back to you shortly.`;
            bookingForm.reset();
        }, 1500);
    });
});

// Auto Select Package Function from Pricing Cards
function selectPackage(packageName) {
    const packageSelect = document.getElementById('package');
    for (let i = 0; i < packageSelect.options.length; i++) {
        if (packageSelect.options[i].value.includes(packageName)) {
            packageSelect.selectedIndex = i;
            break;
        }
    }
}