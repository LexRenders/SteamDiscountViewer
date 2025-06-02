import {test, expect} from '@playwright/test'

test('De frontend bevat een lijst van games', async ({ page }) => {
    await page.goto('http://localhost:4321/astro-build');
  
    const gameList = await page.$$('[data-testid="game-list-item"]');
    expect(gameList.length).toBeGreaterThanOrEqual(2);
  });
  
  test('De frontend bevat een input veld om te filteren op naam', async ({ page }) => {
    await page.goto('http://localhost:4321/astro-build');
  
    const searchInput = await page.$('#simple-search');
    expect(searchInput).not.toBeNull();
  });
  
  test('De frontend toont de juiste games na het filteren via de slider', async ({ page }) => {
    await page.goto('http://localhost:4321/astro-build');
  
    const slider = await page.$('input[type="range"]');
    if(slider){
        await slider.fill('25');
    }
    
    await page.waitForTimeout(500);
  
    const gameList = await page.$$('[data-testid="game-list-item"]');
    expect(gameList.length).toBe(4);
  });
  
  test('De frontend toont de juiste games na filteren met zoekfunctie en slider', async ({ page }) => {
    await page.goto('http://localhost:4321/astro-build');
  
    const searchInput = await page.$('#simple-search');
    if(searchInput){
        await searchInput.fill('Forza');
    }
    
    const slider = await page.$('input[type="range"]');
    if(slider){
        await slider.fill('75');
    }
    
    await page.waitForTimeout(500);
  
    const gameList = await page.$$('[data-testid="game-list-item"]');
    expect(gameList.length).toBe(1);
  });