import { Injectable, signal } from "@angular/core";
import { Project as Project } from "../interfaces/project.interface";
import { Technology as Technology } from "../interfaces/technology.interface";

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  private technologyList = signal<Technology[]>([
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
      isVisible: true
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

  private projectList = signal<Project[]>([
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
    },
    {
      title: 'Dottie',
      description: 'Aplicación web para administar documentos fiscales emitidos como facturas, notas de crédito, notas de débito. ',
      imgUrl: 'FrontEndStore.png',
      technologies: 'NET Framework, Dapper, SQL Server, APIs Restful, Inyección de dependencias, HTML, CSS, Bootstrap, Javascript, JQuery, Razor, Telerik',
      parentTechnology: 'net_framework'
    },
  ]);

  getProjectsByParentTechnology = (technology: string): Project[] => {
    console.log(technology);
    console.log(this.projectList().filter(project => project.parentTechnology === technology.trim().toLowerCase()));
    return this.projectList().filter(project => project.parentTechnology === technology.trim().toLowerCase());
  }

  getTechnologyByName = (name: string): Technology => {
    return this.technologyList().filter(t => t.technology === name)[0];
  }

  getTitleByTechnology = (technology: string): string => {
    return this.technologyList().filter(t => t.technology === technology)[0].title;
  }

  getTechonlogyList = () => {
    return this.technologyList().filter(t => t.isVisible);
  }
}
