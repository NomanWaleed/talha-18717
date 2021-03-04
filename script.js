            // Programme 01 | Max b/w two 
function max() {
    var num1 = prompt('please enter 1st number');
    var num2 = prompt('please enter 2nd number');
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (num1>num2)
    document.getElementById("show").innerHTML = 'num 1 = '+num1+', num2 = '+ num2+ '  So Num1 is greater';
    else if(num1<num2)
    document.getElementById("show").innerHTML = 'num 1 = '+num1+', num2 = '+ num2+' So Num2 is greater';
    else
    document.getElementById("show").innerHTML = 'num 1 = '+num1+', num2 = '+ num2+' So Both are equal';
}


            // Programme 02 | Max b/w three
function max3(){
    var num1 = prompt('please enter 1st number');
    var num2 = prompt('please enter 2nd number');
    var num3 = prompt('please enter 3rd number');
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    if (num1>num2 && num1>num3)
    document.getElementById("max3").innerHTML ='num 1 = '+num1+', num2 = '+ num2+', num3 = '+num3+ ',  So Num1 is greater';
    else if(num2 > num3)
    document.getElementById("max3").innerHTML ='num 1 = '+num1+', num2 = '+ num2+', num3 = '+num3+ ',  So Num2 is greater';
    else if(num1==num2 && num2 == num3)
    document.getElementById("max3").innerHTML ='num 1 = '+num1+', num2 = '+ num2+', num3 = '+num3+ ', So All are equal numbers';
    else
    document.getElementById("max3").innerHTML ='num 1 = '+num1+', num2 = '+ num2+', num3 = '+num3+ ',  So Num3 is greater';
}

            //Programme 03 || Number is Positive , Negative or Zero
function checkNumber(){
   var num1 =  prompt('please enter a number');
   num1 = parseInt(num1);
   if(num1==0)
   document.getElementById("numberIs").innerHTML='Your number is Zero';
   else if(num1>0)
   document.getElementById("numberIs").innerHTML='Your number is Positive';
   else
   document.getElementById("numberIs").innerHTML='Your number is Negative';
}
            //Programme 04 || Number is divisible by 5 , 11 or Not
function checkDivisible(){
    var num1 = prompt('Enter your number');
    num1 = parseInt(num1);
    if(num1 % 5 == 0 && num1 % 11 == 0)
    document.getElementById("divisible").innerHTML ='Your number is divisible by both 5 and 11';
    else if(num1 % 5 == 0)
    document.getElementById("divisible").innerHTML ='Your number is divisible by 5';
    else if(num1 % 11 == 0)
    document.getElementById("divisible").innerHTML ='Your number is divisible by 11';
    else if(num1 % 5 == 0 && num1 % 11 == 0)
    document.getElementById("divisible").innerHTML ='Your number is not divisible by both 5 and 11';

    else
    document.getElementById("divisible").innerHTML ='Your number is not divisible by 5 or 11';
}

            //Programme 05 || Number is Even or Odd
function evenOdd(){
    var num1 = prompt('Enter your Number');
    num1 = parseInt(num1);
    if(num1 < 0)
    document.getElementById('evenOdd').innerHTML = 'Please enter a Positive Number';
    else if(num1 % 2 ==0)
    document.getElementById('evenOdd').innerHTML =num1+ ' is Even Number';
    else
    document.getElementById('evenOdd').innerHTML =num1+ ' is Odd Number';
}

           //Programme 06 || Leap year or not
function leapYear(){
    var num1 = prompt('Enter an Year you want to Check!');
    num1 = parseInt(num1);
    if(num1 % 4 == 0)
    {
        if(num1 % 100 == 0)
        {
            if(num1 % 400 == 0)
            document.getElementById('leapYear').innerHTML = num1 + ' is a leap year';
            else
            document.getElementById('leapYear').innerHTML = num1 + ' is not a leap year';
        }
        document.getElementById('leapYear').innerHTML = num1 + ' is a leap year';
    }
    else
    document.getElementById('leapYear').innerHTML = num1 + ' is not a leap year';
}

           //Programme 08 ||  Alphabet is Vowel or Consonant
function alphabet(){
    var char = prompt('Please write an Alphabet');
    if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u')
    document.getElementById('alphabet').innerHTML = char + ' is a Vowel';
    else if(char=='A' || char=='E' || char=='I' || char=='O' || char=='U')
    document.getElementById('alphabet').innerHTML = char + ' is a Vowel';
    else
    document.getElementById('alphabet').innerHTML = char + ' is a Consonant';
} 

            //Programme 07 || Character is Alphabet or Not
function characterIs(){
    var char = prompt('Please write an Alphabet');
    if (char.match(/[a-z]/i))
    {
        document.getElementById('characterIs').innerHTML =char + ' is an alphabet';
    }
    else{
        document.getElementById('characterIs').innerHTML = char + ' is not a alphabet';
    }
}

            //Programme 09 || Character is Alphabet or Special Character or Number
function checkCharacter(){
    var char = prompt('Enter a Character');
    var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    var format1 = /[a-z]/i;
    if (char.match(format))
    document.getElementById('checkCharacter').innerHTML = char + ' is a Special Character';
    else if(char.match(format1))
    document.getElementById('checkCharacter').innerHTML = char + ' is an Alphabet';
    else
    document.getElementById('checkCharacter').innerHTML = char + ' is a Number';
}

                               //STRING PART

            //Programme 01 || Find length of a String

