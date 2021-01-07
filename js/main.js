var dados = [
    {
        nome: 'carro',
        valor: 100
    },{
        nome: 'carro',
        valor: 100
    },{
        nome: 'carro',
        valor: 100
    },{
        nome: 'carro',
        valor: 100
    },{
        nome: 'carro',
        valor: 100
    },{
        nome: 'carro',
        valor: 100
    },{
        nome: 'carro',
        valor: 100
    },{
        nome: 'carro',
        valor: 100
    },{
        nome: 'carro',
        valor: 100
    },{
        nome: 'carro',
        valor: 100
    },{
        nome: 'carro',
        valor: 100
    },
]

function tabela(){
    let element = document.getElementById("corpo");
    let html;
    html="<table><tr><th>"+Object.keys(dados[0]).join("</th><th>")+"</th></tr>";
    //(Object.keys(dados[0]);

    for (let i=0; i<dados.length; i++){
        html+="<tr>"
        for(const prop in dados[i]){
            html+="<td>"+dados[i].nome +"</td><td>"+dados[i].valor+"</td></tr>";
            break;
        }
        html+="</tr>"
    }
    html+="</table>";
    element.innerHTML=html;
}
