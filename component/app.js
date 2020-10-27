Vue.component("counter", {
  data() {
    return {
      counter: 0,
    };
  },

  template: `
    <div>
      <button v-on:click="increment">Click Me!</button>
      <span>{{counter}}</span>
    </div>
  `,

  methods: {
    increment() {
      this.counter++;
    },
  },
});

new Vue({
  el: "#app",

  data() {
    return {
      title: "hi archbold!",
    };
  },

  computed: {},

  methods: {},
});
