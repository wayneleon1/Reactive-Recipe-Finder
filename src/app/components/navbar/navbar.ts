import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from '../button/button';

interface NavLink {
  label: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, Button],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly navLinks: NavLink[] = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Recipes', route: '/recipes' },
  ];

  readonly isMobileMenuOpen = signal<boolean>(false);

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMobileMenu();
  }
}
