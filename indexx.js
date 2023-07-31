function add(){
    let a=parseInt (document.getElementById ("n1").value)
    let b=parseInt (document.getElementById ("n2").value)
    let c=a+b
    document.getElementById("button1").innerHTML="Addition of given value is"+c;
}

function sub(){
    let a=parseInt (document.getElementById ("n1").value)
    let b=parseInt (document.getElementById ("n2").value)
    let c=a-b
    document.getElementById("button2").innerHTML="Subraction of given value is"+c;
}