function lengthOfString(){
    var char = prompt('Enter the Charaters');
    var number = char.length;
    document.getElementById('lengthOfString').innerHTML = char + ' has '+number+' Characters';
}

            //Programme 02 || Copy one String to Another
function copyString(){
    var string1 = prompt('Enter a String');
    var string2 = string1;
    document.getElementById("copyString").innerHTML = 'String 1 Contains '+ string1;
    document.getElementById("copyString1").innerHTML = 'String 2 also Contains the Same ' + string2;
}

            //Programme 03 || Concatenate Two Strings

function concatenate(){
    var string1 = prompt('Enter 1st String');
    var string2 = prompt('Enter 2nd String');
    string1 = string1.concat(string2);
    document.getElementById("concatenate").innerHTML = 'Your Strings after Concatenation is '+string1;
}

            //Programme 04 || Compare Two Strings

function compare(){
    var string1 = prompt('Enter 1st String');
    var string2 = prompt('Enter 2nd String');
    string1 = string1.localeCompare(string2);
    document.getElementById('compare').innerHTML = string1;
}

            //Programme 05 || LowerCase to UpperCase

function case1(){
    var string = document.getElementById('input').value;
    string = string.toUpperCase();
    document.getElementById('case1').innerHTML = 'Your String is Converted to '+string;
}

            //Programme 06 || upperCase to lowerCase

function case2(){
    var string=document.getElementById('input1').value;
    string = string.toLowerCase();
    document.getElementById('case2').innerHTML = 'Your String is Converted to '+string;    
}

            //Programme 07 || Toggle Case of each Character

function toggle(){
    var string = document.getElementById('toggleInput').value;
    string = string.toggle;
    document.getElementById('toggle').innerHTML = string;
}


            //                   ARRAY
            // Prograame 01 || Adding & Removing Elements
function array1(){
    
    var array1 = 0;
    for(var i=0; i<5; i++){
         array1 =array1 +' '+ [ prompt('enter '+ `${i+1}` +' element in an array')];
    }
    
    console.log(array1);
    document.getElementById('array1').innerHTML = array1;        

}

            // Programme 02 || Print All Negative Elements

function negativeElements(){
    var number=1;
    for(var i=0; i<5; i++){
        number = [number +' , '+ prompt('Enter values in an array')];
    }
       //number = parseInt(number);
       console.log(number);
    for(var j=0; j<5; j++){

        if(number[j]<0){
            document.getElementById('negativeElements').innerHTML=number[j];
        }
        else
        document.getElementById('negativeElements').innerHTML='your array have no Negative Number';
    
    }
}
                // Math
           //Round Without ROund

function round(){
   
    var num1 = document.getElementById('roundInput').value;
    num2=Math.trunc(num1);
    num3=(num1-num2);
    if(num3>=0.5){
        num3 = 1;
    }
    else
    num3=0;
    document.getElementById('round').innerHTML='Your Number after round is '+ (num2+num3);
}

            //Ceil the Number | Without Ceil
function ceil(){

    var num1 = document.getElementById('ceilInput').value;
    num2 = Math.trunc(num1);
    num3 = num1-num2;
    if(num3>=0.1)
    num2= num2+1;
    document.getElementById('ceil').innerHTML=num2;
}

        //Floor the Number | Without Floor

function floor(){
    var num1 = document.getElementById('floorInput').value;
    num2 = Math.trunc(num1);
    num3 = num1-num2;
    if(num3>=0.1){
        num2 = num2;
    }
    document.getElementById('floor').innerHTML=num2;
}

        // LOOPS
        //Print  All Natural Numbers
function naturalNumber(){
    var printAll=0;
    var num = document.getElementById('sumInput').value;
    for(var i=1; i<=num; i++){
        printAll = printAll +','+i;
    }
    document.getElementById('naturalNumber').innerHTML=printAll;
}

        //Print  All Natural Numbers in Reverse Order
function reverse(){
    var printRev;
    var num = document.getElementById('reverseInput').value;
    var printRev = num;
    for(var i=num-1; i>=0; i--){
        printRev = printRev +','+i;
    }
    document.getElementById('reverse').innerHTML=printRev;
}

        //Print All Characters from A to Z
function alphabets(){
    var alphabets1 = 'A ';
    var j = 91;
    for(var i=66; i<j; i++){
        alphabets1 = alphabets1 +','+ String.fromCharCode(i);
    }
    console.log(alphabets1);
    document.getElementById('alphabets').innerHTML=alphabets1;
}

        //Print Even Number B/w 1 to 100
function even(){
    var evenNumber = 0;
    for(var i=2; i<=100; i++){
        if(i%2==0)
        evenNumber = evenNumber+','+i;
    }
    document.getElementById('even').innerHTML = evenNumber;
}

        //Print Odd Number b/w 1 to 100
function odd(){
    var oddNumber = 1;
    for(var i=3; i<=100; i++){
        if(i%2==1)
        oddNumber = oddNumber+','+i;
    }
    document.getElementById('odd').innerHTML = oddNumber;
}

        // **********Finish********