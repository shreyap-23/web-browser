#CODING STANDARDS  
## Code quality 
### dry   
### variable name   
- understandable / Descriptive  
~~~js  
let a = 50;  //x  
let age = 50; //v  
~~~
camel case  
~~~js  
let student_name = "shreya"; //x  
let studentName = "shreya";//v  
~~~  
### ERRORS (FOR VARIABLE NAME )  
Reserved keywords('if'.'for')  
~~~js  
let if = "shreya"; //x  
~~~  
cannot start with numbers
~~~js  
let 2cool= "shreya"; //x  
~~~    
cannot hve spl symbols(@.$,!)(except for '_')  
~~~js  
let abc$123 = "shreya"; //x  
let abc_123 = "shreya";//v  
~~~    

### variables name   
choose 'let' over 'var','const' over 'let'  
~~~js  
let panCard = "BHDS4568"; //x  
const panCard = "BHDS4568";//v  
const marks = [10, 20, 40];//v 
~~~    
  write your const case   
  ~~~js  
let piValue = 3.14; //x  
let PI_VALUE =3.14;//v  
~~~      


# DOCUMENTATION  
- single comment
~~~js
//
~~~  
- multiple comment  
~~~js
/**(2 * are  mandatory)
 *   
 * 
 *   
 *   
 */
~~~  
