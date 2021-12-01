import { SetStateAction, useEffect, useState } from "react";
import { RepositoryItem } from "../RepositoryItem";
import { IRepository } from "./@interfaces";
import "../../styles/repositories.scss";

export function RepositoryList() {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

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

  useEffect(() => {
    let data = require("../../repo.json")
      .then((data: SetStateAction<IRepository[]>) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.nome} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
