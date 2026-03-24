# 📱 WhatsApp Style Message Sender

Une mini application web inspirée de WhatsApp (style iPhone) permettant d’envoyer rapidement des messages prédéfinis via WhatsApp à partir d’un numéro de téléphone.

---

## 🚀 Fonctionnalités

* Interface style **WhatsApp iPhone**
* Champ pour entrer un **numéro de téléphone (chiffres uniquement)**
* Menu déroulant pour choisir un **type de message** :

  * Info
  * Promo
  * Urgent
* Génération automatique du message
* Redirection vers **WhatsApp réel** avec message pré-rempli
* Design responsive (mobile friendly)
* Clavier adapté (numérique sur mobile)
* Arrière-plan image + effet moderne

---

## 📂 Structure du projet

```
project/
│
├── index.html      # Structure principale
├── style.css       # Design WhatsApp
├── app.js          # Logique de l'application
└── README.md       # Documentation
```

---

## ⚙️ Installation

1. Télécharger ou cloner le projet
2. Ouvrir le fichier `index.html` dans un navigateur

Aucune installation nécessaire ✅

---

## 📱 Utilisation

1. Entrer un numéro de téléphone (ex: `50912345678`)
2. Choisir un type de message
3. Cliquer sur ➤
4. WhatsApp s’ouvre automatiquement avec le message

---

## 🔐 Important

* Le numéro doit être en format international (sans + ni espace)
* Exemple valide : `50912345678`
* Fonctionne avec WhatsApp Web et mobile

---

## 💡 Personnalisation

### Modifier les messages

Dans `app.js` :

```js
if (type === 'info') message = 'Ton message ici';
```

### Modifier l’arrière-plan

Dans `style.css` :

```css
background: url('ton-image.jpg') no-repeat center/cover;
```

---

## 🚀 Améliorations possibles

* Ajouter envoi automatique (backend Node.js)
* Ajouter historique des messages
* Ajouter contacts enregistrés
* Ajouter emojis / fichiers
* Transformer en application mobile (PWA)

---

## 👨‍💻 Auteur

Projet réalisé par toi 💪

---

## 📜 Licence

Libre d’utilisation et de mo
