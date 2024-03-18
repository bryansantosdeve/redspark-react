function CustomInputRadio({ name, id, label, onChange }) {
  return (
    <div>
      <input
        type='radio'
        name={name}
        id={id}
        value={label}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
      <div></div>
    </div>
  );
}

export default CustomInputRadio;
