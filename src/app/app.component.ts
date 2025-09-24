import { Component, OnInit } from '@angular/core';
import type { Container, ISourceOptions, Engine } from '@tsparticles/engine';
import { MoveDirection, OutMode } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';
import AOS from 'aos';
import { NgParticlesService } from '@tsparticles/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  id = 'tsparticles';
  particlesOptions: ISourceOptions = {};

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit() {
    AOS.init({
      duration: 650,
      offset: 350,
    });
    this.checkWindowLocationHref(); // Check if 'www' is in the URL because of the fetch indication on cotact form
    this.ngParticlesService.init(async (engine: any) => {
      await loadFull(engine);
    });

    this.addParticalOptions();
  }

  particlesLoaded(container: Container): void {
    console.log('Particles loaded:', container);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }

  checkWindowLocationHref() {
    if (window.location.href == 'https://.tobias-ruhmanseder.de/') {
      window.location.href = 'https://www.tobias-ruhmanseder.de/';
    }
  }
  

  addParticalOptions() {
    this.particlesOptions = {
      background: {
        color: {
          value: 'rgba(0, 0, 0, 1)',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#d9d500ff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.bounce,
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 2, max: 3 },
        },
      },
      detectRetina: true,
    };
  }
}
