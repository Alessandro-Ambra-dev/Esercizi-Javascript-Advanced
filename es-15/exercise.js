function repeatHello(callback){
    let id = setInterval(()=> console.log(callback), 1000);
    setTimeout(()=> clearInterval(id),6000);
}

repeatHello("Hello")

// ABBIAMO UTILIZZATO UNA FUNZIONE FRECCIA ANONIMA PERCHÈ PERMETTE DI SCRIVERE MENO CODICE E IL TUTTO RISULTERÀ PIÚ FLUIDO 
