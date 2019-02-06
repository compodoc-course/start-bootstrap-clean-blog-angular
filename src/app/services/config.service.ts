import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Servicio para configurarlo todo
 */
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  /**
   * bgVar
   */
  public bgVar = new Subject<string>();
  /**
   * bgVar observable
   */
  public bgVar$ = this.bgVar.asObservable();
  /**
   * Actualizar el background de la cabecera con una nueva url
   * @param newUrl Nueva URL
   */
  public updatebgUrlSubject(newUrl: string) {
    this.bgVar.next(newUrl);
  }
}
