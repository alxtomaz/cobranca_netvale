class Atendimento {

    constructor() {
        this.id = 1;
        this.arrayAtendimentos = [];
        this.editId = null;
    }
    // função que ativa todas as outras funcoes 
    adicionar() {
       let atendimento = this.lerDados();

       if(this.editId == null) {
        this.Salvar(atendimento);
        }else { this.atualizar(this.editId, atendimento);
        }

        this.Listar(this.arrayAtendimentos);
        this.Total(this.arrayAtendimentos);       
        this.cancelar()
    }

    // função que faz a leitura dos valores ditados nos imput
    lerDados() {
        let atendimento = {}

        atendimento.id = this.id;
        atendimento.idCliente = document.getElementById('idcliente').value;
        atendimento.nomecliente = document.getElementById('nome').value;
        atendimento.idAtendimento = document.getElementById('idatend').value;
        atendimento.dataAtendimento = document.getElementById('dataAtend').value;
        atendimento.statusAtendimento = document.getElementById('status').value;
        atendimento.pagamentoCliente = document.getElementById('pagamento').value;
        atendimento.valorReal = document.getElementById('valorReal').value;
        atendimento.valorRen = document.getElementById('valorRen').value;
        atendimento.valorDesconto = (atendimento.valorReal-atendimento.valorRen);
        atendimento.dataVencimento = document.getElementById('dateVenc').value;
        atendimento.observacoes = document.getElementById('obs').value;

        return atendimento;
    }

    //função que evia os dados para o array
    Salvar(atendimento) {
        this.arrayAtendimentos.push(atendimento);
        this.id++;
    }
    atualizar(id, atendimento) {
        for (let i = 0; i < this.arrayAtendimentos.length; i++) {
            if (this.arrayAtendimentos[i].id == id) {
                this.arrayAtendimentos[i].idCliente = atendimento.idCliente
                this.arrayAtendimentos[i].nomecliente = atendimento.nomecliente
                this.arrayAtendimentos[i].idAtendimento = atendimento.idAtendimento
                this.arrayAtendimentos[i].dataAtendimento = atendimento.dataAtendimento
                this.arrayAtendimentos[i].statusAtendimento = atendimento.statusAtendimento
                this.arrayAtendimentos[i].pagamentoCliente = atendimento.pagamentoCliente
                this.arrayAtendimentos[i].valorReal = atendimento.valorReal
                this.arrayAtendimentos[i].valorRen = atendimento.valorRen
                this.arrayAtendimentos[i].valorDesconto = atendimento.valorDesconto
                this.arrayAtendimentos[i].dataVencimento = atendimento.dataVencimento
                this.arrayAtendimentos[i].observacoes = atendimento.observacoes                
            }
        }
    }

    Total(arrayAtendimentos) {
        let totalReal = 0;
        let totalRen = 0;
        let totalDesconto = 0;
        for (let i = 0; i < arrayAtendimentos.length; i++) {

            let valor1 = parseFloat(arrayAtendimentos[i]["valorReal"]);
            let valor2 = parseFloat(arrayAtendimentos[i]["valorRen"]);
            let valor3 = parseFloat(arrayAtendimentos[i]["valorDesconto"]);

            totalReal += valor1
            totalRen += valor2
            totalDesconto += valor3

          }   
          document.getElementById('total1').innerHTML = `${"R$ " + totalReal}`;
          document.getElementById('total2').innerHTML = `${"R$ " + totalRen}`;
          document.getElementById('total3').innerHTML = `${"R$ " + totalDesconto}`;   
        }
    // cancelar itens escritos na pagina e quando adicionar um objeto
    cancelar() {

        document.getElementById('idcliente').value = "";
        document.getElementById('nome').value = "";
        document.getElementById('idatend').value = "";
        document.getElementById('dataAtend').value = "";
        document.getElementById('status').value = "";
        document.getElementById('pagamento').value = "";
        document.getElementById('valorReal').value = "";
        document.getElementById('valorRen').value = "";
        document.getElementById('dateVenc').value = "";
        document.getElementById('obs').value = "";

        document.getElementById('btn1').innerText = "Adicionar";
        this.editId = null;
    }
    // Função deletar objetos de array de array
    deletar(id) {
        if(confirm('Deseja realmente deletar este atendimento ' + id)) { 
            let tbody = document.getElementsByClassName('tbody');

                for (let i = 0; i < this.arrayAtendimentos.length; i++) {
                    if(this.arrayAtendimentos[i].id == id) {
                        this.arrayAtendimentos.splice(i,1);
                        // função for para exlcuir as linhas das tabelas correndo todo o html, e vendo o que tem tbody
                        for (let j = 0; j < tbody.length; j++) {
                            let tbodys = tbody[j];
                            tbodys.deleteRow(i);
                            this.Total(this.arrayAtendimentos);
                        }                            
                    }
                }   
        }
    }

    // Função listar produtos na tabela 
    Listar() {

        let tbody = document.getElementsByClassName('tbody');
        let dataAtual = new Date();
        dataAtual.setHours(0, 0, 0, 0);
        // console.log(dataAtual)
        

        for (let j = 0; j < tbody.length; j++) {
            
            let tbodys = tbody[j];
            tbodys.innerText = "";           

            for (let i = 0; i < this.arrayAtendimentos.length; i++) {
            // criar linhas no tbody toda vez que o loop rodar
            let tr = tbodys.insertRow();

            // inserire celular no tbody (coluna)
            // td - coluna 
            // tr - linha
            let td_id = tr.insertCell(); 
            let td_idCliente = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_idAtend = tr.insertCell();
            let td_dataAtendimento = tr.insertCell();
            let td_statusAtendimento = tr.insertCell();
            let td_pagamento = tr.insertCell();
            let td_valorReal = tr.insertCell();
            let td_valorRen = tr.insertCell();
            let td_ValorDesconto = tr.insertCell();
            let td_dataVencimento = tr.insertCell();
            let td_situacao = tr.insertCell();
            let td_acoes = tr.insertCell();


             // inseri as informações nas celulas
            td_id.innerText = this.arrayAtendimentos[i].id;
            td_idCliente.innerText = this.arrayAtendimentos[i].idCliente;
            td_nome.innerText = this.arrayAtendimentos[i].nomecliente;
            td_idAtend.innerText = this.arrayAtendimentos[i].idAtendimento;
            td_dataAtendimento.innerText = this.arrayAtendimentos[i].dataAtendimento;
            td_statusAtendimento.innerText = this.arrayAtendimentos[i].statusAtendimento;
            td_pagamento.innerText = this.arrayAtendimentos[i].pagamentoCliente;
            td_valorReal.innerText = this.arrayAtendimentos[i].valorReal;
            td_valorRen.innerText = this.arrayAtendimentos[i].valorRen;
            td_ValorDesconto.innerText = this.arrayAtendimentos[i].valorDesconto;
            td_dataVencimento.innerText = this.arrayAtendimentos[i].dataVencimento;

            if(new Date(this.arrayAtendimentos[i].dataVencimento) > dataAtual) 
                {td_situacao.innerText = "A vencer"} 
            else
                {td_situacao.innerText = "Vencido"};

            // vencimento.setHours(0, 0, 0, 0);
            // td_obs.innerText = this.arrayAtendimentos[i].observacoes; em processo ainda!!!!!!!

            td_id.classList.add('center');
            
            if (new Date(this.arrayAtendimentos[i].dataVencimento) > dataAtual) {
                td_situacao.classList.add('avencer');
            } if (new Date(this.arrayAtendimentos[i].dataVencimento) < dataAtual) {
                td_situacao.classList.add('vencido');
            }           
                           

            // criando o elemento imagem 
            let imgEdit = document.createElement('img');
            //declaram o caminho pra achar a imagem
            imgEdit.src ='img/edit.svg';
            imgEdit.setAttribute("onclick", "atendimento.editacao("+ JSON.stringify(this.arrayAtendimentos[i]) +")");
            //inserindo na celula ações
            td_acoes.appendChild(imgEdit);
            // criando o elemento imagem 
            let imgDelete = document.createElement('img');
            //declaram o caminho pra achar a imagem
            imgDelete.src = 'img/lixeira.svg'
            imgDelete.setAttribute("onclick", "atendimento.deletar("+ this.arrayAtendimentos[i].id +")");
            //inserindo na celula ações
            td_acoes.appendChild(imgDelete);
            
        } }

    }
    editacao(dados) {

        this.editId = dados.id;
        this.fechar()
        document.getElementById('idcliente').value = dados.idCliente
        document.getElementById('nome').value = dados.nomecliente
        document.getElementById('idatend').value = dados.idAtendimento
        document.getElementById('dataAtend').value = dados.dataAtendimento
        document.getElementById('status').value = dados.statusAtendimento
        document.getElementById('pagamento').value = dados.pagamentoCliente
        document.getElementById('valorReal').value = dados.valorReal
        document.getElementById('valorRen').value = dados.valorRen
        document.getElementById('dateVenc').value = dados.dataVencimento
        document.getElementById('obs').value = dados.observacoes
        document.getElementById('btn1').innerText = "Atualizar"

    }

    mostrarJanela() {
        var janela = document.getElementById("janela");

        janela.style.display = "block";
        janela.classList.add('tabelaAtendimentos');
    }
    fechar(mostrarJanela) {
        var fechar = document.getElementById("fechar");
        janela.style.display = "none";
    }
}

const atendimento = new Atendimento();

