programa
{
	
	funcao inicio()
	{
		cadeia login
		cadeia senha
		inteiro tentativas_restantes = 3

		faca {
			escreva("Digite seu login: ")
			leia(login)

			escreva("Digite sua senha: ")
			leia(senha)

			se (login == "admin" e senha == "123456") {
				escreva("\nVocê está logado!")
				pare
			} senao {
				tentativas_restantes = tentativas_restantes - 1
				se (tentativas_restantes == 0) {
					escreva("\nNúmero de tentativas foi excedido!")
					escreva("\nConta bloqueada!")
				} senao {
					escreva("\nVocê tem " + tentativas_restantes + " tentativas restantes!\n\n")
				}
			}
		} enquanto (tentativas_restantes > 0)
	}
}


/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 647; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */