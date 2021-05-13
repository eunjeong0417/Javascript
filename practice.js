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
    </style>
</head>
<body>
    <h1 id="main-title">
        <span>hello</span>
        DOM (Document Object Model)
    </h1>
    <ul>
        <li class="ilbuni"><img src="ilbuni-1.png"></li>
        <li class="ilbuni"><img src="ilbuni-2.png"></li>
        <li class="ilbuni"><img src="ilbuni-3.png"></li>
    </ul>

    <script>
        var ilbuni = document.querySelectorAll('.ilbuni');
        for(var i = 0; i < ilbuni.length; i++){
            ilbuni[i].style.border = '1px solid red';
        }  
    </script>
</body>
</html>
