import CustomDescription from '../CustomDescription';
import { Image, Section } from './styles';

function CustomCard({ titulo, localizacao, descricao, preco, imagem }) {
  return (
    <Section>
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
    </Section>
  );
}

export default CustomCard;
