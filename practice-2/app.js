Vue.component("modal", {
  props: ["modal"],
  data() {
    return {
      title: "title",
      body: "body",
    };
  },
  methods:{
    closeModal(){
      this.$emit('handle-modal')
    }
  },
  template: `
    <div class="modal-mask" v-show="modal.showModal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h3>{{title}}</h3>
          <div>
          
            <slot name="modal-body"></slot>

          </div>
          <footer>
            <button v-on:click="closeModal">Cerrar</button>
          </footer>
        </div>
      </div>
    </div>`,
});

new Vue({
  el: "#app",
  data() {
    return {
      modal: {
        showModal: false,
      },
    };
  },
  methods: {
    handleModal() {
      if (this.modal.showModal) {
        this.modal.showModal = false;
      } else {
        this.modal.showModal = true;
      }
    },
  },
  watch: {
    showModal(newValue, oldValue) {},
  },
});
