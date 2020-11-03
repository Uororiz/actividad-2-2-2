import { Component, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";
import { Usuario } from "../modelos/usuario";
import { UsuarioService } from "../service/usuario.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit {
  usuarios: Usuario[] = [];
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarios = this.usuarioService.consultar();
    console.log(this.usuarios);
  }

  ionViewWillEnter() {
    this.usuarios = this.usuarioService.consultar();
  }
}
