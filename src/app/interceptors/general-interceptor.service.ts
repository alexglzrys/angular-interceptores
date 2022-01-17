import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Los INTERCEPTORS son servicios tradicionales
 *
 * ng g s interceptors/generalInterceptor
 *
 * La unica diferencia es que implementan la interfaz HttpInterceptor, así como especificar en el app.module
 * que en la sección de providers contemple el uso de interceptores
 *
 *
 */


@Injectable({
  providedIn: 'root'
})
export class GeneralInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Paso por el interceptor');

    // Continuar con el flujo de la petición
    return next.handle(req);

  }

}
