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
    </div>
  );
}

export default CustomInputRadio;
