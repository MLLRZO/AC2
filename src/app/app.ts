import { Component } from '@angular/core';
import { CadastrarEmprestimoComponent } from './cadastrar-emprestimo/cadastrar-emprestimo';
import { ListaEmprestimosComponent } from './lista-emprestimos/lista-emprestimos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CadastrarEmprestimoComponent,
    ListaEmprestimosComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}