import { Component, input } from '@angular/core';
import { Technology } from '../../../interfaces/technology.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html'
})
export class CardComponent {
  card = input.required<Technology>();
}
