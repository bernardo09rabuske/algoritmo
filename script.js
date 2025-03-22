

// let nome = "Bernardo";
// console.log("Meu nome e:" + nome)

// const sobrenome = "Rabuske"
// console.log("olá, meu nome é "+ " " + sobrenome)

// const number = 15

// console.log("Olá, meu primeiro nome é " + nome + " meu segundo nome é " + sobrenome + " e eu tenho " + number + " anos.")

// let numeroa = "12"
// let numerob = "20"
// let soma = 12 + 20
// // console.log("A soma de ${numeroa} + ${numerob} é: ${soma}")

// console.log("Comprei uma xícara por " + numeroa + " reais, e dois copos por " + numerob + " reais. No total,gastei " + soma + " reais" )

// let number1 = "55"
// let number2 = "35"
// let soma1 = 55 + 35 
// console.log("A soma do valor " + number1 + " somado com o valor " + number2 + " é igual a " + soma1 )

// let contador = 0
// console.log(contador)
// contador = contador +1
// console.log(contador)
// contador = contador+1
// console.log(contador)
// contador = contador+1
// console.log(contador)
// contador = contador+1
// console.log(contador)
// contador = contador+1
// console.log(contador)

// let anoAtual = "2025"
// let anoNascimento = "2009"
// let idadeAtual = "16"
// console.log("No ano " + anoAtual + " eu vou ter " + idadeAtual + " anos de idade ")

// let alturaRetangulo = "5"
// let larguraRetangulo = "7"
// let areaRetangulo = "35"
// console.log(" Um retângulo com largura " + larguraRetangulo + " cm e altura de " + alturaRetangulo + " cm possui " + areaRetangulo + "cm² de área total ")

// let diaAtual = "19"
// let mesAtual = "03"
// let anoAtual1 = "2025"
// let dataAtualFormatada = `${diaAtual}/${mesAtual}/${anoAtual}` 
// console.log("A data de hoje é " + dataAtualFormatada )

// let valorA = 48
// let valoeB = 33
// let aux = valorA
// console.log(valorA,"VALOR A INICIAL",valoeB,"Valor b inicial")
// valorA = valoeB
// valoeB = aux

// console.log(valorA,"VALOR A invertido",valoeB,"Valor b invertido")

// let numero1 = parseInt(prompt("Digite o primeiro número da multiplicação"))
// let numero2 = parseInt(prompt("Digite o segundo número da multiplicação"))
// let mult = numero1 * numero2
// alert("Resultado da multiplicação : " + mult)

// let numero3 = parseInt(prompt("Digite o primeiro número da expressão"))
// let numero4 = parseInt(prompt("Digite o segundo número da expressão"))
// let exp = numero3 * numero3 *( numero4 * numero4 )
// alert("Resultado da expressão é : " + exp)









    
     let  operador = prompt(`Digite uma opção:
     1 - soma, 
     2 - subtração, 
     3 - multiplicação, 
     4 - divisão`)

     if(operador != "1" && operador != "2" && operador != "3" && operador != "4"){
        alert("Operação inválida")
     }else if(operador == "1"){
            let n1 = parseInt(prompt("Digite o primeiro número"))
            let n2 = parseInt(prompt("digite o segundo número"))

            let soma = n1 + n2
            alert("A soma dos numeros é: " + soma)

     }else if(operador== "2"){
            let n1 = parseInt(prompt("Digite o primeiro número"))
            let n2 = parseInt(prompt("Digite o segundo número"))

            let soma1 = n1 - n2
                alert("A subtração dos números é:" + soma1)
                if(isNaN(n1) || isNaN(n2)){
                    alert("Digite um numero válido")}
            
        }else if(operador=="3"){
            let n1 = parseInt(prompt("Digite o primeiro número"))
            let n2 = parseInt(prompt("Digite o sugundo número"))

            let soma2 = n1 * n2
            alert("A multiplicação dos números é:" + soma2)
            if(isNaN(n1) || isNaN(n2)){
                alert("Digite um numero válido")
            }

        }else if(operador=="4"){
            let n1 = parseInt(prompt("Digite o primeiro número"))
            let n2 = parseInt(prompt("Digite o segundo número"))

            let soma3 = n1 / n2
            alert("A divisão dos números é:" + soma3)
            if(isNaN(n1) || isNaN(n2)){
                alert("Digite um numero válido")
         }
        }
     
    
    
    

























// const a = parseInt("0")
// console.log(isNaN(a))
// if(typeof a ==="number"){
//     console.log("if")
// }else{
//     console.log("else")
// }
