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
    </style>
</head>
<body>
    <h1 id="main-title">
        <span>hello</span>
        DOM (Document Object Model)
    </h1>
    <ul class = "ilbuni-mom">
        <li class="ilbuni">
            <img src="ilbuni-1.png">
            <a class="link-google" href="https://google.com">Google</a>
        </li>
        <li class="ilbuni"><img src="ilbuni-2.png"></li>
        <li class="ilbuni"><img src="ilbuni-3.png"></li>
    </ul>

    <script>
    var ilbuniMom = document.querySelector('.ilbuni-mom');
    var listElem = document.createElement('li');
    listElem.innerHTML ='<span>name</span>';
    ilbuniMom.appendChild(listElem);
    </script> 
</body>
</html>
