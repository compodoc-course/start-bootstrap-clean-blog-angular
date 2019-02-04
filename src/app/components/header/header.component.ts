import { ConfigService } from './../../services/config.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  bgUrl: string;
  constructor(private config: ConfigService) {
    this.config.bgVar$.subscribe( data => {
      console.log('header', data);
      this.bgUrl = data;
    });
  }

  /**
   * Init!!!
   */
  ngOnInit() {
    console.log('Hola');
  }

  /**
   * Hoaaaaa
   */
  hola() {
    console.log('hola');
  }

  /**
   * Hoaaaaa
   */
  private holaHola() {
    console.log('hola');
  }

  /**
   * Destruir!!!
   */
  ngOnDestroy() {
    console.log('Destroy');
  }

}
