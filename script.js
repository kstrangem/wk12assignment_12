Vue.component('desks-component', {
  props:['name', 'style', 'length', 'id']
  template:`
    <div class="container">
    <tr>
      <td>{{name}}</td>
      <td>{{style}}</td>
      <td>{{length}}</td>
      <td>{{id}}</td>
    </tr>
    </div>`
});


var vm = new Vue ({
el:'#app'
data: {
	nameInput:"",
	styleInput:"",
	lengthInput:"",
	idInput:"",

	desks: [
		{
    name:'Acorn', 
    style: 'mini', 
    length: '25 inches', 
    id: 400
    },
  	{
    name:'Gemini', 
    style: 'leaning', 
    length: '75 inches', 
    id:500},
		{
    name:'Parsons', 
    style: 'standard', 
    length: '35 inches', 
    id:30
    },
		{
    name:'Audrey', 
    style: 'fixed', 
    length: '75 inches', 
    id:50
  }
 ]
},

methods: {
	deleteDesk: function (deskObject) {
	this.desks = this.desks.filter(function(desk){
	if(desks.id !== deskObject.id) {
	return true;
	} else {
	return false;
}
};

},
	addChair:function(){

	let newDesk = {
	name: this.nameInput,
	style: this.styleInput,
	length: this.lengthInput,
	id: this.idInput
   }
	this.desks.push(newDesk);
	this.nameInput=this.styleInput=this.lengthInput=this.idInput ="";
   }
   },

   function validateForm() {
  	var name = document.forms["myForm"]["name"].value;
  	var style = document.forms["myForm"]["style"].value;
  	var length = document.forms["myForm"]["length"].value;
  	var id = document.forms["myForm"]["id"].value;
  	if(this.nameInput ==="")
  	{ window.alert("form must be filled out");
  	   return false;}
  	if (this.styleInput==="")
  	{ window.alert("form must be filled out");
  	   return false;}
  	if(this.lengthInput==="")
  	{ alert("form must be filled out");
  	   return false;}
  	if(this.idInput==="")
  	{ alert("form must be filled out");
  	   return false;}
     }
   }
});
