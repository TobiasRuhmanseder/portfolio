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
      github: 'https://github.com/TobiasRuhmanseder/Pokedex---API-exercise',
      projectLink: 'https://www.pokedex.tobias-ruhmanseder.com/index.html',
      otherDirection: false,
    },
    {
      name: 'Join',
      comp: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      img: 'join_re.png',
      github: 'https://github.com/TobiasRuhmanseder/join',
      projectLink: 'https://join.tobias-ruhmanseder.com/index.html',
      otherDirection: true,
    },
    {
      name: 'El Pollo Loco',
      comp: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help pepe to find coins and salsa bottles to fight against the big hen.',
      img: 'el_pollo.png',
      github: 'https://github.com/TobiasRuhmanseder/JS-Game-El-Pollo-Locco',
      projectLink: 'https://el-pollo-loco.tobias-ruhmanseder.com/index.html',
      otherDirection: false,
    },
    {
      name: 'Ring of Fire',
      comp: 'Angular | TypeScript | Firebase | HTML | CSS',
      description: 'A well-known and simple card game based on Angular. Through Firebase you can even play with friends over the Internet.',
      img: 'ringoffire_re.png',
      github: 'https://github.com/TobiasRuhmanseder/ringoffire',
      projectLink: 'https://www.ring-of-fire.tobias-ruhmanseder.com/',
      otherDirection: true,
    },
  ]

}
