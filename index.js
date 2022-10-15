var name=prompt("Enter your name: ");
document.write("<h1><center>Welcome to the ZUUAAA</center></h1>");
var number=prompt("Enter any number within 1 to 9: ");

document.write("Hello, "+name+"!");
document.write("</br> You have entered "+number);
document.write("</br> Let's check your luck!!")


var data = Math.floor(Math.random() * (10 - 1)) + 1;
document.write("</br> The lucky number is "+data);
if(number==data)
{
document.write("</br>Congratulation!! You won the lottery, "+name+"!!");

}
else{
    document.write("</br>Sorry, "+name+ "!! Better luck next time");
}








