/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */


let namen, alter;

namen = (prompt("Bitte einen Namen eingeben"));
alter = (prompt("Bitte ein Alter eingeben")); 


if (alter >=  0 && alter < 6)
{
    console.log(namen + " " + "trinkt Milch");
}
else if (alter >= 6 && alter <= 12) 
{
    console.log(namen + " " + "trinkt Saft");
} 
    else if (alter >= 13 && alter <= 17 ) 
    {
    console.log(namen + " " + "trinkt Cola");
    } 
    else
    {
    console.log(namen + " " + "trinkt Wein");
    } 



