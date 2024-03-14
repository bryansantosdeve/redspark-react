function CustomDescription({ titulo, descricao, preco }) {
  return (
    <section>
      <div>
        <h2>{titulo}</h2>
      </div>
      <div>
        <p>{descricao}</p>
      </div>
      <div>
        <p>R${preco}</p>
      </div>
    </section>
  );
}

export default CustomDescription;
