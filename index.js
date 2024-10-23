import express from 'express';

const host = "localhost";
const port = 3000;
const app = express();

function geraBrenorTabelaTabuada(tabuada, sequencia) {
    let resultado = `<h1>Tabuada do ${tabuada}</h1>`;
    resultado += '<ul>';

    for (let i = 0; i <= sequencia; i++) {
        resultado += `<li>${tabuada} x ${i} = ${tabuada * i}</li>`;
    }

    resultado += '</ul>';
    return resultado;
}

app.get("/breno", (requisicao, resposta) => {
    const tabuada = parseInt(requisicao.query.tabuada) || 1;
    const sequencia = parseInt(requisicao.query.sequencia) || 10;
    const paginaHTML = `
        <html>
        <head>
            <title>Tabuada de ${tabuada}</title>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 20px; }
                h1 { color: #333; }
                ul { list-style-type: none; padding: 0; }
                li { padding: 5px; font-size: 18px; }
            </style>
        </head>
        <body>
            ${geraBrenorTabelaTabuada(tabuada, sequencia)}
        </body>
        </html>
    `;

    resposta.send(paginaHTML);
});

app.listen(port, host, () => {
    console.log("Servidor em execução em http://" + host + ":" + port + "/breno");
});
