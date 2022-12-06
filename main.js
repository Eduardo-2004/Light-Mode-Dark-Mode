$(document).ready(function(){
    $('#toggle-btn').click(function (){
        //change background color
        $('body').toggleClass('change-background');
        $(this).css("border", "1px solid #f5f5f5");
        //toggle bnt text
        $("span").text(
            $("span").text() == "Light Mode" ? "Dark Mode" : "Light Mode");
    })
    //change moon to sun
    $("#toggle-btn").click(function(){
        $(this).find("i").toggleClass("fa moon fa-sun")
    })

})



