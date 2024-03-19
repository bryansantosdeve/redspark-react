import { DescriptionText, Title } from './styles';

function CustomDescription({ titulo, localizacao, descricao, preco }) {
  return (
    <>
      <div>
        <Title>{titulo}</Title>
      </div>
      <div>
        <DescriptionText>{localizacao}</DescriptionText>
      </div>
      <div>
        <DescriptionText>{descricao}</DescriptionText>
      </div>
      <div>
        <DescriptionText>R${preco}</DescriptionText>
      </div>
    </>
  );
}

export default CustomDescription;
