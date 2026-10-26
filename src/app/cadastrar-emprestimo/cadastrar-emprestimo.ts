import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmprestimoService } from '../emprestimo.service';

@Component({
  selector: 'app-cadastrar-emprestimo',
  imports: [FormsModule],
  templateUrl: './cadastrar-emprestimo.html',
  styleUrl: './cadastrar-emprestimo.css',
})
export class CadastrarEmprestimo {
  // formulário dos livros
  nomePessoa: string = '';
  tituloLivro: string = '';
  dataPrevistaDevolucao: string = '';

  constructor(private emprestimoService: EmprestimoService) {}

  cadastrar(): void {
    // só cadastra se tudo estiver escrito algo
    if (this.nomePessoa === '' || this.tituloLivro === '' || this.dataPrevistaDevolucao === '') {
      return;
    }

    this.emprestimoService.adicionar(this.nomePessoa, this.tituloLivro, this.dataPrevistaDevolucao);

    // Limpa o form
    this.nomePessoa = '';
    this.tituloLivro = '';
    this.dataPrevistaDevolucao = '';
  }
}