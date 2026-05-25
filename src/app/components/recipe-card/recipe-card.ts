import { Component, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../models/recipe.model';
import { Button } from '../button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.css',
})
export class RecipeCard {
  private readonly router = inject(Router);

  readonly recipe = input.required<Recipe>();
  readonly viewRecipe = output<Recipe>();

  onViewRecipe(): void {
    this.viewRecipe.emit(this.recipe());
    this.router.navigate(['/recipes', this.recipe().slug]);
  }
}
