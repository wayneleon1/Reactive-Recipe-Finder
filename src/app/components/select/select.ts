import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SelectOption {
  label: string;
  value: string | number;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.html',
  styleUrl: './select.css',
})
export class Select {
  readonly options = input<SelectOption[]>([]);
  readonly placeholder = input<string>('Select...');
  readonly value = input<string | number>('');
  readonly ariaLabel = input<string>('Select an option');

  readonly valueChange = output<string | number>();

  readonly isFocused = signal(false);

  onChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.valueChange.emit(select.value);
  }

  onFocus(): void {
    this.isFocused.set(true);
  }

  onBlur(): void {
    this.isFocused.set(false);
  }
}
