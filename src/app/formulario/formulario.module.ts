import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { IonicModule } from "@ionic/angular";
import { UsuarioService } from "../service/usuario.service";
import { FormularioComponent } from "./formulario.component";

@NgModule({
  declarations: [FormularioComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  exports: [FormularioComponent],
  providers: [UsuarioService],
  bootstrap: [FormularioComponent],
})
export class FormularioModule {}
