programa
{
	
	funcao inicio()
	{
		inteiro opcao = 0
		real celsius
		real fahrenheit

		real milhas
		real km
		
		faca {
			escreva("### CALCULADORA DE CONVERSÕES ###\n")
			
			escreva("Escolha uma opção: ")
			escreva("\n1 - Celsius para Fahrenheit")
			escreva("\n2 - Quilômetros para Milhas")
			escreva("\n3 - Sair")
			escreva("\n\n ==> ")
			leia(opcao)
			
			escolha(opcao) {
				caso 1:
					escreva("Digite a temperatura em Celsius para conversão: \n")
					leia(celsius)
					
					fahrenheit = (celsius * 1.8) + 32

					escreva("\n" 	+ celsius + "º graus Celsius equivale à " 
								+ fahrenheit + "º graus Fahrenheit" + "\n\n" )
					pare

				caso 2:
					escreva("Digite a temperatura em KM para converter para Milhas: \n")
					leia(km)

					milhas = km / 1.609

					escreva("\n " + km + "km equivalem à " + milhas + " milhas.\n\n")
					pare
				caso contrario:
					escreva("\nDigite uma opção entre 1 e 3!\n\n")
					pare
					
			}
		} enquanto (opcao != 3)
		

		 /*1 milha = 1.609km*/
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 871; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */