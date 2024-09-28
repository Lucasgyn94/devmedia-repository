programa
{
	
	funcao inicio()
	{
		real num1
		real num2
		caracter operador
		
		escreva("MINI CALCULADORA DE DOIS NÚMEROS\n\n")

		escreva("Digite o primeiro número: ")
		leia(num1)

		escreva("Digite o segundo número: ")
		leia(num2)

		escreva("\n")

		escreva("Selecione uma das operações: ")
		escreva("\n+ - Adição")
		escreva("\n- - Subtração")
		escreva("\n* - Multiplicação")
		escreva("\n/ - Divisão")
		escreva("\n\n")
		leia(operador)

		se(operador == '+') {
			escreva("\nVocê selecionou o operador " + operador + " de adição.\n\n")
			escreva(num1 + " + " + num2 + " = " + (num1 + num2))
		} senao se (operador == '-') {
			escreva("\nVocê selecionou o operador " + operador + " de subtração.\n\n")
			escreva(num1 + " - " + num2 + " = " + (num1 - num2))
		}senao se (operador == '*') {
			escreva("\nVocê selecionou o operador " + operador + " de multiplicação.\n\n")
			escreva(num1 + " * " + num2 + " = " + (num1 * num2))
		}senao se (operador == '/') {
			se (num2 != 0) {
				escreva("\nVocê selecionou o operador " + operador + " de divisao.\n\n")
				escreva(num1 + " / " + num2 + " = " + (num1 / num2))
			} senao {
				escreva("\nVocê selecionou o operador " + operador + " de divisao.\n\n")
				escreva("\nNão é possível dividir por 0 (zero)!")
			}
		} senao {
			escreva("\nOperador inválido!")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1214; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */