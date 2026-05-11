import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../models/recipe.model';
import { Button } from '../button/button';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.css',
})
export class RecipeCard {
  readonly recipe = input.required<Recipe>();

  readonly viewRecipe = output<Recipe>();

  onViewRecipe(): void {
    this.viewRecipe.emit(this.recipe());
  }

  get totalMinutes(): number {
    return this.recipe().prepMinutes + this.recipe().cookMinutes;
  }
}
