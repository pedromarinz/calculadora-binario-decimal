//Seleção de elementos do HTML
const inputBinario = document.getElementById('eBinaria')
const botaoConverter = document.getElementById('btConverter')
const resultadoTexto = document.getElementById('resultadoDecimal')

botaoConverter.addEventListener('click', () => {
  const valorInserido = inputBinario.value
  let decimal = 0
  let potencia = 0

  // Validação: O campo tem que conter algo
  if (valorInserido === '') {
    resultadoTexto.innerHTML = 'Por favor, digite um número.'
    return
  }

  // Loop
  for (let i = valorInserido.length - 1; i >= 0; i--) {
    let digito = valorInserido[i]

    // Validação: Apenas 0 ou 1
    if (digito !== '0' && digito !== '1') {
      resultadoTexto.innerHTML = 'Erro: Insira apenas 0 ou 1.'
      return
    }

    // Calculo
    decimal += Number(digito) * Math.pow(2, potencia)
    potencia++
  }

  // Resultado
  resultadoTexto.innerHTML = `Decimal: ${decimal}`
})
