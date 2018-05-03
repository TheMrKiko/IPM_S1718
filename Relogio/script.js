var notifications = [new Notification("à tua procura.", "assets/people/sam-burriss.jpg"), new Notification("acenou-te.", "assets/people/parker-whitson.jpg"), new Notification("à tua procura.", "assets/people/bill-jones-jr.jpg")];
var notifN = 0;

var people = [new Person("Daniel", "assets/people/joe-gardner.jpg"), new Person("João", "assets/people/erik-lucatero.jpg"), new Person("Francisco", "assets/people/bill-jones-jr.jpg"), new Person("David", "assets/people/parker-whitson.jpg"), new Person("Luís", "assets/people/sam-burriss.jpg"), new Person("Rodrigo", "assets/people/hunter-johnson.jpg"), new Person("Maria", "assets/people/noah-buscher.jpg"), new Person("Marta", "assets/people/hian-oliveira.jpg")];
var bill = new Bill("");
var stores = [new Store("Casa do Zé", "assets/shops/store1.svg"), new Store("Portugália", "assets/shops/restaurant.svg"), new Store("Carills", "assets/shops/carillis.svg"), new Store("Starpennies", "assets/shops/starbucksStore.svg"), new Store("Cachorros do Chico", "assets/shops/hotdog.svg"), new Store("Donuts do Dani", "assets/shops/donutsshop.svg"), new Store("Rei das Bifanas", "assets/shops/bifas.svg"), new Store("Mercado da Mõnîca", "assets/shops/grocery.svg")];
var products = [new Product("Água", "assets/drink/garrafa_de_agua.svg", 1, 1.50, "all"), new Product("Vinho", "assets/drink/winecup.svg", 1, 1.75, "all"), new Product("7UP", "assets/drink/soda.svg", 1, 1.30, "all"), new Product("Caril", "assets/food/curry.svg", 2, 4, ["Carills"]), new Product("João Daniel do bom", "assets/people/sam-burriss.jpg", 2, 69, ["Casa do Zé"]), new Product("Tofu", "assets/food/tofu.svg", 2, 4, ["Carills"]), new Product("Pizza", "assets/food/pizza2.svg", 2, 3.50, ["Carills"]),
new Product("Caneca de Cerveja", "assets/drink/beer_caneca.svg", 1, 2, "all"), new Product("Imperial", "assets/drink/beer_fino.svg", 1, 1.50, ["Portugália"]), new Product("Daiquiri", "assets/drink/daiquiri.svg", 1, 2.50 ,["Portugália"]), new Product("Milkshake", "assets/drink/starbucks_milkshake.svg", 1, 1.80, ["Donuts do Dani"]), new Product("Café", "assets/drink/starbucks.svg", 1, 1.65, "all"),
new Product("Whisky", "assets/drink/whisky.svg", 1, 8.20, ["Portugália"]),

new Product("Batatas fritas", "assets/food/batata_frita.svg", 2, 1.40,"all"), new Product("Frango", "assets/food/chicken_leg.svg", 2, 4, ["Casa do Zé"]), new Product("Hamburguer", "assets/food/hamburger.svg", 2, 4, ["Rei das Bifanas"]), new Product("X-burguer", "assets/food/hamburguer.svg", 2, 5.20, ["Cachorros do Chico"]), new Product("Cachorro quente", "assets/food/hotdog.svg", 2, 4, ["Cachorros do Chico"]), new Product("Noodles", "assets/food/noodles.svg", 2, 3, ["Carills"]),
new Product("Pizza Ham & Cheese", "assets/food/pizza_box.svg", 2, 4.50, ["Casa do Zé"]), new Product("Presunto", "assets/food/presunto.svg", 2, 2.50, ["Portugália"]), new Product("Pizza", "assets/food/pizza.svg", 2, 3.50, ["Cachorros do Chico"]), new Product("Sanduíche", "assets/food/sandwich.svg", 2, 2.30, "all"), new Product("Sushi", "assets/food/sushi.svg", 2, 5.50, ["Carills"]), new Product("Wrap", "assets/food/wrap.svg", 2, 3.5, ["Carills"]),

new Product("Bolachas", "assets/candy/bolachinhas.svg", 3, 2.60, ["Donuts do Dani", "Starbucks"]), new Product("Croissant", "assets/candy/croissant.svg", 3, 4.20, ["Donuts do Dani", "Portugália", "Starbucks", "Carills"]), new Product("Cupcake", "assets/candy/cupcake.svg", 3, 1.80, ["Donuts do Dani", "Portugália"]), new Product("Cupcake Simples", "assets/candy/cupcake2.svg", 3, 1.60, ["Donuts do Dani", "Rei das Bifanas"]), new Product("Donuts", "assets/candy/donut.svg", 3, 2.20, ["Donuts do Dani"]),
new Product("Donuts", "assets/candy/donut2.svg", 3, 2.60, ["Donuts do Dani"]), new Product("Donuts", "assets/candy/donut3.svg", 3, 2.80, ["Donuts do Dani"]), new Product("Gelado", "assets/candy/icecream.svg", 3, 3.10, "all"), new Product("Vanilla & Chocolate", "assets/candy/icecream_2.svg", 3, 3.80, ["Donuts do Dani"]), new Product("Sorvete", "assets/candy/icecream_3.svg", 3, 1.30, "all"), new Product("Copo de Gelado", "assets/candy/icecream_4.svg", 3, 3.20, ["Donuts do Dani", "Portugália"]),
new Product("Lollipop", "assets/candy/lollipop.svg", 3, 0.80, ["Donuts do Dani"]), new Product("Fruta", "assets/candy/melancia.svg", 3, 1.70, "all"), new Product("Panquecas", "assets/candy/pancake.svg", 3, 4.30, ["Donuts do Dani", "Portugália", "Carills"])
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
new Screen("Barracas", "store-oscreen", "setStoresList();", "", "", "", "", true, true, "Fim", "", "", ""),
new Screen("Bebidas", "drinks-oscreen", "", "updateProdFooter(); setProductsList", "", "products-oswipe", "", true, true, "Anular", "voltar", "", 'loadScreen("cart-oscreen")'),
new Screen("Snacks", "snacks-oscreen", "", "", "", "products-oswipe", "", true, true, "Anular", "voltar", "", 'loadScreen("cart-oscreen")'),
new Screen("Doces", "sweets-oscreen", "", "", "", "products-oswipe", "", true, true, "Anular", "voltar", "", 'loadScreen("cart-oscreen")'),
new Screen("Mochila", "cart-oscreen", "", "", "", "", "", true, true, "Fim", "", "", ""),
];
var currentSolo;
var currentScreen;
var intervalVar;
var prevScreenArgs;
/*var currentSwipe;*/

