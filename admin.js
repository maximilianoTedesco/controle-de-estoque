const usuario = JSON.parse(localStorage.getItem("usuarioEstoque"));

if (!usuario) {
  window.location.href = "index.html";
}

document.getElementById("usuarioLogado").textContent =
  `${usuario.nome} | Perfil: ${usuario.perfil}`;

function abrirPagina(pagina) {
  window.location.href = pagina;
}

function sair() {
  localStorage.removeItem("usuarioEstoque");
  window.location.href = "index.html";
}
