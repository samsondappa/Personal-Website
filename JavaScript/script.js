var toggler = document.getElementById('toggler');
var cancel = document.getElementById('cancel');
var toggleContainer = document.getElementById('toggle-container');
var closeImage = document.querySelector('#closeimage');
var body = document.querySelector('body');
var fullDetail = document.querySelectorAll('.full-detail');
var cardContainer = document.querySelectorAll('.clone');
var selected = document.querySelector('.selected');
var dropText = document.getElementById("dropping-texts");
var currentView;
var currentClone;
var disableMoreinfo;

typer ();

function typer (){
    var y = 0;
    var skill = ["I Design   ", "I Code   ", "And I Write too   "];
    var x = 0;
    

    function printSentence(id, sentence, speed) {
      var index = 0;
          timer = setInterval(function() {
            var char= sentence.charAt(index);
            if(char === '<') index= sentence.indexOf('>',index);
            document.getElementById(id).innerHTML= sentence.substr(0,index);

            if(index++ === sentence.length){
                clearInterval(timer);
                removeSentence('dropping-texts', skill[x], 50);
                if (x==2){
                    x = -1;
                }
            }
          }, speed);
    } //printSentence

    function removeSentence(id, sentence, speed) {
      var index = sentence.length;
          timer = setInterval(function() {
            var char= sentence.charAt(index);
            if(char === '<') index= sentence.indexOf('>',index);
            document.getElementById(id).innerHTML= sentence.substr(0,index);

            if(index-- === 0){
                clearInterval(timer);
                x++;
                printSentence('dropping-texts', skill[x], 150); 
            }
          }, speed);
    } //removeSentence
    
//    printSentence('intro', intro, 30);
    printSentence('dropping-texts', skill[x], 150);
    
    blink = setInterval(function(){
    document.getElementById('dropping-texts').style.borderRight = "2px solid rgba(225, 204, 41, " + y + ")";
    
        if (y == 1){
            y = 0;
        } else if (y == 0){
            y = 1;
        }
    }, 150);  
}







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
    var opacity = 0;
    var interval = setInterval(transit, 30);
    function transit(){
        if (opacity >= 1){
            clearInterval(interval);
//            opacity = 0;
            console.log(opacity);
        }else{
            opacity+=0.1;
            element.style.opacity = opacity;
            console.log("test one");
        }
    }
}

function detailSlideBack(element){
    var opacity = 1;
    var interval = setInterval(transit, 50);
    function transit(){
        if (opacity <= 0){
            clearInterval(interval);
//            opacity = 1;
            console.log(opacity);
        }else{
            opacity-=0.1;
            element.style.opacity = opacity;
            console.log("test two");
        }
    }
}

 
    for (var x=0; x<cardContainer.length; x++){
        cardContainer[x].addEventListener('mouseover', function(){
             disableMoreinfo =this.nextElementSibling;
             disableMoreinfo.style.transition = "1s";
             disableMoreinfo.style.opacity = "1";
         });
        
        cardContainer[x].addEventListener('mouseout', function(){
             var disableMoreinfo =this.nextElementSibling;
             disableMoreinfo.style.transition = "1s";
             disableMoreinfo.style.opacity = "0";
         });
                                         
        cardContainer[x].addEventListener('click', function(){
            currentClone = this;
            this.offsetParent.classList.add("selected");
            this.offsetParent.classList.remove("card-container");
            body.classList.add("stop-scrolling");
            currentClone.style.cursor = "not-allowed";
            disableMoreinfo.style.display = "none";
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