import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  readonly navLinks: NavLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Recipes', href: '#recipes' },
  ];

  readonly activeLink = signal<string>('Home');
  readonly isMobileMenuOpen = signal<boolean>(false);

  setActive(label: string): void {
    this.activeLink.set(label);
    this.isMobileMenuOpen.set(false);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  // Close menu when pressing Escape
  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMobileMenu();
  }
}
