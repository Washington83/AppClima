const apiKey = "SUA_API_KEY";

async function buscarClima() {
  const cidade = document.querySelector("#cidade").value;
  const container = document.querySelector("#resultado");

  if (cidade === "") {
    container.innerHTML = "<p>Digite uma cidade.</p>";
    return;
  }

  try {
    const dados = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
    );

 
    if (!dados.ok) {
      throw new Error("Cidade não encontrada");
    }

    const resposta = await dados.json();
    
    container.innerHTML = `
      <div class="card-clima">
        <h2>${resposta.name}</h2>
        <p>🌡️ Temperatura: ${Math.round(resposta.main.temp)}°C</p>
        <p>☁️ Clima: ${resposta.weather[0].description}</p>
        <p>💧 Umidade: ${resposta.main.humidity}%</p>
      </div>
    `;

  } catch (erro) {
     container.innerHTML = `
      <p style="color:white;">Erro: cidade não encontrada.</p>
    `;
  }
}
