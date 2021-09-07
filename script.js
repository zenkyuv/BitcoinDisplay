const template = document.createElement("template");
const displayBitcoin = document.querySelector(".display-bitcoin");
console.log(displayBitcoin);
template.innerHTML = `
  <style>
  * {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    box-sizing: border-box;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: auto;
  }
  .mbtc {

   
  }
  .btc {

  }
  span {
    text-align: center;

width: 100%;
  }
  input {
    text-align: center;
  }
    div {
      margin-top: 20px;
      color: green;
    }
    .bitcoin-input {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    .container {
      background-color: blue;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      height: 30px;
      width: 200px;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .display-bitcoin {
      border: 3px solid green;
      background-color: #3aa823;
      color: black;
    }
  </style>
  <div class="main-container">
   <div class="container"><p class='mbtc'>mBTC</p><span>TO</span> <p class='btc'>BTC</p></div>
  <input type="number" class="bitcoin-input"></input>
   <br>
     
    <input disabled  class="display-bitcoin"></input>
    
  </div>
`;
let bitcoinConvert = "";
class BitcoinDisplay extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const input = this.shadowRoot.querySelector(".bitcoin-input");
    const display = this.shadowRoot.querySelector(".display-bitcoin");

    input.value = 1;
    display.value = `${1 / 1000} BTC`;
    input.addEventListener("keyup", () => {
      let bitcoinConvert = input.value / 1000;
      display.value = `${bitcoinConvert} BTC`;
    });
  }
}

window.customElements.define("bitcoin-display", BitcoinDisplay);
