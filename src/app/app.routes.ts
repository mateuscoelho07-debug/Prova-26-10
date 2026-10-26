import { Routes } from '@angular/router';
import { CadastrarEmprestimo } from './cadastrar-emprestimo/cadastrar-emprestimo';
import { ListaEmprestimos } from './lista-emprestimos/lista-emprestimos';

export const routes: Routes = [
  // se for url vazia joga para a aba da lista
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'cadastrar', component: CadastrarEmprestimo },
  { path: 'lista', component: ListaEmprestimos },
];