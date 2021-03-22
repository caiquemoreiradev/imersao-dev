const DOM = {
    inputValue: document.querySelector('input#realValue'),
    selectCoin: document.querySelector('select#coins'),

    getValues() {
        return {
            inputValue: DOM.inputValue.value,
            selectCoin: DOM.selectCoin.value
        }
    },

    updateText() {
        let { selectCoin } = DOM.getValues();

        let coin = document.querySelector('#coin_to_convert');

        switch (selectCoin) {
            case '0':
                coin.innerHTML = 'Valor em --';
                APP.reload();
                break;

            case 'dólar':
                coin.innerHTML = 'Valor em Dólar:';
                APP.reload();
                break;

            case 'euro':
                coin.innerHTML = 'Valor em Euro:';
                APP.reload();
                break;

            case 'iene':
                coin.innerHTML = 'Valor em Iene:';
                APP.reload();
                break;

            default:
                break;
        }
    },

    convertValues() {
        let { inputValue, selectCoin } = DOM.getValues();

        let inputValueFloat = parseFloat(inputValue);
        let inputValueCoin;
        let inputValueFinal;

        switch (selectCoin) {
            case 'dólar':
                inputValueCoin = inputValueFloat * 5.50;
                inputValueFinal = inputValueCoin.toFixed(2);
                break;

            case 'euro':
                inputValueCoin = inputValueFloat * 6.58;
                inputValueFinal = inputValueCoin.toFixed(2);
                break;

            case 'iene':
                inputValueCoin = inputValueFloat * 0.05;
                inputValueFinal = inputValueCoin.toFixed(2);
                break;

            default:
                break;
        }

        DOM.innerHtml(inputValueFinal);
    },

    innerHtml(value) {

        let valueFomated = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);

        document.querySelector('.value__result span').innerHTML = valueFomated;
    },

    clearValues() {
        document.querySelector('.value__result span').innerHTML = ''; 
        document.querySelector('input#realValue').value = '';
    }
}

const APP = {
    reload() {
        DOM.clearValues();
    }
}


