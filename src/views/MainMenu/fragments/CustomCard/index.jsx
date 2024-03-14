import CustomDescription from '../CustomDescription';

function CustomCard({ titulo, descricao, preco, imagem }) {
  return (
    <section>
      <figure>
        <img src={imagem} alt={titulo}></img>
      </figure>

      <div>
        <CustomDescription
          titulo={titulo}
          descricao={descricao}
          preco={preco}
        />
      </div>
    </section>
  );
}

export default CustomCard;
