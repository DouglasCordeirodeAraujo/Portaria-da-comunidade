document.getElementById('formlogin')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    email: e.target.email.value,
    senha: e.target.senha.value
  };

  try {
    const res = await fetch('http://localhost:3000/api/usuarios/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data)
    });

    const result = await res.json();
    if (res.ok) {
      alert('Login feito com sucesso!');
      // redirecionar se quiser
    } else {
      alert(result.error || 'Erro no login');
    }
  } catch (err) {
    alert('Erro na comunicação com o servidor.');
    console.error(err);
  }
});