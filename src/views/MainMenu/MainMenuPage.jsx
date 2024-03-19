import { useEffect, useState } from 'react';
import CustomCard from '../MainMenu/fragments/CustomCard';
import { ButtonInput, TextInput } from './styles';
import CustomInputRadioWrapper from './fragments/CustomInputRadioWrapper';
import data from '../../data.json';

function MainMenuPage() {
  const [imoveis, setImoveis] = useState(data);

  const [searched, setSearched] = useState('');
  const [searchedValue, setSearchedValue] = useState('');

  const searchedValueFeedback = (
    <section>
      <p>Termo pesquisado: {searchedValue}</p>
    </section>
  );

  /// == x ===
  useEffect(() => {
    if (!searchedValue) setImoveis(data);

    const filteredValues = data.filter((imovel) =>
      imovel.localizacao.includes(searchedValue)
    );
    console.log(filteredValues);
    setImoveis(filteredValues);
  }, [searchedValue]);

  /// FRAGMENT X DIV
  return (
    <div>
      <section>
        <fieldset>
          <TextInput
            type='text'
            id='search-input'
            placeholder='Procure seu imóvel'
            value={searched}
            onChange={(element) => setSearched(element.target.value)}
          />

          <ButtonInput type='button' onClick={() => setSearchedValue(searched)}>
            Buscar algo
          </ButtonInput>
        </fieldset>

        {/* REMEMBER: Cada input é agrupado por nome, ou seja, no caso dos inputs do tipo 'Radio', para que um seja escolhido e outro não, é necessário que o nome seja o mesmo. Isso acontece por conta do HTML agrupa-los como opções de um mesmo grupo baseado no parâmetro do nome.  */}
        <fieldset>
          <CustomInputRadioWrapper />
        </fieldset>
      </section>
      {searchedValue && searchedValueFeedback}
      <main>
        {imoveis.map((imovel, index) => (
          <CustomCard
            key={index}
            titulo={imovel.titulo}
            localizacao={imovel.localizacao}
            descricao={imovel.descricao}
            preco={imovel.preco}
            imagem={imovel.imagem}
          />
        ))}
      </main>
    </div>
  );
}
export default MainMenuPage;
