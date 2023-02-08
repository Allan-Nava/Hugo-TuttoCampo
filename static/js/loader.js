var Loader = {
    waitGroup:1
}

Loader.AddJob = function(){
    Loader.waitGroup++
}

Loader.Done = function(){
    Loader.waitGroup--
}

$(document).ready(function(){
    Loader.interval = setInterval(function(){
        if( Loader.waitGroup < 1){
            // $(".page_loader").fadeOut(500,function(){
            //     $("body").removeClass("loader")
            //     $(".page_loader").remove()
            // })
            $('body').addClass('loaded');
            clearInterval(Loader.interval)
        }
    },800)
});
