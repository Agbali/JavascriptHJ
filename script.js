var opr = prompt("Operation to perform? ( + - * /): ")
var num1 = parseFloat(prompt("Enter number 1: "))
var num2 = parseFloat(prompt("Enter number 2: "))

if(opr == "+")
{
    console.log(num1 + num2)
} else if(opr == "-")
{
    console.log(num1 - num2)
} else if(opr == "*")
{
    console.log(num1 * num2)
} else if(opr == "/")
{
    console.log(num1 / num2)
}