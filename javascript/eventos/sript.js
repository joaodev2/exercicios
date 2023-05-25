


//click.addEventListener('click', function(){
// console.log('clicou aqui')})



// function callback(event) {
//  console.log('clicou aqui')
// }

// click.addEventListener ('click', callback);

// const click = document.querySelector('.caixa');

// click.addEventListener('click', callbackLista);


// function callbackLista (event){
// console.log(event.target)};


// function keysboard (event){
  
//   if(event.key === 'v'){
//    document.body.classList.toggle('vermelho')
// }

// }

// window.addEventListener('keydown', keysboard);




// window.addEventListener('keydown', nome);

// function nome (event){
//   if(event.key === 'b'){
//    document.body.classList.toggle('ativo')
//   }
// }
 

const linkInternos = document.querySelectorAll('a[href^="#"]');

function nome (event){
   event.preventDefault();
   event.currentTarget.classList.toggle('ativado-caralho')
   console.log(event); 
}

linkInternos.forEach ((item) => {
   item.addEventListener('click', nome);
})