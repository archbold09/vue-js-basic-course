Vue.component("CoinDetail", {
  props: ["changePercent", "title", "name", "img","currentPrice","pricesWithDays"],

  data() {
    return {
      showPrices: false,
      value: 800,
    };
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
    },
  },

  computed: {
    convertValue() {
      if (!this.value) {
        return 0;
      }

      return this.value / this.currentPrice;
    },
  },

  template: `
    <div>
      <h1 :class="changePercent > 0 ? 'green' : 'red'">{{title}}</h1>
      <img :src="img" :alt="name" />

      <hr>

      <button v-on:click="toggleShowPrices">{{showPrices ? 'Hide prices' : 'Show prices'}}</button>
      
      <div v-if="showPrices">
        <ul v-for="(price, index) in pricesWithDays" :key="price.day">
          <li
          :class="{orange: price.value === currentPrice, green: price.value > currentPrice, red: price.value < currentPrice}"
          >{{index}} {{price.day}} - {{price.value}}</li>
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
      showPrices: false,
      color: "f4f4f4",
      name1: "",
      symbol1: "",
      value: 0,
    };
  },
  computed: {
    title() {
      return `${this.name} - ${this.symbol}`;
    },
    title2() {
      return `${this.name1} - ${this.symbol1}`;
    },
  },
  watch: {
    showPrices(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
      this.color = this.color.split("").reverse().join("");
    },
    handleChangeTitle() {
      this.name1 = this.$refs.name1.value;
      this.symbol1 = this.$refs.symbol1.value;
    },
  },
});
