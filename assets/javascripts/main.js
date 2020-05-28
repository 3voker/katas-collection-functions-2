

let ohGodAnArray = []; 

let result = 0; 


function add(x, y)
{
    return x+y;
}

//took 10 mins
function multiply(x, y)
{ 
    result = 0; 
    let i = 0;
//While iterator is less than y 
    while(i < y)
    {
        //Increment result by x; 
        result = add(result, x);
        i++;
    }

    return result;
}

//Exponent is still wrong, fix it dudes 5/26/2020
function exponent(x, y)
{              
   //Clear array before use to dump any previous values inside of it.
   ohGodAnArray = [];
   //Iniitalize iterator to keep track of array length. 
   let amountInsideArray = 0;
   //Initialize result.
   result = 0; 

    //While tracked array length iterator is less than y..
    while(amountInsideArray < y)
    {
        //Add x..
        ohGodAnArray.push(x);
        //y times...
        amountInsideArray++; 
    }

    //Initialize iterator to increment to array length. 
    i = 0;

    let combinedArrayResult;
    //While iterator is less than array length.. 
    while(i < ohGodAnArray.length)
    { 
       //Incremenent result by x.. 
     
       combinedArrayResult = add(ohGodAnArray[i], ohGodAnArray[i]);
       //Every loop until iterator is equal to array length.. 
       i++;
    }

    //Return result. 
    return result = add(combinedArrayResult, result);
}


function factorial(x)
{            
   //Clear array before use to dump any previous values inside of it.
   ohGodAnArray = [];

   //Iniitalize iterator to keep track of array length. 
   amountInsideArray = 0;
    
   //Initialize result.
   result = 0;

   let factorial = add(x, -1);
    
     //While tracked array length iterator is less than y..
     while(amountInsideArray < x)
     {
         //Add x - 1..
         ohGodAnArray.push(factorial);
         //x times...
         amountInsideArray++;
         //Decrement factorial value each loop. 
         factorial--;
     }

    
    //Initialize first iterator to increment to array length. 
    i = 0;

    //While iterator is less than array length.. 
    while(i < ohGodAnArray.length - 1)
    {
        //Set position to zero. 
        position = 0;

        //While position is less than specific index of the array
        while(position < ohGodAnArray[i])
        {
            //Increment result by x;
            add(result, x);
            position++; 
        }
         i++;
    }  

    return result;
}

function fibonacci(x)
{
   //0  1  1  2  3  5  8  [13]  21
        
   fibonacciArray = [0, 1, 1];
   //Initialize iterator.
   let i = 2;

   //let first = fibonacciArray[0]; 
   let previousPosition = i;

    //While iterator is less than x. 0+1 = 1, 3 + 5 = 8
    while(i < x)
    { 
        fibonacciArray.push(fibonacciArray[previousPosition] + fibonacciArray[i])
        previousPosition = i;
        i++;  
    }

    return x = fibonacciArray[previousPosition];
}