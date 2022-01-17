import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { GeneralInterceptorService } from './interceptors/general-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,           // Definición de un interceptor
      useClass: GeneralInterceptorService,  // El interceptor (servicio) a usar
      multi: true                           // Para indicar a Angular que este pendiente a todas las peticiones que se hagan
    }
    // Un objeto por cada interceptor a usar al momento de enviar peticiones HTTP
    // { ... otro interceptor }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
