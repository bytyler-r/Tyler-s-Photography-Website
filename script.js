/* --- Root Variables & Theme Settings --- */
:root {
    --bg-main: #050811;
    --bg-card: rgba(13, 20, 36, 0.55);
    --bg-card-border: rgba(65, 105, 225, 0.2);
    --primary-blue: #2563eb;
    --accent-blue: #3b82f6;
    --glow-blue: rgba(37, 99, 235, 0.4);
    --text-white: #f8fafc;
    --text-muted: #94a3b8;
    --font-family: 'Plus Jakarta Sans', sans-serif;
    --transition: all 0.3s ease;
}

/* --- Base & Reset --- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-main);
    color: var(--text-white);
    font-family: var(--font-family);
    line-height: 1.6;
    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* --- Reusable Components & Glassmorphism --- */
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 0;
}

.glass-card {
    background: var(--bg-card);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--bg-card-border);
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    transition: var(--transition);
}

.glass-card:hover {
    border-color: rgba(59, 130, 246, 0.5);
    box-shadow: 0 8px 32px 0 var(--glow-blue);
}

.section-header {
    text-align: center;
    margin-bottom: 50px;
}

.section-subtitle {
    color: var(--accent-blue);
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 8px;
}

.section-header h2 {
    font-size: 2.5rem;
    font-weight: 800;
}

.grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}

/* Buttons */
.btn-primary, .btn-secondary, .btn-package, .btn-primary-sm {
    display: inline-block;
    padding: 14px 32px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: var(--transition);
    border: none;
    text-align: center;
}

.btn-primary {
    background: var(--primary-blue);
    color: var(--text-white);
    box-shadow: 0 4px 20px var(--glow-blue);
}

.btn-primary:hover {
    background: var(--accent-blue);
    transform: translateY(-2px);
    box-shadow: 0 6px 24px var(--glow-blue);
}

.btn-secondary {
    background: transparent;
    color: var(--text-white);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
    border-color: var(--accent-blue);
    color: var(--accent-blue);
    transform: translateY(-2px);
}

.btn-primary-sm {
    padding: 8px 20px;
    background: var(--primary-blue);
    color: white;
    font-size: 0.85rem;
}

/* --- Header & Navigation --- */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
    z-index: 1000;
    transition: var(--transition);
}

.navbar.scrolled {
    background: rgba(5, 8, 17, 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--bg-card-border);
    padding: 15px 8%;
}

.logo a {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 1px;
}

.logo span {
    color: var(--accent-blue);
}

.nav-links {
    display: flex;
    gap: 30px;
    align-items: center;
}

.nav-links a {
    font-size: 0.9rem;
    color: var(--text-muted);
    transition: var(--transition);
}

.nav-links a:hover {
    color: var(--text-white);
}

.hamburger {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* --- 1. Hero Section --- */
.hero-section {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(5, 8, 17, 0.7) 0%, rgba(5, 8, 17, 0.95) 100%);
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    padding: 0 20px;
}

.tagline {
    font-size: 0.85rem;
    letter-spacing: 3px;
    color: var(--accent-blue);
    font-weight: 800;
    margin-bottom: 15px;
}

.hero-content h1 {
    font-size: 3.5rem;
    line-height: 1.1;
    font-weight: 800;
    margin-bottom: 20px;
}

.highlight {
    background: linear-gradient(90deg, #ffffff, var(--accent-blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.sub-text {
    color: var(--text-muted);
    margin-bottom: 35px;
    font-size: 1.05rem;
}

.hero-btns {
    display: flex;
    gap: 15px;
    justify-content: center;
}

.scroll-down {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    color: var(--text-muted);
    font-size: 1.2rem;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
    40% { transform: translateY(-10px) translateX(-50%); }
    60% { transform: translateY(-5px) translateX(-50%); }
}

/* --- 2. About Section --- */
.about-section {
    background: var(--bg-main);
}

.about-image-wrapper {
    position: relative;
    padding: 10px;
}

.image-card {
    overflow: hidden;
    height: 450px;
}

.about-text h2 {
    font-size: 2.2rem;
    margin-bottom: 20px;
    line-height: 1.2;
}

.about-text p {
    color: var(--text-muted);
    margin-bottom: 15px;
}

.insta-link {
    color: var(--accent-blue);
    font-weight: 600;
}

.stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 30px;
}

.stat-card {
    padding: 20px;
    text-align: center;
}

.stat-card h3 {
    font-size: 1.8rem;
    color: var(--accent-blue);
}

.stat-card p {
    font-size: 0.85rem;
    margin-bottom: 0;
}

/* --- 3. Portfolio Section --- */
.filter-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.filter-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--bg-card-border);
    color: var(--text-muted);
    padding: 8px 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: var(--transition);
    font-family: var(--font-family);
}

