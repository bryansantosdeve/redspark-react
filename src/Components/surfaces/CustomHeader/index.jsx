function CustomHeader() {
  const isLoggedIn = false;
  const doLoginMessage = <p>Faça seu login</p>;
  const doLogoutMessage = <p>Logout</p>;

  return (
    <header>
      <table>
        <td>
          <div>
            <h1>Imobiliária Red(e) Spark</h1>
          </div>
        </td>
        <td>
          <div>
            <p>Seja bem vindo, usuário!</p>
          </div>
        </td>
        <td>
          <div>{isLoggedIn ? doLogoutMessage : doLoginMessage}</div>
        </td>
      </table>
    </header>
  );
}

export default CustomHeader;
