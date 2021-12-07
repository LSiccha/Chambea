import {Component, Input, OnInit} from '@angular/core';
import {UsuarioDto} from "../../model/usuarioDto";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() currentUser? : UsuarioDto

  constructor() {

  }

  ngOnInit(): void {
  }

}
