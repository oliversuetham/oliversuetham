$(window).on("load", function(){
    setTimeout(function() {
        $(".splash").removeClass("active");
    }, 3000);
});

$(".btnLogin").on("click", function(){
    $(".modalLogin").addClass("active");
});

$(".modalLogin .btnBack").on("click", function(){
   $(".modalLogin").removeClass("active"); 
});

$(".btnCad").on("click", function(){
    alert("funcionou!");
})