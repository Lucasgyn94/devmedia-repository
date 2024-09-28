programa
{
	
	funcao inicio()
	{
		inteiro dividendo
		inteiro divisor
		
		escreva("CALCULADORA DE DIVISÃO\n")
		
		escreva("Digite o primeiro número(dividendo): ")
		leia(dividendo)

		escreva("Digite o segundo número(divisor): ")
		leia(divisor)

		escreva("\n")

		se(divisor != 0) {
			escreva(dividendo + " / " + divisor + " = " + (dividendo / divisor))	
		} senao {
			escreva("Não é possível divisão por 0 (zero)!")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 436; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */