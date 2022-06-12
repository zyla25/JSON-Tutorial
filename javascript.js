$("#container").click(function(){
    $("#container").toggleClass("change");
    $("#navbar").toggleClass("navbar-active");
    $("#nav-btn-container").toggleClass("nav-btn-container-active");
    $("#main").toggleClass("main-not-active");
  });

$("#mode").click(function(){
    $(".par").toggleClass("lightModeText");
    $(".par").toggleClass("par");
})  
