
const menuDesk = document.querySelector('.menu-desk');
const navMail = document.querySelector('.nav-mail');
const menuMob = document.querySelector('.menu-mobile') 
const iconMenu = document.querySelector('.icon-menu')
const navCart = document.querySelector('.nav-cart')
const myOrder = document.querySelector('.order-container')
const mainCont = document.querySelector('.main-container')



navMail.addEventListener('click', toggleMenuDesk);
iconMenu.addEventListener('click', toggleMenuMob);
navCart.addEventListener('click', openCart);

function toggleMenuDesk(){
	console.log('click');
	menuDesk.classList.toggle('d-lg')
} 

function toggleMenuMob(){

	const orderIsClosed = myOrder.classList.contains('d-none');
	
	if(!orderIsClosed){
		myOrder.classList.add('d-none')
	} 
	menuMob.classList.toggle('d-none');
} 

function openCart(){
	const menuIsClosed = menuMob.classList.contains('d-none');
	
	if(!menuIsClosed){
		menuMob.classList.add('d-none')
	} 
	myOrder.classList.toggle('d-none') 
}

const productList=[];

productList.push({
	name: 'Bike',
	price: 120.00,
	img:'assets/img/bicycle.jpeg',
},
{
	name: 'Round Shelf',
	price: 150.00,
	img:'assets/img/round-shelf.jpg',
},
{
	name: 'Retro Refrigarator',
	price: 250.00,
	img:'assets/img/frigobar-retro.jpg',
},
{
	name: 'Bike',
	price: 120.00,
	img:'assets/img/bicycle.jpeg',
},
{
	name: 'Round Shelf',
	price: 150.00,
	img:'assets/img/round-shelf.jpg',
},
{
	name: 'Retro Refrigarator',
	price: 250.00,
	img:'assets/img/frigobar-retro.jpg',
},
{
	name: 'Bike',
	price: 120.00,
	img:'assets/img/bicycle.jpeg',
},
{
	name: 'Round Shelf',
	price: 150.00,
	img:'assets/img/round-shelf.jpg',
},
{
	name: 'Retro Refrigarator',
	price: 250.00,
	img:'assets/img/frigobar-retro.jpg',
}
);

function renderItems(arr){


	for(item of arr){

	const cardsContainer = document.querySelector('.cards-container');

	// Card
	const card = document.createElement('div');
	card.classList.add('card')

	//imgWrap
	const cardImgWrap = document.createElement('div');
	cardImgWrap.classList.add('card-wrapper')

	//img
	const cardImg = document.createElement('img')
	cardImg.classList.add('card-wrapper-img')
	cardImg.setAttribute('src', item.img)

	//InfoCardContainer
	const cardInfoWrap = document.createElement('div');
	cardInfoWrap.classList.add('card-info-container')

	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info')

	const cardPrice = document.createElement('div');
	cardPrice.classList.add('card-info-price', 'price')
	cardPrice.innerText = '$' + item.price;

	const cardName = document.createElement('div')
	cardName.classList.add('card-info-name', 'h3-body')
	cardName.innerText = item.name;

	const cardAddBtn = document.createElement('div')
	cardAddBtn.classList.add('card-addcart')

	const addCartBtn = document.createElement('a')
	addCartBtn.setAttribute('href', '#')
	addCartBtn.setAttribute('target', '_blank')

	const addCartBtnImg = document.createElement('span')
	addCartBtnImg.classList.add('card-addcart-btn') 

	cardsContainer.append(card)
	cardImgWrap.append(cardImg)
	card.append(cardImgWrap, cardInfoWrap)

	cardInfoWrap.append(cardInfo,cardAddBtn)
	cardInfo.append(cardPrice, cardName)
	cardAddBtn.appendChild(addCartBtn)
	addCartBtn.appendChild(addCartBtnImg)

	}
}

renderItems(productList);