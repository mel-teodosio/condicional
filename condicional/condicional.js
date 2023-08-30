function fon(){
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;
    var result = (parseInt(val1) + parseInt(val2)) / 2;

    if(result >= 6)
    if(result==10)
     alert("O aluno atingiu a media" + result + "e foi aprovado com sucesso!" );
    else
     alert("Parabéns, aprovado! Media" = result);
    else
     alert("Volta ano que vem");
} 
function comparar(){
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;
    if(val1==val2)
    if(val1 > val2)
     alert("os valores são iguais");
     else 
     alert("valor 1 é maior");
     else
     alert("valor 2 é maior");

}