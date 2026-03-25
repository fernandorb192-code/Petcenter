// Pet Center Horizonte - Professional JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Loading Screen
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 2000);
    }

    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Header Scroll Effect
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (header) {
            if (currentScrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        lastScrollY = currentScrollY;
    });

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Testimonials Slider
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialPrev = document.getElementById('testimonialPrev');
    const testimonialNext = document.getElementById('testimonialNext');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonialCards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }

    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }

    if (testimonialPrev) testimonialPrev.addEventListener('click', prevTestimonial);
    if (testimonialNext) testimonialNext.addEventListener('click', nextTestimonial);

    // Auto-play testimonials
    if (testimonialCards.length > 0) {
        setInterval(nextTestimonial, 5000);
    }

    // Product Categories Filter
    const categoryTabs = document.querySelectorAll('.category-tab');
    const productCards = document.querySelectorAll('.product-card');

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (category === 'medicamentos' || cardCategory === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Create WhatsApp message
            const message = `*Novo Agendamento - Pet Center Horizonte*%0A%0A` +
                `*Nome:* ${data.name}%0A` +
                `*Telefone:* ${data.phone}%0A` +
                `*E-mail:* ${data.email}%0A` +
                `*Pet:* ${data.pet}%0A` +
                `*Serviço:* ${data.service}%0A` +
                `*Mensagem:* ${data.message || 'Não informada'}`;
            
            // Open WhatsApp with message
            const whatsappUrl = `https://wa.me/558592520197?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            
            // Reset form
            this.reset();
            
            // Show success message
            showNotification('Agendamento enviado com sucesso! Redirecionando para o WhatsApp...', 'success');
        });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            // Create WhatsApp message
            const message = `*Nova Newsletter - Pet Center Horizonte*%0A%0A` +
                `*E-mail:* ${email}`;
            
            // Open WhatsApp with message
            const whatsappUrl = `https://wa.me/558592520197?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            
            // Reset form
            this.reset();
            
            // Show success message
            showNotification('E-mail cadastrado com sucesso! Redirecionando para o WhatsApp...', 'success');
        });
    }

    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (backToTop) {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Notification System
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'var(--success)' : 'var(--info)'};
            color: white;
            padding: 16px 20px;
            border-radius: var(--radius);
            box-shadow: var(--shadow-xl);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 300px;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
        
        // Manual close
        const closeBtn = notification.querySelector('.notification-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            });
        }
    }

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .product-card, .about-feature, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Gallery Lightbox (if needed)
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                // Create lightbox
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox';
                lightbox.innerHTML = `
                    <div class="lightbox-content">
                        <img src="${img.src}" alt="${img.alt}">
                        <button class="lightbox-close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `;
                
                // Add styles
                lightbox.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    animation: fadeIn 0.3s ease;
                `;
                
                const lightboxContent = lightbox.querySelector('.lightbox-content');
                lightboxContent.style.cssText = `
                    position: relative;
                    max-width: 90%;
                    max-height: 90%;
                `;
                
                const lightboxImg = lightbox.querySelector('img');
                lightboxImg.style.cssText = `
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    border-radius: var(--radius);
                `;
                
                const closeBtn = lightbox.querySelector('.lightbox-close');
                closeBtn.style.cssText = `
                    position: absolute;
                    top: -40px;
                    right: 0;
                    background: white;
                    border: none;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    font-size: 18px;
                    cursor: pointer;
                    color: var(--dark);
                `;
                
                document.body.appendChild(lightbox);
                
                // Close handlers
                closeBtn.addEventListener('click', () => {
                    document.body.removeChild(lightbox);
                });
                
                lightbox.addEventListener('click', (e) => {
                    if (e.target === lightbox) {
                        document.body.removeChild(lightbox);
                    }
                });
            }
        });
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 1;
        }
        
        .notification-close {
            background: transparent;
            border: none;
            color: white;
            font-size: 16px;
            cursor: pointer;
            padding: 4px;
        }
    `;
    document.head.appendChild(style);

    // Performance optimization - Lazy loading for images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Initialize tooltips if needed
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: var(--dark);
                color: white;
                padding: 8px 12px;
                border-radius: var(--radius-sm);
                font-size: 14px;
                z-index: 9999;
                pointer-events: none;
                animation: fadeIn 0.2s ease;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
            tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
            
            this.addEventListener('mouseleave', () => {
                document.body.removeChild(tooltip);
            }, { once: true });
        });
    });

    console.log('Pet Center Horizonte - Site carregado com sucesso! 🐾');
});

// Additional utility functions
function formatPhoneNumber(phone) {
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance monitoring
if (window.performance) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Tempo de carregamento: ${pageLoadTime}ms`);
    });
}
