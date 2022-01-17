import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

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



    /**
     * Problema de peticiones HTTP tradicionales
     * ? La mayoria de los endpoints requieren los mismos headers TOKEN: código repetitivo
     * ! La forma en como se atrapan los errores, será la misma en todos los endpoints: código repetitivo
     * Algo que siempre cambia para cada endpont, son los queryString que se le pueden enviar a la ruta
     *
     * - Lo mejor es usar interceptores, ya que esta lógica repetivia se concentra en un solo lugar.
     */
    return this.http.get(`https://reqres.in/api/users`, {
      params,
    }).pipe(
      map((res: any) => {
        // Solo me interesa la data (contiene el listado de usuarios)
        return res['data'];
      })
    );
  }

}
