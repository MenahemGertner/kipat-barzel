// import {Rocket_Direction} from "./rocket_direction.js"
function Rocket_Direction(rocket_x, rocket_y) {
    if (rocket_y > 100){
        if (rocket_x < 175){
            rocket_x += 1;
            rocket_y -= 1;}
        else if (rocket_x < 200){
            rocket_x += 1.2;
            rocket_y -= 0.8;}
        else if (rocket_x < 225){
            rocket_x += 1.4;
            rocket_y -= 0.6;}
        else if (rocket_x < 250){
            rocket_x += 1.6;
            rocket_y -= 0.4;}
        else if (rocket_x < 275){
            rocket_x += 1.8;
            rocket_y -= 0.2;}
        else if (rocket_x < 300){
            rocket_x += 2;}
        else if (rocket_x < 600){
            rocket_x += 1.8;
            rocket_y += 0.2;}
        else if (rocket_x < 625){
            rocket_x += 1.6;
            rocket_y += 0.4;}
        else if (rocket_x < 650){
            rocket_x += 1.4;
            rocket_y += 0.6;}
        else if (rocket_x < 725){
            rocket_x += 1.2;
            rocket_y += 0.8;}
        else {
            rocket_x += 0.9;
            rocket_y += 1.1;}}
    else{
        if (rocket_x < 200){
            rocket_x += 1.6;
            rocket_y -= 0.4;}
        else if (rocket_x < 225){
            rocket_x += 1.8;
            rocket_y -= 0.2;}
        else if (rocket_x < 250){
            rocket_x += 2;}
        else if (rocket_x < 350){
            rocket_x += 1.8;
            rocket_y += 0.2;}
        else if (rocket_x < 375){
            rocket_x += 1.6;
            rocket_y += 0.4;}
        else if (rocket_x < 400){
            rocket_x += 1.4;
            rocket_y += 0.6;}
        else if (rocket_x < 425){
            rocket_x += 1.2;
            rocket_y += 0.8;}
        else {
            rocket_x += 0.9;
            rocket_y += 1.1;}
    }
    return [rocket_x, rocket_y];
    }

