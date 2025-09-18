
document.addEventListener('DOMContentLoaded', function() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        alert('Please fill in name, email (or WhatsApp) and a message.');
        return;
      }
      // WhatsApp link
      const phone = '6289525513214';
      const text = encodeURIComponent('Hello, my name is ' + name + '\n' + message + '\nContact: ' + email);
      const url = `https://wa.me/${phone}?text=${text}`;
      if (formNote) formNote.classList.remove('hidden');
      window.open(url, '_blank');
    });
  }
});
