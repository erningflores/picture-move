let pic = document.querySelector('img');
let angle = Math.PI / 2;

function animate(time, lastTime){
    if(lastTime != null){
        angle += (time - lastTime) * 0.001;
    }

    pic.style.top = (Math.sin(angle) * 20) + "px";
    pic.style.left = (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
}

requestAnimationFrame(animate);