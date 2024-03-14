import './App.css';
import CustomFooter from './Components/surfaces/CustomFooter';
import CustomHeader from './Components/surfaces/CustomHeader';

import MainMenuPage from './views/MainMenu/MainMenuPage';

function App() {
  return (
    <div className='App'>
      <CustomHeader />

      <MainMenuPage />

      <CustomFooter />
    </div>
  );
}

export default App;
