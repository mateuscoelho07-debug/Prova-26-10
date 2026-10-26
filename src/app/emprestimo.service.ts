import { Injectable } from '@angular/core';
import { Emprestimo } from './emprestimo';

@Injectable({ providedIn: 'root' })
export class EmprestimoService {
  // Lista dos empréstimos
  emprestimos: Emprestimo[] = [];

  // Número de autoincremento de ID
  proximoId: number = 1;

  // retorna a lista dos empréstimos
  listar(): Emprestimo[] {
    return this.emprestimos;
  }

  // cria o empréstimo novo 
  adicionar(nomePessoa: string, tituloLivro: string, dataPrevistaDevolucao: string): void {
    const novo: Emprestimo = {
      id: this.proximoId,
      nomePessoa: nomePessoa,
      tituloLivro: tituloLivro,
      dataPrevistaDevolucao: dataPrevistaDevolucao,
      devolvido: false,
    };
    this.proximoId = this.proximoId + 1;
    this.emprestimos.push(novo);
  }

  // Tira da lista o empréstimo com o id informado
  remover(id: number): void {
    this.emprestimos = this.emprestimos.filter((emprestimo) => emprestimo.id !== id);
  }

  registrarDevolucao(id: number): void {
    for (const emprestimo of this.emprestimos) {
      if (emprestimo.id === id) {
        emprestimo.devolvido = true;
      }
    }
  }
}