import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CardComponent } from "../../../card/card/card.component";
import { PortafolioService } from '../../../../services/portafolio.service';

@Component({
  selector: 'app-projects-home-page',
  imports: [CardComponent],
  templateUrl: './projects-home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProjectsHomePageComponent {
  portafolioService = inject(PortafolioService);
  cardList = this.portafolioService.getTechonlogyCardList();
}
