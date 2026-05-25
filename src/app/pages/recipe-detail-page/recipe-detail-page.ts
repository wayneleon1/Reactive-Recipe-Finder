import { Component, inject, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import RECIPES_DATA from '../../../../data.json';
import { Recipe } from '../../models/recipe.model';
import { RecipeCard } from '../../components/recipe-card/recipe-card';
import { BreadcrumbItem, Breadcrumb } from '../../components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-recipe-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RecipeCard, Breadcrumb],
  templateUrl: './recipe-detail-page.html',
  styleUrl: './recipe-detail-page.css',
})
export class RecipeDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
  );

  readonly recipe = computed<Recipe | null>(() => {
    const slug = this.slug();
    return RECIPES_DATA.find((r) => r.slug === slug) ?? null;
  });

  // Breadcrumb items derived from recipe
  readonly breadcrumbItems = computed<BreadcrumbItem[]>(() => {
    const recipe = this.recipe();
    return [{ label: 'Recipes', route: '/recipes' }, { label: recipe?.title ?? '' }];
  });

  // More recipes — exclude current, take first 3
  readonly moreRecipes = computed<Recipe[]>(() => {
    const current = this.recipe();
    if (!current) return [];
    return RECIPES_DATA.filter((r) => r.id !== current.id).slice(0, 3);
  });

  constructor() {
    // Redirect to /recipes if slug doesn't match any recipe
    effect(() => {
      const recipe = this.recipe();
      const slug = this.slug();
      if (slug && recipe === null) {
        this.router.navigate(['/recipes']);
      }
    });
  }

  onViewRecipe(recipe: Recipe): void {
    this.router.navigate(['/recipes', recipe.slug]);
  }
}
