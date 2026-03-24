document.getElementById("sendBtn").addEventListener("click", () => {
  const phone = document.getElementById('phone').value;
  const type = document.getElementById('type').value;

  if (!phone.match(/^\d+$/)) {
    alert('Numéro invalide');
    return;
  }

  let message = '';

  if (type === 'info') message = 'Bonjour, ceci est un message d\'information.';
  if (type === 'promo') message = '🔥 Promotion spéciale disponible !';
  if (type === 'urgent') message = '⚠️ Message urgent ! Répondez vite.';

  const messagesDiv = document.getElementById('messages');
  const msg = document.createElement('div');
  msg.className = 'bubble';
  msg.textContent = message;
  messagesDiv.appendChild(msg);

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
});
