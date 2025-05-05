// Placeholder JavaScript
document.querySelectorAll('.nav li').forEach(item => {
  item.addEventListener('click', () => {
    alert(`Navigating to: ${item.textContent.trim()}`);
  });
});
