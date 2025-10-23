export const menuData = {
  
  // ===========================================
  // Lista 1: Café da Manhã (30 Opções)
  // ===========================================
  cafeDaManha: [
    {
      nome: "Vitamina de Banana",
      ingredientes: ["1 banana congelada", "200ml de leite de amêndoas", "1 colher de sopa de pasta de amendoim"],
      preparo: ["Bater tudo no liquidificador até ficar homogêneo."],
      vegano: true,
      vegetariano: true,
      calorias: 310,
      serves: 1
    },
    {
      nome: "Mingau de Aveia com Frutas",
      ingredientes: ["1/2 xícara de aveia em flocos", "1 xícara de água ou leite vegetal", "1/2 maçã picada", "Canela em pó"],
      preparo: ["Cozinhar a aveia com a água/leite até engrossar.", "Adicionar a maçã e a canela nos últimos minutos."],
      vegano: true,
      vegetariano: true,
      calorias: 280,
      serves: 1
    },
    {
      nome: "Pão com Abacate e Limão",
      ingredientes: ["2 fatias de pão integral", "1/2 abacate maduro", "Suco de 1/2 limão", "Sal e pimenta do reino"],
      preparo: ["Tostar o pão.", "Amassar o abacate com o limão, sal e pimenta.", "Espalhar sobre o pão tostado."],
      vegano: true,
      vegetariano: true,
      calorias: 290,
      serves: 1
    },
    {
      nome: "Tofu Mexido com Cúrcuma",
      ingredientes: ["150g de tofu firme", "1 colher de chá de cúrcuma (açafrão-da-terra)", "1 colher de sopa de azeite", "Sal negro (opcional, para gosto de ovo)", "Cebolinha picada"],
      preparo: ["Amassar o tofu com um garfo.", "Refogar no azeite com a cúrcuma e o sal.", "Finalizar com cebolinha."],
      vegano: true,
      vegetariano: true,
      calorias: 220,
      serves: 1
    },
    {
      nome: "Panqueca Vegana de Banana e Aveia",
      ingredientes: ["1 banana madura", "1/2 xícara de aveia", "1/4 xícara de leite vegetal", "1 colher de chá de fermento"],
      preparo: ["Amassar a banana.", "Misturar todos os ingredientes no liquidificador.", "Grelhar pequenas porções em frigideira untada."],
      vegano: true,
      vegetariano: true,
      calorias: 330,
      serves: 1
    },
    {
      nome: "Smoothie Verde Detox",
      ingredientes: ["1 folha de couve", "1/2 maçã verde", "1 rodela de gengibre", "200ml de água de coco", "Suco de 1 limão"],
      preparo: ["Bater tudo no liquidificador e servir imediatamente."],
      vegano: true,
      vegetariano: true,
      calorias: 150,
      serves: 1
    },
    {
      nome: "Iogurte de Coco com Granola Vegana",
      ingredientes: ["1 pote de iogurte de coco (tipo 'YoPro' vegano)", "1/2 xícara de granola sem mel", "Morangos picados"],
      preparo: ["Servir o iogurte em uma tigela.", "Cobrir com a granola e os morangos."],
      vegano: true,
      vegetariano: true,
      calorias: 350,
      serves: 1
    },
    {
      nome: "Mamão Papaia com Chia e Melado",
      ingredientes: ["1/2 mamão papaia", "1 colher de sopa de sementes de chia", "1 fio de melado de cana"],
      preparo: ["Retirar as sementes do mamão.", "Polvilhar a chia e regar com o melado."],
      vegano: true,
      vegetariano: true,
      calorias: 180,
      serves: 1
    },
    {
      nome: "Tapioca com Pasta de Amendoim e Geleia",
      ingredientes: ["3 colheres de sopa de goma de tapioca", "1 colher de sopa de pasta de amendoim", "1 colher de sopa de geleia de frutas vermelhas"],
      preparo: ["Peneirar a tapioca na frigideira.", "Quando formar a massa, virar, rechear e dobrar."],
      vegano: true,
      vegetariano: true,
      calorias: 340,
      serves: 1
    },
    {
      nome: "Café Preto e Pão na Chapa (Vegano)",
      ingredientes: ["1 pão francês", "1 colher de sopa de manteiga vegana (à base de coco ou castanha)", "1 xícara de café coado"],
      preparo: ["Passar a manteiga vegana no pão e prensar na chapa quente.", "Servir com o café."],
      vegano: true,
      vegetariano: true,
      calorias: 280,
      serves: 1
    },
    {
      nome: "Ovos Mexidos Simples",
      ingredientes: ["3 ovos", "1 colher de sopa de manteiga", "Sal e pimenta do reino", "2 colheres de sopa de leite (opcional, para cremosidade)"],
      preparo: ["Bater os ovos levemente com o leite, sal e pimenta.", "Derreter a manteiga em fogo baixo e despejar os ovos.", "Mexer lentamente até atingir o ponto desejado."],
      vegano: false,
      vegetariano: true,
      calorias: 300,
      serves: 1
    },
    {
      nome: "Tapioca com Queijo Coalho e Orégano",
      ingredientes: ["3 colheres de sopa de goma de tapioca", "2 fatias de queijo coalho", "Orégano a gosto"],
      preparo: ["Peneirar a tapioca na frigideira.", "Adicionar o queijo e o orégano.", "Dobrar e deixar o queijo derreter."],
      vegano: false,
      vegetariano: true,
      calorias: 360,
      serves: 1
    },
    {
      nome: "Pão Integral com Requeijão e Tomate",
      ingredientes: ["2 fatias de pão integral", "1 colher de sopa cheia de requeijão", "Rodelas de tomate", "Orégano"],
      preparo: ["Tostar o pão (opcional).", "Passar o requeijão, adicionar o tomate e polvilhar orégano."],
      vegano: false,
      vegetariano: true,
      calorias: 260,
      serves: 1
    },
    {
      nome: "Iogurte Natural com Mel e Nozes",
      ingredientes: ["1 pote de iogurte natural integral", "1 colher de sopa de mel", "1/4 xícara de nozes picadas"],
      preparo: ["Misturar o iogurte com o mel.", "Cobrir com as nozes picadas."],
      vegano: false,
      vegetariano: true,
      calorias: 320,
      serves: 1
    },
    {
      nome: "Crepioca de Queijo e Presunto",
      ingredientes: ["1 ovo", "2 colheres de sopa de goma de tapioca", "1 fatia de queijo", "1 fatia de presunto"],
      preparo: ["Misturar o ovo com a tapioca (como um omelete).", "Despejar na frigideira.", "Quando firmar, rechear e dobrar."],
      vegano: false,
      vegetariano: false, // Contém presunto
      calorias: 310,
      serves: 1
    },
    {
      nome: "Queijo Quente (Pão de Forma)",
      ingredientes: ["2 fatias de pão de forma", "2 fatias de queijo muçarela", "Manteiga para untar"],
      preparo: ["Montar o sanduíche com o queijo.", "Passar manteiga por fora do pão.", "Dourar na frigideira ou sanduicheira."],
      vegano: false,
      vegetariano: true,
      calorias: 380,
      serves: 1
    },
    {
      nome: "Omelete com Ervas Finas",
      ingredientes: ["3 ovos", "1 colher de sopa de salsinha picada", "1 colher de sopa de cebolinha picada", "1 colher de manteiga", "Sal"],
      preparo: ["Bater os ovos com os temperos.", "Despejar na frigideira quente com manteiga e cozinhar em fogo baixo."],
      vegano: false,
      vegetariano: true,
      calorias: 290,
      serves: 1
    },
    {
      nome: "Cuscuz Nordestino com Manteiga e Coco",
      ingredientes: ["1 xícara de flocão de milho", "1/2 xícara de água", "Sal a gosto", "Coco ralado fresco", "Manteiga"],
      preparo: ["Hidratar o flocão com a água e sal por 10 min.", "Cozinhar na cuscuzeira.", "Servir quente com manteiga e coco."],
      vegano: false, // Manteiga
      vegetariano: true,
      calorias: 350,
      serves: 1
    },
    {
      nome: "Cuscuz Nordestino (Vegano)",
      ingredientes: ["1 xícara de flocão de milho", "1/2 xícara de água", "Sal a gosto", "Coco ralado fresco", "Manteiga vegana"],
      preparo: ["Hidratar o flocão com a água e sal por 10 min.", "Cozinhar na cuscuzeira.", "Servir quente com manteiga vegana e coco."],
      vegano: true,
      vegetariano: true,
      calorias: 340,
      serves: 1
    },
    {
      nome: "Pão de Queijo Tradicional com Café",
      ingredientes: ["4 pães de queijo médios", "1 xícara de café com leite"],
      preparo: ["Assar os pães de queijo (congelados ou frescos).", "Servir com café com leite."],
      vegano: false,
      vegetariano: true,
      calorias: 400,
      serves: 1
    },
    {
      nome: "Misto Quente Tradicional",
      ingredientes: ["1 pão francês", "2 fatias de queijo muçarela", "2 fatias de presunto", "Manteiga"],
      preparo: ["Montar o sanduíche.", "Passar manteiga por fora e prensar na chapa."],
      vegano: false,
      vegetariano: false,
      calorias: 420,
      serves: 1
    },
    {
      nome: "Ovos Mexidos com Bacon",
      ingredientes: ["3 ovos", "50g de bacon picado", "1 colher de manteiga", "Sal e pimenta"],
      preparo: ["Fritar o bacon na própria gordura até ficar crocante. Reservar.", "Na mesma panela, adicionar manteiga e os ovos batidos.", "Mexer em fogo baixo. Misturar o bacon no final."],
      vegano: false,
      vegetariano: false,
      calorias: 420,
      serves: 1
    },
    {
      nome: "Pão Francês com Manteiga e Peito de Peru",
      ingredientes: ["1 pão francês", "Manteiga", "3 fatias de peito de peru"],
      preparo: ["Passar manteiga no pão e rechear com o peito de peru."],
      vegano: false,
      vegetariano: false,
      calorias: 310,
      serves: 1
    },
    {
      nome: "Tapioca com Frango Desfiado e Requeijão",
      ingredientes: ["3 colheres de sopa de goma de tapioca", "3 colheres de sopa de frango desfiado (já temperado)", "1 colher de sopa de requeijão"],
      preparo: ["Peneirar a tapioca na frigideira.", "Rechear com o frango e o requeijão.", "Dobrar e servir."],
      vegano: false,
      vegetariano: false,
      calorias: 380,
      serves: 1
    },
    {
      nome: "Cuscuz Nordestino com Ovo e Carne Seca",
      ingredientes: ["1 xícara de flocão de milho", "1/2 xícara de água", "Sal", "1 ovo frito", "50g de carne seca desfiada e refogada"],
      preparo: ["Preparar o cuscuz na cuscuzeira.", "Servir o cuscuz, cobrir com a carne seca e o ovo frito por cima."],
      vegano: false,
      vegetariano: false,
      calorias: 450,
      serves: 1
    },
    {
      nome: "Bagel com Cream Cheese e Salmão Defumado",
      ingredientes: ["1 bagel", "2 colheres de sopa de cream cheese", "50g de salmão defumado", "Endro (dill)"],
      preparo: ["Tostar o bagel.", "Passar o cream cheese, dispor o salmão e finalizar com endro."],
      vegano: false,
      vegetariano: false,
      calorias: 410,
      serves: 1
    },
    {
      nome: "Pão de Forma com Patê de Atum",
      ingredientes: ["2 fatias de pão de forma", "1/2 lata de atum sólido", "1 colher de sopa de maionese", "Cebolinha"],
      preparo: ["Misturar o atum, maionese e cebolinha.", "Rechear o pão."],
      vegano: false,
      vegetariano: false,
      calorias: 330,
      serves: 1
    },
    {
      nome: "Iogurte Grego com Frutas Vermelhas",
      ingredientes: ["1 pote de iogurte grego (natural ou baunilha)", "1/2 xícara de mix de frutas vermelhas (mirtilo, morango, amora)"],
      preparo: ["Misturar as frutas ao iogurte grego."],
      vegano: false,
      vegetariano: true,
      calorias: 240,
      serves: 1
    },
    {
      nome: "Salada de Frutas com Suco de Laranja",
      ingredientes: ["1 banana", "1/2 maçã", "1/2 mamão", "1 fatia de abacaxi", "Suco de 1 laranja"],
      preparo: ["Picar todas as frutas.", "Regar com o suco de laranja para não oxidar."],
      vegano: true,
      vegetariano: true,
      calorias: 210,
      serves: 1
    },
    {
      nome: "Bolo de Milho com Café",
      ingredientes: ["1 fatia generosa de bolo de milho", "1 xícara de café coado"],
      preparo: ["Servir a fatia de bolo com o café."],
      vegano: false, // Bolo geralmente leva ovos/leite
      vegetariano: true,
      calorias: 300,
      serves: 1
    }
  ],

  // ===========================================
  // Lista 2: Almoço (30 Opções)
  // ===========================================
  almoco: [
    {
      nome: "Frango Grelhado com Salada Caesar",
      ingredientes: ["1 filé de peito de frango", "Alface romana", "Croutons", "Queijo parmesão", "Molho Caesar"],
      preparo: ["Temperar e grelhar o frango.", "Montar a salada com os ingredientes.", "Fatiar o frango e colocar por cima."],
      vegano: false,
      vegetariano: false,
      calorias: 480,
      serves: 1
    },
    {
      nome: "Bife à Parmegiana com Arroz e Fritas",
      ingredientes: ["1 bife de contrafilé empanado", "Molho de tomate", "Queijo muçarela", "1 xícara de arroz branco", "1 porção de batata frita"],
      preparo: ["Fritar o bife.", "Cobrir com molho e queijo, e gratinar.", "Servir com arroz e fritas."],
      vegano: false,
      vegetariano: false,
      calorias: 850,
      serves: 1
    },
    {
      nome: "Strogonoff de Frango com Arroz e Batata Palha",
      ingredientes: ["200g de peito de frango em cubos", "1/2 lata de creme de leite", "Extrato de tomate, Ketchup, Mostarda", "Arroz branco", "Batata palha"],
      preparo: ["Grelhar o frango.", "Adicionar os molhos e temperos.", "Desligar o fogo e misturar o creme de leite.", "Servir com arroz e batata palha."],
      vegano: false,
      vegetariano: false,
      calorias: 650,
      serves: 1
    },
    {
      nome: "Feijoada (Prato Feito)",
      ingredientes: ["1 concha de feijão preto com carnes (paio, carne seca)", "1 xícara de arroz branco", "1 porção de couve refogada", "Laranja", "Farofa"],
      preparo: ["Aquecer a feijoada.", "Refogar a couve.", "Servir tudo junto no prato."],
      vegano: false,
      vegetariano: false,
      calorias: 780,
      serves: 1
    },
    {
      nome: "Salmão Grelhado com Purê de Mandioquinha",
      ingredientes: ["1 posta de salmão", "2 mandioquinhas (batata baroa)", "1 colher de manteiga", "Sal e endro (dill)"],
      preparo: ["Cozinhar e amassar a mandioquinha, misturar com manteiga e sal.", "Grelhar o salmão com azeite, sal e endro."],
      vegano: false,
      vegetariano: false,
      calorias: 550,
      serves: 1
    },
    {
      nome: "Escondidinho de Carne Seca",
      ingredientes: ["300g de mandioca cozida", "150g de carne seca desfiada e refogada", "1 colher de manteiga de garrafa", "Queijo coalho ralado"],
      preparo: ["Fazer um purê com a mandioca e a manteiga.", "Em um refratário, colocar a carne seca, cobrir com o purê e polvilhar queijo.", "Gratinar no forno."],
      vegano: false,
      vegetariano: false,
      calorias: 620,
      serves: 1
    },
    {
      nome: "Lasanha à Bolonhesa",
      ingredientes: ["Massa de lasanha", "300g de carne moída refogada (molho bolonhesa)", "Molho branco", "Queijo muçarela", "Queijo parmesão"],
      preparo: ["Montar camadas de massa, molho bolonhesa, molho branco e queijo.", "Repetir.", "Finalizar com parmesão e assar."],
      vegano: false,
      vegetariano: false,
      calorias: 710,
      serves: 1
    },
    {
      nome: "Moqueca de Peixe e Camarão",
      ingredientes: ["1 posta de peixe (robalo ou badejo)", "100g de camarão", "Pimentões (vermelho, amarelo)", "Cebola, Tomate", "Leite de coco", "Azeite de dendê"],
      preparo: ["Fazer camadas de temperos e peixe/camarão.", "Regar com leite de coco e dendê.", "Cozinhar em fogo baixo por 20 min.", "Servir com arroz branco."],
      vegano: false,
      vegetariano: false,
      calorias: 680,
      serves: 1
    },
    {
      nome: "Arroz de Pato",
      ingredientes: ["1 xícara de arroz", "150g de pato desfiado (cozido no próprio caldo)", "Linguiça paio", "Laranja (para decorar)"],
      preparo: ["Refogar o arroz e cozinhar no caldo do pato.", "Misturar o pato desfiado e a linguiça.", "Levar ao forno para dourar levemente."],
      vegano: false,
      vegetariano: false,
      calorias: 700,
      serves: 1
    },
    {
      nome: "Yakisoba de Carne e Frango",
      ingredientes: ["Macarrão para Yakisoba", "100g de tiras de carne", "100g de tiras de frango", "Brócolis, Cenoura, Acelga", "Molho shoyu", "Óleo de gergelim"],
      preparo: ["Grelhar as carnes.", "Adicionar os legumes (mais duros primeiro).", "Adicionar o macarrão cozido e o molho.", "Finalizar com óleo de gergelim."],
      vegano: false,
      vegetariano: false,
      calorias: 630,
      serves: 1
    },
    {
      nome: "PF (Prato Feito) - Bife Acebolado",
      ingredientes: ["1 bife (alcatra ou contrafilé)", "1 xícara de arroz", "1/2 concha de feijão", "1 ovo frito", "Salada de alface e tomate", "Cebola em rodelas"],
      preparo: ["Fritar o bife e, na mesma frigideira, fritar a cebola.", "Fritar o ovo.", "Montar o prato com todos os componentes."],
      vegano: false,
      vegetariano: false,
      calorias: 790,
      serves: 1
    },
    {
      nome: "Frango Xadrez",
      ingredientes: ["200g de frango em cubos", "Pimentões coloridos", "Cebola", "Amendoim torrado", "Molho shoyu", "Amido de milho (para engrossar)"],
      preparo: ["Grelhar o frango.", "Saltear os legumes.", "Juntar tudo e adicionar o shoyu.", "Engrossar com amido dissolvido e adicionar amendoim."],
      vegano: false,
      vegetariano: false,
      calorias: 510,
      serves: 1
    },
    {
      nome: "Costelinha de Porco com Barbecue",
      ingredientes: ["1 pedaço de costela de porco", "Molho barbecue", "Batatas rústicas (para acompanhar)"],
      preparo: ["Cozinhar a costela (pressão ou forno baixo) até ficar macia.", "Pincelar o barbecue e levar ao forno alto para caramelizar.", "Servir com batatas rústicas."],
      vegano: false,
      vegetariano: false,
      calorias: 880,
      serves: 1
    },
    {
      nome: "Bacalhoada Gomes de Sá (simplificada)",
      ingredientes: ["200g de bacalhau dessalgado em lascas", "Batatas cozidas", "Cebola", "Azeitonas pretas", "1 ovo cozido", "Azeite"],
      preparo: ["Refogar o bacalhau e a cebola no azeite.", "Adicionar as batatas em rodelas e as azeitonas.", "Servir com o ovo cozido por cima."],
      vegano: false,
      vegetariano: false,
      calorias: 610,
      serves: 1
    },
    {
      nome: "Lasanha de Berinjela (Vegetariana)",
      ingredientes: ["1 berinjela grande", "Molho de tomate", "Queijo muçarela", "Queijo parmesão", "Manjericão"],
      preparo: ["Fatiar a berinjela e grelhar as fatias.", "Montar camadas de berinjela, molho e queijos.", "Assar até gratinar."],
      vegano: false,
      vegetariano: true,
      calorias: 490,
      serves: 1
    },
    {
      nome: "Risoto de Cogumelos (Vegetariano)",
      ingredientes: ["1 xícara de arroz arbóreo", "100g de cogumelos (Paris, Shiitake)", "Caldo de legumes", "Vinho branco", "Manteiga", "Queijo parmesão"],
      preparo: ["Refogar o arroz.", "Adicionar vinho e deixar secar.", "Ir adicionando o caldo quente aos poucos, mexendo sempre.", "Perto do fim, adicionar os cogumelos refogados.", "Finalizar com manteiga e parmesão (mantecatura)."],
      vegano: false,
      vegetariano: true,
      calorias: 530,
      serves: 1
    },
    {
      nome: "Macarrão ao Pesto com Tomate Cereja",
      ingredientes: ["150g de macarrão (penne ou fusilli)", "Molho pesto (manjericão, azeite, nozes/pinoli, parmesão)", "Tomates cereja cortados ao meio"],
      preparo: ["Cozinhar o macarrão.", "Escorrer (reservar 1 concha da água).", "Misturar o pesto ao macarrão, usando a água do cozimento para dar liga.", "Adicionar os tomates cereja."],
      vegano: false,
      vegetariano: true,
      calorias: 500,
      serves: 1
    },
    {
      nome: "Quiche de Alho Poró",
      ingredientes: ["Massa de torta (podre ou folhada)", "2 alhos porós", "3 ovos", "1 lata de creme de leite", "Queijo gruyère ralado"],
      preparo: ["Refogar o alho poró.", "Bater os ovos com o creme de leite e o queijo.", "Misturar o alho poró.", "Forrar uma forma com a massa, despejar o recheio e assar."],
      vegano: false,
      vegetariano: true,
      calorias: 580,
      serves: 1
    },
    {
      nome: "Salada Caprese Completa",
      ingredientes: ["1 bola de muçarela de búfala", "2 tomates maduros", "Folhas de manjericão fresco", "Azeite", "Pão italiano (para acompanhar)"],
      preparo: ["Intercalar fatias de tomate e queijo.", "Regar com azeite e dispor o manjericão.", "Servir com pão."],
      vegano: false,
      vegetariano: true,
      calorias: 410,
      serves: 1
    },
    {
      nome: "Panqueca de Espinafre com Ricota",
      ingredientes: ["Massa de panqueca (com espinafre batido junto)", "Recheio de ricota temperada", "Molho de tomate (para cobrir)"],
      preparo: ["Fazer os discos de panqueca.", "Rechear com a ricota e enrolar.", "Cobrir com molho de tomate e queijo, e gratinar."],
      vegano: false,
      vegetariano: true,
      calorias: 460,
      serves: 2
    },
    {
      nome: "Feijoada Vegana",
      ingredientes: ["1 xícara de feijão preto cozido", "Legumes defumados (cenoura, abóbora)", "Tofu defumado em cubos", "Paio vegano (base de glúten/soja)", "Couve, Arroz, Farofa"],
      preparo: ["Refogar o tofu e o paio vegano.", "Adicionar o feijão e os legumes.", "Apurar o caldo.", "Servir com os acompanhamentos."],
      vegano: true,
      vegetariano: true,
      calorias: 610,
      serves: 1
    },
    {
      nome: "Curry de Grão de Bico e Espinafre",
      ingredientes: ["1 lata de grão de bico", "1 maço de espinafre", "1 cebola", "Alho", "Gengibre", "1 lata de leite de coco", "Pó de curry"],
      preparo: ["Refogar cebola, alho e gengibre.", "Adicionar o curry e o leite de coco.", "Adicionar o grão de bico e cozinhar por 10 min.", "Juntar o espinafre no final até murchar.", "Servir com arroz."],
      vegano: true,
      vegetariano: true,
      calorias: 540,
      serves: 1
    },
    {
      nome: "Moqueca de Banana da Terra (Vegana)",
      ingredientes: ["2 bananas da terra maduras (firmes)", "Pimentões, Cebola, Tomate", "Leite de coco", "Azeite de dendê", "Coentro"],
      preparo: ["Fazer camadas de temperos e banana em rodelas.", "Regar com leite de coco e dendê.", "Cozinhar em fogo baixo por 20 min.", "Finalizar com coentro.", "Servir com arroz e farofa."],
      vegano: true,
      vegetariano: true,
      calorias: 570,
      serves: 1
    },
    {
      nome: "Tofu Grelhado com Gergelim e Legumes Salteados",
      ingredientes: ["1 bloco de tofu firme", "Molho shoyu", "Óleo de gergelim", "Gergelim", "Brócolis, Cenoura, Vagem"],
      preparo: ["Prensar o tofu para tirar a água.", "Cortar em fatias e marinar no shoyu.", "Grelhar o tofu.", "Saltear os legumes.", "Servir o tofu sobre os legumes, polvilhar gergelim."],
      vegano: true,
      vegetariano: true,
      calorias: 430,
      serves: 1
    },
    {
      nome: "Almôndegas de Lentilha ao Molho Sugo",
      ingredientes: ["1 xícara de lentilha cozida e escorrida", "1/2 xícara de aveia", "Temperos (alho, cebola, salsinha)", "Molho de tomate caseiro", "Macarrão"],
      preparo: ["Processar a lentilha, aveia e temperos até dar liga.", "Formar bolinhas e assar ou fritar.", "Servir com o macarrão e o molho de tomate."],
      vegano: true,
      vegetariano: true,
      calorias: 560,
      serves: 1
    },
    {
      nome: "Bobó de Palmito (Vegano)",
      ingredientes: ["1 vidro de palmito pupunha", "500g de mandioca cozida", "1/2 xícara de leite de coco", "Azeite de dendê", "Temperos (cebola, alho, pimentão)"],
      preparo: ["Bater a mandioca cozida com o leite de coco (creme).", "Refogar os temperos no dendê.", "Adicionar o palmito picado e refogar.", "Misturar o creme de mandioca.", "Servir com arroz."],
      vegano: true,
      vegetariano: true,
      calorias: 520,
      serves: 2
    },
    {
      nome: "Hambúrguer de Grão de Bico Caseiro",
      ingredientes: ["1 xícara de grão de bico cozido", "Farinha de aveia (para dar liga)", "Temperos (fumaça em pó, páprica, alho)", "Pão de hambúrguer", "Alface, Tomate, Maionese vegana"],
      preparo: ["Processar o grão de bico e temperos.", "Adicionar aveia até dar ponto de modelar.", "Grelhar o hambúrguer.", "Montar o lanche."],
      vegano: true,
      vegetariano: true,
      calorias: 510,
      serves: 1
    },
    {
      nome: "Salada de Quinoa com Abacate e Manga",
      ingredientes: ["1 xícara de quinoa cozida", "1/2 abacate picado", "1/2 manga picada", "Coentro", "Suco de limão", "Azeite"],
      preparo: ["Misturar a quinoa (fria), o abacate e a manga.", "Temperar com limão, azeite, sal e coentro."],
      vegano: true,
      vegetariano: true,
      calorias: 440,
      serves: 1
    },
    {
      nome: "Yakisoba de Legumes (Vegano)",
      ingredientes: ["Macarrão para Yakisoba", "Brócolis, Cenoura, Acelga, Cogumelos", "Molho shoyu", "Óleo de gergelim", "Amido de milho (para engrossar)"],
      preparo: ["Saltear os legumes e cogumelos.", "Adicionar o macarrão cozido.", "Adicionar o molho shoyu e engrossar com amido.", "Finalizar com óleo de gergelim."],
      vegano: true,
      vegetariano: true,
      calorias: 490,
      serves: 1
    },
    {
      nome: "Macarrão ao Sugo com Manjericão",
      ingredientes: ["150g de espaguete", "1 lata de tomate pelado", "Alho", "Manjericão fresco", "Azeite"],
      preparo: ["Refogar o alho no azeite.", "Adicionar o tomate pelado e amassar.", "Deixar apurar o molho.", "Cozinhar o macarrão e misturar ao molho.", "Finalizar com folhas de manjericão."],
      vegano: true,
      vegetariano: true,
      calorias: 470,
      serves: 1
    }
  ],
  
  // ===========================================
  // Lista 3: Jantar (30 Opções)
  // ===========================================
  jantar: [
    {
      nome: "Sopa de Abóbora com Gengibre",
      ingredientes: ["500g de abóbora cabotiá", "1 pedaço pequeno de gengibre", "1 cebola", "Caldo de legumes", "Azeite e sal"],
      preparo: ["Refogar a cebola e o gengibre.", "Adicionar a abóbora e o caldo.", "Cozinhar até amaciar e bater tudo no liquidificador."],
      vegano: true,
      vegetariano: true,
      calorias: 290,
      serves: 2
    },
    {
      nome: "Caldo Verde (com linguiça)",
      ingredientes: ["3 batatas grandes", "1 linguiça calabresa", "1 maço de couve fatiada fina", "Alho", "Azeite"],
      preparo: ["Cozinhar as batatas e bater no liquidificador com a água.", "Fritar a calabresa e o alho.", "Juntar o caldo de batata.", "Fervere adicionar a couve no último minuto."],
      vegano: false,
      vegetariano: false,
      calorias: 410,
      serves: 2
    },
    {
      nome: "Peito de Frango Grelhado com Legumes no Vapor",
      ingredientes: ["1 filé de peito de frango", "Brócolis", "Cenoura", "Vagem", "Limão, sal e pimenta"],
      preparo: ["Temperar e grelhar o frango.", "Cozinhar os legumes no vapor.", "Servir o frango com os legumes."],
      vegano: false,
      vegetariano: false,
      calorias: 380,
      serves: 1
    },
    {
      nome: "Sopa de Tomate Assado com Manjericão",
      ingredientes: ["5 tomates maduros", "1 cebola", "Alho", "Manjericão fresco", "Azeite", "Pão (para croutons)"],
      preparo: ["Assar os tomates, cebola e alho com azeite.", "Bater tudo no liquidificador com um pouco de água ou caldo.", "Voltar à panela, acertar o sal e servir com manjericão e croutons."],
      vegano: true,
      vegetariano: true,
      calorias: 310,
      serves: 2
    },
    {
      nome: "Omelete de Atum e Cebola",
      ingredientes: ["3 ovos", "1/2 lata de atum", "1/2 cebola picada", "Salsinha", "Manteiga"],
      preparo: ["Refogar a cebola na manteiga.", "Bater os ovos e misturar com o atum e salsinha.", "Despejar na frigideira e cozinhar."],
      vegano: false,
      vegetariano: false,
      calorias: 390,
      serves: 1
    },
    {
      nome: "Wrap de Frango Desfiado e Salada",
      ingredientes: ["1 pão folha (tipo 'Rap10')", "100g de frango desfiado", "Alface americana", "Tomate picado", "1 colher de sopa de maionese"],
      preparo: ["Aquecer o pão folha.", "Misturar o frango com a maionese.", "Rechear o pão com o frango e a salada e enrolar."],
      vegano: false,
      vegetariano: false,
      calorias: 420,
      serves: 1
    },
    {
      nome: "Creme de Ervilha com Bacon",
      ingredientes: ["1 pacote de ervilha congelada", "100g de bacon em cubos", "Caldo de legumes", "Cebola"],
      preparo: ["Fritar o bacon e reservar.", "Na mesma panela, refogar a cebola.", "Adicionar a ervilha e o caldo, cozinhar por 10 min.", "Bater no liquidificador e servir com o bacon por cima."],
      vegano: false,
      vegetariano: false,
      calorias: 400,
      serves: 2
    },
    {
      nome: "Creme de Palmito (Vegetariano)",
      ingredientes: ["1 vidro de palmito", "1 cebola", "1 colher de manteiga", "1 colher de farinha de trigo", "500ml de leite", "1/2 caixa de creme de leite"],
      preparo: ["Refogar a cebola na manteiga.", "Adicionar a farinha e mexer (roux).", "Adicionar o leite aos poucos, mexendo.", "Bater no liquidificador com metade do palmito.", "Voltar à panela, adicionar o resto do palmito picado e o creme de leite."],
      vegano: false,
      vegetariano: true,
      calorias: 360,
      serves: 2
    },
    {
      nome: "Tapioca com Ovos Mexidos e Tomate",
      ingredientes: ["3 colheres de sopa de goma de tapioca", "2 ovos mexidos", "Tomate picado", "Orégano"],
      preparo: ["Fazer a tapioca na frigideira.", "Rechear com os ovos mexidos e o tomate.", "Polvilhar orégano e dobrar."],
      vegano: false,
      vegetariano: true,
      calorias: 340,
      serves: 1
    },
    {
      nome: "Sopa de Lentilha (Simples e Vegana)",
      ingredientes: ["1 xícara de lentilha", "1 cenoura picada", "1 cebola picada", "Alho", "Caldo de legumes", "Louro"],
      preparo: ["Refogar cebola e alho.", "Adicionar a lentilha, cenoura, louro e caldo.", "Cozinhar na pressão por 15 min ou até ficar macia."],
      vegano: true,
      vegetariano: true,
      calorias: 320,
      serves: 2
    },
    {
      nome: "Peixe Assado com Limão e Batatas",
      ingredientes: ["1 posta de peixe branco (tilápia, merluza)", "1 batata em rodelas", "1/2 cebola em rodelas", "Suco de 1 limão", "Azeite", "Alecrim"],
      preparo: ["Em um papel alumínio, fazer uma 'cama' de batata e cebola.", "Colocar o peixe por cima.", "Regar com limão e azeite, adicionar alecrim.", "Fechar o papelote e assar por 25 min."],
      vegano: false,
      vegetariano: false,
      calorias: 430,
      serves: 1
    },
    {
      nome: "Batata Recheada com Brócolis e Requeijão",
      ingredientes: ["1 batata inglesa grande", "1/2 xícara de brócolis cozido", "2 colheres de sopa de requeijão", "Queijo ralado"],
      preparo: ["Assar a batata no forno (ou cozinhar) até ficar macia.", "Fazer um corte e amassar o interior.", "Misturar o brócolis e o requeijão.", "Cobrir com queijo e gratinar."],
      vegano: false,
      vegetariano: true,
      calorias: 450,
      serves: 1
    },
    {
      nome: "Batata Recheada (Vegana)",
      ingredientes: ["1 batata inglesa grande", "1/2 xícara de brócolis cozido", "2 colheres de 'requeijão' de castanha", "Levedura nutricional"],
      preparo: ["Assar a batata.", "Fazer um corte e amassar o interior.", "Misturar o brócolis e o 'requeijão'.", "Cobrir com levedura e gratinar."],
      vegano: true,
      vegetariano: true,
      calorias: 420,
      serves: 1
    },
    {
      nome: "Macarrão Alho e Óleo Simples",
      ingredientes: ["150g de espaguete", "3 dentes de alho fatiados", "Azeite", "Pimenta calabresa (opcional)", "Salsinha"],
      preparo: ["Cozinhar o macarrão.", "Em uma frigideira, dourar o alho lentamente no azeite, sem queimar.", "Adicionar a pimenta.", "Misturar o macarrão cozido na frigideira. Finalizar com salsinha."],
      vegano: true,
      vegetariano: true,
      calorias: 480,
      serves: 1
    },
    {
      nome: "Sanduíche Natural de Atum",
      ingredientes: ["2 fatias de pão integral", "1/2 lata de atum", "1 colher de maionese", "1/2 cenoura ralada", "Alface"],
      preparo: ["Misturar atum, maionese e cenoura.", "Rechear o pão com a pasta e a alface."],
      vegano: false,
      vegetariano: false,
      calorias: 360,
      serves: 1
    },
    {
      nome: "Sanduíche 'Carne Louca' Vegana (Jaca)",
      ingredientes: ["1 pão francês", "1 xícara de carne de jaca desfiada e refogada", "Molho de tomate", "Pimentão", "Cebola"],
      preparo: ["Refogar a jaca desfiada com os temperos e molho de tomate até ficar suculenta.", "Rechear o pão."],
      vegano: true,
      vegetariano: true,
      calorias: 390,
      serves: 1
    },
    {
      nome: "Sopa de Mandioquinha (Salsa)",
      ingredientes: ["3 mandioquinhas", "1 cebola", "Caldo de legumes", "Azeite", "Cebolinha"],
      preparo: ["Refogar a cebola no azeite.", "Adicionar a mandioquinha picada e o caldo.", "Cozinhar até amaciar.", "Bater no liquidificador e servir com cebolinha."],
      vegano: true,
      vegetariano: true,
      calorias: 300,
      serves: 2
    },
    {
      nome: "Canja de Galinha (Tradicional)",
      ingredientes: ["1 coxa de frango", "1/2 xícara de arroz", "1 cenoura picada", "1 batata picada", "Caldo de galinha", "Salsinha"],
      preparo: ["Cozinhar o frango no caldo.", "Retirar, desfiar e voltar ao caldo.", "Adicionar o arroz, cenoura e batata.", "Cozinhar até amaciar. Finalizar com salsinha."],
      vegano: false,
      vegetariano: false,
      calorias: 400,
      serves: 1
    },
    {
      nome: "Sopa de Feijão (Vegana)",
      ingredientes: ["2 xícaras de feijão (carioca ou preto) cozido", "500ml de caldo de legumes", "1/2 xícara de macarrão (conchinha)", "Alho", "Azeite"],
      preparo: ["Bater metade do feijão com o caldo no liquidificador.", "Refogar o alho no azeite.", "Juntar o feijão batido e o feijão em grãos.", "Quando ferver, adicionar o macarrão e cozinhar."],
      vegano: true,
      vegetariano: true,
      calorias: 380,
      serves: 2
    },
    {
      nome: "Tabule (Salada de Trigo)",
      ingredientes: ["1 xícara de trigo para quibe", "1 tomate picado", "1/2 pepino picado", "Muita hortelã e salsinha", "Suco de 1 limão", "Azeite"],
      preparo: ["Hidratar o trigo e escorrer bem.", "Misturar com todos os outros ingredientes picados.", "Temperar generosamente com limão e azeite."],
      vegano: true,
      vegetariano: true,
      calorias: 330,
      serves: 1
    },
    {
      nome: "Quibe Assado (Carne)",
      ingredientes: ["250g de carne moída", "1 xícara de trigo para quibe", "Hortelã", "Cebola"],
      preparo: ["Hidratar o trigo e escorrer.", "Misturar com a carne moída, cebola e hortelã.", "Amassar bem.", "Dispor em um refratário untado e assar."],
      vegano: false,
      vegetariano: false,
      calorias: 460,
      serves: 1
    },
    {
      nome: "Quibe Assado Vegano (Abóbora e Quinoa)",
      ingredientes: ["1 xícara de quinoa cozida", "1 xícara de purê de abóbora", "Hortelã", "Cebola", "Tahine (para dar liga)"],
      preparo: ["Misturar todos os ingredientes.", "Amassar bem.", "Dispor em um refratário untado e assar."],
      vegano: true,
      vegetariano: true,
      calorias: 390,
      serves: 1
    },
    {
      nome: "Abobrinha Recheada com Ricota",
      ingredientes: ["1 abobrinha redonda", "150g de ricota", "Espinafre refogado", "Noz moscada", "Parmesão"],
      preparo: ["Cortar a 'tampa' da abobrinha e retirar o miolo.", "Misturar o miolo refogado com a ricota e o espinafre.", "Rechear a abobrinha, polvilhar parmesão e assar."],
      vegano: false,
      vegetariano: true,
      calorias: 340,
      serves: 1
    },
    {
      nome: "Abobrinha Recheada (Vegana)",
      ingredientes: ["1 abobrinha redonda", "150g de proteína de soja texturizada (PTS)", "Molho de tomate", "Cheiro verde"],
      preparo: ["Hidratar e refogar a PTS com molho de tomate e temperos.", "Retirar o miolo da abobrinha.", "Rechear com a PTS e levar ao forno para assar."],
      vegano: true,
      vegetariano: true,
      calorias: 310,
      serves: 1
    },
    {
      nome: "Pizza Rápida de Frigideira",
      ingredientes: ["1 pão folha (tipo 'Rap10')", "Molho de tomate", "Queijo muçarela", "Orégano"],
      preparo: ["Colocar o pão na frigideira.", "Espalhar o molho, o queijo e o orégano.", "Tampar em fogo baixo até o queijo derreter."],
      vegano: false,
      vegetariano: true,
      calorias: 350,
      serves: 1
    },
    {
      nome: "Pizza Rápida Vegana",
      ingredientes: ["1 pão folha (tipo 'Rap10')", "Molho de tomate", "Queijo vegano (de castanha ou batata)", "Manjericão", "Azeitonas"],
      preparo: ["Colocar o pão na frigideira.", "Espalhar o molho, o queijo vegano e os toppings.", "Tampar em fogo baixo até o queijo amolecer."],
      vegano: true,
      vegetariano: true,
      calorias: 370,
      serves: 1
    },
    {
      nome: "Salada Completa com Grão de Bico",
      ingredientes: ["Folhas (alface, rúcula)", "1 xícara de grão de bico cozido", "Tomate cereja", "Pepino", "Cenoura ralada", "Molho (mostarda, melado, limão)"],
      preparo: ["Montar a base de folhas.", "Adicionar os vegetais e o grão de bico.", "Regar com o molho."],
      vegano: true,
      vegetariano: true,
      calorias: 360,
      serves: 1
    },
    {
      nome: "Ratatouille (Legumes Assados)",
      ingredientes: ["1 berinjela", "1 abobrinha", "1 pimentão vermelho", "Molho de tomate", "Ervas de Provence"],
      preparo: ["Fatiar os legumes finamente.", "Em um refratário, espalhar o molho de tomate.", "Intercalar os legumes fatiados em espiral.", "Regar com azeite, polvilhar ervas e assar."],
      vegano: true,
      vegetariano: true,
      calorias: 300,
      serves: 1
    },
    {
      nome: "Ovos Rancheiros (Shakshuka leve)",
      ingredientes: ["2 ovos", "1/2 lata de tomate pelado", "1/2 cebola", "Alho", "Páprica doce", "Coentro"],
      preparo: ["Refogar a cebola e o alho.", "Adicionar o tomate e a páprica, deixar ferver.", "Quebrar os ovos diretamente no molho.", "Tampar e cozinhar em fogo baixo até a clara firmar."],
      vegano: false,
      vegetariano: true,
      calorias: 370,
      serves: 1
    },
    {
      nome: "Sanduíche de Pernil (Leve)",
      ingredientes: ["1 pão francês", "100g de pernil assado desfiado", "Vinagrete (tomate, cebola, pimentão)"],
      preparo: ["Aquecer o pernil (pode ser no micro-ondas).", "Rechear o pão e cobrir com o vinagrete."],
      vegano: false,
      vegetariano: false,
      calorias: 440,
      serves: 1
    }
  ]
};

export default data;