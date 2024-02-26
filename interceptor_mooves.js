// When the user clicks the right arrow, the interceptor and missiles will move to the right side.
function Interceptor_Moves(){  
    if (event.keyCode == 39 && interceptor_x < 1180){
        interceptor_x += 20;
        for(var k=0; k<tamirs.length ; k++){
            if(tamirs[k].y == interceptor_y)
                tamirs[k].x += 20; }
    }

// When the user clicks the left arrow, the interceptor and missiles will move to the left side.        
    if (event.keyCode == 37 && interceptor_x > 0){
        interceptor_x -= 20;
        for(var k=0; k<tamirs.length ; k++){
            if(tamirs[k].y == interceptor_y)
                tamirs[k].x -= 20; }
    }
 
// When the user presses space or enter, a missile will be sent from the interceptor.        
    if (event.keyCode == 32 || event.keyCode == 13){
        if (tamirs.some(tamir => tamir.y == interceptor_y)){
            tamirs.filter(tamir => tamir.y == interceptor_y)[0].y -= up;
    }}

// When the user clicks the down arrow, the interceptor will move down.            
    if (event.keyCode == 40 && n < 30){ 
        n += 11.25;
        m = 180 / n;
        up -= 0.23;
    }

// When the user clicks the top arrow, the interceptor will move up.    
    if (event.keyCode == 38 && n > 0){
        n -= 11.25;
        m = 180 / n;
        up += 0.23;
    }
}
