document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.toggle-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const container = btn.nextElementSibling;
      const isOpen = container.classList.toggle('open');
      btn.classList.toggle('active');
      
      const label = btn.querySelector('span');
      const icon = '<i class="fa-solid fa-wand-magic-sparkles"></i>';
      const closeIcon = '<i class="fa-solid fa-eye-slash"></i>';
      
      label.innerHTML = isOpen 
        ? `${closeIcon} Hide the Solution` 
        : `${icon} Show the Honeypot Fix`;
    });
  });
});