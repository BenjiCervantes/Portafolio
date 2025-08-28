import { Component, inject } from '@angular/core';
import { PortafolioService } from '../../../../services/portafolio.service';
import { ProjectCardComponent } from "../../../project-card/project-card.component";
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-view-page',
  imports: [ProjectCardComponent],
  templateUrl: './view-page.component.html'
})
export default class ViewPageComponent {

  portafolioService = inject(PortafolioService);

  query = toSignal(inject(ActivatedRoute).params.pipe(map(params => params['query'])));
  projectCardList = this.portafolioService.getProjectsByParentTechnology(this.query());
}
