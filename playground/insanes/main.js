/*
    ------ Closure -------
function createCount(){
    let count = 0;
    const myFunction = function(){
        count += 1;
        return count;
    }
    return myFunction;
}

const increment = createCount();
const c1 = increment();
const c2 = increment();
const c3 = increment();

debugger;

const increment2 = createCount();
const c11 = increment2();
const c22 = increment2();
const c33 = increment2();

console.log(c1, c2, c3);
console.log(c11, c22, c33);

------ Exemplo return com quebra de linha ------

function foo1(){
    return {
        bar: "Hello"
    }
}

function foo2(){
    return
    {
        bar: "Hello"
    }
}

console.log("Foo1 Retorna: ", foo1());
console.log("Foo2 Retorna: ", foo2());

*/