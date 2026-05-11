import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { FeaturesSection } from '../../components/features-section/features-section';
import { RealLifeSection } from '../../components/real-life-section/real-life-section';
import { CtaBanner } from '../../components/cta-banner/cta-banner';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Hero, FeaturesSection, RealLifeSection, CtaBanner],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
