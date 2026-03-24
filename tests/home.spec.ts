import { test, expect } from '@playwright/test';

test.describe('Réactivité et Contenu de la Landing Page', () => {
  
  // Avant chaque test, on se rend sur la page d'accueil
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('doit afficher le contenu correctement selon le viewport (taille d écran)', async ({ page, viewport }) => {
    const width = viewport?.width || 0;

    // On vérifie la visibilité du conteneur principal spécifique à chaque version
    if (width >= 1024) {
      // VERSION ORDINATEUR (DESKTOP)
      // On s'attend à ce que l'élément avec la classe 'lg:block' soit visible
      await expect(page.locator('.lg\\:block').first()).toBeVisible();
    } else if (width >= 768) {
      // VERSION TABLETTE
      // On s'attend à ce que l'élément visible sur tablette mais caché sur desktop soit présent
      await expect(page.locator('.md\\:block.lg\\:hidden').first()).toBeVisible();
    } else {
      // VERSION MOBILE
      // On s'attend à ce que l'élément masqué sur les écrans larges soit visible
      await expect(page.locator('.md\\:hidden').first()).toBeVisible();
    }
  });

  test('doit afficher la section Hero avec le titre principal', async ({ page }) => {
    // Le texte du titre principal est identique sur toutes les versions
    // On filtre pour ne prendre que l'élément réellement visible à l'écran
    await expect(page.getByText("Through the Lens:Morocco's Imperial Cities").filter({ visible: true }).first()).toBeVisible();
  });

  test('doit afficher toutes les sections de contenu clés', async ({ page }) => {
    // Vérification de la présence des titres de sections importantes
    await expect(page.getByText('Behind The Lens').filter({ visible: true }).first()).toBeVisible();
    await expect(page.getByText('Fez: The City of Detail').filter({ visible: true }).first()).toBeVisible();
    await expect(page.getByText('Marrakech: Heat, Motion, and Magic!').filter({ visible: true }).first()).toBeVisible();
    await expect(page.getByText('Closing: Morocco as a Photographic Teacher').filter({ visible: true }).first()).toBeVisible();
  });

  test('doit avoir des éléments de header et de footer fonctionnels', async ({ page }) => {
    // Header : Le mobile affiche "Back", la Tablette/Desktop affiche "Back To All Articles"
    // On utilise une expression régulière pour valider la présence de "Back" dans les deux cas
    await expect(page.getByText(/^Back/i).filter({ visible: true }).first()).toBeVisible();
    
    // Footer : Texte constant peu importe la taille de l'écran
    await expect(page.getByText(/Subscribe To Our Newsletter/i).filter({ visible: true }).first()).toBeVisible();
    await expect(page.getByText(/TransitStay/i).filter({ visible: true }).first()).toBeVisible();
  });

  test('les cartes sociales/médias doivent être présentes', async ({ page }) => {
    // Vérifie que les mentions YouTube et Instagram sont bien visibles
    await expect(page.getByText(/YouTube/i).filter({ visible: true }).first()).toBeVisible();
    await expect(page.getByText(/Instagram/i).filter({ visible: true }).first()).toBeVisible();
  });
});