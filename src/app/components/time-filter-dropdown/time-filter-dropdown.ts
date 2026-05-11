import { Component, input, output, signal, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-filter-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-filter-dropdown.html',
  styleUrl: './time-filter-dropdown.css',
})
export class TimeFilterDropdown {
  readonly label = input.required<string>();
  readonly options = input<number[]>([0, 5, 10, 15, 20]);
  readonly selected = input<number | null>(null);

  readonly selectedChange = output<number | null>();

  readonly isOpen = signal(false);

  constructor(private elRef: ElementRef) {}

  get displayLabel(): string {
    const val = this.selected();
    return val !== null ? `${val} minutes` : this.label();
  }

  toggle(): void {
    this.isOpen.update((open) => !open);
  }

  select(value: number): void {
    this.selectedChange.emit(value);
  }

  clear(): void {
    this.selectedChange.emit(null);
    this.isOpen.set(false);
  }

  // Close when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

  // Close on Escape
  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.isOpen.set(false);
  }
}
