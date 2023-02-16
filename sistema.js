function sistema() {
    let agora = new Date();
    let saida = document.getElementById('dados');
    let diaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    let mesesdoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    let dia = agora.getDate();
    let diaDaSemana = diaSemana[agora.getDay()]; // Puxar o arrey para a o dia da semana
    let mes = mesesdoAno[agora.getMonth()];
    let ano = agora.getFullYear();
    let hora = agora.getHours();
    let minuto = agora.getMinutes();
    let segundos = agora.getSeconds();
    saida.innerHTML = `<p> O que recebi do sistema foi: <br>
      Dia: ${dia} (${diaDaSemana}) <br>
      Mês: ${mes} <br>
      Ano: ${ano} <br>
      Hora: ${hora} <br>
      Minuto: ${minuto} <br>
      Segundos: ${segundos}</p>`;
  }