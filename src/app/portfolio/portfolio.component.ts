import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  @Input() projects: any = [ //add the description and the translated descrition in de i18n json's manually (de, en)

    {
      name: 'El Pollo Loco',
      comp: 'JavaScript | HTML | CSS',
      description: 'locco description',
      img: 'el_pollo.png',
      github: 'https://github.com/TobiasRuhmanseder/JS-Game-El-Pollo-Locco',
      projectLink: 'https://el-pollo-loco.tobias-ruhmanseder.de',
      otherDirection: false,
    },
    {
      name: 'Join',
      comp: 'Angular | TypeScript | Django | REST | HTML | SCSS',
      description: 'join description',
      img: 'join_re.png',
      github: 'https://github.com/TobiasRuhmanseder/join-frontend',
      projectLink: 'https://join.tobias-ruhmanseder.de',
      otherDirection: true,
    },
        {
      name: 'Streamflex',
      comp: 'Angular | TypeScript | Django | REST | PostgreSQL | Redis | HTML | SCSS | Cloud | Docker ',
      description: 'streamflex description',
      img: 'streamflex.png',
      github: 'https://github.com/TobiasRuhmanseder/stream-flex-frontend',
      projectLink: 'https://streamflex.tobias-ruhmanseder.de',
      otherDirection: false,
    },
  ]

}
