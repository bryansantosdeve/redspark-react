import UserLoginButton from '../../buttons/UserLoginButton';
import UserIconButton from '../../buttons/UserIconButton';
import { DescriptionText, Header, Title } from './styles';

function CustomHeader() {
  const isLoggedIn = false;

  return (
    <Header>
      <div>
        <Title>Imobiliária Red(e) Spark</Title>
      </div>

      <div>
        <DescriptionText>Seja bem vindo, usuário!</DescriptionText>
      </div>

      <div>{isLoggedIn ? <UserLoginButton /> : <UserIconButton />}</div>
    </Header>
  );
}

export default CustomHeader;
