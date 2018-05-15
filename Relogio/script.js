var notifications = [new Notification("à tua procura.", "assets/people/sam-burriss.jpg"), new Notification("acenou-te.", "assets/people/parker-whitson.jpg"), new Notification("à tua procura.", "assets/people/bill-jones-jr.jpg")];
var notifN = 0;

var people = [new Person("Daniel", "assets/people/joe-gardner.jpg"), new Person("João", "assets/people/erik-lucatero.jpg"), new Person("Francisco", "assets/people/bill-jones-jr.jpg"), new Person("David", "assets/people/parker-whitson.jpg"), new Person("Luís", "assets/people/sam-burriss.jpg"), new Person("Rodrigo", "assets/people/hunter-johnson.jpg"), new Person("Maria", "assets/people/noah-buscher.jpg"), new Person("Marta", "assets/people/hian-oliveira.jpg")];
var bill;
var stores = [new Store("Casa do Zé", "assets/shops/store1.svg"), new Store("Portugália", "assets/shops/restaurant.svg"), new Store("Carills", "assets/shops/carillis.svg"), new Store("Starpennies", "assets/shops/starbucksStore.svg"), new Store("Cachorros do Chico", "assets/shops/hotdog.svg"), new Store("Donuts do Dani", "assets/shops/donutsshop.svg"), new Store("Rei das Bifanas", "assets/shops/bifas.svg"), new Store("Mercado da Mõnîca", "assets/shops/grocery.svg")];
var products = [new Product("Água", "assets/drink/garrafa_de_agua.svg", 1, 1.50, "all"), new Product("Vinho", "assets/drink/winecup.svg", 1, 1.75, "all"), new Product("7UP", "assets/drink/soda.svg", 1, 1.30, "all"), new Product("Caril", "assets/food/curry.svg", 2, 4, ["Carills"]), /*new Product("João Daniel do bom", "assets/people/sam-burriss.jpg", 2, 69, ["Casa do Zé"]),*/ new Product("Tofu", "assets/food/tofu.svg", 2, 4, ["Carills"]), new Product("Pizza", "assets/food/pizza2.svg", 2, 3.50, ["Carills"]),
new Product("Caneca de Cerveja", "assets/drink/beer_caneca.svg", 1, 2, "all"), new Product("Imperial", "assets/drink/beer_fino.svg", 1, 1.50, ["Portugália"]), new Product("Daiquiri", "assets/drink/daiquiri.svg", 1, 2.50 ,["Portugália"]), new Product("Milk shake", "assets/drink/starbucks_milkshake.svg", 1, 1.80, ["Donuts do Dani"]), new Product("Café", "assets/drink/starbucks.svg", 1, 1.65, "all"),
new Product("Whisky", "assets/drink/whisky.svg", 1, 8.20, ["Portugália"]),

new Product("Batatas fritas", "assets/food/batata_frita.svg", 2, 1.40,"all"), new Product("Frango", "assets/food/chicken_leg.svg", 2, 4, ["Casa do Zé"]), new Product("Ham burguer", "assets/food/hamburger.svg", 2, 4, ["Rei das Bifanas"]), new Product("X-burguer", "assets/food/hamburguer.svg", 2, 5.20, ["Cachorros do Chico"]), new Product("Cachorro quente", "assets/food/hotdog.svg", 2, 4, ["Cachorros do Chico"]), new Product("Noodles", "assets/food/noodles.svg", 2, 3, ["Carills"]),
new Product("Pizza Ham & Cheese", "assets/food/pizza_box.svg", 2, 4.50, ["Casa do Zé"]), new Product("Presunto", "assets/food/presunto.svg", 2, 2.50, ["Portugália"]), new Product("Pizza", "assets/food/pizza.svg", 2, 3.50, ["Cachorros do Chico"]), new Product("Sanduíche", "assets/food/sandwich.svg", 2, 2.30, "all"), new Product("Sushi", "assets/food/sushi.svg", 2, 5.50, ["Carills"]), new Product("Wrap", "assets/food/wrap.svg", 2, 3.5, ["Carills"]),

new Product("Bolachas", "assets/candy/bolachinhas.svg", 3, 2.60, ["Donuts do Dani", "Starbucks"]), new Product("Croissant", "assets/candy/croissant.svg", 3, 4.20, ["Donuts do Dani", "Portugália", "Starbucks", "Carills"]), new Product("Cupcake", "assets/candy/cupcake.svg", 3, 1.80, ["Donuts do Dani", "Portugália"]), new Product("Cupcake Simples", "assets/candy/cupcake2.svg", 3, 1.60, ["Donuts do Dani", "Rei das Bifanas"]), new Product("Donuts", "assets/candy/donut.svg", 3, 2.20, ["Donuts do Dani"]),
new Product("Donuts", "assets/candy/donut2.svg", 3, 2.60, ["Donuts do Dani"]), new Product("Donuts", "assets/candy/donut3.svg", 3, 2.80, ["Donuts do Dani"]), new Product("Gelado", "assets/candy/icecream.svg", 3, 3.10, "all"), new Product("Vanilla & Chocolate", "assets/candy/icecream_2.svg", 3, 3.80, ["Donuts do Dani"]), new Product("Sorvete", "assets/candy/icecream_3.svg", 3, 1.30, "all"), new Product("Copo de Gelado", "assets/candy/icecream_4.svg", 3, 3.20, ["Donuts do Dani", "Portugália"]),
new Product("Lollipop", "assets/candy/lollipop.svg", 3, 0.80, ["Donuts do Dani"]), new Product("Fruta", "assets/candy/melancia.svg", 3, 1.70, "all"), new Product("Panqueca", "assets/candy/pancake.svg", 3, 4.30, ["Donuts do Dani", "Portugália", "Carills"])
];
//new Act(name, img, description, stage, day, hour, minute) 
//1 - Lopes-Graça, 2 - Zeca Afonso, 3 - Giacometti
var acts = [
new Act("Selma Uamusse", "assets/artists/selmauamusse.jpg", "Ninguém conheçe, mas é de Moçambique. Branko team?", 1, "09", 19, 0),
new Act("Salvador Sobral", "assets/artists/salvadorsobral.jpg", "Um músico jazz free-style é acorrentado à fama e à política, passando ao mainstream, comparado com os 'grandes' nomes do momento como Piruka e D.A.M.A. É o seu grande regresso aos palcos e ao mundo da música de jeito, agora a cantar algo mais que a 'Amar Pelos Dois', depois da operação ao coração que fez parar o país.", 1, "09", 21, 0),
new Act("The Lemon Lovers", "assets/artists/thelemonlovers.jpg", "Boas críticas e boa música, mas deviam mudar de nome. Não parece nada os sons que tocam. Suaves...", 2, "09", 22, 0),
new Act("Slow J", "assets/artists/slowj.jpg", "O mítico rapaz mulato que revolucionou o rap português, adicionando mais vocabulário às músicas do que só o típico yeah. O moço de Setúbal tão aclamado no Super Bock Super Rock que conseguiu no momento confirmação para a edição seguinte. Provavelmente o único rapper que tanto os azeiteiros como os hipsters conseguem gostar, unidor de fronteiras e quebrador de barreiras, talvez pela sua mulatês. O ídolo de todos nós!", 2, "09", 23, 0),
new Act("Jerónimo!", "assets/artists/jeronimo.jpg", "Porque 'o Bons Sons não se faz sem o pessoal de Leiria', disse o próprio diretor do festival, temos a banda experimentação dos três irmãos Jerónimo. Tendo ainda só um single, vão buscar experiência às suas barbas hipsters, ao serviço à mesa e aturamento dos bêbados no café do Hostel Altas, e ainda às bandas onde estão integrados: Few Fingers, Les Crazy Coconuts e Nice Weather For Ducks. Tbh não sabemos como têm tempo.", 3, "09", 16, 0), 
new Act("Lince", "assets/artists/lince.jpg", "A única alterna que não quis ser promovida pela Antena 3, indo à Rádio Comercial, talvez numa jogada para tentar atrair as massas e chegar a outro público. Não resultou, esse público não gosta disso. Mas até é giro, faz lembrar a Surma.", 3, "09", 18, 0),
new Act("Mazgani", "", "Esteve em tour. Parece deep. Tem nome do mar.", 1, "10", 2, 2), 
new Act("S. Pedro", "", "Não é um santo a sério, mas a sua última compilação é dos céus. Sim, porque aquilo quase nem é albúm. O rapaz disse que só pegou em canções soltas random que tinha feitas e editou. Mas boy aquilo são canções tão bonitas que ele adotar esse esquema tbh. Será que vai fazer random.org na setlist, ou vai tocar algo novo? Ele promete.", 1, "10", 2, 2), 
new Act("Sara Tavares", "", "Sempre confundida com a Raquel Tavares, está é a mais escura mas também a com voz bonita. Foi ao Festival Eurovisão da Canção ainda há uns dias com o Branko. Acham que dá par?", 2, "10", 2, 2), 
new Act("Mirror People", "", "Mais outros portugueses que acharam boa ideia meter nomes em ingês. Serão bolas de disco?", 2, "10", 2, 2), 
new Act("10 000 Russos", "", "Não são 10 000, não são russos.", 3, "10", 2, 2), 
new Act("Linda Martini", "", "O nome é de um quadro italiano, quem diria! Provavelmente a única banda que só tem uma rapariga e não é a vocalista nem é a que fala mais. Lançaram albúm novo e estão em todo o lado e é mexido, é atribulado. Talvez não seja o seu tipo de balada, mas as letras ficam na cabeça.", 3, "12", 2, 2), 
new Act("Meta", "", "É uma moça com sons crus e é da MPAGDP, por isso deve ser bom.", 3, "10", 2, 2), 
new Act("Luís Severo", "", "", 1, "12", 2, 2), 
new Act("Moonshiners", "", "Não confundir com o heavy metal dos Moonspell. Destes ninguém ouviu falar, ainda ;)", 1, "12", 2, 2), 
new Act("Dead Combo", "", "Aquela banda com a música calma e a capa do albúm engraçado e uma pistola acho eu. Nem parecem portugueses mas são cá da terra. Talvez por estarem mortos, nem sei.", 2, "12", 2, 2), 
new Act("Lena d’Água e Primeira Dama", "", "A diva pop portuguesa que triunfou nos anos '80 está de regresso. Com as suas participações nas últimas edições do Festival RTP da Canção e na série original de Nuno Markl '1986', a autora do albúm revolucionário 'Perto de Ti' (tudo obras de arte a ver/ouvir) não mostra sinais de reforma. Desta vez aliado de um dos BFF's do Filipe Sambado, Lena e Primeira Dama, que na realidade é um moço (mas isso agora já não interessa nada), vão aliar forças e fazer o que só Deus sabe. Talvez tocar a música com os Ciclo Preparatório, isso era bom!", 3, "12", 2, 2), 
new Act("Monday", "", "A irmã mais produtiva das Golden Slumber (a outra é da Vaarwell), aquela que tem dado de falar mais. A rapariga atua no domingo porque não à festival no dia seguinte. Ela canta, ela toca e ela é amiga do Samuel Úria. Queremos número miga!", 3, "12", 2, 2), 
];
var swipes = [];
// Screen(name, id, initFunc, constFuncN, exitFunc, solo, homeButton, header, footer, ...footarg)
var screens = [new Screen("Lock", "lock-screen", "", "", "", "lock-screen", "lock-screen", false, false),
new Screen("Main", "main-screen", "", "addNotification", "", "main-solo", "lock-screen", false, false),
new Screen("App", "app-screen", "", "", "", "main-solo", "main-screen", "clock", false),
new Screen("Amigos", "friend-fscreen", "distancePeople(); setPeopleList();", "reSetDistance", "", "", "", true, false),
new Screen("Contacto", "friend-detail-fscreen", "", "showPersonInfo", "", "", "", true, true, "Mapa", 'loadScreen("map-fscreen", "prevArg")', "Acenar", 'shakePic()'),
new Screen("Mapa", "map-fscreen", "pinMotion();", "aproxPerson", "", "", "", true, true, "Fim", 'loadScreen("friend-detail-fscreen")', "", "", "", ""),
new Screen("Bússola", "compass-fscreen", "", "arrowAnimation(); aproxPerson", "arrowEnd();", "", "", true, true, "Fim", 'loadScreen("friend-detail-fscreen")', "", "", "", ""),
new Screen("Escolher por", "choose-oscreen", "", "", "", "", "", true, false),
new Screen("Barracas", "store-oscreen", "setStoresList();", "", "", "", "", true, false),
new Screen("Bebidas", "drinks-oscreen", "", "setProductsList", "emptyGrids(this.solo); removeMessageFromSolo(this.solo);", "products-oswipe", "", true, true, "X", "confirmCancelOrder()", "", 'loadScreen("cart-oscreen")', "✔ 0", 'loadScreen("cart-oscreen")'),
new Screen("Snacks", "snacks-oscreen", "", "", "", "products-oswipe", "", true, true, "X", "confirmCancelOrder()", "", 'loadScreen("cart-oscreen")', "✔ 0", 'loadScreen("cart-oscreen")'),
new Screen("Doces", "sweets-oscreen", "", "", "", "products-oswipe", "", true, true, "X", "confirmCancelOrder()", "", 'loadScreen("cart-oscreen")', "✔ 0", 'loadScreen("cart-oscreen")'),
new Screen("Mochila", "cart-oscreen", "", "setCartList", "emptyGrids(this.solo); removeMessageFromSolo(this.solo);", "", "", true, true, "X", "confirmCancelOrder()", "", 'loadScreen("pickup-oscreen")', "", 'loadScreen("pickup-oscreen")'),
new Screen("Levantar", "pickup-oscreen", "", "updateTimeFooter", "", "", "", true, true, "X", "confirmCancelOrder()", getTime(), 'loadScreen("confirm-oscreen")', "✔ 0", 'loadScreen("confirm-oscreen")'),
new Screen("Confirmar", "confirm-oscreen", "", "setConfirmOrderList", "emptyGrids(this.solo); removeMessageFromSolo(this.solo);", "", "", true, true, "X", "confirmCancelOrder()", "0.00€", "stopActPopup('confirmOrder();', 'Confirma a encomenda?')", "Pagar", "stopActPopup('confirmOrder();', 'Confirma a encomenda?')"),
new Screen("Dias", "days-lscreen", "", "", "", "", "", true, false),
new Screen("Lopes-Graça", "stage1-lscreen", "", "setActsList", "emptyGrids(this.solo); removeMessageFromSolo(this.solo);", "stages-lswipe", "", true, false),
new Screen("Zeca Afonso", "stage2-lscreen", "", "", "", "stages-lswipe", "", true, false),
new Screen("Giacometti", "stage3-lscreen", "", "", "", "stages-lswipe", "", true, false),
new Screen("Artista", "act-details-lscreen", "", "showActInfo", "", "", "", true, true, "Mapa", "", "Notificar", 'loadScreen("notify-lscreen");'),
new Screen("Notificar", "notify-lscreen", "", "", "", "", "", true, true, "X", "goBack();", "20:00", "remindAct();", "✔", "remindAct();"),
];
var currentSolo;
var currentScreen;
var intervalVar;
var prevScreenArgs;
var homePressed = false;
var popup;

