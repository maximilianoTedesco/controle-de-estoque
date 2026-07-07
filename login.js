async function login() {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const mensagem = document.getElementById("mensagem");

  mensagem.textContent = "";

  if (!email || !senha) {
    mensagem.textContent = "Informe email e senha.";
    return;
  }

  const { data, error } = await supabaseClient
    .from("usuarios")
    .select("*")
    .eq("email", email)
    .eq("senha", senha)
    .eq("ativo", true)
    .single();

  if (error || !data) {
    mensagem.textContent = "Email ou senha inválidos.";
    return;
  }

  localStorage.setItem("usuarioEstoque", JSON.stringify(data));

  window.location.href = "admin.html";
}
