import { useEffect } from "react";

const Input = ({ id, type, amount, className, label, handleChange }) => {
  useEffect(() => {
    M.updateTextFields();
  }, []);

  return (
    <>
      <input
        id={id}
        type={type}
        className={className}
        value={amount}
        onChange={handleChange}
      />
      <span
        className="helper-text"
        data-error="Erreur"
        data-success="Valide"
      ></span>
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default Input;
