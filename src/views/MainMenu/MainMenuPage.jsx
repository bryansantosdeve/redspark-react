import CustomCard from '../MainMenu/fragments/CustomCard';

function MainMenuPage() {
  const imovel1 = {
    titulo: 'Casa de luxo em Belo Horizonte',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    preco: '1.580.000',
    imagem: './assets/images/default-house.jpg',
  };

  const imovel2 = {
    titulo: 'Apartamento de alto padrão em São Paulo',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    preco: '3.700.000',
    imagem: './assets/images/default-apt.jpg',
  };

  const imovel3 = {
    titulo: 'Mansão localizada no Rio de Janeiro',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    preco: '8.300.000',
    imagem: './assets/images/default-mansion.jpg',
  };

  const imovel4 = {
    titulo: 'Sobrado no centro de Vitória',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    preco: '8.300.000',
    imagem: './assets/images/default-mini-house.jpg',
  };

  const imoveis = [imovel1, imovel2, imovel3, imovel4];

  return (
    <div>
      <section>
        <form>
          <input
            type='text'
            name='search-input'
            placeholder='Procure seu imóvel'
          />
          <input type='submit' value='Buscar' />
        </form>
      </section>
      <main>
        {imoveis.map((imovel, index) => (
          <CustomCard
            key={index}
            titulo={imovel.titulo}
            descricao={imovel.descricao}
            preco={imovel.preco}
            imagem={imovel.imagem}
          />
        ))}
        {/* <CustomCard
          titulo={imovel1.titulo}
          descricao={imovel1.descricao}
          preco={imovel1.preco}
          imagem={imovel1.imagem}
        />

        <CustomCard
          titulo={imovel2.titulo}
          descricao={imovel2.descricao}
          preco={imovel2.preco}
          imagem={imovel2.imagem}
        />

        <CustomCard
          titulo={imovel3.titulo}
          descricao={imovel3.descricao}
          preco={imovel3.preco}
          imagem={imovel3.imagem}
        />

        <CustomCard
          titulo={imovel4.titulo}
          descricao={imovel4.descricao}
          preco={imovel4.preco}
          imagem={imovel4.imagem}
        /> */}
      </main>
    </div>
  );
}
export default MainMenuPage;
