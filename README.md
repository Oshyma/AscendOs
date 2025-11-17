# AscendOs

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE) [![VSCode Version](https://img.shields.io/badge/VS%20Code-%3E%3D1.80-blue)](https://code.visualstudio.com/) [![Status](https://img.shields.io/badge/status-beta-orange)](https://github.com/oshyma/AscendOs)

**AscendOs** est une extension VS Code qui transforme votre expérience de codage en RPG. Gagnez de l’XP, accomplissez des missions et loot des objets en programmant !

---

## 🎮 Fonctionnalités principales

* Tracker automatiquement votre **XP** à chaque sauvegarde de fichier
* Système de **niveau RPG** basé sur l’XP accumulé
* **Missions** avec récompenses (XP + loot aléatoire)
* **Loot** : armes, armures et potions, avec différents niveaux de rareté
* **Dashboard graphique** pour suivre votre progression, inventaire et missions
* Sobre, professionnel, mais immersif

---

## 📸 Aperçu



---

## ⚡ Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/oshyma/AscendOs.git
cd AscendOs
```

2. Installez les dépendances :

```bash
pnpm install
```

3. Compilez le TypeScript :

```bash
pnpm run compile
```

4. Lancez le mode debug dans VS Code :

* Appuyez sur **F5** → une nouvelle fenêtre VS Code s’ouvre avec l’extension activée

---

## 🚀 Utilisation

* **XP automatique** : chaque sauvegarde de fichier rapporte de l’XP
* **Command Palette** (`Ctrl+Shift+P` / `Cmd+Shift+P`) :

  * `AscendOs: Show Dashboard` → ouvre le dashboard pour voir vos niveaux, missions et loot
* Complétez des **missions** pour débloquer de nouveaux objets et XP supplémentaires

---

## 🛠 Développement

* **Structure du projet** :

```
src/
├─ extension.ts        # Extension principale
├─ systems/
│  ├─ missionSystem.ts      # Gestion des missions
│  └─ lootSystem.ts          # Gestion du loot
└─ ui/
   └─ webview.ts       # Dashboard et UI webview
```

### Commandes disponibles

* `ascendos.showDashboard` : Ouvre le dashboard

### Build & Watch

```bash
npm run compile       # Compile le projet
npm run watch         # Compile automatiquement à chaque changement
```

