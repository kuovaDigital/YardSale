
const menuDesk = document.querySelector('.menu-secondary-d');
const navMail = document.querySelector('.nav-mail');
const menuMob = document.querySelector('.menu-mobile') 
const iconMenu = document.querySelector('.icon-menu')
const navCart = document.querySelector('.nav-cart')
const myOrder = document.querySelector('.order-container')
const mainCont = document.querySelector('.main-container')
const sheet = document.querySelector('.sheet-container')
const sheetClose = document.querySelector('.sheet-closeBtn')

navMail.addEventListener('click', toggleMenuDesk);
iconMenu.addEventListener('click', toggleMenuMob);
navCart.addEventListener('click', openCart);
sheetClose.addEventListener('click', closeSheet)

function toggleMenuDesk(){
	console.log('click menudesk');
	menuDesk.classList.toggle('d-none')
	closeSheet();
	myOrder.classList.add('d-none');


}

function toggleMenuMob(){

	const orderIsClosed = myOrder.classList.contains('d-none');
	
	if(!orderIsClosed){
		myOrder.classList.add('d-none')
	} 
	menuMob.classList.toggle('d-none');
	closeSheet();
	
} 

function openCart(){
	const menuIsClosed = menuMob.classList.contains('d-none');
	
	if(!menuIsClosed){
		menuMob.classList.add('d-none')
	} 
	myOrder.classList.toggle('d-none') 
	closeSheet();
	menuDesk.classList.add('d-none')
}

function closeSheet(){ 
	sheet.classList.add('d-none');
}

function openSheet(){
	// console.log(this.item.img)
	sheet.classList.remove('d-none')
	menuDesk.classList.add('d-none')
	myOrder.classList.add('d-none') 
}

const prueba = 'Hola Mundo';
console.log(prueba)
const productList=[];

productList.push({
	name: 'Bike',
	price: 120.00,
	img:'assets/img/bicycle.jpeg',
	description:'With funtional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or worplace.'
},
{
	name: 'Round Shelf',
	price: 150.00,
	img:'assets/img/round-shelf.jpg',
	description:'With funtional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or worplace.'
},
{
	name: 'Retro Refrigarator',
	price: 250.00,
	img:'assets/img/frigobar-retro.jpg',
	description:'With funtional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or worplace.'
},
{
	name: 'Bike',
	price: 120.00,
	img:'assets/img/bicycle.jpeg',
	description:'With funtional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or worplace.'
},
{
	name: 'Round Shelf',
	price: 150.00,
	img:'assets/img/round-shelf.jpg',
	description:'With funtional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or worplace.'
},
{
	name: 'Retro Refrigarator',
	price: 250.00,
	img:'assets/img/frigobar-retro.jpg',
	description:'With funtional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or worplace.'
},
{
	name: 'Bike',
	price: 120.00,
	img:'assets/img/bicycle.jpeg',
	description:'With funtional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or worplace.'
},
{
	name: 'Round Shelf',
	price: 150.00,
	img:'assets/img/round-shelf.jpg',
	description:'With funtional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or worplace.'
},
{
	name: 'Retro Refrigarator',
	price: 250.00,
	img:'assets/img/frigobar-retro.jpg',
	description:'With funtional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or worplace.'
}
);

function renderItems(arr){

	for(item of arr){

	// const cardsContainer = document.createElement('section');
	// cardsContainer.classList.add('.cards-container');
	const cardsContainer = document.querySelector('.cards-container')
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
	cardImgWrap.addEventListener('click', openSheet)
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

function sheetConstructor(arr){
	const sheetImgProduct = document.querySelector('.sheet-img')
	const sheetPrice = document.querySelector('.sheet-info-price')
	const sheetName = document.querySelector('.sheet-info-name')
	const sheetDescription = document.querySelector('.sheet-info-description')
	
	for(item of arr)
	sheetImgProduct.setAttribute('src', item.img)
	sheetName.innerText = item.name
	sheetPrice.innerText = '$'+ item.price
	sheetDescription.innerText = item.description
}

renderItems(productList);
sheetConstructor(productList)