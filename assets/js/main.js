function createCalculator() {
  return {
    display : document.querySelector('.display'),
      
    start() {
      this.clickButtons();
      this.pressEnter();
    },
        
    pressEnter() {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.makeAccount();
        }
      });
    },

    clearDisplay() {
      this.display.value = '';
    },

    deleteOneNumber() {
      this.display.value = this.display.value.slice(0, -1);
    },

    makeAccount() {
      let account = this.display.value;
      
      try {
        account = eval(account);
        
        if (!account) {
          alert('Conta inválida');
          return;
        }

        this.display.value = account;
      }catch(e){
        alert('Conta inválida');
        return;
      }
    },

    clickButtons() {
      document.addEventListener('click', (e) => {
        const element = e.target;
        
        if(element.classList.contains('btn-num')) {
          this.btnToDisplay(element.innerText);
        }
        
        if(element.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(element.classList.contains('btn-del')) {
          this.deleteOneNumber();
        }
        
        if(element.classList.contains('btn-eq')) {
          this.makeAccount();
        }
      }); 
    },

    btnToDisplay(value) {
      this.display.value += value;
    }
  };
}

const calculator = createCalculator();
calculator.start(); 