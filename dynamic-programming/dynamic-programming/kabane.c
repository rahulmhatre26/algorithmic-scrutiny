//
//  main.c
//  dynamic-programming
//
//  Created by Rahul Mhatre on 11/2/16.
//  Copyright © 2016 rahulmhatre. All rights reserved.
//
#include <stdio.h>
int kabane(int arr[], int n)
{
    int i,max_sum,last_sum;
    max_sum = 0;
    last_sum = 0;
    
    for (i = 0; i < n; i++)
    {
        max_sum = max_sum + arr[i];
        
        if(last_sum == 0){
            last_sum = max_sum;
        }
        if(last_sum < max_sum){
            last_sum = max_sum;
        }
        if(max_sum < 0 ){
            max_sum = 0;
        }
        
    }
    return last_sum;
}

int main(int argc, const char * argv[]) {
    int arr[100],t,n,i;
    // Input the number of test cases you want to run
    scanf("%d", &t);
    // One by one run for all input test cases
    while (t--)
    {
        // Input the size of the array
        scanf("%d", &n);
        
        // Input the array
        for (i=0; i<n; i++)
            scanf("%d",&arr[i]);
        
        // Compute and print result
        printf("%d\n", kabane(arr, n));
    }
    return 0;
}
