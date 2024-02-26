export function Rocket_Direction(rocket_x, rocket_y) {
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
