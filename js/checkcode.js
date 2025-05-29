const params = new URLSearchParams(window.location.search); 
const email = params.get('email');

if (!email) {
  alert('E-mail inválido. Acesse o link enviado por e-mail.');
  window.location.href = '/recuperarSenha.html';
} else {
  document.getElementById('email').value = email;
}

document.getElementById('verifyForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const codigo = document.getElementById('codigo').value;
  const msgErro = document.getElementById('codigoErro');

  msgErro.style.display = 'none';

  if (!codigo.trim()) {
    msgErro.innerText = 'Digite o código de verificação';
    msgErro.style.display = 'block';
    return;
  }

  try {
    const res = await fetch('http://localhost:3000/verificar-codigo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, codigo })
    });

    const data = await res.json();

    if (data.ok) {
      sessionStorage.setItem('emailRecuperacao', email);
      sessionStorage.setItem('codigoRecuperacao', codigo);
      window.location.href = 'redefinirSenha.html';
    } else {
      msgErro.innerText = data.msg || 'Código inválido ou expirado';  // ★
      msgErro.style.display = 'block';                                // ★
    }
  } catch (err) {
    msgErro.innerText = 'Erro ao verificar código';           // ★
    msgErro.style.display = 'block';                          // ★
    console.error(err);
  }
});