/************************************ CLOCK ************************************/
function loadClocks() {
    var clocks = document.getElementsByClassName("clock");
    for (var i = 0; i < clocks.length; i++) {
        updateClock(clocks[i]);
    }
}

function updateClock(clock) {
    clock.innerText = getTime();
    setTimeout(function () {
        updateClock(clock);
    }, 1000);
}

function getTime() {
    var time = new Date();
    return timeToString(time.getHours(), 24) + ":" + timeToString(time.getMinutes(), 60);
}

function timeToString(value, limit) {
    var stringTime = "";
    if (value % limit < 10) {
        stringTime += "0";
    }
    stringTime += value % limit;
    return stringTime;
}

/************************************ ECRAS ESPECIFICOS ************************************/
// ------------------- MAIN
function addNotification() {
    var cur = (notifN++) % notifications.length;
    cloneElementToBegin("table-model", "notification-bar", [notifications[cur].img, notifications[cur].name]);
}

// ------------------- FRIENDS
function setPeopleList() {
    for (var i = 0; i < people.length; i++) {
        var el = cloneElementTo("person-model", "gridFriends", [people[i].img, people[i].name, people[i].distance + "m"]);
        el.setAttribute("onclick", "loadScreen('friend-detail-fscreen', '" + people[i].name + "');");
    }
}

