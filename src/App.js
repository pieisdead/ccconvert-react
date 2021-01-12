import CurrencyConverter from './components/CurrencyConverter'

function App() {
  return (
    <div className="page-wrapper">
      <section>
            <img src="favicon.png" alt="Currency Converter" />
            <h1>Currency Converter</h1>
            <p>Currency Converter coverts any currency to any currency using the latest exchange rates.</p>
            <CurrencyConverter baseCurrency="USD" toCurrency="ZAR" />
        </section>
      <p className="white">Currency Converter by <a href="https://www.multisites.co.za">Multisites</a></p>
    </div>
  );
}

export default App;