// The central function of set interval.
function Rocket_Aviation(){

    // Background picture
    ctx.drawImage(img_reka, 0, 0, 1250, 650); 

    //  Text inside the canvas
    ctx.font = "30px Arial";
    ctx.fillStyle = "green";
    if (money < 500)
        ctx.fillStyle = "red";
    ctx.fillText("money: " + money + "$", 1020, 50);  
    ctx.fillStyle = "gold";
    ctx.fillText("level: " + level , 1020, 100);

    // Loop the missiles from the interceptor
    for(var k=0; k<tamirs.length ; k++){

        // When the user launches a missile,
        // the image rotates according to the position of the launcher and maintains the angle along the canvas.
        if (tamirs[k].y != interceptor_y){
            if ((570 - tamirs[k].y) % 2 == 0){
                ctx.save();
                ctx.translate(tamirs[k].x + 40, tamirs[k].y + 40); 
                ctx.rotate(-Math.PI / 180);
                tamirs[k].x -= 1;
                tamirs[k].y -= 2;            
            }
            else if (((570 - tamirs[k].y)*100).toFixed(2) % 177 == 0)
            {
                ctx.save();
                ctx.translate(tamirs[k].x + 40, tamirs[k].y + 40); 
                ctx.rotate(-Math.PI / 16);
                tamirs[k].x -= 1.23;
                tamirs[k].y -= 1.77;
                
            }
            else if (((570 - tamirs[k].y)*100).toFixed(2) % 154 == 0)
            {
                ctx.save();
                ctx.translate(tamirs[k].x + 40, tamirs[k].y + 40); 
                ctx.rotate(-Math.PI / 8);
                tamirs[k].x -= 1.46;
                tamirs[k].y -= 1.54;
                if (tamirs[k].y < 297.42 && tamirs[k].y > 297.41 ||
                    tamirs[k].y < 24.85 && tamirs[k].y > 24.83){
                        tamirs[k].y -= 1.54;
            }
            }
            else if (((570 - tamirs[k].y)*100).toFixed(2) % 131 == 0)
            {
                ctx.save();
                ctx.translate(tamirs[k].x + 40, tamirs[k].y + 40); 
                ctx.rotate(-Math.PI / 5.33);
                tamirs[k].x -= 1.69;
                tamirs[k].y -= 1.31;
                if (tamirs[k].y < 368.27 && tamirs[k].y > 368.25 ||
                    tamirs[k].y < 338.14 && tamirs[k].y > 338.12 ||
                    tamirs[k].y < 166.53 && tamirs[k].y > 166.51 ||
                    tamirs[k].y < 106.27 && tamirs[k].y > 106.25)
                        tamirs[k].y -= 1.31;   
            }
            
            ctx.drawImage(img_kb_rocket, -40, -40, 40, 40);
            ctx.restore();

            // When the missile leaves the canvas, the condition will return it to the starting point,
            // and also reduce the user money.
            if(tamirs[k].y < -40 || tamirs[k].x < - 40){
                tamirs[k].x = interceptor_x + 15; tamirs[k].y = interceptor_y;
                money -= 50;
        }}
    }
  
    // A loop for actions on the rockets.
    for(var i=0, j=650 ; i<rockets.length ; i++){

        // Determining the position for the start of the rocket flight.
        if (j<1300)
            j += 200;
        else
            j = 650;

        // Picture of the rockets
        ctx.drawImage(img_rocket, rockets[i].x, rockets[i].y, 13, 13);

        // A call to the function to determine the trajectory of the rockets.
        
        [rockets[i].x, rockets[i].y] = Rocket_Direction(rockets[i].x, rockets[i].y);
        

        // Continue to the previous condition to determine the starting point of the flight.
        if (rockets[i].y > j){
            rockets[i].x = 0;
            rockets[i].y = Math.floor(Math.random()* 649);}

        // Disqualification when a rocket hits the interceptor.
        if (rockets[i].x > interceptor_x && rockets[i].x < interceptor_x +60 &&
            rockets[i].y > interceptor_y && rockets[i].y < 650){
            audio_boom.play();
            alert('Game over!\nYour interceptor has been hit!');
            money = 1000;
            level = 0;
            add_rocket = 0;
            rockets = new Array({x: 1300, y: 650});
            tamirs = new Array();
            for (b = 0; b < counter; b++)
                tamirs.push({x: interceptor_x + 15, y: interceptor_y});
                play_again = confirm('Do you want play again?');
                if (play_again == false)
                    window.close();
                rockets[i].x = 0; rockets[i].y = Math.floor(Math.random()* 649);
        }

        // When a rocket is not intercepted.
        if (rockets[i].y > 648.9 && rockets[i].y < 650)
            money -= 100;

        // When a missile hits a rocket.
        for(var k=0; k<tamirs.length ; k++){
            if (rockets[i].x > tamirs[k].x - from && rockets[i].x < tamirs[k].x - to &&
                rockets[i].y > tamirs[k].y - from + 40 && rockets[i].y < tamirs[k].y - to + 40 && tamirs[k].y != interceptor_y){
                    ctx.save();
                    ctx.translate(tamirs[k].x + 40, tamirs[k].y + 40);
                    ctx.rotate(-Math.PI / 4);
                    ctx.drawImage(img_kb_rocket, -40, -40, 40, 40);
                    ctx.restore();
                    tamirs[k].x -= 2;
                    tamirs[k].y -= 0.9
                    from -= 2;
                    to -= 2;
            }
          
            if (rockets[i].x > tamirs[k].x && rockets[i].x < tamirs[k].x +40 &&
                rockets[i].y > tamirs[k].y && rockets[i].y < tamirs[k].y +40){
                if (tamirs[k].y != interceptor_y){
                    audio_boom.play();           
                    rockets[i].x = 0; rockets[i].y = Math.floor(Math.random()* 649);
                    ctx.drawImage(img_rocket, tamirs[k].x, tamirs[k].y, 80, 80);
                    tamirs[k].x = interceptor_x + 15; tamirs[k].y = interceptor_y;
                    money += 100;
                    from = 60; to = 30;
        }}}
        }

// A condition for moving to the next stage.
if (money >= add_rocket + 400){
    audio_succes.play();
    rockets.push({x: 1300, y: 650});
    add_rocket = money;
    level += 1;
}

// Disqualification when the money runs out.
if (money <= 0) {
    alert('Game over!\nYour money is gone!');
    money = 1000;
    level = 0;
    add_rocket = 0;   
    rockets = new Array({x: 1300, y: 650});
    tamirs = new Array();
        for (b = 0; b < counter; b++)
            tamirs.push({x: interceptor_x + 15, y: interceptor_y});
    play_again = confirm('Do you want play again?');
    if (play_again == false)
        window.close(); 
}
  
// Rotation of the interceptor according to the user's click.
if (n > 0){
    ctx.save();
    ctx.translate(interceptor_x + 40, interceptor_y + 40);
    ctx.rotate(-Math.PI / m);
    ctx.drawImage(img_kipat_barzel, -40, -40, 80, 80);
    ctx.restore();
}
else
ctx.drawImage(img_kipat_barzel, interceptor_x, interceptor_y, 80, 80);

// Embedding the images within the function.
img_rocket.src = "rocket.png";
img_reka.src = "reka.jpeg";
img_kipat_barzel.src = "kipat_barzel.png";
img_kb_rocket.src = "kb_rocket.png";
}

// -------------------------------------------------------------------
    var ctx = document.getElementById('myCanvas').getContext('2d');
    
    var img_reka = new Image();
    var img_kipat_barzel = new Image();
    var img_kb_rocket = new Image();   
    var img_rocket = new Image();
    var audio_boom = new Audio('boom.mp3');  
    var audio_succes = new Audio('succes.mp3');     

    var rockets = new Array({x: 0, y: 500});
    var interceptor_x = 700; interceptor_y = 570; counter = 6;
    var tamirs = new Array();
        for (b = 0; b < counter; b++)
            tamirs.push({x: interceptor_x + 15, y: interceptor_y});

    var money = 1000; add_rocket = 0; level = 0;
    var n = 0; m = 0;
    var up = 2;
    var from = 60; to = 30;
