const ipad = window.matchMedia('screen and (max-width: 480px)')
		const menu = document.querySelector('.menu');
		const logo = document.querySelector('.header-logo');
		const burgerButton = document.querySelector('#burger-button')

		ipad.addListener(validation)

		function validation(event){
			if(event.matches){
				burgerButton.addEventListener('click', showHide);
		
			} 
			else{
				burgerButton.removeEventListener('click', showHide);
				
			}
		}
		validation(ipad);

		function showHide(){
				if (menu.classList.contains('is-active') ){
				menu.classList.remove('is-active');		
			}
			else{
				menu.classList.add('is-active');	
			}
			if(logo.classList.contains('is-active') ){
				logo.classList.remove('is-active');
				}

			else{
				logo.classList.add('is-active');
			}
			
			}

window.addEventListener('scroll', function(){

    let img1 = document.getElementById('img1')
    let img2 = document.getElementById('img2')
    let img3 = document.getElementById('img3')
	let person1 = document.getElementById('person1')
	let person2 = document.getElementById('person2')
	let person3 = document.getElementById('person3')
	let posicionObj1 = person1.getBoundingClientRect().top
	let posicionObj2 = person2.getBoundingClientRect().top
	let posicionObj3 = person3.getBoundingClientRect().top
	let tamañoPantalla = window.innerHeight/2.5
	console.log(posicionObj1)

	if( posicionObj1 < tamañoPantalla){
		img1.style.animation = 'topBottom 1s forwards ease'
	}
	if( posicionObj2 < tamañoPantalla){
		img2.style.animation = 'topBottom 1s forwards ease'
	}

	if( posicionObj3 < tamañoPantalla){
		img3.style.animation = 'topBottom 1s forwards ease'
	}
})







