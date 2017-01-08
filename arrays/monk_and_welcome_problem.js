/*

Having a good previous year, Monk is back to teach algorithms and data structures. This year he welcomes the learners with a problem which he calls "Welcome Problem". The problem gives you two arrays 
A and B (each array of size N ) and asks to print new array C such that:
	C[i]=A[i]+B[i] ; 
	1≤i≤N
Now, Monk will proceed further when you solve this one. So, go on and solve it :)

Input:
First line consists of an integer N, denoting the size of A and B.
Next line consists of N space separated integers denoting the array A.
Next line consists of 
N space separated integers denoting the array B.
*/

function main(input) {
    //Enter your code here
    var K =  Number(input[0]);
    var A1 = input[1].split(" ");
    var A2 = input[2].split(" "); 
    var sum = [];
    var i = 0;
    while(i < K){
    	sum.push( Number(A1[i]) + Number(A2[i]));
    	i++;
    }
    process.stdout.write(sum.join(" "));
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = [];

process.stdin.on("data", function (input) {
	stdin_input.push(input.split("\n")[0]);
});

process.stdin.on("end", function () {
   main(stdin_input);
});