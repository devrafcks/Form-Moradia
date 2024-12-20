const url = "https://gist.githubusercontent.com/letanure/3012978/raw/6938daa8ba69bcafa89a8c719690225641e39586/estados-cidades.json";

$(document).ready(function () {
    $.getJSON(url, function (data) {
        const estados = data.estados;
        
        $.each(estados, function (index, estado) {
            $("#estado").append(`<option value="${estado.sigla}">${estado.nome}</option>`);
        });
    }).fail(function () {
        alert("Erro ao carregar os dados de estados e cidades.");
    });

    $("#estado").change(function () {
        const estadoSelecionado = $(this).val();
        
        $("#cidade").empty().append('<option value="">Escolha a cidade</option>');
        
        if (estadoSelecionado) {
            $.getJSON(url, function (data) {
                const estado = data.estados.find(e => e.sigla === estadoSelecionado);
                const cidades = estado ? estado.cidades : [];

                $.each(cidades, function (index, cidade) {
                    $("#cidade").append(`<option value="${cidade}">${cidade}</option>`);
                });
            });
        }
    });
});

function enviado(){
    alert("Suas informações foram enviadas com sucesso!");
}