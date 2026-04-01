gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', function() {
  setTimeout(function() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden');
    setTimeout(function() {
      loadingScreen.style.display = 'none';
    }, 800);
  }, 500);
});

gsap.to('.publication-title', {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 0.8,
  ease: 'power3.out'
});

const fadeInSections = document.querySelectorAll('.fade-in-section');
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      const sectionTitle = entry.target.querySelector('.section-title');
      if (sectionTitle) {
        sectionTitle.classList.add('visible');
      }
    }
  });
}, observerOptions);

fadeInSections.forEach(section => {
  sectionObserver.observe(section);
});

gsap.utils.toArray('.video-hover-container').forEach((container, index) => {
  gsap.from(container, {
    scrollTrigger: {
      trigger: container,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: index * 0.1,
    ease: 'power3.out'
  });
});

gsap.to('.hero-body', {
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  },
  y: 100,
  opacity: 0.5,
  ease: 'none'
});

gsap.from('.content.has-text-justified', {
  scrollTrigger: {
    trigger: '.content.has-text-justified',
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  },
  opacity: 0,
  y: 30,
  duration: 1,
  ease: 'power2.out'
});

gsap.utils.toArray('.gradient-text').forEach(element => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    scale: 1.05,
    duration: 0.5,
    yoyo: true,
    repeat: 1,
    ease: 'power2.inOut'
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

gsap.utils.toArray('img').forEach(img => {
  img.addEventListener('mouseenter', function() {
    gsap.to(this, {
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  img.addEventListener('mouseleave', function() {
    gsap.to(this, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});

let hasScrolled = false;
window.addEventListener('scroll', function() {
  if (!hasScrolled && window.scrollY > 100) {
    hasScrolled = true;
    const scrollIndicator = document.getElementById('scroll-indicator');
    if (scrollIndicator) {
      scrollIndicator.classList.add('hidden');
    }
  }
});

gsap.utils.toArray('.pipeline-image-container').forEach((container) => {
  gsap.from(container, {
    scrollTrigger: {
      trigger: container,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    scale: 0.95,
    y: 40,
    duration: 1,
    ease: 'power3.out'
  });
});

gsap.utils.toArray('.section-divider').forEach((divider) => {
  gsap.from(divider, {
    scrollTrigger: {
      trigger: divider,
      start: 'top 90%',
      toggleActions: 'play none none reverse'
    },
    scaleX: 0,
    duration: 1.2,
    ease: 'power2.inOut'
  });
});

gsap.from('.robot-icon', {
  scrollTrigger: {
    trigger: '.robot-icon',
    start: 'top 85%',
    toggleActions: 'play none none reverse'
  },
  scale: 0,
  rotation: 180,
  duration: 1,
  ease: 'elastic.out(1, 0.5)'
});

document.querySelectorAll('.content video').forEach((video, index) => {
  const parent = video.closest('.content');
  if (parent) {
    parent.classList.add('video-grid-item');
    gsap.from(parent, {
      scrollTrigger: {
        trigger: parent,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: index * 0.05,
      ease: 'power2.out',
      onComplete: () => {
        parent.classList.add('visible');
      }
    });
  }
});
