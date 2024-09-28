programa
{
	
	funcao inicio()
	{
		inteiro numero
		inteiro resultado
		escreva("$$$ TABUADA $$$\n")
		escreva("Digite um número entre 1 e 10 para ver a sua tabuada de multiplicação: ")
		leia(numero)
		
		para(inteiro contador = 1; contador <= 10; contador++) {
			resultado = numero * contador
			escreva(numero + " * " + contador + " = " + resultado)
			escreva("\n")
			
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 103; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */