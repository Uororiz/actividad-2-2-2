import { Component, Input, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuario-consulta',
  templateUrl: './usuario-consulta.component.html',
  styleUrls: ['./usuario-consulta.component.scss'],
})
export class UsuarioConsultaComponent implements OnInit {

  @Input()
  private usuarios: Usuario[];

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {

  }

  eliminar(usuario: Usuario) {
    this.usuarioService.eliminar(usuario);
    alert("Usuario " + usuario.nombre + " eliminado");
    document.location.reload(true);
  }
}
