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
      return {
          'fa-battery-empty':          this.carga === 0,
          'fa-battery-quarter':        this.carga === 1,
          'fa-battery-half':           this.carga === 2,
          'fa-battery-three-quarters': this.carga === 3,
          'fa-battery-full':           this.carga === 4
      };
    },
    bateriaStyle: function(){
      return {
        color: this.carga === 0 ? '#ff1a1a' :
               this.carga === 1 ? '#ff751a' :
               this.carga === 2 ? '#CFDE45' :
               this.carga === 3 ? '#68DE44' : '#1CC124'
      };
    }
  },
  methods: {
    cargar: function(){
      if(this.carga < 4) {
        this.carga++;
        this.niveles.push({text: 'La batería se ha cargado al ' + this.porcentaje + '%'});
      }
    },
    descargar: function(){
      if(this.carga > 0) {
        this.carga--;
        this.niveles.push({text: 'La batería se ha descargado al ' + this.porcentaje + '%'});
      }
    },
    remove: function(nivel){
      this.niveles.$remove(nivel);
    }
  }
});
