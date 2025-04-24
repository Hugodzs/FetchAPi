const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const btnEnviar = document.getElementById('btn-enviar');
const feedbackUsuario = document.getElementById('feedback-usuario')
const produtosCadastrados = document.getElementById('produtos-cadastrados')

//função
function gerarPost(e){
    e.preventDefault()

    const jsonCorpo = JSON.stringify({
        nome: nomeProduto.value,
        valor: valorProduto.value,
        descricao: descricaoProduto.value
    })

    fetch('https://httpbin.org/post',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:jsonCorpo
        
    })
        
    .then(res =>res.json())
    .then(data =>{
        feedbackUsuario.innerText =''
        console.log(data)
        const post = document.createElement('div')
        post.classList.add('postagem')
        post.innerHTML =`
        <h2>${nomeProduto.value}</h2>
        <p>PREÇO >>
        ${valorProduto.value}</p>
        <p>DESCRIÇãO >>
        ${descricaoProduto.value}</p>
         
        `
        produtosCadastrados.appendChild(post)

        nomeProduto.value =''
        valorProduto.value=''
        descricaoProduto.value=''

        alert('Deu Certa até de Mais pow')

    })
    .catch((err)=>{
        console.log(err)
        feedbackUsuario.innerText='Caraca velho! error do caramba, chama o hugo dev'
    }) 

    

    }






















// eventos
btnEnviar.addEventListener('click', (e) =>gerarPost(e)

)
