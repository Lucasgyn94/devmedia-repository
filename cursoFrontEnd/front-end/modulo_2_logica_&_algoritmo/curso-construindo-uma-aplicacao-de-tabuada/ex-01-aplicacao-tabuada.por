programa
{
	
	funcao inicio()
	{
		inteiro numero = 0
		inteiro contador = 1
		inteiro resultado = 0
		
		escreva("### TABUADA ###\n\n")
		
		escreva("Digite um número para ver a sua tabuada de multiplicação: ")
		leia(numero)
		escreva("\n\n")
		enquanto(contador <= 10) {
			resultado = contador * numero
			escreva(numero + " * " + contador + " = " + resultado)
			contador = contador + 1
			escreva("\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 329; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */