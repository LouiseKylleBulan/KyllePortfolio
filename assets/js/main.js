/**
* Template Name: Personal - v4.1.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '#navbar .nav-link', function(e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let navbar = select('#navbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')

      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }

      if (this.hash == '#header') {
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top')
        setTimeout(function() {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    }
  }, true)

  /**
   * Activate/show sections on load with hash links
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      let initial_nav = select(window.location.hash)

      if (initial_nav) {
        let header = select('#header')
        let navlinks = select('#navbar .nav-link', true)

        header.classList.add('header-top')

        navlinks.forEach((item) => {
          if (item.getAttribute('href') == window.location.hash) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })

        setTimeout(function() {
          initial_nav.classList.add('section-show')
        }, 350);

        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
})()
 new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  }); // <--- THIS CLOSES THE WRAPPER. EVERYTHING BELOW THIS LINE IS NEW GLOBAL CODE.

/* ==========================================
   MOVE THIS CODE OUTSIDE THE WRAPPER 
   SO YOUR HTML BUTTONS CAN SEE IT
   ========================================== */

// Data for your 4 Featured Projects
const projectData = {
    app1: {
        images: [
            "assets/img/portfolio/app1_content.png",
            "assets/img/portfolio/app1_content2.png"
        ]
    },
    app2: {
        images: [
            "assets/img/portfolio/app2_content.png",
            "assets/img/portfolio/app2_content2.png"
        ]
    },
    app3: {
        images: [
            "assets/img/portfolio/app3_content.png",
            "assets/img/portfolio/app3_content2.png"
        ]
    },
    app4: {
        images: [
            "assets/img/portfolio/app4_content.png",
            "assets/img/portfolio/app4_content2.png"
        ]
    }
};

// Open Project Modal
function openProjectModal(key) {
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('project-title');
    const container = document.getElementById('project-images-container');
    const data = projectData[key];

    if (data) {
        // FIX: Check if title exists. If not, hide the title element.
        if (data.title) {
            title.innerText = data.title;
            title.style.display = "block";
        } else {
            title.innerText = "";
            title.style.display = "none"; // Hides the "undefined"
        }

        container.innerHTML = ''; // Clear old images

        // Loop through content images
        if (data.images) {
            data.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = "Project Detail";
                img.style.width = "100%";
                img.style.marginBottom = "20px";
                img.style.display = "block";
                
                container.appendChild(img);
            });
        }

        modal.classList.add('active');
    }
}

// Close Project Modal
function closeProjectModal(event) {
    const modal = document.getElementById('project-modal');
    // Allow closing by clicking X or background
    if (event.target === modal || event.target.classList.contains('close-btn')) {
        modal.classList.remove('active');
    }
}

// 4. COPY EMAIL FUNCTIONALITY
function copyEmail() {
    const emailText = document.getElementById('email-text').innerText;
    
    navigator.clipboard.writeText(emailText).then(() => {
        // Target specific email icon by ID
        const icon = document.getElementById('email-copy-icon');
        const originalClass = "bi bi-clipboard";
        
        icon.className = 'bi bi-check-lg'; // Change to checkmark
        
        setTimeout(() => {
            icon.className = originalClass; // Change back after 2 seconds
        }, 2000);
        
        // Optional: Remove alert if you find it annoying
        alert("Email copied: " + emailText);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// 5. COPY PHONE FUNCTIONALITY (NEW)
function copyPhone() {
    const phoneText = document.getElementById('phone-text').innerText;
    
    navigator.clipboard.writeText(phoneText).then(() => {
        // Target specific phone icon by ID
        const icon = document.getElementById('phone-copy-icon');
        const originalClass = "bi bi-clipboard";
        
        icon.className = 'bi bi-check-lg'; // Change to checkmark
        
        setTimeout(() => {
            icon.className = originalClass; // Change back after 2 seconds
        }, 2000);
        
        alert("Phone number copied: " + phoneText);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}