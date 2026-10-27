import { Routes } from '@angular/router';
import { CadastrarEmprestimoComponent } from './cadastrar-emprestimo/cadastrar-emprestimo';
import { ListaEmprestimosComponent } from './lista-emprestimos/lista-emprestimos';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'emprestimos',
    pathMatch: 'full'
  },
  {
    path: 'cadastrar',
    component: CadastrarEmprestimoComponent
  },
  {
    path: 'emprestimos',
    component: ListaEmprestimosComponent
  },
  {
    path: '**',
    redirectTo: 'emprestimos'
  }
];