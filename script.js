// problema 1 
let arr = []
function add(x){
    
    for(i=1;i<=x;i++){

        arr.push(i)
    }   
}

add(255)
console.log(arr.length)

//problema 2 

function pares(x){
    y=0
    for(i=2;i<=x;i+=2){
        y=y+i
    }
        return y
}
console.log(pares(1000))

//problema 3


function impares(x){
    y=0
    for(i=1;i<=x;i+=2){
        y=y+i
      
    }
    return y 
        
}
console.log(impares(5000))

//problema 4

function suma(x) {
    z= 0;
    for (i = 0; i < x.length; i++) {
        z=z +  x[i]
    }
    return z;
}
console.log( suma([1,5,8]) );

 //problema 5
 
 function mayor(y){
    mas=y[0]
   for(i=0;i<y.length;i++){
      z=y[i]
       if (z>mas){
       mas=z
       }
    }
    return mas;
}

console.log(mayor([-3,3,5,7]))

// problema 6


function prom(x) {
    z= 0;
    for (i = 0; i < x.length; i++) {
        z = z + x[i]  
        total=z/x.length
    }
    return total;
}
console.log(prom([3,9,-6]));


// problema 7 

function impar(x){
    for(i=1;i<=x;i+=2){
        console.log(i)
    }
}
console.log(impar(50))


//problema 8 

let arr = []
function mayor(y){
    mas=-3
       for(i=0;i<y.length;i++){
      z=y[i]
       if (z>mas){
           arr.push(mas)
      
       }
    }
    return mas;
}
mayor([-3,9,3,5,7])

console.log(`hay ${arr.length} numeros mayores al tuyo`)

//problema 9

function cuadrados(x){
    
    for(i=0;i<x.length;i++){
        y=x[i]
        y=y**2;
        console.log(y)
    }
    return y 
    
}
cuadrados([1,2,3]);

//problema 10

function neg(x){
  
    for (i=0;i<x.length;i++){
        y=0 
          if (y>x[i]){
                console.log(0);
            }
            else{
                console.log(x[i]);
            }
       } 
    }
console.log(neg([1,5,10,-2]));

//problema 11

x=[3,9,-6];
arr=[]

function prom(x) {
    z= 0;
    for (i = 0; i < x.length; i++) {
        z = z + x[i]  
        total=z/x.length
    }
    arr.push(total)
    return total;
}

function mix([x]){
    mas=x[0]
    min=x[0]
    for(i=0;i<x.length;i++){
        y=x[i]
        z=x[i] 
        if(y>mas){
            mas=y
            return mas
        }
        else if (min>z){
            min=z
            return min
        }
        
    }
arr.push(mas,min)
}

mix(x);
prom(x);
console.log(arr);


//problema 12

x=[1,2,3,4,5,6];

function int(){
   y=x[0];
   z=x[(x.length - 1)];
   m=[];
   for(i=1;i<x.length;i++){
    if (i=(x.length-1)){
        m.push(z);
    }
    for(i=1;i<x.length-1;i++){
           m.push(x[i]);
   }
   m.push(y);
   return m
}   
}   
int(x)
console.log(int(x))



//problema 13
x=[-1,-2,3]

function dojo(){
  
    for (i=0;i<x.length;i++){
        y=0 
          if (y>x[i]){
                console.log("dojo");
            }
            else{
                console.log(x[i]);
            }
       } 
    }

console.log(dojo(x))