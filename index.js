function drinking(){
    return 'coffee';
}

function recievesAFunction(drinking){
    return drinking();
};


function returnsANamedFunction(){
    const namedFunction = parameter => parameter;
    return namedFunction;
};



function returnsAnAnonymousFunction(){
    return () => console.log("An anonymous function");
};