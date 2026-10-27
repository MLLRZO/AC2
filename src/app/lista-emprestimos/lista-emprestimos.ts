import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmprestimoService } from '../emprestimo-service';

@Component({
  selector: 'app-lista-emprestimos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-emprestimos.html',
  styleUrl: './lista-emprestimos.css'
})
export class ListaEmprestimosComponent {

  constructor(public emprestimoService: EmprestimoService) {}

  listar() {
    return this.emprestimoService.listar();
  }

  total(): number {
    return this.listar().length;
  }

  emAberto(): number {
    return this.listar().filter(
      emprestimo => !emprestimo.devolvido
    ).length;
  }

  devolvidos(): number {
    return this.listar().filter(
      emprestimo => emprestimo.devolvido
    ).length;
  }

  registrarDevolucao(id: number): void {
    this.emprestimoService.registrarDevolucao(id);
  }

  removerEmprestimo(id: number): void {
    this.emprestimoService.remover(id);
  }
}