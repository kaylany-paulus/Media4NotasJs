let nota1 = parseFloat(prompt("Primeira nota: ") || 0);
let nota2 = parseFloat(prompt("Segunda nota: ") || 0);
let nota3 = parseFloat(prompt("Terceira nota: ") || 0);
let nota4 = parseFloat(prompt("Quarta nota: ") || 0);

if (
    nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0 ||
    nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10
) {
    alert("Digite somente números entre 0 e 10.");
} else {
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    let resultado;
    if (media < 5) {
        resultado = "Reprovado";
    } else if (media > 6) {
        resultado = "Aprovado";
    } else {
        resultado = "Em recuperação."
    }

    const msg = `Você ficou com média ${media.toFixed(1)}. Resultado: ${resultado}`;
    alert(msg);
}