document.addEventListener('mousemove', animateHeart);
document.addEventListener('touchmove', function(e){
    let touch = e.touches[0];
    animateHeart(touch);
});

function animateHeart(e) {
    let container = document.getElementById('container');
    let heart = document.createElement('span');
    let x = e.clientX;
    let y = e.clientY;         
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    
    let size = Math.random() * 80;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';

    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate(' + transformValue + 'deg)';
    
    container.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    }, 1000);
}
