import { Component, Input, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Usuario } from "../modelos/usuario";
import { UsuarioService } from "../service/usuario.service";
import * as _ from "lodash";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
})
export class FormularioComponent implements OnInit {
  @Input()
  private usuario: Usuario;

  private esEditar: boolean;
  private idUsuario: string;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.usuario = new Usuario();
    this.esEditar = false;
    this.idUsuario = this.route.snapshot.paramMap.get("idUsuario");
    if (this.idUsuario) {
      this.esEditar = true;
      this.usuario = this.consultarUsuario(this.idUsuario);
    }
  }

  enviarUsuario(formulario: NgForm) {
    if (formulario.valid) {
      if (!_.isNil(this.usuario)) {
        if (this.esEditar) {
          this.usuarioService.editar(this.usuario);
        } else {
          this.usuarioService.agregar(this.usuario);
        }
        formulario.reset();
        alert("Usuario agregado exitosamente");
      }
    } else {
      alert("No se admiten formularios vacíos o con campos faltantes");
    }
  }

  consultarUsuario(idUsuario: string): Usuario {
    return this.usuarioService.consultarUsuario(idUsuario);
  }

  eliminarUsuario(usuario: Usuario) {
    this.usuarioService.eliminar(usuario);
  }
}
