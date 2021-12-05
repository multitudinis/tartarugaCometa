import { useEffect, useState } from "react";
import { EntregaItem } from "../entregaItem";
import { Ientrega } from "./@interfaces";
import { api } from "../services/api";

import "../../styles/entregas.scss";

export function EntregaList() {
  const [entregas, setentregas] = useState<Ientrega[]>([]);

  useEffect(() => {
    api.get("")
      .then((response) => setentregas(response.data))
  }, []);
  console.log(entregas)
  return (
    <section className="entrega-list">
      <h1>Lista de entregas</h1>

      <ul>
        {entregas.map((entrega) => (
          <EntregaItem key={entrega.id} entrega={entrega} />
        ))}
      </ul>
    </section>
  );
}
