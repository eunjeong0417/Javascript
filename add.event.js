<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{font-size: 3rem;}
        h1{
            background-color:pink
        }
       .menu-active{
           background-color: orange;

       }
    </style>
</head>
<body>
    <h1 id="main-title">
        Event
    </h1>
    <nav class="menu">
        <a href="#" cla ss="menu-link" data-menu="1">menu 1</a>
        <a href="#" class="menu-link" data-menu="2">menu 2</a>
        <a href="#" class="menu-link" data-menu="3">menu 3</a>

    </nav>
 
    <script>
        var currentMenu;
        var menuLinks = document.querySelectorAll('.menu-link');

        function clickMenuHandler(){
            if (currentMenu) {
                currentMenu.classList.remove('menu-active');
            }

            this.clcassList.add('menu-active');
            currentMenu = this;
            
        }
        
        
        for( var i = 0; i < menuLinks.length; i++){
            menuLinks[i].addEventListener('click', clickMenuHandler);
        }


    </script> 
</body>
</html> 





<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Interactive Web</title>
    <link rel="stylesheet" href="css/reset.css">
    <style>
        img {
            max-width: 100%;
            height: auto;
        }
        .characters {
            display: flex;
            align-items: center;
            justify-content: space-around;
            background: #fff000;
        }
        .ilbuni {
            width: 100px;
            cursor: pointer;
        }
        .characters .ilbuni {
            display: inline-block;
        }
        .special {
            border: 10px dashed red;
        }
    </style>
</head>
<body>
    <div class="characters">
        <div class="ilbuni a">
            <img src="images/ilbuni_0.png" alt="일분이">
        </div>
        <div class="ilbuni b">
            <img src="images/ilbuni_1.png" alt="일분이">
        </div>
        <div class="ilbuni c">
            <img src="images/ilbuni_2.png" alt="일분이">
        </div>
    </div>
        
        <div class="ilbuni d">
            <img src="images/ilbuni_3.png" alt="일분이">
        </div>
    

    <script>
        /*const ilbuni = document.querySelector('.ilbuni:nth-child(3)')

ilbuni.addEventListener('click', function(){
    ilbuni.classList.add('special')
})*/


/*const ilbuni = document.querySelector('.ilbuni.c');

function clickIlbuniHandler() {
    ilbuni.classList.toggle('special');
}

ilbuni.addEventListener('click',clickIlbuniHandler);*/


(function() {
    const ilbuni = document.querySelector('.ilbuni.c');

function clickIlbuniHandler() {
    ilbuni.classList.toggle('special');
}

ilbuni.addEventListener('click',clickIlbuniHandler);
})();
    </script>
</body>
</html>



