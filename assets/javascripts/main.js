

let ohGodAnArray = []; 

let result = 0; 

//probably the only thing that took me 1 minute. 
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
        //Incremeent result by x; 
        result += x;
        i++;
    }

    return result;
}

//Fixed, took 30 mins
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

    //While iterator is less than array length.. 
    while(i < ohGodAnArray.length)
    { 
       //Incremenent result by x.. 
       result += x;
       //Every loop until iterator is equal to array length.. 
       i++;
    }

    //Return result. 
    return result;
}

//Took 20 minutes
function factorial(x)
{            
   //Clear array before use to dump any previous values inside of it.
   ohGodAnArray = [];

   //Iniitalize iterator to keep track of array length. 
   amountInsideArray = 0;
    
   //Initialize result.
   result = 0;

   let factorial = x - 1;
    
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
            result += x;
            position++; 
        }
         i++;
    }  

    return result;
}
//40 minutes
function fibonacci(x)
{
   //0  1  1  2  3  5  8  [13]  21

   fibonacciArray = [];
   //Initialize iterator.
   let i = 0;

   let first; 
   let second = 1;
   let third; 

    //While iterator is less than x.
    while(i < x)
    {   //I quit lol, 
        fibonacciArray.push(first);    

        first = fibonacciArray[i];
       
        third = first + second;

        fibonacciArray.push(third);

        i++;
    //    //Check 1 and 1
    //     else if(fibonacciArray[1] === i)
    //     {          
    //         fibonacciArray.push(fibonacciArray[i] + fibonacciArray[i]);
    //         first = fibonacciArray[i]; //1
    //         second = fibonacciArray[i - 1];
    //         i++;
    //     }  

    //     //Check 1 and everything else
    //     else
 
    //        fibonacciArray.push(fibonacciArray[i] + fibonacciArray[i - 1]);
    //         i++;
    }

    return fibonacciArray[x];
}