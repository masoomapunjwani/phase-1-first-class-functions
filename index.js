function drinking(){
    return 'Its a coffee day';
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
