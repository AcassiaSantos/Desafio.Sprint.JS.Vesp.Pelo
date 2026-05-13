class Contato {

    constructor(
        nome,
        email,
        telefone,
        contato,
        mensagem
    ) {

        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.contato = contato;
        this.mensagem = mensagem;
    }
}

function Post(form) {

    let data = new Contato(

        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value,
        form.elements.namedItem("mensagem").value

    );

    console.log(data);

    alert(
        "Obrigado " +
        data.nome +
        ", seus dados foram enviados!"
    );
}