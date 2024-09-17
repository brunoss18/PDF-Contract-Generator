document.addEventListener('DOMContentLoaded', function() {
    var cpfInput = document.getElementById('cpf');
    var rgInput = document.getElementById('idrg');

    cpfInput.addEventListener('input', function() {
        var cpf = cpfInput.value.replace(/\D/g, '');
        if (cpf.length > 11) {
            cpf = cpf.substring(0, 11);
        }
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        cpfInput.value = cpf;
    });

    // rgInput.addEventListener('input', function() {
    //     var rg = rgInput.value.replace(/\D/g, '');
    //     if (rg.length > 20) {
    //         rg = rg.substring(0, 20);
    //     }
    //     rg = rg.replace(/(\d{2})(\d)/, '$1.$2');
    //     rg = rg.replace(/(\d{3})(\d)/, '$1.$2');
    //     rg = rg.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    //     rgInput.value = rg;
    // });


});

function exportToPDF() {
    // Usar a biblioteca html2pdf para exportar o contrato gerado para um arquivo PDF
    const contractOutput = document.getElementById('contractOutput');
    const name = document.getElementById('name').value; // Obtendo o nome do aluno


    const options = {
        margin: 20,
        filename: `Contrato_BeSirius_${name.replace(/\s/g, '_')}.pdf`, // Incluindo o nome do aluno no nome do arquivo PDF
        pagebreak: { mode: ['avoid-all'] }, // Configuração para evitar quebras de página
        
        image: {
            type: 'jpeg',
            quality: 0.98
        },
        html2canvas: {
            scale: 2
        },
        
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        },
        autoPaging: true, // Configuração para quebrar o texto automaticamente
        header: [{
            // image: 'caminho/para/sua/imagem.jpg', // Substitua pelo caminho da sua imagem
            width: 50, // Ajuste conforme necessário
            height: 30 // Ajuste conforme necessário
        }],
       
        // css: `

      
        // `,
        
          
    };
  
    html2pdf(contractOutput, options)
      // Adicionar quebra de página entre seções
      const sections = document.querySelectorAll('.contract-section');
      sections.forEach(section => {
          const breakPageElement = document.createElement('div');
          breakPageElement.style.pageBreakAfter = 'always';
          section.appendChild(breakPageElement);
      });

}





function convertToWords(number) {
    const integerPart = Math.floor(number);
    const decimalPart = Math.round((number - integerPart) * 100);

    let words = extenso(integerPart);

    if (decimalPart) {
        words += ' e ' + extenso(decimalPart) + ' centavos';
    }

    return words;
}


function formatDateByExtension(date) {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const dias = [
        "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
    ];

    const dia = date.getDate();
    const mes = meses[date.getMonth()];
    const ano = date.getFullYear();
    // const diaSemana = dias[date.getDay()];

    return `${dia} de ${mes} de ${ano}`;
}

// Exemplo de uso:
const dataAtual = new Date();
const dataFormatada = formatDateByExtension(dataAtual);
console.log(dataFormatada); // Exibe a data formatada por extensão


function getContrato6Meses() {
    return `
    <div style="break-before: auto;">
    <h2>DO PAGAMENTO:</h2>
    <h4>
    Cláusula Únice:
    </h4>
    <p style="break-before: auto;">
    Para a rescisão do presente contrato pelo(a) <b>CONTRATANTE</b>, este deverá notificar (a)
<b>CONTRATADA</b>.</p><p style="color: red; break-before: auto;">  Caso o <b>CONTRATANTE</b> opte por cancelar o presente instrumento
com menos de [6] pagamentos mensais efetuados, a <b>CONTRATANTE</b>
compromete-se a pagar uma taxa rescisória de 10% sobre os pagamentos mensais
ainda devidos, à título de Despesas Administrativas, conforme artigo 9º do
Decreto nº 22.626/1933. A <b>CONTRATADA</b> poderá rescindir o contrato, após
deliberação interna, por indisciplina do aluno representado neste contrato, e por
inadimplência do <b>CONTRATANTE</b>, o qual será previamente avisado do débito e da
possível rescisão.</p>

</div>
    `;
}



function getContrato12Meses() {
    return `
    <div style="break-before: auto;">
    <h2>DO PAGAMENTO:</h2>
    <h4>
    Cláusula Únice:
    </h4>
    <p style="break-before: auto;">
    Para a rescisão do presente contrato pelo(a) <b>CONTRATANTE</b>, este deverá notificar (a)
<b>CONTRATADA</b>.</p><p style="color: red; break-before: auto;">  Caso o <b>CONTRATANTE</b> opte por cancelar o presente instrumento
com menos de [12] pagamentos mensais efetuados, a <b>CONTRATANTE</b>
compromete-se a pagar uma taxa rescisória de 10% sobre os pagamentos mensais
ainda devidos, à título de Despesas Administrativas, conforme artigo 9º do
Decreto nº 22.626/1933. A <b>CONTRATADA</b> poderá rescindir o contrato, após
deliberação interna, por indisciplina do aluno representado neste contrato, e por
inadimplência do <b>CONTRATANTE</b>, o qual será previamente avisado do débito e da
possível rescisão.</p>

</div>
    `;
}
