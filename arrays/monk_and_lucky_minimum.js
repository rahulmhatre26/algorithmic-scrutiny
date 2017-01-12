/*

Monk just purchased an array A having N integers. Monk is very superstitious. He calls the array A Lucky if the frequency of the minimum element is odd, otherwise he considers it Unlucky. Help Monk in finding out if the array is Lucky or not.
Input:
First line consists of a single integer T denoting the number of test cases.
First line of each test case consists of a single integer N denoting the size of array A.
Second line of each test case consists of N space separated integers denoting the array A.
Output:
For each test case, print "Lucky" (without quotes) if frequency of minimum element is odd, otherwise print "Unlucky"(without quotes). Print a new line after each test case. 
Sample Input 
2
5
8 8 9 5 9
5
3 3 3 5 3

Sample Output
Lucky
Unlucky 

*/

function main(input) {
    var inp = input.split("\n");
    var test_cases = [],i = 0,j = 0,test_cases_K = Number(inp[0]);
    while(i < test_cases_K){
        var l = i * 2,j = 0,min_val = -1,min_count=0,result="";
        var len = Number(inp[l+1]), data = inp[l+2].split(" ");
        while(j < len){
            var a = Number(data[j]);
            min_val == -1 ? min_val = a : null;
            if(a < min_val){
                min_val = a;
                min_count = 0;
            }
            min_val == a ? min_count+=1 : null;
            j++;
        }
        (min_count % 2) == 0 ? process.stdout.write("Unlucky\n") : process.stdout.write("Lucky\n");
        i++;
    }
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input);
});