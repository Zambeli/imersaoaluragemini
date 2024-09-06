function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    return (section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou um esporte</p>");
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";

  let titulo = "";

  let descricao = "";
  let tags = "";

  // Itera sobre cada elemento (dado) do array 'dados'
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Concatena HTML para criar um novo item de resultado
      resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
  }

  // Atribui a string com os resultados ao conteúdo HTML da seção
  section.innerHTML = resultados;
}
