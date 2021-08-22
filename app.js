function myFunction() {
    let body = document.body;
    let botao = document.querySelector('button');
    body.classList.toggle("dark-mode");


    botao.innerText == "🌚" ? botao.innerText = "🌞" : botao.innerText = "🌚";
}

const listadeFelinos = [
    {
        title: 'O Tigre',
        imgUrl: 'https://exame.com/wp-content/uploads/2019/07/gettyimages-1158374998.jpg',
        description: 'O Tigre (Panthera tigris) é uma das espécies da subfamília dos panterinos (família Felidae) pertencente ao gênero Panthera. Só é encontrado no continente asiático; É um predador carnívoro e é a maior espécie de felino do mundo, junto com o leão, podendo ambos atingir um tamanho comparável ao dos maiores fósseis de felinos.',
        createdAt: '2021-06-01T23:12:11.837Z'
    },
    {
        title: 'O Leão',
        imgUrl: 'https://img.elo7.com.br/product/zoom/273F40F/painel-adesivo-leao-lion-selva-floresta-decoracao-parede-hd-adesivo-parede-grande-do-leao.jpg',
        description: 'O leão (Panthera leo) é um mamífero carnívoro da família dos felídeos que é uma das cinco espécies do gênero Panthera. Leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África Subsaariana (com exceção das regiões de selva da costa atlântica e da Bacia do Congo) e em uma pequena área do noroeste da Índia',
        createdAt: '2021-05-05T23:12:11.837Z'
    },
    {
        title: 'O Leopardo',
        imgUrl: 'https://data.1freewallpapers.com/download/leopard-1680x1050.jpg',
        description: 'O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felídeos. Como três dos outros gatos do gênero Panthera: o leão, o tigre e a onça, eles se caracterizam por uma modificação no osso hióide que lhes permite rugir. É também conhecida como pantera marrom e, quando tem a pelagem totalmente escura, como pantera negra (melânica).',
        createdAt: '2021-05-05T23:12:11.837Z'
    },
    {
        title: 'A Pantera Negra',
        imgUrl: 'https://www.vivernatural.com.br/wp-content/uploads/2016/12/screen-4.jpg',
        description: 'A pantera negra é uma variação negra (melanismo) de várias espécies de grandes felinos, principalmente o leopardo (Panthera pardus) e a onça pintada (Panthera onca). Mas deve-se ressaltar que não é uma espécie nova, nem mesmo uma subespécie, é simplesmente uma variação negra desses animais.',
        createdAt: '2021-04-09T23:12:11.837Z'
    },
    {
        title: 'O Jaguar',
        imgUrl: 'https://i.pinimg.com/originals/86/6b/a7/866ba77a304729928ea710f86de74b47.jpg',
        description: 'O jaguar, jaguar ou yaguareté (Panthera onca) é um felino carnívoro da subfamília dos Panterinos e gênero Panthera. É a única das cinco espécies atuais desse gênero encontradas na América. É também o maior felino da América e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).',
        createdAt: '2021-05-18T23:12:11.837Z'
    },
    {
        title: 'O Guepardo',
        imgUrl: 'https://s2.glbimg.com/LuRxX5icgrtf-2H3ZfbHxRzBswE=/0x0:1700x1065/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/q/M/xq2KEPRYua3FCXERzAhQ/guepardo6.jpg',
        description: 'A chita (Acinonyx jubatus) 1 é um membro atípico da família dos felídeos. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido, atingindo velocidade máxima de 115 km / h em corridas de até quatrocentos ou quinhentos metros.',
        createdAt: '2021-05-22T23:12:11.837Z'
    }
];

let contador = 0;

function callFelino() {
    let body = document.body;

    if (contador < 6) {
        let card = document.createElement("DIV");

        let titulo = document.createElement("H2");
        titulo.innerHTML = listadeFelinos[contador].title;

        let imgUrl = document.createElement("IMG");
        imgUrl.src = listadeFelinos[contador].imgUrl;

        let descricao = document.createElement("P");
        descricao.innerHTML = listadeFelinos[contador].description;

        let createdAt = document.createElement("h6");
        createdAt.innerHTML = "Criado em " + listadeFelinos[contador].createdAt.slice(0, 10);


        body.appendChild(card);

        card.appendChild(titulo);
        card.appendChild(imgUrl);
        card.appendChild(descricao);
        card.appendChild(createdAt);

        contador++;
    }
}

function removerFelino() {
    if (contador > 0) {

        let todosCards = document.querySelectorAll("div");
        let ultimoCard = todosCards[todosCards.length - 1];

        ultimoCard.remove();

    }
}