function distancePeople() {
    for (var i = 0; i < people.length; i++) {
        people[i].calcDistance(i);
    }
}

function randomDistance() {
    var distances = document.getElementsByClassName("distance");
    for (var d = 0; d < distances.length; d++) {
        distances[d].innerHTML = randomNumberGenerator(d * 150, (d + 1) * 150);
    }
}

function reSetDistance() {
    reSortPeopleList();
    var peopleHTML = document.getElementById("gridFriends").children;
    for (var i = 0; i < people.length; i++) {
        setAttributes(peopleHTML[i], [people[i].img, people[i].name, people[i].distance + "m"]);
        peopleHTML[i].setAttribute("onclick", "loadScreen('friend-detail-fscreen', '" + people[i].name + "');");
    }
}

function reSortPeopleList() {
    people.sort(function(a, b) {
        return a.distance - b.distance;
    });
}

function showPersonInfo(personName) {
    var person = findPersonWithName(personName);
    var screen = document.getElementsByClassName("friendDetail")[0];
    prevScreenArgs = personName;
    setAttributes(screen, [person.img, person.name, person.distance + "m"]);
}

function shakePic() {
    var screen = document.getElementsByClassName("friendDetail")[0];
    screen.style.animation = "shake 0.5s";
    screen.style.animationIterationCount = "3";
    setTimeout(function() {
        screen.style.animation = "";
    }, 1500);
}

function aproxPerson(personName) {
    var person = findPersonWithName(personName);
    var iniDist = (person.distance / 20) + 1;
    var currScreen = currentScreen;
    editFooter(currentScreen, "Fim", person.name, person.distance + "m");
    var inte = setInterval(function () {
        person.distance = parseInt(eval(person.distance - iniDist).toFixed(0));
        if (person.distance < 0) {
            person.distance = 0;
            clearInterval(inte);
        } else if (currScreen != currentScreen) {
            clearInterval(inte);
            return ;
        }
        editFooter(currentScreen, "Fim", person.name, person.distance + "m");
    }, 1000);
}

function arrowAnimation() {
    var limit = 8;
    function rotateArrow() {
        if (!limit) {
            clearInterval(intervalVar);
        }
        limit--;
        var degree = randomNumberGenerator(0, 360);
        var arg = "rotate(" + degree + "deg)";
        document.getElementById("arrowDirection").style.transform = arg;
    }

    intervalVar = setInterval(rotateArrow, 2000);
    document.getElementById("arrowDirection").style.animationDelay = eval(-count) + "s";
}

function arrowEnd() {
    clearInterval(intervalVar);
}

