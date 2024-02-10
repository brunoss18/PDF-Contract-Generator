function generateContractRematricula() {
    const confirmMatricula = window.confirm('Você tem certeza que deseja rematricular este aluno?');

    if (confirmMatricula) {
        // Se o usuário clicar em "OK", continue com a geração do contrato
        generateContract();
    } else {
        // Se o usuário clicar em "Cancelar", você pode adicionar ações apropriadas ou simplesmente não fazer nada
        console.log('Rematricula cancelada pelo usuário.');
    }

   
        var contractDiv = document.getElementById('contractStyle');
        // Define o estilo da div para 'block' para mostrar quando clicado
        contractDiv.style.display = 'block';


    function generateContract() {
        const endereco = document.getElementById('endereco').value;
        const idrg = document.getElementById('idrg').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const name = document.getElementById('name').value;
        const birthdate = document.getElementById('birthdate').value;
        const inicio = document.getElementById('inicio').value;
        const termino = document.getElementById('termino').value;
        const cpf = document.getElementById('cpf').value;
        const valorMensalidade = parseFloat(document.getElementById('valorMensalidade').value);
        const valorMensalidadeExtenso = convertToWords(valorMensalidade);

        const pagamento = Array.from(document.querySelectorAll('input[name="pagamento"]:checked'))
            .map(checkbox => checkbox.value)
            .join(', ');

        const duracao = Array.from(document.querySelectorAll('input[name="duracao"]:checked'))
            .map(checkbox => checkbox.value)
            .join(', ');

            const vigencia = Array.from(document.querySelectorAll('input[name="vigencia"]:checked'))
            .map(checkbox => checkbox.value)
            .join(', ');

        const tipoContrato = Array.from(document.querySelectorAll('input[name="tipoContrato"]:checked'))
            .map(checkbox => checkbox.value)

        const quantidadeAulas = Array.from(document.querySelectorAll('input[name="quantidadeAulas"]:checked'))
            .map(checkbox => checkbox.value)
            .join(', ');



        const contratoHtml = `
      
  

        <div id="pdf-container">
        <img src="/imgs/logo.png">
        <h2>DAS PARTES:</h2>
        <p><strong>CONTRATANTE:</strong><br>
        <div class="contratante">
            <div class="col1" >
                <b>Nome:</b> ${name}<br>
                <b>Data de nascimento:</b>  ${birthdate} <br>
                <b>CPF:</b>  ${cpf}<br>
            </div>
            <div  class="col2" >  
            <b>Endereço:</b>   ${endereco}<br>
            <b>Identidade:</b>   ${idrg}<br>
            <b>Email:</b>    ${email}<br>
            <b>Telefone: </b>   ${phone}<br>
            </div>
        </div>
      <p><strong>CONTRATADA:</strong><br>
    <div class="contratada">
      <div class="col1">
      <b>Razão social</b>: 47.449.432 MARCELA EDUARDA<br>QUIRINO DA SILVA<br>
       <b>CNPJ</b>: 47.449.432/0001-48<br>
      </div>
     <div class="col2"> 
        <b>Email</b>: marcela@besirius.com.br<br>
        <b>Telefone</b>: +55 11 91697-8157
     </div>
    </div>
    </p>
  </div>

  <b>As partes acima identificadas têm, entre si, justo e acertado o presente
  Aditivo Contratual ao Contrato de Prestação de Serviços Educacionais,
  doravante denominado "Contrato", que será regido pelas cláusulas a
  seguir:
  </b>

  <div class="clausula">
    

    <b>PRAZO DE VIGÊNCIA:</b>
    <p>Este aditivo tem como objetivo estender o prazo de vigência do Contrato original por
    mais ${vigencia}.</p>
    
<div style="margin: 1rem">
        <h2>DO OBJETO DO CONTRATO:</h2>
        <h4>
        Cláusula Única:
        </h4>
        <p>O presente instrumento tem como objeto a prestação dos serviços de ensino do idioma
        Inglês, com enfoque em inglês para fluência. Nosso método segue o principio das cinco
        linguagens do aprendizado, que são:<b>(SPEAKING) - FALA / (LISTENING) - ESCUTAR /
        (READING) - LER / (WRITING) - ESCREVER / (USE OF LANGUAGE) - GRAMÁTICA </b>
        essas cinco linguagens de aprendizado são também as cinco competências exigidas
    nas provas de proficiência<b>então o nosso enfoque e objetivo é fazer o aluno ser
    capaz, de ouvir, interpretar, se comunicar e formar textos,
    </b>é isso a ser entregue pela<b>CONTRATADA (à) CONTRATANTE.</b>
        </p>
    <br>
    <p>
    O <b>CONTRATANTE</b> declara ciência de que, como em qualquer área acadêmica, o
    sucesso do ensino não depende somente da <b>CONTRATADA</b> e suas metologias, mas
    também e principalmente de suas próprias aplicações, dedicação e comprometimento,
    com o que foi apresentado pelo nosso material e método no fechamento de vendas.
    Então a <b>CONTRATANTE</b> se aliança e se compromete em corresponder de maneira
    positiva e intensa tanto em aula, como fora dela em relação aos conteúdos aplicados e
    em relação as tarefas extra classe.
    </p>
</div>
<div style="margin: 1rem">
    <h2>DA DURAÇÃO DO CURSO</h2>
    <h4>
    Plano Contratado:
    </h4>
    <p>
    Particular ${quantidadeAulas} de  ${duracao} cada, Caderno do
    aluno e jogos com exercícios de fixação da unidade. O curso terá
    início em ${inicio} até ${termino}.
    </p>
</div>
<div style="margin: 1rem">
    <h2>VALOR E FORMA DE PAGAMENTO:</h2>
    <h4>
    Valor do plano:
    </h4>
    <p>
    O valor referente a esta prorrogação é de ${valorMensalidade.toFixed(2)} mensais (${valorMensalidadeExtenso}), a ser pago mensalmente todo dia ${pagamento}.
        
    </p>
    <p>
    Na hipótese de falta de pagamento de qualquer parcela no vencimento, o valor
    correspondente será acrescido da multa de 2% (dois por cento), encargos financeiros
    decorrentes da mora, conforme aduz artigo 52, § 1º da Lei nº 8.078/1990 e juros de 1%
    (um por cento) ao mês, limitando-se a 12% ao ano, sem prejuízo do ressarcimento de
    outras despesas decorrentes da inadimplência.

   </p>
</div>

<div style="margin: 1rem">
${tipoContrato.includes('Contrato de 12 Meses') ? getContrato12Meses() : ''}
${tipoContrato.includes('Contrato de 6 Meses') ? getContrato6Meses() : ''}
</div>
<div style="margin: 1rem">
  <h2>CANCELAMENTO E REAGENDAMENTO</h2>
  <p>Na ocorrência de cancelamento de aula pela CONTRATANTE, este deve notificar o
  professor com antecedência mínima de 2 (duas) horas, para que a aula seja
  devidamente reagendada. Caso a notificação aconteça em prazo inferior a 2 horas, a
  aula será devidamente contabilizada, perdendo a CONTRATANTE o direito da aula
  reagendada.
  No caso de cancelamento de aula pela CONTRATADA, o CONTRATANTE deverá ser
  notificado e a aula será reagendada conforme for acordado entre as partes no momento
  do aviso de cancelamento. </p>
  </div>
  <div style="margin: 1rem">
  <p> 
   <b> Parágrafo único</b>:<br>
    Ratificando que existe a condição de comunicado com no mínimo 2 (duas) horas
    de antecedência, por parte do CONTRATANTE à CONTRATADA, para que essa
    aula seja reagendada, caso não haja esse contato antecipado, a CONTRATADA
    se desobriga a reagendar a aula e será também considerada como aula
    ministrada. Ao exceder 20 minutos em um atraso, em relação ao horário
    combinado para uma aula, a vídeo chamada será finalizada, consequentemente,
    a aula será cancelada (sem reagendamentos).  
  </p>
</div>
<div style="margin: 1rem">
    <h2>DO FORO</h2>
    <h4>
    Cláusula Única:
    </h4>
    <p>
    Para dirimir quaisquer controvérsias oriundas do ADITIVO CONTRATUAL, as partes
    elegem o Foro da Comarca de São Paulo/SP.
    E, por estarem assim justas e contratadas, firmam o presente Aditivo Contratual
    em duas vias de igual teor.
    </p>
    </div>
<div style="margin: 1rem"> 
    <h2>DATA E ASSINATURAS:</h2>
    <b> São Paulo, ${dataFormatada}<br></b>
</div>

     
      <div class="bef-linha">
      <strong>CONTRATANTE:</strong><br>
      <div class="linha"></div>
      </div>
     <div class="assinar"><b>${name} </br>  CPF: ${cpf} </b></div>
      <div class="bef-linha">
      <strong>CONTRATADA:</strong><br>
      <div class="linha"></div>
      </div>
      <div class="assinar"><b> 47.449.432 MARCELA EDUARDA QUIRINO DA SILVA <br>
      CNPJ:47.449.432/0001-48</b>  
      </div>
    </p>
  </div>
        </div>
    `;

        document.getElementById('contractOutput').innerHTML = contratoHtml;
    }
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

function getContrato6Meses() {
    return `
        <h2>DO CANCELAMENTO DO CONTRATO</h2>
        <p>Para a rescisão do presente contrato pelo(a) <b>CONTRATANTE</b>, este deverá notificar (a) <b>CONTRATADA</b>. Caso o <b>CONTRATANTE</b> opte por cancelar o presente instrumento com menos de [6] pagamentos mensais efetuados, a <b>CONTRATANTE</b> compromete-se a pagar uma taxa rescisória de 10% sobre os pagamentos mensais ainda devidos, à título de Despesas Administrativas, conforme artigo 9º do Decreto nº 22.626/1933. A <b>CONTRATADA</b> poderá rescindir o contrato, após deliberação interna, por indisciplina do aluno representado neste contrato, e por inadimplência do <b>CONTRATANTE</b>, o qual será previamente avisado do débito e da possível rescisão.</p>
    `;
}



function getContrato12Meses() {
    return `
        <h2>DO CANCELAMENTO DO CONTRATO</h2>
        <p>Para a rescisão do presente contrato pelo(a) <b>CONTRATANTE</b>, este deverá notificar (a) <b>CONTRATADA</b>. Caso o <b>CONTRATANTE</b> opte por cancelar o presente instrumento com menos de [12] pagamentos mensais efetuados, a <b>CONTRATANTE</b> compromete-se a pagar uma taxa rescisória de 10% sobre os pagamentos mensais ainda devidos, à título de Despesas Administrativas, conforme artigo 9º do Decreto nº 22.626/1933. A <b>CONTRATADA</b> poderá rescindir o contrato, após deliberação interna, por indisciplina do aluno representado neste contrato, e por inadimplência do <b>CONTRATANTE</b>, o qual será previamente avisado do débito e da possível rescisão.</p>
    `;
}

function exportToPDF() {
    // Usar a biblioteca html2pdf para exportar o contrato gerado para um arquivo PDF
    const contractOutput = document.getElementById('contractOutput');
    const name = document.getElementById('name').value; // Obtendo o nome do aluno


    const options = {
        margin: 20,
        filename: `Contrato_BeSirius_${name.replace(/\s/g, '_')}.pdf`, // Incluindo o nome do aluno no nome do arquivo PDF
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
        header: [{
            image: 'caminho/para/sua/imagem.jpg', // Substitua pelo caminho da sua imagem
            width: 50, // Ajuste conforme necessário
            height: 30 // Ajuste conforme necessário
        }],
        css: `

        *{
            background-color: blue !important;
        }
        `
    };

    html2pdf(contractOutput, options);
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