import { Component } from '@angular/core';
import HeaderComponent from "../../components/header/header.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-projects-page',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './projects-page.component.html'
})
export default class ProjectsPageComponent {

}
