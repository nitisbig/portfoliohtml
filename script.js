
const q = document.getElementById('quote');
addEventListener('load',()=>{
    let i=0;
    let quote = '“Experience is the name everyone gives to their mistakes.” – Oscar Wilde';
    console.log(q)
    function typeWriter(){
        if(i < quote.length){
            q.innerHTML += quote.charAt(i);
            i++;
            setTimeout(typeWriter,25)
        }
    }
    typeWriter();
})
console.log(typeof q)