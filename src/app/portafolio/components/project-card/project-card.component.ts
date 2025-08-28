import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProjectCard } from '../../interfaces/projectCard.interface';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  projectCard = input.required<ProjectCard>();
}
