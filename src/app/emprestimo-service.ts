import { Injectable } from '@angular/core';
import { Emprestimo } from './models/emprestimo';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  private emprestimos: Emprestimo[] = [];

  listar(): Emprestimo[] {
    return this.emprestimos;
  }

  adicionar(emprestimo: Emprestimo): void {
    this.emprestimos.push(emprestimo);
  }

  remover(id: number): void {
    this.emprestimos = this.emprestimos.filter(
      item => item.id !== id
    );
  }

  registrarDevolucao(id: number): void {
    const emprestimoEncontrado = this.emprestimos.find(
      emprestimo => emprestimo.id === id
    );

    if (emprestimoEncontrado && !emprestimoEncontrado.devolvido) {
      emprestimoEncontrado.devolvido = true;
    }
  }
}