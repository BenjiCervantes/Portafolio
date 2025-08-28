import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  imports: [RouterLink]
})
export default class HeaderComponent { }
