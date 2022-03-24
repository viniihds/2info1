
function delta(valorA, valorB, valorC){
    return valorB**2 - (4*valorA*valorC)
    
}
    
function x1(delta, valorA, valorB){
    return (-valorB + Math.sqrt(delta))/2*valorA
}
function x2(delta, valorA, valorB){
    return (-valorB - Math.sqrt(delta))/2*valorA
}
function handleBtBhaskara(){
    const vA = parseInt(document.getElementById("valorA").value)
    const vB = parseInt(document.getElementById("valorB").value)
    const vC = parseInt(document.getElementById("valorC").value)
    const vdelta = delta(vA, vB, vC)
    if (vdelta < 0){
        alert("Se Delta for negativo não existe raiz")
    }

    document.getElementById("resultado1").innerHTML = x1(vdelta, vA, vB)
    document.getElementById("resultado2").innerHTML = x2(vdelta, vA, vB)
    
}

    document.getElementById("btBhaskara").addEventListener("click", handleBtBhaskara)

function handleBtLimpar(){
    document.getElementById("valorA").value = ''
    document.getElementById("valorB").value = ''
    document.getElementById("valorC").value = ''

    document.getElementById("resultado1").innerHTML ="x1"
    document.getElementById("resultado2").innerHTML ="x2"
    document.getElementsByClassName("number").value = 0

}
    document.getElementById("btLimpar").addEventListener("click", handleBtLimpar)