// -------------------------- ORDER
function setProducts(prodsObjs, grid, forceopenclose, delvsshrink, locktoggle) {
    for (var p = 0; p < prodsObjs.length; p++) {
        var el = cloneElementTo("item-model", grid, [prodsObjs[p].svg, prodsObjs[p].name, "€" + Number(prodsObjs[p].price).toFixed(2), "0", "0"]);
        var eli = el.getElementsByClassName("item-info")[0];
        eli.setAttribute("onclick", "toggleQuantityEditor(event, '" + prodsObjs[p].name + "', " + locktoggle + ");");
        el.getElementsByClassName("item-plus")[0].setAttribute("onclick", "toggleQuantity(event, '" + prodsObjs[p].name + "', 1, " + delvsshrink + ");");
        el.getElementsByClassName("item-minus")[0].setAttribute("onclick", "toggleQuantity(event, '" + prodsObjs[p].name + "', -1, " + delvsshrink + ");");
        var elItem = findBillItemWithProduct(prodsObjs[p].name);
        if ((undefined !== elItem && 0 === elItem.count) || undefined === elItem) {
            prodsObjs[p].togglerActive = false;
        }
        if (forceopenclose || (prodsObjs[p].togglerActive && forceopenclose == undefined)) {
            el.getElementsByClassName("item-quant-bubble")[0].style.display = "none";
            el.getElementsByClassName("item-quant-editor")[0].style.display = "flex";
        } else {
            el.getElementsByClassName("item-quant-editor")[0].style.display = "none";
            el.getElementsByClassName("item-quant-bubble")[0].style.display = "block";
        }
        updateProdQuant(el, prodsObjs[p].name);
    }
    updateProdFooter();
}

function setProductsListType(prodsObjs, type, grid) {
    prodsObjs = filterProductsWithType(prodsObjs, type);
    setProducts(prodsObjs, grid, undefined, false, false);
}

function toggleQuantityEditor(ev, prodName, locktoggle) {
    var elItem = ev.currentTarget.parentElement;
    if (!locktoggle) updateQuantityEditor(elItem, prodName);
}

function updateQuantityEditor(elItem, prodName) {
    var elQuant = elItem.getElementsByClassName("item-quant-editor")[0];
    var prod = findProductWithName(prodName);
    if (prod.togglerActive) {
        elQuant.style.display = "none";
        elItem.getElementsByClassName("item-quant-bubble")[0].style.display = "block";
        prod.togglerActive = false;
    } else {
        if (!findBillItemWithProduct(prodName)) deltaProdQuant(prodName, 1);
        elItem.getElementsByClassName("item-quant-bubble")[0].style.display = "none";
        elQuant.style.display = "flex";
        prod.togglerActive = true;
    }
    updateProdQuant(elItem, prodName);
    updateProdFooter();
}

function toggleQuantity(ev, prodName, increment, delvsshrink) {
    var el = ev.currentTarget.parentElement.parentElement;
    if (!deltaProdQuant(prodName, increment)) {
        if (delvsshrink) {
            el.parentElement.removeChild(el);
            emptyCartCheck();
        } else {
            updateQuantityEditor(el, prodName);
        }
    }
    updateProdQuant(el, prodName);
    updateProdFooter();
}

function deltaProdQuant(prodName, increment) {
    if (increment == 1) {
        return bill.addItem(prodName);
    } else if (increment == -1) {
        return bill.removeItem(prodName);
    } else console.log("go fuck urself");
}

function updateProdFooter() {
    function checkempycart() {
        if (!bill.billcount) return false;
    }
    editFooter(currentSolo, "keep", "€" + Number(bill.billprice).toFixed(2), "✔ " + bill.billcount, checkempycart);
}

function updateProdQuant(element, prodName) {
    var prodObj = findProductWithName(prodName);
    setAttributes(element, [prodObj.svg, prodObj.name, "€" + Number(prodObj.price).toFixed(2), bill.getQuantItem(prodName), bill.getQuantItem(prodName)]);
}

function setProductsList(storeName) {
    var prodsObjs;
    if (bill == undefined || (bill != undefined && bill.store != storeName)) {
        bill = new Bill(storeName);
    }
    if (storeName == "all") {
        prodsObjs = products;
    } else if (storeName != undefined) {
        addMessageToSolo("products-oswipe", storeName);
        prodsObjs = filterAllProductsInStore(storeName);
    } else {
        console.log("Ups!");
    }
    setProductsListType(prodsObjs, 1, "prod-drinks-grid");
    setProductsListType(prodsObjs, 2, "prod-snacks-grid");
    setProductsListType(prodsObjs, 3, "prod-sweets-grid");
    updateProdFooter();
}

function emptyGrids(solo) {
    var solo = document.getElementById(solo);
    var grids = solo.getElementsByClassName("grid")
    for (var i = 0; i < grids.length; i++) {
        grids[i].innerHTML = "";
    }
}

function setStoresList() {
    for (var s = 0; s < stores.length; s++) {
        var el = cloneElementTo("store-model", "store-grid", [stores[s].svg, stores[s].name]);
        el.setAttribute("onclick", "loadScreen('drinks-oscreen', '" + stores[s].name + "');");
    }
}

function setCartList() {
    var prodsObjs = [];
    for (var o = 0; o < bill.billitems.length; o++) {
        prodsObjs.push(findProductWithName(bill.billitems[o].name));
    }
    setProducts(prodsObjs, "cart-grid", true, true, false);
    emptyCartCheck();
    updateProdFooter();
}

function emptyCartCheck() {
    if (bill.billitems.length == 0) {
        addMessageToSolo("cart-oscreen", "Nenhum item na sua mochila.");
    }
}

function changeTime(segment, increment) {
    var segmentEl = document.getElementById(segment);
    if (segmentEl.classList.contains("timething-quant-hours")) {
        if (bill.pickuptime[0] + increment >= 0 && bill.pickuptime[0] + increment <= 5) {
            bill.pickuptime[0] += increment;
            segmentEl.innerHTML = "";
            if (bill.pickuptime[0] < 10) segmentEl.innerHTML = "0";
            segmentEl.innerHTML += bill.pickuptime[0];
        } else return true;
    } else if (segmentEl.classList.contains("timething-quant-minutes")) {
        if (bill.pickuptime[1] + increment >= 0 && bill.pickuptime[1] + increment < 60) {
            bill.pickuptime[1] += increment;
            segmentEl.innerHTML = "";
            if (bill.pickuptime[1] < 10) segmentEl.innerHTML = "0";
            segmentEl.innerHTML += bill.pickuptime[1];
        } else if (bill.pickuptime[1] + increment == 60 && !changeTime(segmentEl.parentElement.parentElement.getElementsByClassName("timething-quant-hours")[0], 1)) {
            bill.pickuptime[1] = 0;
            segmentEl.innerHTML = "00";
        }
    }
    updateTimeFooter();
}

