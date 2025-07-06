import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
declare var bootstrap: any; // Import Bootstrap globally

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'Polus-Machine-Test';

  ngAfterViewInit(): void {
    const toastTrigger = document.getElementById('liveToastBtn');
    const toastLive = document.getElementById('liveToast');

    if (toastTrigger && toastLive) {
      const toastBootstrap = new bootstrap.Toast(toastLive);
      toastTrigger.addEventListener('click', () => {
        toastBootstrap.show();
      });
    }
}
}
