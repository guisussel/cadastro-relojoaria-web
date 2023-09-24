document.addEventListener('DOMContentLoaded', function () {
    const atmForm = document.getElementById('atmForm');
    const resultadoDiv = document.getElementById('resultado');

    atmForm.addEventListener('submit', function (event) {
        event.preventDefault();

        let saque = parseInt(document.getElementById('saque').value);
        if (isNaN(saque)) {
            resultadoDiv.innerHTML = 'Por favor, insira um valor válido.';
            return;
        }

        if (saque < 10 || saque > 600) {
            resultadoDiv.innerHTML = 'O valor do saque deve estar entre 10 e 600 reais.';
            return;
        }

        const notasDisponiveis = [100, 50, 20, 10, 5, 2];
        let resultado = '';

        for (let i = 0; i < notasDisponiveis.length; i++) {
            const nota = notasDisponiveis[i];
            const quantidadeNotas = Math.floor(saque / nota);

            if (quantidadeNotas > 0) {
                resultado += `${quantidadeNotas} nota(s) de ${nota} reais<br>`;
                saque = saque % nota;
            }
        }

        resultadoDiv.innerHTML = resultado;
    });
});
