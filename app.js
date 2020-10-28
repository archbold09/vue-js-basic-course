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
      this.$emit("change-color", this.showPrices ? "FF96C8" : "3D3D3D");
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
      
      <slot name="text"></slot>
      <slot name="link"></slot>

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
  created() {console.log('created');},
  mounted() {console.log('mounted')},

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
  methods: {
    updateColor(color) {
      this.color = color || this.color.split("").reverse().join("");
    },
  },
});
