document.getElementById('supportForm').addEventListener('submit', function(event) {
  // Empêcher le rechargement de la page
  event.preventDefault();

  // Récupération des valeurs du formulaire
  const phone = document.getElementById('phone').value;
  const reason = document.getElementById('reason').value;
  const details = document.getElementById('details').value;

  // Adresse du support officiel WhatsApp
  const supportEmail = "support@whatsapp.com";
  const subject = encodeURIComponent("Demande d'assistance : Compte WhatsApp suspendu");

  // Construction du corps du message en fonction de la raison
  let bodyText = `Bonjour l'équipe de support WhatsApp,\n\nJe vous contacte car mon numéro de téléphone est actuellement bloqué sur votre service.\n\nMon numéro est : ${phone}\n\n`;

  if (reason === 'erreur') {
    bodyText += "Je pense que mon compte a été suspendu par erreur. Je respecte scrupuleusement les conditions d'utilisation de WhatsApp et n'ai envoyé aucun spam.\n";
  } else if (reason === 'piratage') {
    bodyText += "Je soupçonne que mon compte a été compromis ou piraté récemment. Pouvez-vous m'aider à en reprendre le contrôle de manière sécurisée ?\n";
  } else if (reason === 'telephone_perdu') {
    bodyText += "J'ai récemment perdu mon téléphone (ou il a été volé) et je souhaite m'assurer que personne ne puisse utiliser mon compte WhatsApp.\n";
  }

  if (details.trim() !== "") {
    bodyText += `\nDétails supplémentaires :\n${details}\n`;
  }

  bodyText += "\nMerci de vérifier mon compte et de m'aider à rétablir l'accès.\n\nCordialement.";

  // Encodage du texte pour l'URL
  const encodedBody = encodeURIComponent(bodyText);

  // Création du lien "mailto"
  const mailtoLink = `mailto:${supportEmail}?subject=${subject}&body=${encodedBody}`;

  // Ouverture du client mail par défaut de l'utilisateur
  window.location.href = mailtoLink;
});
