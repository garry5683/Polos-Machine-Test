import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  @Input() message = '';
  @Input() type: 'success' | 'danger' | 'warning' | 'info' = 'success';
  @Input() delay = 3000;

  show = signal(false);

  ngOnInit(): void {
    this.show.set(true);

    setTimeout(() => {
      this.show.set(false);
    }, this.delay);
  }

}
