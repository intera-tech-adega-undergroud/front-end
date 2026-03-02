export function validarEmail(email) {
  return email.includes("@") && email.includes(".");
}

export function validarSenha(senha) {

  //  (^ - negação) (a-z - minúsculas) - (A-Z maiúsculas) - (0-9 - números)  e o .test verifica se a variável senha tem algum desses simbolos e retorna true ou false

  const temEspecial = /[^a-zA-Z0-9]/.test(senha);
  const tamanhoCerto = false
  const validacaoOk = false

  
  if (senha.length >= 8) {
    tamanhoCerto = true
  }

  if(tamanhoCerto == true && temEspecial == true) {
    validacaoOk = true
  }
  return validacaoOk;
}