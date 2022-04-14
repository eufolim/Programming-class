/* water-limits.js */
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
  }
  const pCongelCelsius = 0;
  const pEbulicaoCelsius = 100;
  const pCongelFahrenheit = celsiusToFahrenheit(pCongelCelsius);
  const pEbulicaoFahrenheit = celsiusToFahrenheit(pEbulicaoCelsius);
  console.log(`O ponto de congelamento da água em Fahrenheit é: $
  {pCongelFahrenheit}`);
  console.log(`O ponto de ebulição da água em Fahrenheit é: $
  {pEbulicaoFahrenheit}`);