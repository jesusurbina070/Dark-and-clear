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