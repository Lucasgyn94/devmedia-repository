programa
{
	
	funcao inicio()
	{
		real valor
		real porcentagem_desconto
		real desconto
		real valor_final
		
		escreva("Informe o valor da compra: ")
		leia(valor)

		escreva("Informe a porcentagem: ")
		leia(porcentagem_desconto)
		
		desconto = (valor * porcentagem_desconto) / 100
		valor_final = valor - desconto
		
		escreva(	"\n\nValor total com " + porcentagem_desconto +
				"% de desconto é de R$" + valor_final)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 393; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */