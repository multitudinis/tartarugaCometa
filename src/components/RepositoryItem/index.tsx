import { IRepositoryItemProps } from "./@interfaces";

const repo = {
  cnpj: 333444333,
  razaoSocial: 'qualquer uma',
  endereço: 'Rua das Valkirias',
  produto: {
    nome: 'saco de areia',
    peso: '50Kg',
    volume: '25L',
    valor: 'R$10'
  }
}

export function RepositoryItem({ repository }: IRepositoryItemProps) {
  return (
    <li>
      <strong>{repository.razaoSocial}</strong>
      <p>CNPJ:{repository.cnpj}</p>
      <p>{repository.endereço}</p>
      <p>{repository.nome}</p>
      <p>{repository.peso}</p>
      <p>{repository.volume}</p>
      <p>{repository.valor}</p>
    </li>
  );
}
