$(function(){
    
    $(".yt").click(function(e){
        e.preventDefault()
        $(".na").toggle(1000, "swing");
    })
   
      $(".aa1").click(function(e){
      e.preventDefault()
      $(".aa1").removeClass("active")
      $(this).addClass("active")
      console.log($(this).text())
      $(".st").removeClass("act")  
      $(`#${$(this).data("div")}`).addClass("act")
      })
      $(".fa-bars ").click(function(){
          $(".vvv").css("left","0px")
      })
      $(".close ").click(function(){
        $(".vvv").css("left","-100%")
    })
})