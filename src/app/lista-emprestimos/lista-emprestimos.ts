import { Component } from '@angular/core';
import { Emprestimo } from '../emprestimo';
import { EmprestimoService } from '../emprestimo.service';

@Component({
  selector: 'app-lista-emprestimos',
  templateUrl: './lista-emprestimos.html',
  styleUrl: './lista-emprestimos.css',
})
export class ListaEmprestimos {
  constructor(private emprestimoService: EmprestimoService) {}

  // pega a lista do service
  pegarLista(): Emprestimo[] {
    return this.emprestimoService.listar();
  }

  // contador de total de empréstimos
  contarTotal(): number {
    return this.pegarLista().length;
  }

  // contador para empréstimos que não devolveram
  contarEmAberto(): number {
    let contador = 0;
    for (const emprestimo of this.pegarLista()) {
      if (emprestimo.devolvido === false) {
        contador = contador + 1;
      }
    }
    return contador;
  }

  // contador dos empréstimos devolvidos
  contarDevolvidos(): number {
    let contador = 0;
    for (const emprestimo of this.pegarLista()) {
      if (emprestimo.devolvido === true) {
        contador = contador + 1;
      }
    }
    return contador;
  }

  remover(id: number): void {
    this.emprestimoService.remover(id);
  }

  registrarDevolucao(id: number): void {
    this.emprestimoService.registrarDevolucao(id);
  }
}