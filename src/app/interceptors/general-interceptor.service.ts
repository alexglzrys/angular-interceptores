import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  // Lógica de intercepción de la petición HTTP
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Crear el token (se enviará en todas las peticiones)
    // Forma recomendada de agregar headers a una consulta
    const headers = new HttpHeaders({
      'token-usuario': 'sdshu4fd845f/*sd9s45dsd/*sd8s*?$3sds4'
    });

    // Las peticiones no se pueden modificar una vez construidas (Enviadas).
    // En este caso se procede a clonarlas con la nueva configuración deseada
    const reqClone = req.clone({
      headers
    });

    // Continuar con el flujo de la petición
    return next.handle(reqClone).pipe(
      // Atrapar cualquier error (400 | 500) generado en el servidor
      catchError(this.manejarError)
    );

  }

  manejarError(err: HttpErrorResponse) {
    console.log('Sucedio un error', 'Registrado en el log file')
    console.warn(err);
    // Mandar el error para que sea gestionado por el cliente que invoca este servicio
    return throwError('Error personalizado')
  }

}
