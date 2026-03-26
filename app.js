document.getElementById('supportForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const phone = document.getElementById('phone').value;
  const reason = document.getElementById('reason').value;
  const supportEmail = "support@whatsapp.com";
  
  // Base de données des messages automatiques
  const templates = {
    "ban_erreur": {
      subject: "Compte suspendu par erreur",
      body: `Bonjour,\n\nMon compte lié au numéro ${phone} a été suspendu. Je pense qu'il s'agit d'une erreur technique car je n'ai enfreint aucune règle. Merci de vérifier mon dossier.\n\nCordialement.`
    },
    "hacking": {
      subject: "Aide : Compte piraté",
      body: `Bonjour,\n\nJe n'ai plus accès à mon compte WhatsApp (${phone}). Je soupçonne un piratage. Pourriez-vous m'aider à sécuriser à nouveau mon compte ?\n\nMerci d'avance.`
    },
    "stolen": {
      subject: "Téléphone volé - Désactivation de compte",
      body: `Bonjour,\n\nMon téléphone a été volé. Merci de désactiver temporairement mon compte WhatsApp lié au numéro ${phone} pour éviter toute utilisation frauduleuse.\n\nMerci.`
    },
    "otp_issue": {
      subject: "Problème de code de vérification",
      body: `Bonjour,\n\nJe ne reçois plus mon code de vérification SMS pour le numéro ${phone}. Pourriez-vous vérifier s'il y a un blocage sur mon numéro ?\n\nCordialement.`
    }
  };

  const selected = templates[reason];
  
  // Construction de l'URL Gmail (format spécial pour Gmail web)
  // Si l'utilisateur est sur mobile, mailto fonctionnera mieux.
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${supportEmail}&su=${encodeURIComponent(selected.subject)}&body=${encodeURIComponent(selected.body)}`;
  
  // On tente d'ouvrir Gmail dans un nouvel onglet
  window.open(gmailLink, '_blank');
});
