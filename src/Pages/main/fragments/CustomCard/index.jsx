import CustomDescription from '../CustomDescription';

function CustomCard({ titulo, descricao, preco, imagem }) {
  return (
    <section class='row'>
      <table>
        <tr>
          <figure>
            <img src={imagem} alt={titulo}></img>
          </figure>
          <td>
            <CustomDescription
              titulo={titulo}
              descricao={descricao}
              preco={preco}
            />
          </td>
        </tr>
      </table>
    </section>
  );
}

export default CustomCard;
