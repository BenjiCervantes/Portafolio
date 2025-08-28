import { Component } from '@angular/core';
import HeaderComponent from "../../components/header/header.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  imports: [HeaderComponent, RouterLink]
})
export default class HomePageComponent {

}
