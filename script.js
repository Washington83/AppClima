const botao = document.querySelector("#buscar")
botao.addEventListener("click", buscarClima)

async function buscarClima(){
   const cidade = document.querySelector("#cidade").value;
   const chave = "dbc6a5cb187a5a7bda5addffc570667e";
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&units=metric&lang=pt_br`;
   const resposta = await fetch(url);
   const dados = await resposta.json();

    if(dados.cod !== 200){
      alert("Erro: " + dados.message);
      return;
    }
 
    mostrarClima(dados);
}

function mostrarClima(dados){
  document.querySelector("#nomeCidade").textContent = dados.name;

  document.querySelector("#temperatura").textContent = "Temperatura: " + dados.main.temp + "°C"

  document.querySelector("#descricao").textContent = "Clima: " + dados.weather[0].description
 
  document.querySelector("#umidade").textContent = "Umidade: " + dados.main.humidity + "%"
}