import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../modelos/usuario";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

@Injectable({
  providedIn: "root",
})
@Injectable()
export class UsuarioService {
  constructor() { }
  arrayUsuario: Usuario[] = [];

  objeto(arrayUsuario: Usuario[]) {
    return JSON.stringify(arrayUsuario);
  }

  private getUsuarios(): Usuario[] {
    let usuarios = sessionStorage.getItem("usuarios");
    if (!_.isNil(usuarios)) {
      this.arrayUsuario = JSON.parse(usuarios);
    }
    return this.arrayUsuario;
  }

  public agregar(usuario: Usuario) {
    usuario.idUsuario = uuidv4();

    this.arrayUsuario = this.getUsuarios();
    this.arrayUsuario.push(usuario);
    sessionStorage.setItem("usuarios", this.objeto(this.arrayUsuario));
  }

  public editar(usuario: Usuario) {
    this.arrayUsuario = this.getUsuarios();

    this.arrayUsuario.forEach((u) => {
      if (u.idUsuario === usuario.idUsuario) {
        Object.assign(u, usuario);
      }
    });

    sessionStorage.setItem("usuarios", this.objeto(this.arrayUsuario));
  }

  public consultar(): Usuario[] {
    return this.getUsuarios();
  }

  public eliminar(usuario: Usuario) {
    this.arrayUsuario = this.getUsuarios().filter(e => e.idUsuario !== usuario.idUsuario);
    sessionStorage.setItem("usuarios", this.objeto(this.arrayUsuario));
  }

  public consultarUsuario(idUsuario: string): Usuario {
    this.arrayUsuario = this.getUsuarios();
    let usuario: Usuario;
    usuario = new Usuario();
    this.arrayUsuario.forEach((u) => {
      if (u.idUsuario === idUsuario) {
        usuario = u;
      }
    });

    return usuario;
  }
}
