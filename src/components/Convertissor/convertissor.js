import { useEffect, useState } from "react";
import Input from "../Form/Input";
import Select from "../Form/Select";
import Spinner from "../Spinner";
import Title3 from "../Title/Title3";
import Title5 from "../Title/Title5";

const Convertissor = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [currencies, setCurrencies] = useState("EUR");
  const [amount, setAmount] = useState("0");
  const [rate, setRate] = useState(0);
  const [result, setResult] = useState(0);
  const RegExLetter = /^\d+(\.|,)?\d*$/;
  const apiKey = "7f58urJ1foFycyPz4E6QiAhWc5VoK1ciDmwnQK3S";

  useEffect(() => {
    setIsLoaded(false);
    amount > 0 &&
      fetch(
        `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${baseCurrency}&currencies=${currencies}`
      )
        .then((res) => res.json())
        .then((response) => {
          setIsLoaded(true);
          setRate(Object.values(response.data)[0].value);
          setResult(amount * Object.values(response.data)[0].value);
        });
  }, [baseCurrency, currencies, amount]);

  const handleChangeBaseCurrency = (e) => {
    setBaseCurrency(e.target.value);
  };

  const handleChangeCurrencies = (e) => {
    setCurrencies(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value.replace(/^0+(?!\.|$)/, ""));

    e.target.classList = RegExLetter.test(e.target.value) ? "valid" : "invalid";
  };

  return (
    <div className="container">
      <div className="row">
        <Title3 title="Convertisseur" />
        <div className="col s8">
          <div className="row">
            <div className="col s6">
              <Select
                id="inputDevises"
                label="Convertir"
                options={["EUR", "CHF", "GBP", "USD"]}
                defaultValue="EUR"
                handleChange={handleChangeBaseCurrency}
              />
            </div>
            <div className="col s6">
              <Select
                id="outputDevises"
                label="En"
                options={["EUR", "CHF", "GBP", "USD"]}
                defaultValue="EUR"
                handleChange={handleChangeCurrencies}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <Input
                id="amount"
                type="text"
                label="Montant"
                amount={amount}
                className=""
                handleChange={handleAmountChange}
              />
            </div>
            <div className="input-field col s12">
              {!isLoaded ? (
                <Spinner />
              ) : (
                <Title5 title={`Résultat : ${result}`} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convertissor;
