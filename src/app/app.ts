import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { FeaturesSection } from './components/features-section/features-section';
import { RealLifeSection } from './components/real-life-section/real-life-section';
import { CtaBanner } from './components/cta-banner/cta-banner';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, FeaturesSection, RealLifeSection, CtaBanner, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Reactive_Recipe_Finder');
}
