var toggler = document.getElementById('toggler');
var cancel = document.getElementById('cancel');
var toggleContainer = document.getElementById('toggle-container');
var closeImage = document.querySelector('#closeimage');
var body = document.querySelector('body');
var fullDetail = document.querySelectorAll('.full-detail');
var cardContainer = document.querySelectorAll('.clone');
var selected = document.querySelector('.selected');
var currentView;
var currentClone;
var disableMoreinfo;


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
                disableMoreinfo = this.nextElementSibling;
                detailSlide(m);
            
        });
        
        cardContainer[x].addEventListener('mouseout', function(){
            this.nextElementSibling.classList.remove("show");
            this.nextElementSibling.classList.add("hide");
            var n =this.nextElementSibling;
            detailSlideBack(n);
        });
                                         
        cardContainer[x].addEventListener('click', function(){
            currentClone = this;
            this.offsetParent.classList.add("selected");
            this.offsetParent.classList.remove("card-container");
            body.classList.add("stop-scrolling");
            currentClone.style.cursor = "not-allowed";
            disableMoreinfo.style.display = 'none';
            closeImage.style.display = 'block';
            currentView = this.offsetParent;
        });
    }

closeImage.addEventListener('click', function(){
    currentView.classList.add("card-container");
    currentView.classList.remove("selected");
    disableMoreinfo.style.display = 'block';
    closeImage.style.display = 'none';
    body.classList.remove("stop-scrolling");
    currentClone.style.cursor = "pointer";
});





//============ END PORTFOLIO EVENT HANDLER ================