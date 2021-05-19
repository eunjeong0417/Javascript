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
            align-items:center;
            justify-content: space-around;
            background: #fff000;
            cursor: pointer;
        }
        .ilbuni {
            width: 100px;
            cursor: pointer;
        }
        .characters .ilbuni {
            display: inline-block;
        }
        .special {
            border: 15px dashed red;
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
        <div class="ilbuni d">
            <img src="images/ilbuni_3.png" alt="일분이">
        </div>
    </div>
    <script>
        (function() {
    const characters = document.querySelector('.characters');

function clickHandler(e) {
    //console.log(this);
    //console.log(this);
    console.log(e.target);
}

characters.addEventListener('click',clickHandler);
})();

    </script>
</body>
</html>
