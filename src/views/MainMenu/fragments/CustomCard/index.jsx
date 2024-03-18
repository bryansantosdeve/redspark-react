import CustomDescription from '../CustomDescription';
import { Image } from './styles';

function CustomCard({ titulo, localizacao, descricao, preco, imagem }) {
  return (
    <section>
      <figure>
        <Image src={imagem} alt={titulo}></Image>
      </figure>

      <div>
        <CustomDescription
          titulo={titulo}
          localizacao={localizacao}
          descricao={descricao}
          preco={preco}
        />
      </div>
    </section>
  );
}

export default CustomCard;
