import { useState } from 'react';
import CustomCard from '../MainMenu/fragments/CustomCard';
import { ButtonInput, TextInput } from './styles';
import CustomInputRadio from './fragments/CustomInputRadio';

function MainMenuPage() {
  const imovel1 = {
    titulo: 'Casa de luxo',
    localizacao: 'Belo Horizonte',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    preco: '1.580.000',
    imagem: './assets/images/default-house.jpg',
  };

  const imovel2 = {
    titulo: 'Apartamento de alto padrão',
    localizacao: 'São Paulo',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    preco: '3.700.000',
    imagem: './assets/images/default-apt.jpg',
  };

  const imovel3 = {
    titulo: 'Mansão localizada',
    localizacao: 'Rio de Janeiro',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    preco: '8.300.000',
    imagem: './assets/images/default-mansion.jpg',
  };

  const imovel4 = {
    titulo: 'Sobrado no centro',
    localizacao: 'Vitória',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    preco: '8.300.000',
    imagem: './assets/images/default-mini-house.jpg',
  };

  const imoveis = [imovel1, imovel2, imovel3, imovel4];

  const [searchedValue, setSearchedValue] = useState(null);

  function handleFilter() {
    const input = document.getElementById('search-input').value;
    setSearchedValue(input);
  }

  return (
    <div>
      <section>
        <fieldset>
          <TextInput
            type='text'
            id='search-input'
            placeholder='Procure seu imóvel'
          />

          <ButtonInput
            type='submit'
            value='Buscar'
            onClick={handleFilter}
          ></ButtonInput>
        </fieldset>

        {/* REMEMBER: Cada input é agrupado por nome, ou seja, no caso dos inputs do tipo 'Radio', para que um seja escolhido e outro não, é necessário que o nome seja o mesmo. Isso acontece por conta do HTML agrupa-los como opções de um mesmo grupo baseado no parâmetro do nome.  */}
        <fieldset>
          <CustomInputRadio />
        </fieldset>
      </section>

      <section>
        <p>Termo pesquisado: {searchedValue}</p>
      </section>

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
