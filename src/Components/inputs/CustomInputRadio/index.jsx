import { Input, Label } from './styles';

function CustomInputRadio({ name, id, label, onChange }) {
  return (
    <div>
      <Input
        type='radio'
        name={name}
        id={id}
        value={label}
        onChange={onChange}
      />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
}

export default CustomInputRadio;
