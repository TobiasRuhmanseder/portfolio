import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  @Input() projects: any = [
    {
      name: 'Pokedex',
      comp: 'JavaScript | HTML | CSS | API',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      img: 'pokedex.png',
      github: 'https://github.com/TobiasRuhmanseder/pokedex',
      projectLink: 'https://google.de',
      otherDirection: false,
    },
    {
      name: 'Join',
      comp: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      img: 'join.png',
      github: 'https://github.com/TobiasRuhmanseder/join',
      projectLink: 'https://google.de',
      otherDirection: true,
    },
  ]

}
