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
        .eq("ativo", true);
    
    console.log("Erro:", error);
    console.log("Dados:", data);
    
    if (error) {
        console.error(error);
        mensagem.textContent = error.message;
        return;
    }
    
    if (!data || data.length === 0) {
        mensagem.textContent = "Usuário não encontrado.";
        return;
    }

  localStorage.setItem("usuarioEstoque", JSON.stringify(data));

  window.location.href = "admin.html";
}
