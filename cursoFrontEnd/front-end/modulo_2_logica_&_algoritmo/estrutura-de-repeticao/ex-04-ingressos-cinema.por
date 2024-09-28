programa
{
	
	funcao inicio()
	{
		inteiro cadeiras_disponiveis = 20
		inteiro ingressos = 0

		escreva("$$$ INGRESSOS DE CINEMA $$$\n")
		escreva("Cadeiras disponíveis: " + cadeiras_disponiveis + "\n\n")

		enquanto (cadeiras_disponiveis > 0) {
			escreva("Quantos ingressos deseja comprar? ")
			leia(ingressos)

			se (ingressos > cadeiras_disponiveis) {
				escreva("\n\n Você tentou comprar " + ingressos + "\n")
				escreva("\n\nCadeiras disponíveis: " + cadeiras_disponiveis)
			} senao {
				cadeiras_disponiveis = cadeiras_disponiveis - ingressos
				escreva("Você comprou " + ingressos + " ingressos!")

				se (cadeiras_disponiveis == 0) {
					escreva("\n\nNão há mais cadeiras disponíveis!")
					pare
				} senao {
					escreva("\n\nCadeiras disponíveis: " + cadeiras_disponiveis + "\n\n")
				}
			}
		}
	}
}


/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 832; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */