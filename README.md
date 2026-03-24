# Photo Journey - Senior Frontend Technical Test

Ce projet est une landing page responsive "pixel-perfect" réalisée avec **Next.js**, **TypeScript** et **Tailwind CSS**. Elle présente une expérience immersive sur les cités impériales du Maroc.

##  Installation

1.  **Cloner le projet**
2.  **Installer les dépendances** :
    ```bash
    npm install
    ```
3.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```
    Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

---

##  Tests Automatisés

Le projet intègre une suite de tests complète demandée pour l'évaluation technique.

### 1. Tests de Régression Visuelle (BackstopJS)
Garantit que l'intégration reste "pixel-perfect" sur Mobile, Tablette et Desktop.
- **Référencement** (à faire une seule fois pour fixer le design) :
  ```bash
  npm run test:visual:reference
  ```
- **Exécution du test** :
  ```bash
  npm run test:visual
  ```
- **Approbation des changements** :
  ```bash
  npm run test:visual:approve
  ```

### 2. Tests End-to-End (Playwright)
Vérifie le bon fonctionnement des composants et la réactivité du site sur tous les supports.
- **Exécution des tests** :
  ```bash
  npm run test:e2e
  ```
- **Voir le rapport** :
  ```bash
  npx playwright show-report
  ```

---

##  Stack Technique
- **Framework** : Next.js (Pages Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Tests Visuels** : BackstopJS
- **Tests E2E** : Playwright

---


