Vue.component("CoinDetail", {
  props: ["coin"],

  data() {
    return {
      showPrices: false,
      value: 0,
    };
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
    },
  },

  computed: {
    title() {
      return `${this.coin.name} - ${this.coin.symbol}`;
    },
    convertValue() {
      if (!this.value) {
        return 0;
      }

      return this.value / this.coin.currentPrice;
    },
  },

  template: `
    <div>
      <h1 :class="coin.changePercent > 0 ? 'green' : 'red'">{{title}}</h1>
      <img :src="coin.img" :alt="coin.name" />

      <hr>

      <button v-on:click="toggleShowPrices">{{showPrices ? 'Hide prices' : 'Show prices'}}</button>
      
      <div v-if="showPrices">
        <ul v-for="(price, index) in coin.pricesWithDays" :key="price.day">
          <li
          :class="{orange: price.value === coin.currentPrice, green: price.value > coin.currentPrice, red: price.value < coin.currentPrice}">
          {{index}} {{price.day}} - {{price.value}}</li>
        </ul>
      </div>

      <div>
        <input type="number" v-model="value" />
        <span>{{convertValue}}</span>
      </div>
    </div>
  `,
});

new Vue({
  el: "#app",

  data() {
    return {
      btc: {
        name: "Bitcoin",
        symbol: "BTC",
        img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
        changePercent: 12,
        currentPrice: 8400,
        symbol: "BTC",
        pricesWithDays: [
          { day: "Lunes", value: 8400 },
          { day: "Martes", value: 7900 },
          { day: "Miercoles", value: 8200 },
          { day: "Jueves", value: 9000 },
          { day: "Viernes", value: 9400 },
          { day: "Sabado", value: 10000 },
          { day: "Domingo", value: 10200 },
        ],
        name1: "",
        symbol1: "",
        value: 0,
      },
      color: "f4f4f4",
    };
  },
  // methods: {
  //   toggleShowPrices() {
  //     this.showPrices = !this.showPrices;
  //     this.color = this.color.split("").reverse().join("");
  //   },
  //   handleChangeTitle() {
  //     this.name1 = this.$refs.name1.value;
  //     this.symbol1 = this.$refs.symbol1.value;
  //   },
  // },
});
