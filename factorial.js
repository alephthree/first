function fact(n)
{
	if(n==1)
		return n;
	else 
		return n * fact(n-1);
	
}
var v=fact(10);
console.log(v);