export interface Ientrega {
  id: number;
  idEntregador: number;
  idDestinatario: number;
  cnpj: number;
  cnpjDestinatario: number;
  razaoSocial: string;
  endereçoDestinatario: string;
  endereçoRemetente: string;
  nomeDestinatario: string;
  nomeProduto: string;
  peso: number;
  volume: number;
  valor: number;
  entregaFeita: boolean;
}
