var vm = new Vue({
  el: '#nivel-bateria',
  data: bateria,
  ready: function(){
    this.carga = 2;
  },
  computed:{
    porcentaje: function(){
      return (this.carga / 4) * 100;
    },
    bateriaCss: function(){
      css_classes = ['fa-battery-empty', 'fa-battery-quarter', 'fa-battery-half', 'fa-battery-three-quarters', 'fa-battery-full'];
      return css_classes[this.carga];
    },
    bateriaStyle: function(){
      css_colors = ['#ff1a1a', '#ff751a', '#CFDE45', '#68DE44', '#1CC124']
      return { color: css_colors[this.carga] };
    }
  },
  methods: {
    cambio_carga: function (value) {
      if(this.carga == 4 && value == 1) return;
      if(this.carga == 0 && value == -1) return;
      this.carga += value;
      this.niveles.push({text: 'La carga de la batería se ha cambiado a ' + this.porcentaje + '%'});
    },
    remove: function(nivel){
      this.niveles.$remove(nivel);
    }
  }
});
