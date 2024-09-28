programa
{
	
	funcao inicio()
	{
		inteiro contador = 1
		real media
		real nota
		real soma = 0.0
		inteiro qtd_notas = 0
		
		escreva("$$$ VERIFICADOR DE NOTAS ESCOLARES $$$")
		escreva("\n")
		
		faca {
			
			
			escreva("Digite a " + contador + "º nota: ")
			leia(nota)

			soma = soma + nota
			
			contador = contador + 1

			qtd_notas = qtd_notas + 1
			
		} enquanto (contador <= 4)
		
		media = soma / qtd_notas
		
		se (media >= 7) {
			escreva("\nMédia = " + media)
			escreva("\nVocê foi aprovado!")
		} senao {
			escreva("\nMédia = " + media)
			escreva("\nVocê não foi aprovado!")
		}
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 127; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */