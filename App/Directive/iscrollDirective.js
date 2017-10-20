app.directive('hiscroll',function(){
    return{
        rescrit:"EA",
        templateUrl:"./App/View/temp/hiscroll.html",
        link:function(){
            new IScroll(".heng",{
                //scrollbars:true,
                mouseWheel:true,
                scrollX:true,
                scrollY:false
            })

        }
    }
});