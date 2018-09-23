class ATM {
    constructor(el) {
        this.el = el;
        this.cacheElements();
        this.bindEvents();
    }
    cacheElements() {
        this.form = this.el.querySelector('.atm__form');
        this.amountFilled = this.el.querySelector('.form__field');
        this.resultArea = this.el.querySelector('.currency-list');
    }
    bindEvents() {
        this.form.addEventListener('submit', this.onSubmit.bind(this));
    }
    onSubmit(event) {
        event.preventDefault();
        const amountEntered = this.amountFilled.value;
        this.calculateCurrency(amountEntered);
    }
    calculateCurrency(amount) {
        let dispenceAmount = amount;
        const currencyCount = ATM.denominations.map( currency => {
            let notes = parseInt(dispenceAmount / currency);
            dispenceAmount = dispenceAmount % currency;
            return notes;
        });
        this.renderCurrency( currencyCount );
    }
    renderCurrency(count) {
        const df = document.createDocumentFragment();
        ATM.denominations.map( (denomination, index) => {
            const li = document.createElement('li');
            li.classList.add('currency-list__item');
            li.append(document.createTextNode( `${count[index]} notes of Rs. ${denomination}` ));
            df.append(li);
        } );
        while(this.resultArea.firstChild) this.resultArea.removeChild(this.resultArea.firstChild);
        this.resultArea.append(df);
    }
}

ATM.denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

[...document.querySelectorAll('.atm')].map( el => new ATM(el) );