function pesquisar(){
    let section = document.getElementById("resultado-pesquisa")
    let resultados = ""

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    console.log(campoPesquisa);
    let titulo = "";
    let genero = "";
    
    if (!resultados){
        resultados = "<p>Nada foi encontrado. Sua busca não foi encontrada no banco de dados</p>"
    }

    //para cada dado nessa lista de dados
    for (let dado of dados)
    {   
        console.log(dado.titulo.includes(campoPesquisa))
        titulo = dado.titulo.toLocaleLowerCase()
        genero = dado.titulo.toLocaleLowerCase()


        if (campoPesquisa == ""||)
        {
            section.innerHTML= "Filme não encontrado"
            return
        }
        else
        {
            if(titulo.includes(campoPesquisa) || genero.includes(campoPesquisa))
            {
                resultados += 
                `
                <div class="item-resultado">
                    <h2> 
                        <a href="#" target="_blank">${dado.titulo}</a> 
                    </h2>
                    <p><b>Ano:</b> ${dado.ano}</p>
                    <p ><b>Direção:</b> ${dado.direcao}</p>
                    <p><b>Prêmios:</b> ${dado.premios}</p>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Rotten Tomatoes</a>
                </div>
                `
            }
        }
    }
    

    section.innerHTML = resultados;
}
//console.log(dados);

