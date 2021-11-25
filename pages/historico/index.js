$(document).ready(function () {
    verificaUsuarioAutenticado('/pages/historico/index.html');
    carregaDadosgrid(1)
});


function carregaDadosgrid(i = 1) {
    console.log('resrte')
    if (i < 10) {
        const url = "https://sos-help-desq.herokuapp.com/ticket/list";
        const body = {
            ticket: i

        };

        fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => {
            if (response.status !== 200) {

                throw new Error(response.status)
            }
            return response.json();
        }).then(retornoApi => {
            console.log(retornoApi)
            //essa vai conter tudo o que tem nas guias de RETORNO
            $("#tbody-history").append(`
        <tr>
            <td>${retornoApi[0].ticket}</td>
            <td>${retornoApi[0].num_func}</td>
            <td>${retornoApi[0].assunto == null ? 'NÃO INFORMADO' : retornoApi[0].assunto}</td>
            <td>${retornoApi[0].usuario}</td>
            <td>${retornoApi[0].prioridade == 1 ? 'BAIXO' : 'NÃO CLASSIFICADO'}</td>

          </tr>
            `);


            carregaDadosgrid(++i)

        }).catch(err => {
            //CASO DE ALGUM ERRO FAÇA ALGO
            // TIPO COLOCAR BORDA VERMELHA EM INPUT
            // BASTA ADICIONAR AQUI E BOA
        });
    }
}