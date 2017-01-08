//Input : arr[] = {2, 5, -1, 7, -3, -1, -2}  
//        K = 4
//Output : 18

let arr = [2, 5, -1, 7, -3, -1, -2, 5, 4,-2];
let K = 4;
let min_ele = null;
let max_ele = null;
let current_pos = 0;
let sum_arr = [];
let total_sum = 0;

while(sum_arr.length != (arr.length - K +1) ){
	for(var i = current_pos; i < (K + current_pos) ; i++){
		if(min_ele == null)
			min_ele = arr[i];
		if(max_ele == null)
			max_ele = arr[i];

		min_ele > arr[i] ? min_ele = arr[i] : null;
		max_ele < arr[i]? max_ele = arr[i]: null;
	}
	current_pos++;
	sum_arr.push(min_ele + max_ele);
	min_ele = max_ele = null;
}

while(current_pos != 0){
	total_sum += sum_arr[current_pos - 1];
	current_pos--; 
}

console.log('Input Array:' + arr);
console.log('Total Sum:' + total_sum);