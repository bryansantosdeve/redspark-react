import UserLoginButton from '../../buttons/UserLoginButton';
import UserIconButton from '../../buttons/UserIconButton';

function CustomHeader() {
  const isLoggedIn = false;

  return (
    <header>
      <div>
        <h1>Imobiliária Red(e) Spark</h1>
      </div>

      <div>
        <p>Seja bem vindo, usuário!</p>
      </div>

      <div>{isLoggedIn ? <UserLoginButton /> : <UserIconButton />}</div>
    </header>
  );
}

export default CustomHeader;
