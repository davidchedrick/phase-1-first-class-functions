function receivesAFunction(callback){
    return callback();
}
receivesAFunction(function() {return 'Cutie, ' + 'cat' +'!'});

 
function returnsANamedFunction() {
    const cat = () => 
    console.log('meow, meow');
    return cat;
}
returnsANamedFunction();


function returnsAnAnonymousFunction() {
    return function(){
    console.log ('Cutie Alert!!!!!');
}
}
returnsAnAnonymousFunction();
