function generateContractMatricula() {
    const confirmMatricula = window.confirm('Você tem certeza que deseja matricular este aluno?');

    if (confirmMatricula) {
        // Se o usuário clicar em "OK", continue com a geração do contrato
        generateContract();
    } else {
        // Se o usuário clicar em "Cancelar", você pode adicionar ações apropriadas ou simplesmente não fazer nada
        console.log('Matrícula cancelada pelo usuário.');
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

            const parcela = Array.from(document.querySelectorAll('input[name="parcela"]:checked'))
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
    <br>
    <p style="break-before: auto;"><strong>CONTRATANTE:</strong><br>
    <br>
    <div class="contratante">
        <div class="col1" >
            <b>Nome: ${name}</b><br>
            <b>Data de nascimento: ${birthdate} </b> <br>
            <b>CPF:  ${cpf}</b><br>
            <b>Telefone:    ${phone}</b><br>
        </div>
        <div  class="col2" >  
        <b>Endereço:  ${endereco}</b> <br>
        <b>Identidade:   ${idrg}</b><br>
        <b>Email:    ${email}</b><br>
       
        </div>
    </div>
    <br>
      <p style="break-before: auto;"><strong>CONTRATADA:</strong><br>
      <br>
    <div class="contratada">
      <div class="col1">
      <b>
        Razão social: 47.449.432 Marcela Eduarda<br>Quirino da Silva<br>
        CNPJ: 47.449.432/0001-48<br>
        </b>
      </div>
     <div class="col2"> 
     <b>
        Email: marcela@besirius.com.br<br>
        Telefone: +55 11 91697-8157
        </b>
     </div>
    </div>
   
  </div>
  <br>
  <div style="break-before: auto;">
  <b>As partes acima identificadas têm, entre si, justo e acertado o presente
  Contrato de Prestação de Serviços de Ensino de Língua Estrangeira, que
  será regido pelas cláusulas a seguir:  
  </b>
</div>
  
<br>
  <div style="break-before: auto;">
            <h2>DO PLANO CONTRATADO</h2>

                <p style="break-before: auto;"><b>Plano Contratado:<b> ${quantidadeAulas} de ${duracao} cada, material digital incluso.<b></p>
                    
            <p style="break-before: auto;"> <b> Valor do plano:</b> ${valorMensalidade} mensais que serão pagos, todo dia ${pagamento} a partir do
            momento da assinatura desse contrato</p>
    </div>
    <br>
    
<div style="break-before: auto;">
        <h2>DO OBJETO DO CONTRATO:</h2>
        <h4>
        Cláusula Primeira:
        </h4>
        <p style="break-before: auto;">O presente instrumento tem como objeto a prestação dos serviços de ensino do idioma
        Inglês, com enfoque em inglês para fluência. Nosso método segue o principio das cinco
        linguagens do aprendizado, que são:<b>(SPEAKING) - FALA / (LISTENING) - ESCUTAR /
        (READING) - LER / (WRITING) - ESCREVER / (USE OF LANGUAGE) - GRAMÁTICA </b>
        essas cinco linguagens de aprendizado são também as cinco competências exigidas
    nas provas de proficiência <b> então o nosso enfoque e objetivo é fazer o aluno ser
    capaz, de ouvir, interpretar, se comunicar e formar textos,
    </b>é isso a ser entregue pela<b>CONTRATADA (à) CONTRATANTE.</b>
        </p>
        
    <p style="break-before: auto;">
    O <b>CONTRATANTE</b> declara ciência de que, como em qualquer área acadêmica, o
    sucesso do ensino não depende somente da <b>CONTRATADA</b> e suas metologias, mas
    também e principalmente de suas próprias aplicações, dedicação e comprometimento,
    com o que foi apresentado pelo nosso material e método no fechamento de vendas.
    Então a <b>CONTRATANTE</b> se aliança e se compromete em corresponder de maneira
    positiva e intensa tanto em aula, como fora dela em relação aos conteúdos aplicados e
    em relação as tarefas extra classe.
    </p>

    <h4>Cláusula Segunda:<h4>
    <p style="break-before: auto;">As partes concordam que são livres para rescindir este contrato a qualquer momento, sem incorrer em qualquer penalidade ou obrigação de fidelidade </p>
        
</div>
<br>


<div >
    <h2>DA DURAÇÃO DO CURSO</h2>
    <h4>
    Cláusula Primeira:
    </h4>
    <p >
    O curso será composto de ${quantidadeAulas} com duração de ${duracao}, e
    jogos para exercícios extra classe, para que o aluno faça a parte durante a semana até o
    encontro de sua próxima aula, dessa forma complementando o aprendizado e
    crescimento pessoal no inglês. O curso terá início em ${inicio} com término em
    ${termino}.
    </p>
   
</div>
<div style="break-before: page;"> 
<h4 >
Cláusula Segunda:
</h4>
<p >
Após o término de contrato na data estipulada em cláusula acima citada (Cláusula
    primeira), esse contrato poderá ser prorrogado por mais 6 meses através de aditivo
    contratual, previamente concordado entre o(a) <b>CONTRATANTE</b> e a <b>CONTRATADA</b> e
    assinado por ambos, dessa forma mantendo pelos outros 6 meses as cláusulas
    acordadas nesse contrato com ou sem alterações.
    
</p>
</div>
<br>
<div style="break-before: auto;">
<h2>DAS AULAS A SEREM MINISTRADAS</h2>
<h4>
Cláusula Primeira:
</h4>
<p style="break-before: auto;">As <b>AULAS<b> serão ministradas no formato online, através da plataforma meet pelo tempo
pré estipulado nesse contrato.
</p>
<h4>
Cláusula Segunda:
</h4>
<p style="break-before: auto;">Na ocorrência de cancelamento de aula pelo CONTRATANTE, este deverá notificar a
<b>CONTRATADA com antecedência mínima de 2 (duas) horas, se quiser poder
reagendar a aula. Caso a notificação aconteça em prazo inferior a 2 horas, a aula
será devidamente contabilizada, perdendo o  o direito da aula
remarcada.</b></p>
<h4>
Cláusula Terceira:
</h4>
<p style="break-before: auto;">No caso de cancelamento de aula pela <b>CONTRATADA<b>, o  deverá ser
notificado e a aula será reagendada conforme for acordado entre as partes no
momento do aviso de cancelamento. <b> Válido para todos os tipos de planos</b>.
</p>
</div>


<br>
<div style="break-before: auto;">
<h2>DO PAGAMENTO</h2>
<h4>
Cláusula Primeira:
</h4>
<p style="break-before: auto;">
Pelos serviços referidos na Cláusula Primeira, o(a)  pagará a
<b>CONTRATADA<b> o valor de ${valorMensalidade.toFixed(2)} mensais (${valorMensalidadeExtenso}) sendo que o referido valor cobrado ${parcela}, deverá ser pago sempre nos dias ${pagamento} de
cada mês.

</p>

<p style="color: red; break-before: auto;">
O pagamento poderá ser realizado por meio de boleto, no crédito ou PIX. O Boleto será
enviado para o  no ato da assinatura desse contrato e cobranças posteriores
serão enviadas no e-mail do . As aulas só terão validade a partir do
reconhecimento do devido comprovante. <br> Em caso de não recebimento do boleto em
até 24 horas da data de pagamento o  deverá avisar o ocorrido
para a <b>CONTRATADA<b> por email contato@besirius.com.br ou whatsapp +55 11
91697-8157.</br>
</p>

<h4>
Cláusula Segunda:
</h4>
<p style="break-before: auto;">
Na hipótese de falta de pagamento de qualquer parcela no vencimento, o valor
correspondente será acrescido da multa de 2% (dois por cento), encargos financeiros
decorrentes da mora, conforme aduz artigo 52, § 1º da Lei nº 8.078/1990 e juros de 1%
(um por cento) ao mês, limitando-se a 12% ao ano, sem prejuízo do ressarcimento de
outras despesas decorrentes da inadimplência.

</p>

<h4>
Cláusula Terceira:
</h4>
<p style="color: red; break-before: auto;">
A simples ausência nas aulas não desobriga o  do pagamento das
parcelas acordadas nesse contrato.

</p>




</div>
<br>






${tipoContrato.includes('Contrato de 12 Meses') ? getContrato12Meses() : ''}
${tipoContrato.includes('Contrato de 6 Meses') ? getContrato6Meses() : ''}


<br>
<div style="break-before: auto;">
<h2>DA ENTREGA DOS SERVIÇOS</h2>
<h4>
Cláusula Primeira:
</h4>
<p style="break-before: auto;">A <b>CONTRATADA<b> se reserva no direito de substituir o professor vigente, caso o mesmo
por qualquer razão esteja impossibilitado de ministrar as aulas. A <b>CONTRATADA<b> se
obriga a entrega dos serviços educacionais, como a supervisão do mesmo e o que tange
o seu processo de garantia de ministração das aulas e entrega do serviço de ensino de
língua inglesa.

</p>
</div>


<br>
<div style="break-before: auto;">

<h4>
Parágrafo único:
</h4>
<p style="color: red; break-before: auto;"> Ratificando que existe a condição de comunicado com no mínimo 2 (duas) horas
de antecedência, por parte do <b>CONTRATANTE</b> à <b>CONTRATADA<b>, para que essa
aula seja reagendada, caso não haja esse contato antecipado, a <b>CONTRATADA<b>
se desobriga a reagendar a aula e será também considerada como aula
ministrada. Ao exceder 20 minutos em um atraso, em relação ao horário
combinado para uma aula, a vídeo chamada será finalizada, consequentemente,
a aula será cancelada (sem reagendamentos).
</p>
</div>
<br>

<div style="break-before: page;"> 

<h4>
Cláusula quarta (Das férias)
</h4>

<p style="break-before: auto;">Será de comum acordo entre as duas partes que teremos férias durante os anos de
curso, divididos nos meses julho, dezembro e janeiro. Sendo duas semanas em julho,
uma semana de dezembro e uma em janeiro.
Cláusula única: Nos meses de férias não existe hipótese alguma o batimento no valor da
mensalidade </p>
</div>

<br>





<div style="break-before: auto;">
    <h2>DO FORO</h2>
    <h4 style= "">
    Cláusula Única:
    </h4>
    <p style="break-before: auto;">
    Para dirimir quaisquer controvérsias oriundas do CONTRATO, as partes elegem o
    Foro da Comarca de São Paulo/SP.
    Por estarem assim justos e contratados, firmam o presente instrumento, em duas
    vias de igual teor.
    
    </p>
    </div>
    <br>
<div style="break-before: auto;"> 
    <h2>São Paulo, ${dataFormatada}</h2>

</div>
<br>
     
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




