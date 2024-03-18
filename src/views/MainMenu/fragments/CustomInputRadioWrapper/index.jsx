import { useEffect, useState } from 'react';
import CustomInputRadio from '../../../../Components/inputs/CustomInputRadio';

function CustomInputRadioWrapper({ name, id, label }) {
  const customInputRadioName = 'filter';

  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

  // O 'useEffect' só é executado quando uma referência muda, não necessariamente sendo um state.
  useEffect(() => {
    if (opcaoSelecionada) {
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
      <CustomInputRadio
        name={customInputRadioName}
        id='option-radio-by-region'
        label='By region'
        onChange={handleClick}
      />

      <CustomInputRadio
        name={customInputRadioName}
        id='option-radio-by-price'
        label='By Price'
        onChange={handleClick}
      />
    </div>
  );
}

export default CustomInputRadioWrapper;
