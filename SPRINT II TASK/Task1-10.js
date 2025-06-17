var n=5;
var fact=1;
console.log("Factorial Value is "+factorial(n));
function factorial(n)
{
    for(var i=1;i<=n;i++)
    {
        fact=fact*i;
    }
    return fact;
}