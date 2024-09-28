programa
{

	
	funcao inicio()
	{
		real numero1
		real numero2
		caracter opcao
		
		escreva("MINI CALCULADORA DE DOIS NÚMEROS\n\n")

		escreva("Digite o primeiro número: ")
		leia(numero1)

		escreva("Digite o segundo número: ")
		leia(numero2)

		escreva("\nEscolha a operação que deseja efetuar: ")
		escreva("\n + - Soma")
		escreva("\n - - Subtracao")
		escreva("\n * - Multiplicacao")
		escreva("\n / - Divisao\n\n")
		leia(opcao)

		se(opcao == '+') {
			escreva("\nVocê escolheu a operação: "+ opcao + " (Somar)\n\n")
			escreva(numero1 + " + " + numero2 + " = " + (numero1 + numero2) )
		} senao se (opcao == '-') {
			escreva("\nVocê escolheu a operação: "+ opcao + " (Subtração)\n")
			escreva(numero1 + " - " + numero2 + " = " + (numero1 - numero2) )
		} senao se (opcao == '*') {
			escreva("\nVocê escolheu a operação: "+ opcao + " (Multiplicação)\n")
			escreva(numero1 + " * " + numero2 + " = " + (numero1 * numero2) )
		} senao {
			escreva("\nVocê escolheu a operação: "+ opcao + " (Divisão)\n")
			se (numero2 == 0) {
				escreva("O divisor deve ser maior que 0!")
			} senao {
					escreva(numero1 + " / " + numero2 + " = " + (numero1 / numero2) )	
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 798; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */