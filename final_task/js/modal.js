var popup = document.querySelector('.consult-wrapper');
var btnShowModal = document.querySelector('.header__consult-btn');
var btnClose = document.getElementById('popup_close');
        
    btnShowModal.addEventListener('click', function(){
            popup.style.display = 'block';
            
        });

    btnClose.addEventListener('click', function(){
            popup.style.display = 'none';
           
        });