document.getElementById('darkModeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  document.querySelectorAll('.header, .card').forEach(function(element) {
    element.classList.toggle('dark-mode');
  });
});