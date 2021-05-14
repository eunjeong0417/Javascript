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


