import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmprestimoService } from '../emprestimo-service';
import { Emprestimo } from '../models/emprestimo';

@Component({
  selector: 'app-cadastrar-emprestimo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastrar-emprestimo.html',
  styleUrl: './cadastrar-emprestimo.css'
})
export class CadastrarEmprestimoComponent {

  nomePessoa = '';
  tituloLivro = '';
  dataPrevistaDevolucao = '';

  constructor(private emprestimoService: EmprestimoService) {}

  cadastrar(): void {
    if (
      !this.nomePessoa.trim() ||
      !this.tituloLivro.trim() ||
      !this.dataPrevistaDevolucao
    ) {
      return;
    }

    const novoEmprestimo: Emprestimo = {
      id: Date.now(),
      nomePessoa: this.nomePessoa.trim(),
      tituloLivro: this.tituloLivro.trim(),
      dataPrevistaDevolucao: this.dataPrevistaDevolucao,
      devolvido: false
    };

    this.emprestimoService.adicionar(novoEmprestimo);

    this.nomePessoa = '';
    this.tituloLivro = '';
    this.dataPrevistaDevolucao = '';
  }
}