var adalba = document.getElementById("adalberto")
adalba.addEventListener('click', function (adalbertoEscolhas) {
    alert("Adalberto ganha pouco e tem medo de tentar outro emprego por inseguranças e comodismo.Ele adora a empresa e a sua equipe. Ele sente que possui qualidade de vida, pois mora perto do trabalho. Mesmo assim tem muitas contas para pagar, e é pai de 4 filhos. Ele está sendo pressionado para realizar cortes na equipe, mas está muito preocupado porque ele também precisa de uma promoção,  pois a família está aumentando e logo mais vem o quinto filho.")
    adalbertoEscolhas = prompt("1- Levar a esposa para o hospital\n 2- Chamar ambulância e ir para o trabalho")
    while (adalbertoEscolhas != 1 && adalbertoEscolhas != 2) {
        adalbertoEscolhas = prompt("Resposta inválida, escolha entre 1 ou 2")
    } if (adalbertoEscolhas == 1) {
        alert("Adalberto levou a mulher para o hospital, passou o dia inteiro lá e perdeu a reunião. No dia seguinte, quando Adalberto chegou ao trabalho, chamou o chefe para conversar e soube que não havia mais chances de ser promovido, pois a vaga foi preenchida na reunião de ontem. Adalberto se Laxcou!")
        return location = "./index.html"
    } else {
        faseDois()
    }
})

function faseDois(adalbertoEscolhas) {
    alert("Adalberto chamou a ambulância e se atrasou para o trabalho.Ao chegar no trabalho ele tem duas opções:")
    adalbertoEscolhas = prompt("1-Chamar o chefe e explicar o motivo do atraso \n2- Entrar na reunião sem explicações sobr o atraso")
    while (adalbertoEscolhas != 1 && adalbertoEscolhas != 2) {
        adalbertoEscolhas = prompt("Resposta inválida, escolha entre 1 ou 2")
    }if(adalbertoEscolhas==1){
        alert("Adalberto chamou o chefe em um momento em que ele não estava falando na reunião e explicou o ocorrido, justificando o atraso, ao terminar a reunião o chefe o chama no escritório e ele consegue a promoção, por que o chefe valoriza o relacionamento dele como os subordinados e valoriza a conduta tomada. Adalberto volta ao hospital e conta para a companheira que foi promovido.")
        return location = "./index.html"
    }else{
        faseTres()
    }
}

function faseTres(adalbertoEscolhas){
    alert
}