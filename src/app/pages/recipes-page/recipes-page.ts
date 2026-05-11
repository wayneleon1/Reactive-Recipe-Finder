import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../models/recipe.model';
import RECIPES_DATA from '../../../../data.json';
import { SearchBar } from '../../components/search-bar/search-bar';
import { TimeFilterDropdown } from '../../components/time-filter-dropdown/time-filter-dropdown';
import { RecipeCard } from '../../components/recipe-card/recipe-card';
import { EmptyState } from '../../components/empty-state/empty-state';

@Component({
  selector: 'app-recipes-page',
  standalone: true,
  imports: [CommonModule, SearchBar, TimeFilterDropdown, RecipeCard, EmptyState],
  templateUrl: './recipes-page.html',
  styleUrl: './recipes-page.css',
})
export class RecipesPage {
  readonly recipes = signal<Recipe[]>(RECIPES_DATA);

  // --- Filter signals ---
  readonly searchQuery = signal<string>('');
  readonly maxPrepTime = signal<number | null>(null);
  readonly maxCookTime = signal<number | null>(null);

  // --- Dropdown time options ---
  readonly prepTimeOptions = [0, 5, 10];
  readonly cookTimeOptions = [0, 5, 10, 15, 20];

  // --- Derived filtered list ---
  readonly filteredRecipes = computed<Recipe[]>(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const maxPrep = this.maxPrepTime();
    const maxCook = this.maxCookTime();

    return this.recipes().filter((recipe) => {
      // Search: match title or any ingredient
      const matchesSearch =
        !query ||
        recipe.title.toLowerCase().includes(query) ||
        recipe.ingredients.some((i) => i.toLowerCase().includes(query));

      // Prep time filter
      const matchesPrep = maxPrep === null || recipe.prepMinutes <= maxPrep;

      // Cook time filter
      const matchesCook = maxCook === null || recipe.cookMinutes <= maxCook;

      return matchesSearch && matchesPrep && matchesCook;
    });
  });

  readonly filteredCount = computed(() => this.filteredRecipes().length);

  // --- Effect: log filter state changes ---
  constructor() {
    effect(() => {
      console.log('[RecipeFinder] Filters updated:', {
        searchQuery: this.searchQuery(),
        maxPrepTime: this.maxPrepTime(),
        maxCookTime: this.maxCookTime(),
        resultsCount: this.filteredCount(),
      });
    });
  }

  // --- Event handlers ---
  onSearchChange(query: string): void {
    this.searchQuery.set(query);
  }

  onPrepTimeChange(value: number | null): void {
    this.maxPrepTime.set(value);
  }

  onCookTimeChange(value: number | null): void {
    this.maxCookTime.set(value);
  }

  onViewRecipe(recipe: Recipe): void {
    console.log('[RecipeFinder] Viewing recipe:', recipe.title);
  }
}
