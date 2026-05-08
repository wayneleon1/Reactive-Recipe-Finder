import { Component } from '@angular/core';

interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly socialLinks: SocialLink[] = [
    {
      icon: 'assets/images/icon-instagram.svg',
      label: 'Instagram',
      href: '#',
    },
    {
      icon: 'assets/images/icon-bluesky.svg',
      label: 'Bluesky',
      href: '#',
    },
    {
      icon: 'assets/images/icon-tiktok.svg',
      label: 'TikTok',
      href: '#',
    },
  ];
}
