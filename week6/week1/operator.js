/*initial data:
 let totalamount = 0;
 tasks:
 1.add 500 to total amount
 2.add 1200 to total amount
 3.apply a 200 discount
 4.add 18% Gst
 5.print the final amount
*/

let total = 0;
function addition(a){
    total +=a;
    return total;
}
function discount(b)
{
    if (b == 0)
        return 0;
    total -= b;
    return total;
}
function gst(c)
{
    let amt = (total * c)/100;
    total += amt;
    return total;
}
addition(500);
addition(1200);
discount(200);
gst(18);
console.log("final amount is :",total);

