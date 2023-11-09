const text = document.querySelector('.text');
const above = document.querySelector('.above');
const under = document.querySelector('.under');

above.addEventListener('mouseover', () => {
    above.style.top = '5px';
    under.style.height = '25px';
    under.style.top = '-7.5px';
});

above.addEventListener('mouseout', () => {
    above.style.top = '0px';
    under.style.height = '30px';
    under.style.top = '-10px';
});


above.addEventListener('mousedown', hold);
above.addEventListener('touchstart', hold)

above.addEventListener('mouseup', release);
above.addEventListener('touchend', release)


function hold() {
    above.style.top = '10px';
    under.style.height = '20px';
    under.style.top = '-5px';
    
    text.innerHTML = "Don't release the button!"
    text.classList.add('dont');
    text.classList.remove('boom');
}

function release() {
    above.style.top = '0px';
    under.style.height = '30px';
    under.style.top = '-10px';
    
    text.classList.remove('dont');
    text.innerHTML = 'BOOOOOOM'
    text.classList.add('boom');
}