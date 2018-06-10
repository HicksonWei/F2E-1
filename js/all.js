
new Vue({
  el: '#app',
  data: {
    toggle: true,
    important: false
  },
  computed: {
    fakeFade(){
      if (this.toggle) return 'fake-input fake-fade d-flex ai-cr';
      return 'fake-input d-flex ai-cr'
    },
    inputExpand(){
      console.log(this.toggle);
      if(this.toggle) return 'new-expand expand';
      return 'new-expand';
    },
    star(){
      if(this.important) return 'fas fa-star fa-lg';
      return 'far fa-star fa-lg';
    },
    bgColor(){
      if(this.important) return 'background-color: #FFF2DC;';
      return '';
    }
  },
  watch: {

  }
});