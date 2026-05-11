import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ListItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-section-with-list',
  imports: [CommonModule],
  templateUrl: './section-with-list.html',
  styleUrl: './section-with-list.css',
})
export class SectionWithList {
  readonly heading = input.required<string>();
  readonly items = input.required<ListItem[]>();
}
