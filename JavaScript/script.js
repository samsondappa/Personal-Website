var toggler = document.getElementById('toggler');
var cancel = document.getElementById('cancel');
var toggleContainer = document.getElementById('toggle-container');
var fullDetail = document.querySelectorAll('.full-detail');
var cardContainer = document.querySelectorAll('.clone');


//============== TOGGLE EVENT HANDLER ===============
toggler.addEventListener('click', function(){
    this.classList.add("desktop");
    this.classList.remove("mobile");
    toggleContainer.classList.add("mobile");
    toggleContainer.classList.remove("desktop"); 
});

cancel.addEventListener('click', function(){
    toggler.classList.add("mobile");
    toggler.classList.remove("desktop");
    toggleContainer.classList.remove("mobile");
    toggleContainer.classList.add("desktop");
});
//============ END TOGGLE EVENT HANDLER ===============



//============== PORTFOLIO EVENT HANDLER ==================
function detailSlide(element){
    var position = 100;
    var interval = setInterval(transit, 5);
    function transit(){
        if (position == 0){
            clearInterval(interval);
        }else{
            position--;
            element.style.top = position + '%';
        }
    }
}

function detailSlideBack(element){
    var position = 0;
    var interval = setInterval(transit, 3);
    function transit(){
        if (position == 100){
            clearInterval(interval);
        }else{
            position++;
            element.style.top = position + '%';
        }
    }
}
    for (var x=0; x<cardContainer.length; x++){
        cardContainer[x].addEventListener('mouseover', function(){
            this.nextElementSibling.classList.remove("hide");
            this.nextElementSibling.classList.add("show");
            var m =this.nextElementSibling;
            detailSlide(m);
            
            
        });
        
        cardContainer[x].addEventListener('mouseout', function(){
            this.nextElementSibling.classList.remove("show");
            this.nextElementSibling.classList.add("hide");
            var n =this.nextElementSibling;
            detailSlideBack(n)
            
        });
    }

//============ END PORTFOLIO EVENT HANDLER ================