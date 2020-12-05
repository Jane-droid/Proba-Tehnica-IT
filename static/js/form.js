function functionTakeInput(){

    var titlu=document.getElementById("titlu").value;
    var materie=document.getElementById("sel1_top").value;
    var lista_add=document.getElementById("lista-add");
    if(titlu!="" && materie!="Alege materia"){
        $("#lista-add").append("<li class='item_name_desc'><div class='tetris'>"+titlu+"</div><div class='description'>"+materie+"</div></li>");
    }

}