import { CommonModule } from "@angular/common";
import { NgModule, NgZone } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { IonicModule } from "@ionic/angular";
import { UsuarioService } from "../service/usuario.service";
import { UsuarioConsultaComponent } from "./usuario-consulta.component";

@NgModule({
  declarations: [UsuarioConsultaComponent],
  imports: [
      CommonModule, 
      FormsModule, 
      ReactiveFormsModule, 
      IonicModule,
      RouterModule
    ],
  exports: [UsuarioConsultaComponent],
  providers: [UsuarioService],
  bootstrap: [UsuarioConsultaComponent],
})
export class UsuarioConsultaModule {}
