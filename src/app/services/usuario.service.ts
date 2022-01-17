import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
     */
    return this.http.get(`https://reqres.in/api/users`, {
      params,
      headers
    });
  }

}
