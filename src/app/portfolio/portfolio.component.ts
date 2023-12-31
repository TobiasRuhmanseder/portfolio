import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  @Input() projects: any = [ //add the description and the translated descrition in de i18n json's manually (de, en)
    {
      name: 'Pokedex',
      comp: 'JavaScript | HTML | CSS | API',
      description: 'pokedex description',
      img: 'pokedex.png',
      github: 'https://github.com/TobiasRuhmanseder/Pokedex---API-exercise',
      projectLink: 'https://www.pokedex.tobias-ruhmanseder.com/index.html',
      otherDirection: false,
    },
    {
      name: 'Join',
      comp: 'JavaScript | HTML | CSS',
      description: 'join description',
      img: 'join_re.png',
      github: 'https://github.com/TobiasRuhmanseder/join',
      projectLink: 'https://join.tobias-ruhmanseder.com/index.html',
      otherDirection: true,
    },
    {
      name: 'El Pollo Loco',
      comp: 'JavaScript | HTML | CSS',
      description: 'locco description',
      img: 'el_pollo.png',
      github: 'https://github.com/TobiasRuhmanseder/JS-Game-El-Pollo-Locco',
      projectLink: 'https://el-pollo-loco.tobias-ruhmanseder.com/index.html',
      otherDirection: false,
    },
    {
      name: 'Ring of Fire',
      comp: 'Angular | TypeScript | Firebase | HTML | CSS',
      description: 'rof description',
      img: 'ringoffire_re.png',
      github: 'https://github.com/TobiasRuhmanseder/ringoffire',
      projectLink: 'https://www.ring-of-fire.tobias-ruhmanseder.com/',
      otherDirection: true,
    },
  ]

}