function getFormatedPickupTime() {
    var time = new Date();
    var overflow = time.getMinutes() + bill.pickuptime[1] >= 60 ? 1 : 0;
    return timeToString(time.getHours() + bill.pickuptime[0] + overflow, 24) + ":" + timeToString(time.getMinutes() + bill.pickuptime[1], 60);
}

function updateTimeFooter() {
    editFooter("pickup-oscreen", "keep", getFormatedPickupTime(), "✔ " + bill.billcount);
}

function confirmOrder() {
    var pickuptime = bill.pickuptime[0] * 1000 * 60 + (bill.pickuptime[1] + 5) * 1000;
	var store = bill.store;
    loadScreen("app-screen");
    addNotificationPopup(pickuptime, ["A sua encomenda está pronta na barraca " + store + "!", "", "", "", "", "display: none", "Ok", "removePopup();", ""]);
    //cloneElementToBegin("table-model", "notification-bar", ["assets/food/sandwich.svg", "A sua encomenda está pronta na barraca " + store + "!"]);
    bill = undefined;
    document.getElementById("o-hours-thing-quant").innerHTML = "00";
    document.getElementById("o-minutes-thing-quant").innerHTML = "05";
}

function chooseStoreToPickUp() {
	var possibleStores = {};
	for (var i = 0; i < bill.billitems.length; i++) {
		for (var j = 0; j < findProductWithName(bill.billitems[i].name).stores.length; j++) {
			if (!possibleStores.hasOwnProperty(findProductWithName(bill.billitems[i].name).stores[j])) {
				possibleStores[findProductWithName(bill.billitems[i].name).stores[j]] = 1;
			} else {
				possibleStores[findProductWithName(bill.billitems[i].name).stores[j]] ++;
			}
		}
	}
	var maxStore;
	var max = 0;
	for (var store in possibleStores) {
		if (possibleStores.hasOwnProperty(store)) {
			if (possibleStores[store] > max) {
				max = possibleStores[store];
				maxStore = store;
			}
		}
	}
	return maxStore;
}

function confirmCancelOrder(productS) {
    stopActPopup('loadScreen("choose-oscreen"); bill = undefined;', 'Irá cancelar a sua encomenda. Tem a certeza?');
}

function setConfirmOrderList() {
    var prodsObjs = [];
    for (var o = 0; o < bill.billitems.length; o++) {
        prodsObjs.push(findProductWithName(bill.billitems[o].name));
    }
    bill.store = bill.store == "all" ? chooseStoreToPickUp() : bill.store;
    setProducts(prodsObjs, "confirm-grid", false, true, true);
    editFooter(currentSolo, "keep", "€" + Number(bill.billprice).toFixed(2), "keep");
    addMessageToSolo("confirm-oscreen", "Loja: "+ bill.store +"<br>Hora: " + getFormatedPickupTime());
}

// -------------------------- LINEUP

function setActsList(day) {
    addMessageToSolo("stages-lswipe", "Dia " + day);
    var dayActs = filterActsInDay(acts, day);
    setActsListStage(dayActs, 1, "stage1-grid");
    setActsListStage(dayActs, 2, "stage2-grid");
    setActsListStage(dayActs, 3, "stage3-grid");
}

function setActsListStage(dayActs, stage, grid) {
    stageActs = filterActsInStage(dayActs, stage);
    setActs(stageActs, grid);
}

function setActs(acts, grid) {
    for (var a = 0; a < acts.length; a++) {
        var el = cloneElementTo("act-model", grid, [timeToString(acts[a].time[0], 24) + ":" + timeToString(acts[a].time[1], 60), acts[a].name]);
        el.setAttribute("onclick", "loadScreen('act-details-lscreen', '" + acts[a].name + "');");
    }
}

function filterActsInDay(acts, day) {
    return acts.filter(function(a) {
        if (day == a.day)
            return true;
    });
}

function filterActsInStage(acts, stage) {
    return acts.filter(function(a) {
        if (stage == a.stage)
            return true;
    });
}

function findActWithName(name) {
    return acts.find(function(act) {
        return act.name == name;
    });
}

function showActInfo(actName) {
    var act = findActWithName(actName);
    var screen = document.getElementsByClassName("act-details")[0];
    setAttributes(screen, [act.name, act.day, timeToString(act.time[0], 24) + ":" + timeToString(act.time[1], 60), act.img, act.description]);
}

function remindAct() {
    var act = document.getElementsByClassName("act-title")[0].innerText;
    var actObj = findActWithName(act);
    var mess = "dentro de ";
    if (eval(document.getElementById("l-hours-thing-quant").innerHTML) > 0) {
        mess += eval(document.getElementById("l-hours-thing-quant").innerHTML) + "h ";
        if (eval(document.getElementById("l-minutes-thing-quant").innerHTML) > 0) {
            mess += "e ";
        }
    }
    if (eval(document.getElementById("l-minutes-thing-quant").innerHTML) > 0) {
        mess += eval(document.getElementById("l-minutes-thing-quant").innerHTML) + " mins";
    }
    addPopup(currentScreen, ["Notificação agendada!", "", "", "", "", "display: none", "Ok", "removePopup(); goBack();", ""]);
    addNotificationPopup(1 * 1000, [act + " vai atuar em breve", "", "", "", "", "display: none", "Ok", "removePopup(); cloneElementToBegin('table-model', 'notification-bar', ['" + actObj.img + "','" + mess + ".']);", ""]);
    document.getElementById("l-hours-thing-quant").innerHTML = "00";
    document.getElementById("l-minutes-thing-quant").innerHTML = "05";
}

function changeReminderTime(segment, increment) {
    var segmentEl = document.getElementById(segment);
    var val = eval(segmentEl.innerHTML) + increment;
    if (segmentEl.classList.contains("timething-quant-hours")) {
        if (val >= 0 && val <= 5) {
            segmentEl.innerHTML = "";
            if (val < 10) segmentEl.innerHTML = "0";
            segmentEl.innerHTML += val;
        } else return true;
    } else if (segmentEl.classList.contains("timething-quant-minutes")) {
        if (val >= 0 && val < 60) {
            segmentEl.innerHTML = "";
            if (val < 10) segmentEl.innerHTML = "0";
            segmentEl.innerHTML += val;
        } else if (val == 60 && !changeReminderTime(segmentEl.parentElement.parentElement.getElementsByClassName("timething-quant-hours")[0].id, 1)) {
            segmentEl.innerHTML = "00";
        }
    }
}



/************************************ CLONE ************************************/
function cloneElement(classModel) {
    var model = document.getElementById("models").getElementsByClassName(classModel)[0].firstElementChild;
    return model.cloneNode(true);
}

