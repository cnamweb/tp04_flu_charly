import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardDisplayComponent } from './card-display/card-display.component';
import { CardFormComponent } from './card-form/card-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardDisplayComponent, CardFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp4_cfl';
}
