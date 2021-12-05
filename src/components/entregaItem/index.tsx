import { FormEvent, useState } from "react";
import { api } from "../services/api";
import { IentregaItemProps } from "./@interfaces";

export function EntregaItem({ entrega }: IentregaItemProps) {

  var [idDestin, setIdDestin] = useState('');
  var idDestina = parseInt(idDestin)

  var idDestinatario = entrega.idDestinatario
  var entreg = entrega


  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (idDestina === idDestinatario) {
      if (entreg.entregaFeita === false) {
        entreg.entregaFeita = true
      }

      api.put('', entreg)
      alert('Entrega confirmada!')
    }
    else {
      alert('ID do destinatário está incorreto')
    }
  }

  return (
    <li>
      <a>RazSocial: {entrega.razaoSocial}</a>
      <a>CNPJ: {entrega.cnpj}</a>
      <a>Valor: R${entrega.valor}</a>
      <a>Endereço de entrega: {entrega.endereçoDestinatario}</a>
      <b>Nome Destinatario: {entrega.nomeDestinatario}</b>
      <q>Entrega concluída: {entrega.entregaFeita}!</q>
      <q>Produto: {entrega.nomeProduto}</q>
      <p>Peso: {entrega.peso}Kg</p>
      <p>Volume: {entrega.volume}L</p>
      <i className="i">Endereço do remetente: {entrega.endereçoRemetente}</i>
      <i className="i2">
        <form onSubmit={handleSubmit}>
          <label htmlFor="idDestin">Id Destinatário:
            <input id="idDestin" value={idDestin}
              onChange={event => setIdDestin(event.target.value)} />
          </label>
          <button type="submit">Confirma Entrega</button>
        </form>
      </i>

    </li>
  );
}