/************************************ CLOCK ************************************/
function loadClocks() {
    var clocks = document.getElementsByClassName("clock");
    for (var i = 0; i < clocks.length; i++) {
        updateClock(clocks[i]);
    }
}

function updateClock(clock) {
    var time = new Date();
    var stringTime = "";
    if (time.getHours() < 10) {
        stringTime += "0";
    }
    stringTime += time.getHours() + ":";
    if (time.getMinutes() < 10) {
        stringTime += "0";
    }
    stringTime += time.getMinutes();
    clock.innerText = stringTime;
    setTimeout(function () {
        updateClock(clock);
    }, 1000);
}

/************************************ ECRAS ESPECIFICOS ************************************/
// ------------------- MAIN
function addNotification() {
    var cur = (notifN++) % notifications.length;
    cloneElementTo("table-model", "notification-bar", [notifications[cur].img, notifications[cur].name]);
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
            return;
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

function setProductsListType(prodsObjs, type, grid) {
    prodsObjs = filterProductsWithType(prodsObjs, type);
    for (var p = 0; p < prodsObjs.length; p++) {
        var el = cloneElementTo("item-model", grid, [prodsObjs[p].svg, prodsObjs[p].name, "€" + Number(prodsObjs[p].price).toFixed(2), "0", "0"]);
        var eli = el.getElementsByClassName("item-info")[0];
        eli.setAttribute("onclick", "toggleQuantityEditor(event, '" + prodsObjs[p].name + "');");
        el.getElementsByClassName("item-plus")[0].setAttribute("onclick", "toggleQuantity(event, '" + prodsObjs[p].name + "', 1);");
        el.getElementsByClassName("item-minus")[0].setAttribute("onclick", "toggleQuantity(event, '" + prodsObjs[p].name + "', -1);");
    }
}

function toggleQuantityEditor(ev, prodName) {
    var el = ev.currentTarget.parentElement;
    var elP = el.getElementsByClassName("item-quant-editor")[0];
    var prod = findProductWithName(prodName);
    if (prod.togglerActive) {
        elP.style.display = "none";
        prod.togglerActive = false;
    } else {
        deltaProdQuant(prodName, 1);
        elP.style.display = "flex";
        prod.togglerActive = true;
    }
    updateProdQuant(el, prodName);
}

function toggleQuantity(ev, prodName, increment) {
    var el = ev.currentTarget.parentElement.parentElement;
    deltaProdQuant(prodName, increment);
    updateProdQuant(el, prodName);
}

function deltaProdQuant(prodName, increment) {
    if (increment == 1) {
        bill.addItem(prodName);
    } else if (increment == -1) {
        bill.removeItem(prodName);
    } else console.log("go fuck urself");
}

function updateProdFooter() {
    editFooter("products-oswipe", "Anular", "€" + Number(bill.billprice).toFixed(2), bill.billcount + " itens");
}

function updateProdQuant(element, prodName) {
    var prodObj = findProductWithName(prodName);
    setAttributes(element, [prodObj.svg, prodObj.name, "€" + prodObj.price, bill.getQuantItem(prodName), bill.getQuantItem(prodName)]);
    updateProdFooter();
}

function setProductsList(storeName) {
    var prodsObjs;
    if (storeName == "all") {
        prodsObjs = products;
    } else if (storeName != undefined) {
        prodsObjs = filterAllProductsInStore(storeName);
    } else {
        console.log("Ups!");
    }
    setProductsListType(prodsObjs, 1, "prod-drinks-grid");
    setProductsListType(prodsObjs, 2, "prod-snacks-grid");
	setProductsListType(prodsObjs, 3, "prod-sweets-grid");
}

function setStoresList() {
    for (var s = 0; s < stores.length; s++) {
        var el = cloneElementTo("store-model", "store-grid", [stores[s].svg, stores[s].name]);
        el.setAttribute("onclick", "loadScreen('drinks-oscreen', '" + stores[s].name + "');");
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
    return document.getElementById(idParent).insertBefore(copy, document.getElementById(idParent).firstChild);
}

function cloneElementTo(classModel, idParent, args) {
    var copy = cloneElement(classModel);
    setAttributes(copy, args);
    return document.getElementById(idParent).appendChild(copy);
}

function setAttributes(element, args) {
    var atributEls = element.getElementsByClassName("attr-m");
    for (var i = 0; i < atributEls.length; i++) {
        var atributReq = atributEls[i].getAttribute("attrm").split(" ");
        for (var a = 0; a < atributReq.length; a++) {
            if (atributReq[a] === "innerHTML") {
                atributEls[i].innerHTML = args[i * atributReq.length + a];
            } else if (atributReq[a] === "class") {
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
        for (var s = 0; s < SsInS.length; s++) {
            findScreenWithID(SsInS[s]).drawScreen();
        }
        for (var s = 0; s < SsInS.length; s++) {
            findScreenWithID(SsInS[s]).initScreen(args);
        }
        if (soloID != "main-solo") {
            document.getElementById(soloID).style.transform = "translateX(0px)";
        }
    } else if (currentSolo == soloID && currentScreen != screenID) {
        var width = document.getElementById(screenID).clientWidth;
        if (screenID == "main-screen") {
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

function editFooter(soloID, b1, b2, b3) {
    var screenList = findSoloWithID(soloID).screens;
    for (var s = 0; s < screenList.length; s++) {
        var footer = document.getElementById(screenList[s]).getElementsByClassName("footer")[0];
        screenFootArgs = findScreenWithID(screenList[s]).footarg;
        args = convertFooterArgs([b1, screenFootArgs[1], b2, screenFootArgs[3], b3, screenFootArgs[5]]);
        setAttributes(footer, args);
    }
}

function addFooter(screenID, num, args) {
    args = convertFooterArgs(args);
    cloneElementTo("footer-model-" + num, screenID, args);
}

function convertFooterArgs(args) {
    function isempty(clickstr) {
        if (clickstr != "") return "button";
        return "info";
    }
    if (args.length > 4) {
        return [args[0], args[1], isempty(args[1]), args[2], args[3], isempty(args[3]), args[4], args[5], isempty(args[5])];
    }
    return [args[0], args[1], isempty(args[1]), args[2], args[3], isempty(args[3])];
}


function randomNumberGenerator(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
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
            loadScreen(findScreenWithID(currentScreen).homeButton);
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

    if ((screenN != 0 && screenN != soloObj.screens.length - 1) || (screenN == 0 && diff < 0) || (screenN == soloObj.screens.length - 1 && diff > 0)) {
        diff -= offset;
        var string = "translateX(" + diff + "px)";
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

    if (then - now >= 40 && soloObj.screens.length - 1 != screenN) {
        nice(solo, now - then, -width, -1, offset, "transform", "translateX(", "px)", 5);
        loadScreen(soloObj.screens[screenN + 1]);
    } else if (now - then >= 40 && 0 != screenN) {
        nice(solo, now - then, width, 1, offset, "transform", "translateX(", "px)", 5);
        loadScreen(soloObj.screens[screenN - 1]);
    } else if (then - now > 0 && soloObj.screens.length - 1 != screenN) {
        nice(solo, now - then, 0, 1, offset, "transform", "translateX(", "px)", 5);
    } else if (now - then > 0 && 0 != screenN) {
        nice(solo, now - then, 0, -1, offset, "transform", "translateX(", "px)", 5);
    }
}

/*FUNÇÃO FAVORITA DO DANIEL - NAO MEXER SEM AUTORIZAÇÃO <3*/
function nice(elemId, pos, target, step, offset, atrb, strBefore, strAfter, interval) {
    elem = document.getElementById(elemId);
    count = 0;
    var id = setInterval(function () {
        if (pos == target) {
            clearInterval(id);
        } else {
            pos += step;
            rpos = pos + offset;
            elem.style[atrb] = strBefore + rpos + strAfter;
        }
        count += 0.1;
    }, interval);
}



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

function Product(name, svg, type, price, store) {
    this.name = name;
    this.svg = svg;
    this.type = type;
    this.price = price;
    this.stores = store == "all" ? [] : store;
    this.inbill = false;
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
    this.addItem = function(productName) {
        var prodItemObjs = findBillItemWithProduct(productName);
        if (prodItemObjs != undefined) {
            if (this.billitems[this.billitems.indexOf(prodItemObjs)].addItem()) {
                this.billprice += findProductWithName(productName).price;
                this.billcount++;
            }
        } else {
            var newBillItem = new BillItem(productName);
            newBillItem.addItem();
            this.billprice += findProductWithName(productName).price;
            this.billcount++;
            this.billitems.push(newBillItem);
        }
    };
    this.removeItem = function(productName) {
        var prodItemObjs = findBillItemWithProduct(productName);
        if (prodItemObjs != undefined) {
            if (this.billitems[this.billitems.indexOf(prodItemObjs)].removeItem()) {
                this.billprice -= findProductWithName(productName).price;
                this.billcount--;
            }
            if (prodItemObjs.count == 0) {
                this.billitems.splice(this.billitems.indexOf(prodItemObjs));
            }
        }
    };
    this.getQuantItem = function(productName) {
        var prodItemObjs = findBillItemWithProduct(productName);
        return prodItemObjs != undefined ? prodItemObjs.count : 0;
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
