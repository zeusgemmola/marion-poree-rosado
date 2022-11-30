const Select = ({ id, label, options, defaultValue, handleChange }) => (
  <>
    <label>{label}</label>
    <select
      defaultValue={defaultValue}
      className="browser-default"
      name={id}
      id={id}
      onChange={handleChange}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </>
);

export default Select;
