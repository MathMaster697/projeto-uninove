$(document).ready(function(){
    $('#pesquisar').on('click', function(e) {
        e.preventDefault();
        var cnpj = $('#cnpj').val().replace(/[^0-9]/g, '');
        if(cnpj.length == 14) {
            $.ajax({
                url:'https://www.receitaws.com.br/v1/cnpj/' + cnpj,
                method:'GET',
                dataType: 'jsonp',
                complete: function(xhr){
                    response = xhr.responseJSON;
                    if(response.status == 'OK') {
                        $('#razao').val(response.nome);
                        $('#nome').val(response.fantasia);
                        $('#logradouro').val(response.logradouro);
                        $('#numero').val(response.numero);
                        $('#cep').val(response.cep);
                        $('#situacao').val(response.situacao);
                        $('#bairro').val(response.bairro);
                        $('#municipio').val(response.municipio);
                    } else {
                        alert(response.message);
                    }
                }
            });
        } else {
            alert('CNPJ inválido');
        }
    });
});