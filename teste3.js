function letterFinder(word, match) {
    // Declara condition1
    var condition1 = typeof(word) === 'string' && word.length >= 2;

    // Declara condition2
    var condition2 = typeof(match) === 'string' && match.length === 1;

    // Verifica se ambas as condições são verdadeiras
    if (condition1 && condition2) {
        // Loop para encontrar correspondências
        for (var i = 0; i < word.length; i++) {
            if (word[i] === match) {
                console.log('Found the', match, 'at', i);
            } else {
                console.log('---No match found at', i);
            }
        }
    } else {
        // Mensagem de erro se os argumentos forem inválidos
        console.log("Please pass correct arguments to the function.");
    }
}

// Teste de falha: passar números
letterFinder(123, 456);

// Teste de aprovação: passar os argumentos corretos
letterFinder("cat", "c");

