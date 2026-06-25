console.log("1. Criando inventário...");
let inventario = ["Espada" , "Escudo", "Poção de Vida"];

console.log(`2. Segundo item: ${inventario[1]}`);

console.log("3. Adicionando elemento...");
inventario.push("Arco e Flecha");

console.log("4. Removendo elemento...");
inventario.pop();

console.log("5. Mais adições e Remoções...")
inventario.unshift("Mapa");

console.log("6. Buscando itens:");
if (inventario.includes("Poção de Vida")) {
    console.log("'Poção de Vida' encontrada!");
} else {
    console.log("Poção de Vida não encontrada!");
}

console.log("Exercício 7: Itens do inventário");
for (let i = 0; i < inventario.length; i++) {
     console.log(`. ${inventario[i]}.`);
}

console.log("8. Criando personagem...");
let personagem = {
    nome: "jhoeou",
    nível: 5,
    classe: "Guerreiro"
}

console.log("9. Manipulando dados...");
personagem.nível++;

console.log("10. Notação de colchetes:");
console.log(`Nome: ${personagem['nome']}`);
console.log(`Classe: ${personagem['classe']}`);

console.log("11. Adicionando Propriedades Dinâmicas...");
personagem.status_vivo = true;
delete personagem.classe;

console.log("13. Criando Objetos com Arrays...");
personagem.habilidades = ["Corte Rápido", "Defesa de Ferro", "Grito de Guerra"];

console.log("14. Criando novos inimigos...");
let inimigos = [
    antagonista = {
        nome: "marctor",
        nível: 4
    },
    capanga = {
        nome: "kakae",
        nível: 3
    }
]

console.log("15. Convertendo para JSON...")
let json = JSON.stringify(personagem);
console.log(json);

console.log("16. Lendo de um JSON:");
let personagemSalvo = JSON.parse(json);
console.log(`. A primeira habilidade é ${personagemSalvo.habilidades[0]}`);
