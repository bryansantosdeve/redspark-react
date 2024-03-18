import { useEffect, useState } from 'react';

function CustomInputRadio() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

  // O 'useEffect' só é executado quando uma referência muda, não necessariamente sendo um state.
  useEffect(() => {
    if (opcaoSelecionada != null) {
      console.log(
        'Executando useEffect do componente, opção selecionada: ' +
          opcaoSelecionada
      );
    }
  }, [opcaoSelecionada]);

  function handleClick(event) {
    setOpcaoSelecionada(event.target.value);
  }

  return (
    <div>
      <div>
        <input
          type='radio'
          name='filter'
          id='option-radio-by-region'
          value='By region'
          onChange={handleClick}
        />
        <label htmlFor='option-radio-by-region'>By Region</label>
      </div>

      <div>
        <input
          type='radio'
          name='filter'
          id='option-radio-by-price'
          value='By price'
          onChange={handleClick}
        />
        <label htmlFor='option-radio-by-price'>By Price</label>
      </div>
    </div>
  );
}

export default CustomInputRadio;
