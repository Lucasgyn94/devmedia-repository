programa
{
	
	funcao inicio()
	{
		real celsius
		real fahrenheit
		real resultado_celsius
		real resultado_fahrenheit
		
		// Convertendo para Fahrenheit
		escreva("Digite o valor da temperatura em ºC para converter para ºF: ")
		leia(celsius)

		resultado_celsius = celsius * 1.8 + 32

		escreva(celsius+"º Celsius equivale à " + resultado_celsius + "º Fahrenheit.\n\n")

		// convertendo para Celsius
		escreva("Digite o valor da temperatura em ªF para converter para ºC: ")
		leia(fahrenheit)

		resultado_fahrenheit = (fahrenheit - 32) / 1.8

		escreva(fahrenheit + "º Fahrenheit equivale à " + resultado_fahrenheit+"º Celsius.")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 375; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */