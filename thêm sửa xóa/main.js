// 
var data = [];
// check
function checkID(id) {
    var list = this.data;
    for(var i=0;i<list.length;i++) {
        if(list[i].id == id){
            return true;
        }
}
    }
        
// Add 

function addData() {
   var id = document.getElementById('id').value;
   var name = document.getElementById('name').value;
   var email = document.getElementById('email').value;
   var phone = document.getElementById('phone').value;

   var item = {
       id : id,
       name : name,
       email : email,
       phone : phone
   };
   if(!checkID(id)){
    this.data.push(item);
    
   }
   else {
       alert('Ma id da bi trung');
   }
   
}
// view 
function viewData() {
    var list = this.data;
    var table = '<table border="1" cellpadding="5"><thead><tr><th>id</th><th>Name</th><th>Email</th><th>Phone</th><th>Action</th></tr>';

    for(var i =0;i<list.length;i++) {
      table += '<tr>';
      table += '<td>'+list[i].id+'</td>'  
      table += '<td>'+list[i].name+'</td>'  
      table += '<td>'+list[i].email+'</td>'  
      table += '<td>'+list[i].phone+'</td>'  
      table += '<td><button onclick="deletePerson('+ list[i].id +')">Delete</button></td>'
      table += '</tr>';
    }
    table += '   </thead></table>';
    document.getElementById('database').innerHTML = table;
}
viewData();
// xoas 

function deletePerson(id){
    var list = this.data;
    for(var i=0;i<list.length;i++) {
        if(list[i].id == id){
          // xoas 
          list.splice(i, 1);
          viewData();
        }
}
}

