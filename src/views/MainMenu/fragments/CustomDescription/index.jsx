function CustomDescription({ titulo, descricao, preco }) {
  return (
    <div>
      <div>
        <h2>{titulo}</h2>
      </div>
      <div>
        <p>{descricao}</p>
      </div>
      <div>
        <p>R${preco}</p>
      </div>
    </div>
  );
}

export default CustomDescription;
