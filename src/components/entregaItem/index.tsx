import { FiAward } from "react-icons/fi";
import Swal from 'sweetalert2'
import { FormEvent, useState } from "react";
import { api } from "../services/api";
import { IentregaItemProps } from "./@interfaces";
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


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
      MySwal.fire({
        title: 'Parabéns!',
        text: 'Entrega confirmada!',
        confirmButtonText: 'OK'
      })
    }
    else {
      MySwal.fire({
        title: 'Erro!',
        text: 'ID do destinatário está incorreto',
        confirmButtonText: 'OK'
      })

    }
  }

  return (
    <li>
      <b className="a">RazSocial: <br />{entrega.razaoSocial}</b>
      <b className="a">CNPJ: <br />{entrega.cnpj}</b>
      <b className="a">Valor: <br />R${entrega.valor}</b>
      <i>Endereço de entrega: <br />{entrega.endereçoDestinatario}</i>
      <b>Nome Destinatario: <br />{entrega.nomeDestinatario}</b>
      <b className="important!">
        <div>
        </div></b>
      <b>Produto: <br />{entrega.nomeProduto} </b>
      <b>Peso: <br />{entrega.peso}Kg</b>
      <b>Volume: <br />{entrega.volume}L</b>
      <i className="i">Endereço do remetente: <br />{entrega.endereçoRemetente}</i>
      <i className="i">{entrega.entregaFeita ?
        (<div>
          <FiAward size={32} color="#39CC83" />
          Entrega
          Concluída!!
        </div>) : (<div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="idDestin">Id Destinatário:<br />
              <input id="idDestin" value={idDestin}
                onChange={event => setIdDestin(event.target.value)} />
            </label>
            <button type="submit">Confirmar Entrega</button>
          </form>
        </div>)}
      </i>

    </li>
  );
}