/*function cloneElementToByClass(classModel, idGram, classParent, [args]) {
    var copy = cloneElement(classModel);
    setAttributes(copy, [args]);
    return document.getElementById(idGram).getElementsByClassName(classParent)[0].appendChild(copy);
}*/

function cloneElementToBegin(classModel, idParent, args) {
    var copy = cloneElement(classModel);
    setAttributes(copy, args);
    var children = document.getElementById(idParent).children;
    if (children.length && children[0].classList.contains("header")) {
        return document.getElementById(idParent).insertBefore(copy, children[1]);
    } else {
        return document.getElementById(idParent).insertBefore(copy, children[0]);
    }
}

function cloneElementTo(classModel, idParent, args) {
    var copy = cloneElement(classModel);
    setAttributes(copy, args);
    return document.getElementById(idParent).appendChild(copy);
}

function setAttributes(element, args) {
    var atributEls = element.classList.contains("attr-m") ? [element] : element.getElementsByClassName("attr-m");
    for (var i = 0; i < atributEls.length; i++) {
        var atributReq = atributEls[i].getAttribute("attrm").split(" ");
        for (var a = 0; a < atributReq.length; a++) {
            if (args[i * atributReq.length + a] === "keep") {
            } else if (atributReq[a] === "innerHTML") {
                atributEls[i].innerHTML = args[i * atributReq.length + a];
            } else if (atributReq[a] === "class") {
                atributEls[i].classList.remove(atributReq[a] == "info" ? "button" : "info");
                atributEls[i].classList.add(args[i * atributReq.length + a]);
            } else {
                atributEls[i].setAttribute(atributReq[a], args[i * atributReq.length + a]);//VAI MARAR
            }
        }
    }
}

/************************************ GERIR ECRAS ************************************/
function findScreenWithID(screenID) {
    function findScreen(screen) {
        return screen.id == screenID;
    }
    return screens.find(findScreen);
}

function findPersonWithName(name) {
    function findPerson(person) {
        return person.name == name;
    }
    return people.find(findPerson);
}

function findSoloWithID(soloID) {
    function findSolo(solo) {
        return solo.id == soloID;
    }
    return swipes.find(findSolo);
}

function findStoreWithName(storeName) {
    function findStore(store) {
        return store.name == storeName;
    }
    return stores.find(findStore);
}

function findProductWithName(prodName) {
    function findProduct(prod) {
        return prod.name == prodName;
    }
    return products.find(findProduct);
}

function findBillItemWithProduct(prodName) {
    function findProductItem(item) {
        return item.name == prodName;
    }
    return bill.billitems.find(findProductItem);
}

function filterAllProductsWithType(typeName) {
    return filterProductsWithType(products, typeName);
}

function filterAllProductsInStore(storeName) {
    return filterProductsInStore(products, storeName);
}

function filterProductsWithType(productS, typeName) {
    function filterType(prod) {
        return prod.type == typeName;
    }
    return productS.filter(filterType);
}

function filterProductsInStore(productS, storeName) {
    function filterInStore(prod) {
        return prod.stores.includes(storeName);
    }
    return productS.filter(filterInStore);
}

function loadScreen(screenID, ...args) { //loadScreen -> moveScreen -> loadSolo -> initScreen
    var nextSoloObj = findSoloWithID(findScreenWithID(screenID).solo);
    var currentScreenObj = findScreenWithID(currentScreen);
    if (currentScreenObj != undefined) {
        var prevSoloObj = findSoloWithID(findSoloWithID(currentScreenObj.solo).prevSolo);
    }
    //if (savePrev) {
    if (currentScreenObj != undefined && prevSoloObj != undefined) {
        if (nextSoloObj.prevSolo == undefined)
            nextSoloObj.prevSolo = (prevSoloObj.id == nextSoloObj.id ? prevSoloObj.prevSolo : currentScreenObj.solo);
    } else if (currentScreenObj != undefined){
        nextSoloObj.prevSolo = currentScreenObj.solo;
    }
    if (findSoloWithID(currentSolo)) findSoloWithID(currentSolo).translate = document.getElementById("swipe-indicator-move").style.transform ? document.getElementById("swipe-indicator-move").style.transform : findSoloWithID(currentSolo).translate;
    /*} else if (nextScreenObj.prevScreen == undefined) { //isto funciona desde que não se passe ecrans à frente!
        nextScreenObj.prevScreen = currentScreen;
    }*/
    //console.log(screenID);
    //console.log("new: " + screenID);
    //console.log("prev: " + nextScreenObj.prevScreen);
    //console.log("---");
    moveScreen(screenID, args);
}

function loadSolo(screenID, soloID, args) {
    //clear and build
    if (currentSolo != soloID) {
        if (currentSolo != undefined) {
            var SOsInS = findSoloWithID(currentSolo).screens;
            for (var s = 0; s < SOsInS.length; s++) {
                findScreenWithID(SOsInS[s]).exitScreen();
            }
        }
        currentSolo = soloID;
        currentScreen = screenID;
        showSolo(soloID);
        var SsInS = findSoloWithID(soloID).screens;
        var ind = document.getElementById("swipe-indicator-move");
        if (SsInS.length > 1) {
            ind.style.display = "flex";
            ind.style.width = 100/SsInS.length + "%";
            ind.style.transform = findSoloWithID(soloID).translate;
        } else {
            ind.style.display = "none";
        }
        for (var s = 0; s < SsInS.length; s++) {
            findScreenWithID(SsInS[s]).drawScreen();
        }
        for (var s = 0; s < SsInS.length; s++) {
            findScreenWithID(SsInS[s]).initScreen(args);
        }
        /* if (soloID != "main-solo") {
            document.getElementById(soloID).style.transform = "translateX(0px)";
        } */
    } else if (currentSolo == soloID && currentScreen != screenID) {
        var width = document.getElementById(screenID).clientWidth;
        if (screenID == "main-screen" && homePressed) {
            nice(soloID, 0, width, 1, -width, "transform", "translateX(", "px)", 5);
        }
        currentScreen = screenID;
    }
}

function showSolo(soloID) {
    var solos = document.getElementsByClassName("solo");
    for (var s = 0; s < solos.length; s++) {
        solos[s].style.display = "none";
    }
    document.getElementById(soloID).style.display = "flex";
}

function moveScreen(screenID, args) {
    var screenObj = findScreenWithID(screenID);
    if (screenObj == undefined) return;
    //screenObj.initScreen();
    loadSolo(screenID, screenObj.solo, args);
}

function goBack() {
    var currentSolo = findSoloWithID(findScreenWithID(currentScreen).solo)
    var prevSoloID = currentSolo.prevSolo
    moveScreen(findSoloWithID(prevSoloID).currentScreen, "");
    currentSolo.prevSolo = undefined;
}

