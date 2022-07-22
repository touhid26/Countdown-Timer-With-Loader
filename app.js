const start_btn = document.querySelector('#start_btn');
const stop_btn = document.querySelector('#stop_btn');
const counter_input = document.querySelector('#counter_input');
const loader = document.querySelector('.loader');
const counterLoader = document.querySelector('.counter_loader');
const h1 = document.querySelector('h1');



let counter_start_value;
let timer_start;
start_btn.addEventListener('click', function(){
    counter_start_value = counter_input.value;
    timer_start = setInterval(()=>{
        h1.innerHTML = counter_start_value;
        let loader_width = loaderWidth (counter_input.value,counter_start_value);
        loader.style.width = `${loader_width}%`;

        if(loader_width > 60){
            loader.style.backgroundColor = 'green';
            h1.style.color = 'green';
            counterLoader.style.border = 'green 1px solid';
        }else if(loader_width <= 60 && loader_width>20){
            loader.style.backgroundColor = 'orange';
            h1.style.color = 'orange';
            counterLoader.style.border = 'orange 1px solid';
        }else if (loader_width <= 20 && loader_width >= 0){
            loader.style.backgroundColor = 'red';
            h1.style.color = 'red';
            counterLoader.style.border = 'red 1px solid';
            h1.classList.add('heart');
        };
        
        if (counter_start_value == 0){
            clearInterval(timer_start);
            h1.classList.remove('heart');
        };
        counter_start_value--;
    },1000);

    stop_btn.addEventListener('click' , function (  ){
        clearInterval(timer_start);
        counter_input.value = 0;
        h1.innerHTML = 0;
        loader.style.width = '100%';

    })
    
});
