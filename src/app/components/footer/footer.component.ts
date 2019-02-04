
import { SharedElement } from './../../interfaces/shared-element.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'blog-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  /**
   * @ignore
   */
  currentYear: number = new Date().getFullYear();

  /**
   * Comentario inicial 1
   * Comentario inicial 2
   */
  author = 'Anartz Mugika Ledo';

  /**
   * @ignore
   */
  sharedElements: SharedElement[] = [
    {
      url: 'https://twitter.com/',
      path: 'mugan86',
      icon: 'fab fa-twitter'
    },
    {
      url: 'https://github.com/',
      path: 'mugan86',
      icon: 'fab fa-github'
    },
    {
      url: 'https://www.linkedin.com/in/',
      path: 'anartz-mugika-0007a062',
      icon: 'fab fa-linkedin'
    },
    {
      url: 'https://bintray.com/',
      path: 'amugika/maven',
      icon: 'fas fa-frog'
    },
    {
      url: 'https://npmjs.com/',
      path: '~mugan86',
      icon: 'fab fa-npm'
    }
  ];
  /**
   * Init!!!
   */
  ngOnInit() {
    console.log('Hola');
  }

  /**
   * Hola saludo
   * {@link http://www.github.com Me voy a subir mis cambios del codigo a Github!!!}
   * @example
   * Mostrarnos un saludo con contenido \"hola\"
   * @returns Devuelve un saludo con contenido 'hola'
   */
  private holaMundo(): string {
    return 'hola';
  }

  /**
   * Hola saludo
   * @example
   * Tenemos como nombre Anartz
   * Tenemos como apellido Mugika
   * Mostrarnos un saludo con contenido \"hola Anartz Mugika\"
   * @param nombre Nombre al que vamos a saludar
   * @param apellido Apellido del que vamos a saludar
   * @returns Devuelve un saludo con contenido 'hola'
   */
  protected holaMundoPersonalizado(nombre: string, apellido: string): string {
    return 'hola ' + nombre + ' ' + apellido;
  }
}


