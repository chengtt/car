app.directive('banner',function(){
    return{
        rescrit:"EA",
        templateUrl:"App/View/temp/banner.html",
        link:function(){
            new Swiper('.swiper-container',{
                autoplay:1000,
                loop:true,
                paginationClickable:true,
                pagination:".swiper-pagination"
            });
        }
    }
});