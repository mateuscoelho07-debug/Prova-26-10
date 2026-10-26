export interface Emprestimo {
  id: number;
  nomePessoa: string;
  tituloLivro: string;
  dataPrevistaDevolucao: string;
  devolvido: boolean;
}
//criação da interface (molde para as info dos emprestimos)