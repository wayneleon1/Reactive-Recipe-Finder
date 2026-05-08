import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css',
})
export class Checkbox {
  readonly checked = input<boolean>(false);
  readonly label = input<string>('');
  readonly id = input<string>(`checkbox-${Math.random().toString(36).slice(2, 9)}`);
  readonly disabled = input<boolean>(false);

  readonly checkedChange = output<boolean>();

  onChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.checkedChange.emit(input.checked);
  }
}
