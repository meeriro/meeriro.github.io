$(document).ready(function (){
    $(".item").on("click", function(){
        let elemId = $(this).attr("id");
        console.log(elemId);
        $("body").css("background",  elemId);
        $("h1").text( "Цвет фона " + elemId );
    })
    $(".randomColor").on("click", function(){
        let randomColor = $(this).attr("id");
        console.log(randomColor);
        $("body").css("background", "rgb("+ randomNumber+ "," +randomNumber + ","+ randomNumber+","+randomNumber+ ")");
        $("h1").text( "Цвет фона " + randomColor );
    })
    $("#img").on("click", function(){
        $("body").css(
            {
                "background":"url(./img./fon.jpg)",
                "background-size":"cover",
                "background-repeat":"no-repeat",}
        );
    });
    let randomColor = Math.random()*255;
    let randomNumber = Math.round(randomColor)
});