function addHeader(screenID, args) {
    var el = cloneElementToBegin("header-model", screenID, args);
    updateClock(el.getElementsByClassName("clock")[0]);
}

function editFooter(soloID, b1, b2, b3, gofunc) {
    var screenList = findSoloWithID(soloID).screens;
    for (var s = 0; s < screenList.length; s++) {
        var footer = document.getElementById(screenList[s]).getElementsByClassName("footer")[0];
        screenFootArgs = findScreenWithID(screenList[s]).footarg;
        args = convertFooterArgs([b1, screenFootArgs[1], b2, screenFootArgs[3], b3, screenFootArgs[5]], gofunc ? gofunc() : undefined);
        setAttributes(footer, args);
    }
}

function addFooter(screenID, num, args, gofunc) {
    args = convertFooterArgs(args, gofunc);
    cloneElementTo("footer-model-" + num, screenID, args);
}

function convertFooterArgs(args, gofunc) {
    function isempty(clickstr) {
        if (clickstr != "" && gofunc != false) return "button";
        return "info";
    }
    if (args.length > 4) {
        return [args[0], args[1], "button", args[2], args[3], isempty(args[3]), args[4], args[5], isempty(args[5])];
    }
    return [args[0], args[1], "button", args[2], args[3], isempty(args[3])];
}


