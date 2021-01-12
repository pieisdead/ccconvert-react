import React from 'react'
import './CurrencyConverter.css'

import Spinner from './Spinner'

class CurrencyConverter extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            baseCurrency: props.baseCurrency || 'USD',
            toCurrency: props.toCurrency || 'ZAR',
            amount: 1,
            currencies: [],
            rates: [],
            isLoading: false,
        }
        
        this.changeBaseCurrency = this.changeBaseCurrency.bind(this)
        this.changeToCurrency = this.changeToCurrency.bind(this)
        this.changeAmount = this.changeAmount.bind(this)
        this.getConvertedCurrency = this.getConvertedCurrency.bind(this)
        this.callAPI = this.callAPI.bind(this)
        
    }
    
    componentDidMount() {
        this.callAPI(this.state.baseCurrency)
    }
    callAPI(base) {
        const api = `https://api.exchangeratesapi.io/latest?base=${base}`
        
        fetch(api)
        .then(results => {
            this.setState({isLoading: true})
            return results.json()
        }).then(data => this.setState({
            rates: data['rates'],
            currencies: Object.keys(data['rates']).sort()
        })).then(() => this.setState({isLoading: false}))
    }
    
    changeBaseCurrency(e) {
        this.setState({ baseCurrency: e.target.value })
        this.callAPI(e.target.value)
    }
    
    changeToCurrency(e) {
        this.setState({
            toCurrency: e.target.value
        })
    }
    
    changeAmount(e) {
        this.setState({
            amount: e.target.value
        })
    }
    
    getConvertedCurrency(amount, toCurrency, rates) {
        return Number.parseFloat(amount * rates[toCurrency]).toFixed(2)
    }
    
    render() {
        
        const {currencies, rates, baseCurrency, amount, toCurrency} = this.state
        const currencyOptions = currencies.map(currency => 
            <option key={currency} value={currency}>{currency}</option>
        )
        const result = this.getConvertedCurrency(amount, toCurrency, rates)
        const output = !this.state.isLoading ? <h2>{result}</h2> : <Spinner dots="3" />
        return (
            <div className="converter">
                <section>
                    <select value={baseCurrency} onChange={this.changeBaseCurrency} >
                        {currencyOptions}
                    </select>
                    <div>
                        <label>Enter an amount</label>
                        <input type="number" value={amount} onChange={this.changeAmount} />
                    </div>
                </section>
                <section>
                    <div>
                        <select value={toCurrency} onChange={this.changeToCurrency} >
                            {currencyOptions}
                        </select>
                    </div>
                    <div>
                        {output}
                    </div>
                </section>
            </div>
        )
    }
}

export default CurrencyConverter