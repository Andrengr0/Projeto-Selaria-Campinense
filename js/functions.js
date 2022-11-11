$(()=>{
   
    $(function(){
        $('header nav a').click(function(){
            var href = $(this).attr('href');
            var offSetTop = $(href).offset().top;
    
            $('html,body').animate({'scrollTop':offSetTop},2000);
    
            return false;
        })
    })


    const colors = ['#AC9100', '#ff0000']

    // animarTitulo();
    
    function animarTitulo(){
        var i = 0;
        setInterval(function(){
            if(i == 0){
                $('.apresentacion h1').css('color',colors[0]);
                i++;
            }else{
                $('.apresentacion h1').css('color',colors[1]);
                i == 0;
            }
        },1500)
    }



    var i = 0;
    setInterval(function(){
      $('.apresentacion h1').css('color', colors[i]);
      i = (i == (colors.length -1)) ? 0 : i+1;
    },1500);

    
})