import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features-section.html',
  styleUrl: './features-section.css',
})
export class FeaturesSection {
  readonly features: Feature[] = [
    {
      icon: 'assets/images/icon-whole-food-recipes.svg',
      iconAlt: 'Whole food recipes icon',
      title: 'Whole-food recipes',
      description: 'Each dish uses everyday, unprocessed ingredients.',
    },
    {
      icon: 'assets/images/icon-minimum-fuss.svg',
      iconAlt: 'Minimum fuss icon',
      title: 'Minimum fuss',
      description: 'All recipes are designed to make eating healthy quick and easy.',
    },
    {
      icon: 'assets/images/icon-search-in-seconds.svg',
      iconAlt: 'Search in seconds icon',
      title: 'Search in seconds',
      description: 'Filter by name or ingredient and jump straight to the recipe you need.',
    },
  ];
}