.filter-btn:hover, .filter-btn.active {
    background: var(--primary-blue);
    color: white;
    border-color: var(--primary-blue);
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 25px;
}

.gallery-item {
    position: relative;
    height: 300px;
    overflow: hidden;
    cursor: pointer;
}

.gallery-item img {
    transition: transform 0.5s ease;
}

.gallery-item:hover img {
    transform: scale(1.08);
}

.gallery-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    background: linear-gradient(0deg, rgba(5, 8, 17, 0.9) 0%, transparent 100%);
    transform: translateY(20px);
    opacity: 0;
    transition: var(--transition);
}

.gallery-item:hover .gallery-info {
    transform: translateY(0);
    opacity: 1;
}

.gallery-info h3 {
    font-size: 1.1rem;
}

.gallery-info p {
    font-size: 0.8rem;
    color: var(--accent-blue);
}

/* --- 4. Packages Section --- */
.packages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
}

.package-card {
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
}

.package-card.popular {
    border-color: var(--accent-blue);
    background: rgba(37, 99, 235, 0.1);
}

.popular-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary-blue);
    color: white;
    font-size: 0.75rem;
    padding: 4px 12px;
    border-radius: 12px;
    font-weight: 600;
}

.package-header {
    text-align: center;
    margin-bottom: 20px;
}

.package-header h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
}

.package-header .price {
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--accent-blue);
}

.package-features {
    margin-bottom: 25px;
}

.package-features li {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.package-features li i {
    color: var(--accent-blue);
}

.btn-package {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--bg-card-border);
    color: white;
    width: 100%;
}

.package-card:hover .btn-package {
    background: var(--primary-blue);
    border-color: var(--primary-blue);
}

.extras-card {
    display: flex;
    justify-content: space-around;
    padding: 25px;
    align-items: center;
}

.extra-item {
    display: flex;
    align-items: center;
    gap: 15px;
}

.extra-item i {
    font-size: 1.8rem;
    color: var(--accent-blue);
}

.extra-item h4 {
    font-size: 1rem;
}

.extra-item p {
    font-size: 0.85rem;
    color: var(--text-muted);
}

.extra-divider {
    width: 1px;
    height: 40px;
    background: var(--bg-card-border);
}

/* --- 5. Booking Form Section --- */
.contact-box {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
}

.contact-form .form-group {
    margin-bottom: 20px;
}

.contact-form input, 
.contact-form select, 
.contact-form textarea {
    width: 100%;
    padding: 14px 18px;
    background: rgba(5, 8, 17, 0.6);
    border: 1px solid var(--bg-card-border);
    border-radius: 8px;
    color: white;
    font-family: var(--font-family);
    font-size: 0.9rem;
    outline: none;
    transition: var(--transition);
}

.contact-form input:focus, 
.contact-form select:focus, 
.contact-form textarea:focus {
    border-color: var(--accent-blue);
    box-shadow: 0 0 10px var(--glow-blue);
}

.contact-form select option {
    background: var(--bg-main);
    color: white;
}

.btn-full {
    width: 100%;
}

.form-status {
    margin-top: 15px;
    text-align: center;
    font-size: 0.9rem;
}

/* --- 6. Footer --- */
.footer {
    background: rgba(2, 4, 10, 0.95);
    border-top: 1px solid var(--bg-card-border);
    padding: 40px 0 20px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 30px 0;
}

.footer-logo h2 {
    font-size: 1.4rem;
}

.footer-logo p {
    font-size: 0.85rem;
    color: var(--text-muted);
}

.footer-social a {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-white);
    font-weight: 600;
    transition: var(--transition);
}

.footer-social a:hover {
    color: var(--accent-blue);
}

.footer-bottom {
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding-top: 20px;
    color: var(--text-muted);
    font-size: 0.8rem;
}

/* --- Responsive Media Queries --- */
@media (max-width: 992px) {
    .grid-2 {
        grid-template-columns: 1fr;
    }
    
    .hero-content h1 {
        font-size: 2.8rem;
    }
    
    .extras-card {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
    }

    .extra-divider {
        display: none;
    }
}

@media (max-width: 768px) {
    .hamburger {
        display: block;
    }

    .nav-links {
        position: fixed;
        top: 70px;
        right: -100%;
        width: 100%;
        height: calc(100vh - 70px);
        background: var(--bg-main);
        flex-direction: column;
        justify-content: center;
        transition: var(--transition);
    }

    .nav-links.active {
        right: 0;
    }

    .hero-content h1 {
        font-size: 2.2rem;
    }

    .hero-btns {
        flex-direction: column;
    }

    .contact-box {
        padding: 20px;
    }
}
