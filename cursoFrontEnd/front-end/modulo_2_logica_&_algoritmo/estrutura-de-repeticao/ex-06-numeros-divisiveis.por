programa
{
	
	funcao inicio()
	{
		inteiro numero

		escreva("### DIVISÍVEIS ### \n\n")

		escreva("Informe um número: ")
		leia(numero)

		escreva("\n")

		para (inteiro contador = 1; contador <= numero; contador++) {
			se (numero % contador == 0) {
				escreva(numero + " é divisível por " + contador + "\n")
			}
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 333; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {numero, 6, 10, 6}-{contador, 15, 16, 8};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */