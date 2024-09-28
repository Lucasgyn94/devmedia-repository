programa
{
	
	funcao inicio()
	{	
		real valor_emprestimo
		real valor_dos_juros
		real taxa_de_juros = 0.03 // 3%
		
		inteiro qtd_parcelas
		inteiro contador = 1

		escreva("Qual o valor do seu empréstimo? ")
		leia(valor_emprestimo)
		escreva("\n")
		
		escreva("Em quantas vezes você deseja pagar? Máximo de 6 prestações: ")
		leia(qtd_parcelas)
		escreva("\n")

		enquanto (contador <= qtd_parcelas) {

			inteiro numero_parcela = contador
			
			valor_dos_juros = (valor_emprestimo * taxa_de_juros * numero_parcela)
			escreva("A taxa de juros no período de " + numero_parcela + " mês(es) é de " +valor_dos_juros)
			contador = contador + 1
			escreva("\n")

			se (contador > 6) {
				pare
			}
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 693; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */