// script.js

// Future: Search/filter feature (for tours)
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const tourCards = document.querySelectorAll('.tour-card');

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const keyword = searchInput.value.toLowerCase();
      tourCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(keyword) ? 'block' : 'none';
      });
    });
  }
});
