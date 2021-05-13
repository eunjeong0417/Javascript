<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{font-size: 3rem;}
        h1{
            background-color: yellowgreen;
        }
        .ilbuni{
            display:inline-block;
            list-style:none;
        }
        .link-google {
            color:red;
        }
        .special {
            background-color: pink;
        }
        .btn {
            font-size: 2rem;
        }
    </style>
</head>
<body>
    <h1 id="main-title">
        Event
    </h1>
    <ul class = "ilbuni-mom">
        <li class="ilbuni">
            <img src="ilbuni-1.png">
            <a class="link-google" href="https://google.com">Google</a>
        </li>
        <li class="ilbuni"><img src="ilbuni-2.png"></li>
        <li class="ilbuni"><img src="ilbuni-3.png"></li>
    </ul>

    <button class="btn">클릭하세요!</button>

    <script>
        var btn =document.querySelector('.btn');
        var maintitle = document.querySelector('#main-title');

        function btnClickHandler(){
            maintitle.style.background = 'dodgerblue';
        }

        btn.addEventListener('click', btnClickHandler);
    </script> 
</body>
</html>
