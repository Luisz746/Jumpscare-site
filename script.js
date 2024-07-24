window.addEventListener('load', () => {
  const jumpscareDelay = 5000; // 5 segundos
  setTimeout(() => {
    document.getElementById('jumpscare').classList.remove('hidden');
  }, jumpscareDelay);
});
