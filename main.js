
var producto = new Vue({
    el: '#app',
    data: {
        lista :[
        ],
        nombre:'',
        descripcion:'',
        promedio: ''
            
            
        },
        methods: {
            agregarProducto: function () {
            
                if(this.nombre!="" && this.descripcion!= "" && this.precio!= ""){
                    this.lista.push({nombre:this.nombre, descripcion: this.descripcion, precio: this.precio});
                    this.nombre="";
                    this.descripcion ="";
                    this.precio="";
                
                }else{
                    alert("Ingrese todos los campos requeridos");
                }
            },

            deleteTask: function (index) {
                this.lista.splice(index, 1);
            },

            editar: function(index) {
                this.editInput = this.lista[index];
                console.log(this.editInput);
                this.lista.splice(index, 1);
            },

            }


        })        
  