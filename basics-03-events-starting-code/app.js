const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  computed: {
    fullname() {
      
    }
  },
  methods: {
    submitForm() {
      alert('Submitted');
    },
    setName(event, lastName) {
      this.name = `${event.target.value} ${lastName}`;
    },
  }
});

app.mount('#events');
