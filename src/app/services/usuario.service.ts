import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios()
  {
    // Otra forma de agregar queryStrings a nuestras consultas
    // https://req.in/users?page=2
    let params = new HttpParams().append('page', 2);
    // Para agregar más cadenas de consulta se hace de la siguiente forma
    params = params.append('nombre', 'Alejandro González');

    // Forma recomendada de agregar headers a una consulta
    const headers = new HttpHeaders({
      'token-usuario': 'sdshu4fd845f/*sd9s45dsd/*sd8s*?$3sds4'
    });


    /**
     * Problema de peticiones HTTP tradicionales
     * ? La mayoria de los endpoints requieren los mismos headers: código repetitivo
     * ! La forma en como se atrapan los errores, será la misma en todos los endpoints: código repetitivo
     *
     * - Lo mejor es usar interceptores, ya que esta lógica repetivia se concentra en un solo lugar.
     */
    return this.http.get(`https://reqres.in/api/users`, {
      params,
      headers
    }).pipe(
      map((res: any) => {
        // Solo me interesa la data (contiene el listado de usuarios)
        return res['data'];
      }),
      catchError(err => {
        // Atrapar cualquier error (400 | 500) generado en el servidor
        console.log('Sucedio un error', 'Registrado en el log file')
        console.warn(err);
        // Mandar el error para que sea gestionado por el cliente que invoca este servicio
        return throwError('Error personalizado')
      })
    );
  }

}
