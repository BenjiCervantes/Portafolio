import { Injectable, signal } from "@angular/core";
import { ProjectCard } from "../interfaces/projectCard.interface";
import { Card } from "../interfaces/card.interface";

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  private technologyCardList = signal<Card[]>([
    {
      title: 'Angular',
      description: 'Proytectos creados utilizando el Framework Angular ',
      imgUrl: 'angular-logo.png',
      technology: 'angular',
      isVisible: true
    },
    {
      title: 'React',
      description: 'Proytectos creados utilizando el Framwork React ',
      imgUrl: 'react-logo.svg',
      technology: 'react',
      isVisible: false
    },
    {
      title: 'NET Framework',
      description: 'Proytectos creados utilizando .Net Framework ',
      imgUrl: 'netframework-logo.png',
      technology: 'net_framework',
      isVisible: false
    },
    {
      title: 'NET Core',
      description: 'Proytectos creados utilizando .NET Core ',
      imgUrl: 'netcore-logo.png',
      technology: 'net_core',
      isVisible: false
    },
    {
      title: 'HTML',
      description: 'Proytectos creados utilizando HTML ',
      imgUrl: 'html-logo.png',
      technology: 'html',
      isVisible: true
    },
  ]);

  private projectCardList = signal<ProjectCard[]>([
    {
      title: 'GifsApp',
      description: 'Aplicación web desarrollada para la búsqueda de Gifs utilizando el api de Giphy',
      imgUrl: 'FrontEndStore.png',
      siteUrl: 'https://front-end-store-bbautista.netlify.app/',
      technologies: 'Angular 22, Bootstrap, ',
      parentTechnology: 'angular'
    },
    {
      title: 'Front End Store',
      description: 'Aplicación web desarrollada para mostrar artículos de compra',
      imgUrl: 'FrontEndStore.png',
      siteUrl: 'https://front-end-store-bbautista.netlify.app/',
      technologies: 'HTML5, Bootstrap',
      parentTechnology: 'html'
    }
  ]);

  getProjectsByParentTechnology = (technology: string): ProjectCard[] => {
    return this.projectCardList().filter(project => project.parentTechnology === technology.trim().toLowerCase());
  }

  getTechnologyCardByName = (name: string): Card => {
    return this.technologyCardList().filter(t => t.technology === name)[0];
  }

  getTitleByTechnology = (technology: string): string => {
    return this.technologyCardList().filter(t => t.technology === technology)[0].title;
  }

  getTechonlogyCardList = () => {
    return this.technologyCardList().filter(t => t.isVisible);
  }
}
