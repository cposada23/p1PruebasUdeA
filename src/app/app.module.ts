import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeanStdComponent } from './mean-std/mean-std.component';

import { ServicioDatosService } from './services/servicio-datos.service';

@NgModule({
  declarations: [
    AppComponent,
    MeanStdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServicioDatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