function randomNumberGenerator(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

function stopActPopup(action, message) {
    addPopup(currentScreen, [message, "", "", "Não", "removePopup();", "", "Sim", "removePopup(); " + action, ""]);
}

function addPopup(screenID, args) {
    removePopup();
    popup = cloneElementTo("popup-model", screenID, args);
}

function addNotificationPopup(timeout, args) {
    setTimeout(function() {
        addPopup(currentScreen, args);
    }, timeout);
}

function removePopup() {
    if (popup != undefined) popup.parentElement.removeChild(popup);
    popup = undefined;
}

function addMessageToSolo(soloID, message) {
    var screenList = findSoloWithID(soloID).screens;
    for (var s = 0; s < screenList.length; s++) {
        cloneElementToBegin("message-model", screenList[s], [message]);
    }
}

function removeMessageFromSolo(soloID) {
    var screenList = findSoloWithID(soloID).screens;
    for (var s = 0; s < screenList.length; s++) {
        var els = document.getElementById(screenList[s]).getElementsByClassName("message");
        if (els.length) {
            els[0].parentElement.removeChild(els[0]);
        }
    }
}

/************************************ SCROLL ************************************/
window.addEventListener('message', function (event) {
    switch (event.data) {
        case "up":
            scrollCurrScreen(-5);
            break;

        case "down":
            scrollCurrScreen(5);
            break;

        case "home":
            homePressed = true;
            loadScreen(findScreenWithID(currentScreen).homeButton);
            homePressed = false;
            break;

        default:
            console.log(event.data);
            break;
    }
});

function scrollCurrScreen(value) {
    var scrollElement = document.getElementById(currentScreen);
    scrollValue(scrollElement, value);
}

function scrollValue(screen, value) {
    var scrollables = screen.getElementsByClassName("scrollable");
    if (scrollables.length != 0) {
        scrollables[0].scrollTop += value;
        testscrollTop(scrollables[0]);
    }
}

function testscrollTop(element) {
    var currP = element.scrollTop++;
    if (element.scrollTop > currP) {
        element.classList.toggle("scroll-down", true);
        element.scrollTop--;
    } else {
        element.classList.toggle("scroll-down", false);
    }
    currP = element.scrollTop--;
    if (element.scrollTop < currP) {
        element.classList.toggle("scroll-up", true);
        element.scrollTop++;
    } else {
        element.classList.toggle("scroll-up", false);
    }
}

function testscrollTopScreen() {
    var scrollables = document.getElementById(currentSolo).getElementsByClassName("scrollable");
    if (scrollables.length != 0) {
        testscrollTop(scrollables[0]);
    }
}

/************************************ SWIPE ************************************/
function startDrag(ev) {
    var ghost = document.createElement("img");
    ghost.style.display = "none";
    ev.dataTransfer.setDragImage(ghost, 0, 0);
    ev.dataTransfer.setData("Text", ev.clientX);
    then = ev.clientX;
}

function dragging(ev, solo) {
    ev.stopPropagation();
    ev.preventDefault();
    /*var then = ev.dataTransfer.getData("Text");*/
    var soloEl = document.getElementById(solo);
    var soloObj = findSoloWithID(solo);
    var now = ev.clientX;
    var diff = now - then;

    var screenN = soloObj.screens.indexOf(currentScreen);
    var offset = screenN * document.getElementById(currentScreen).clientWidth;
    var ind = document.getElementById("swipe-indicator-move");

    if ((screenN != 0 && screenN != soloObj.screens.length - 1) || (screenN == 0 && diff < 0) || (screenN == soloObj.screens.length - 1 && diff > 0)) {
        diff -= offset;
        var string = "translateX(" + diff + "px)";
        ind.style.transform = "translateX(" + -diff/soloObj.screens.length + "px)";
        soloEl.style.transform = string;
    }
}

function drop(ev, solo) {
    ev.preventDefault();
    var width = document.getElementById(currentScreen).clientWidth;
    var now = ev.clientX;
    var then = ev.dataTransfer.getData("Text");

    var soloEl = document.getElementById(solo);
    var soloObj = findSoloWithID(solo);
    var screenN = soloObj.screens.indexOf(currentScreen);
    var offset = - screenN * document.getElementById(currentScreen).clientWidth;
    var screenCardinal = soloObj.screens.length;

    if (then - now >= 40 && soloObj.screens.length - 1 != screenN) {
        nice(solo, now - then, -width, -1, offset, "transform", "translateX(", "px)", 5);
        loadScreen(soloObj.screens[screenN + 1]);
        soloObj.currentScreen = currentScreen;
        nice("swipe-indicator-move", -(now - then)/screenCardinal, width/screenCardinal, 1/screenCardinal, 0, "transform", "translateX(", "px)", 5);
 
    } else if (now - then >= 40 && 0 != screenN) {
        nice(solo, now - then, width, 1, offset, "transform", "translateX(", "px)", 5);
        loadScreen(soloObj.screens[screenN - 1]);
        soloObj.currentScreen = currentScreen;

        console.log(-(1 - now - then)/screenCardinal);
        nice("swipe-indicator-move", (now - then)/screenCardinal, 0, -1/screenCardinal, 0, "transform", "translateX(", "px)", 5);

    } else if (then - now > 0 && soloObj.screens.length - 1 != screenN) {
        nice(solo, now - then, 0, 1, offset, "transform", "translateX(", "px)", 5);
        console.log(-(now - then)/screenCardinal);
        console.log(-width/screenCardinal);
        nice("swipe-indicator-move", -(now - then)/screenCardinal, 0, -1/screenCardinal, 0, "transform", "translateX(", "px)", 5);
  
    } else if (now - then > 0 && 0 != screenN) {
        nice(solo, now - then, 0, -1, offset, "transform", "translateX(", "px)", 5);
        nice("swipe-indicator-move", (now - then)/screenCardinal, width/screenCardinal, 1/screenCardinal, 0, "transform", "translateX(", "px)", 5);

    }
}

/*FUNÇÃO FAVORITA DO DANIEL - NAO MEXER SEM AUTORIZAÇÃO <3*/
function nice(elemId, pos, target, step, offset, atrb, strBefore, strAfter, interval) {
    var elem = document.getElementById(elemId);
    count = 0;
    var id = setInterval(function () {
        if (Math.abs(pos - target) < 0.001) {
            clearInterval(id);
        } else {
            pos += step;
            var rpos = pos + offset;
            elem.style[atrb] = strBefore + rpos + strAfter;
        }
        count += 0.1;
    }, interval);
}
/* ------------------------------------------------------ */

function pinMotion() {
    nice("pinUser", 77, 20 + 7, -0.25, 0, "left", "", "%", 100);
    nice("pinUser", 60, 20 + 17, -0.25, 0, "top", "", "%", 100);
}


/************************************ OBJETOS ************************************/
function Notification(name, img) {
    this.name = name;
    this.img = img;
    /*this.changeName = function (name) {
        this.lastName = name;
    };*/
}

function Act(name, img, description, stage, day, hour, minute) {
    this.name = name;
    this.img = img;
    this.description = description;
    this.stage = stage;
    this.day = day;
    this.time = [hour, minute];
}

function Product(name, svg, type, price, store) {
    this.name = name;
    this.svg = svg;
    this.type = type;
    this.price = price;
    this.stores = store == "all" ? [] : store;
    this.togglerActive = false;
    if (store == "all") {
        for (var s = 0; s < stores.length; s++) {
            this.stores.push(stores[s].name);
        }
    }
}

function Store(name, svg) {
    this.name = name;
    this.svg = svg;
}

function Bill(store) {
    this.store = store;
    this.billitems = [];
    this.billcount = 0;
    this.billprice = 0;
    this.pickuptime = [0, 5];
    this.addItem = function(productName) {
        var prodItemObj = findBillItemWithProduct(productName);
        if (prodItemObj != undefined) {
            if (prodItemObj.addItem()) {
                this.billprice += findProductWithName(productName).price;
                this.billcount++;
            }
        } else {
            prodItemObj = new BillItem(productName);
            prodItemObj.addItem();
            this.billprice += findProductWithName(productName).price;
            this.billcount++;
            this.billitems.push(prodItemObj);
        }
        return prodItemObj.count;
    };
    this.removeItem = function(productName) {
        var prodItemObj = findBillItemWithProduct(productName);
        if (prodItemObj != undefined) {
            if (prodItemObj.removeItem()) {
                this.billprice -= findProductWithName(productName).price;
                this.billcount--;
            }
            if (!prodItemObj.count) {
                this.billitems.splice(this.billitems.indexOf(prodItemObj), 1);
            }
            return prodItemObj.count;
        }
    };
    this.getQuantItem = function(productName) {
        var prodItemObj = findBillItemWithProduct(productName);
        return prodItemObj != undefined ? prodItemObj.count : 0;
    };
}

function BillItem(name) {
    this.name = name;
    this.count = 0;
    this.addItem = function() {
        return this.count < 9 ? this.count++ || true : false;
    }
    this.removeItem = function() {
        return this.count > 0 ? this.count-- || true : false;
    }
    /*this.changeName = function (name) {
        this.lastName = name;
    };*/
}

function Solo(id, el) {
    this.id = id;
    this.screens = [el];
    this.addScreen = function (screenID) {
        this.screens.push(screenID);
    };
    this.prevSolo;
    this.currentScreen;
    this.translate = "translateX(0px)";
}

function Person(name, img) {
    this.name = name;
    this.img = img;
    this.distance;
    this.calcDistance = function (i) {
        this.distance = randomNumberGenerator(i * 50, (i + 1) * 50);
    };
}

function Screen(name, id, initFunc, constFuncN, exitFunc, solo, homeButton, header, footer, ...footarg) {
    this.name = name;
    this.id = id;
    this.initFunc = initFunc;
    this.constFuncN = constFuncN;
    this.exitFunc = exitFunc;
    this.solo = solo != "" ? solo : id;
    this.homeButton = homeButton == "" ? "app-screen" : homeButton;
    this.header = header;
    this.footer = footer;
    this.footarg = footarg;
    this.drawn = false;
    this.init = false;
    this.prevScreen;
    this.keepArgs;
    this.drawScreen = function () {
        if (!this.drawn) {
            if (this.header) this.addHeader();
            if (this.footer) this.addFooter();
            this.drawn = true;
        }
    }
    this.initScreen = function (args) {
        if (args == "prevArg") args = prevScreenArgs; //Se for "prevArgs" nos argumentos e anteriormente tiverem dado um valor ao prevScreenArgs
        if (args != "") this.keepArgs = args; //Se tiver argumentos, guardar os novos
        if (!this.init) {
            this.drawScreen();
            eval(this.initFunc);
            this.init = true;
        }
        if (this.constFuncN != "") eval(this.constFuncN + "('" + this.keepArgs + "');");
        testscrollTopScreen();
    };
    this.exitScreen = function() {
        if (this.exitFunc != "") eval(this.exitFunc);
    };
    this.addHeader = function () {
        if (this.header == "clock") {
            addHeader(this.id, ["display: none;", ""]);
        } else {
            addHeader(this.id, ["", this.name]);
        }
    }
    this.addFooter = function () {
        if (this.footer && this.footarg.length > 4) {
            addFooter(this.id, 3, this.footarg);
        } else if (this.footer && this.footarg.length > 2) {
            addFooter(this.id, 2, this.footarg);
        }
    }
    var soloO = findSoloWithID(this.solo);
    if (soloO == undefined) {
        var newsolo = new Solo(this.solo, this.id);
        swipes.push(newsolo);
        newsolo.currentScreen = this.id;
    } else {
        soloO.addScreen(this.id);
    }
}
