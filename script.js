// script.js
const menuToggle = document.getElementById('menuToggle');
const mobilePanel = document.getElementById('mobilePanel');
const mobileLinks = mobilePanel.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
  const open = mobilePanel.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobilePanel.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const setActiveLink = () => {
  let current = '';
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 130;
    const height = section.offsetHeight;
    if(top >= offset && top < offset + height){
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + current){
      link.classList.add('active');
    }
  });
};

window.addEventListener('scroll', setActiveLink);
setActiveLink();

const bookingForm = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');
const dateInput = document.getElementById('date');

const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

bookingForm.addEventListener('submit', function(e){
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const service = document.getElementById('service').value.trim();

  if(!name || !service){
    formMessage.textContent = 'Please complete all required fields before submitting.';
    formMessage.style.color = '#b42318';
    return;
  }

  formMessage.textContent = `Thank you, ${name}. Your ${service} booking request has been received. We will contact you shortly.`;
  formMessage.style.color = '#1f6b43';
  bookingForm.reset();
  dateInput.setAttribute('min', today);
});

  const serviceModal = document.getElementById('serviceModal');
  const serviceModalImage = document.getElementById('serviceModalImage');
  const serviceModalTitle = document.getElementById('serviceModalTitle');
  const serviceModalDesc = document.getElementById('serviceModalDesc');
  const serviceModalPrice = document.getElementById('serviceModalPrice');
  const serviceModalClose = document.getElementById('serviceModalClose');
  const serviceModalBackdrop = document.getElementById('serviceModalBackdrop');
  const serviceModalBookBtn = document.getElementById('serviceModalBookBtn');

  document.querySelectorAll('#services .image-trigger').forEach(button => {
    button.addEventListener('click', () => {
      serviceModal.classList.add('is-open');
      serviceModal.setAttribute('aria-hidden', 'false');

      serviceModalImage.src = button.dataset.img;
      serviceModalImage.alt = button.querySelector('img').alt;
      serviceModalTitle.textContent = button.dataset.title;
      serviceModalDesc.textContent = button.dataset.desc;
      serviceModalPrice.textContent = button.dataset.price;

      if (button.dataset.book) {
        serviceModalBookBtn.href = button.dataset.book;
      } else {
        serviceModalBookBtn.href = '#contact';
      }
    });
  });

  function closeServiceModal() {
    serviceModal.classList.remove('is-open');
    serviceModal.setAttribute('aria-hidden', 'true');
    serviceModalImage.src = '';
    serviceModalImage.alt = '';
    serviceModalTitle.textContent = '';
    serviceModalDesc.textContent = '';
    serviceModalPrice.textContent = '';
  }

  serviceModalClose.addEventListener('click', closeServiceModal);
  serviceModalBackdrop.addEventListener('click', closeServiceModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && serviceModal.classList.contains('is-open')) {
      closeServiceModal();
    }
  });