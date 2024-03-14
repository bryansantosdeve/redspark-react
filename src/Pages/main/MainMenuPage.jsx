import CustomCard from './fragments/CustomCard';

function MainMenuPage() {
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
        <CustomCard
          titulo={'Casa de luxo em Belo Horizonte'}
          descricao={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
          preco={'1.580.000'}
          imagem={'./assets/images/default-house.jpg'}
        />

        <CustomCard
          titulo={'Apartamento de alto padrão em São Paulo'}
          descricao={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
          preco={'3.700.000'}
          imagem={'./assets/images/default-apt.jpg'}
        />

        <CustomCard
          titulo={'Mansão localizada no Rio de Janeiro'}
          descricao={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
          preco={'8.300.000'}
          imagem={'./assets/images/default-mansion.jpg'}
        />

        <CustomCard
          titulo={'Sobrado no centro de Vitória'}
          descricao={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
          preco={'8.300.000'}
          imagem={'./assets/images/default-mini-house.jpg'}
        />
      </main>
    </div>
  );
}
export default MainMenuPage;
