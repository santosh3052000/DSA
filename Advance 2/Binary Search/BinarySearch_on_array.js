//**********************Q1. Search for a Range******************************

/*
Problem Description

Given a sorted array of integers A (0-indexed) of size N, 
find the left most and the right most index of a given integer B in the array A.

Return an array of size 2, such that 
          First element = Left most index of B in A
          Second element = Right most index of B in A.
If B is not found in A, return [-1, -1].

Note : Note: The time complexity of your algorithm must be O(log n)..

Input Format

The first argument given is the integer array A.
The second argument given is the integer B.

Example Input

Input 1:

 A = [5, 7, 7, 8, 8, 10]
 B = 8
Input 2:

 A = [5, 17, 100, 111]
 B = 3


Example Output

Output 1:

 [3, 4]
Output 2:

 [-1, -1]


Example Explanation

Explanation 1:

 The first occurrence of 8 in A is at index 3.
 The last occurrence of 8 in A is at index 4.
 ans = [3, 4]
Explanation 2:

 There is no occurrence of 3 in the array.
*/

module.exports = { 
 //param A : array of integers
 //param B : integer
 //return a array of integers
	searchRange : function(A, B){
        let first = findFirst(A,B)
        let last = findLast(A,B)
        return [first,last]

        function findFirst(a,b){
            let high = a.length-1
            let low = 0
            let ans = -1
            while(low<=high){
                let mid = Math.floor((low+high)/2)
                if(a[mid] == b){
                    ans = mid
                    high = mid-1
                }
                else if(a[mid] > b){
                    high = mid-1
                }
                else if(a[mid] < b){
                    low = mid+1
                }
            }
            return ans
        }

        function findLast(a,b){
            let high = a.length-1
            let low = 0
            let ans = -1
            while(low<=high){
                let mid = Math.floor((low+high)/2)
                if(a[mid] == b){
                    ans = mid
                    low = mid+1
                }
                else if(a[mid] > b){
                    high = mid-1
                }
                else if(a[mid] < b){
                    low = mid+1
                }
            }
            return ans
        }
	}
};

//********************Q2. Square Root of Integer************************ */

/*

Problem Description

Given an integer A. Compute and return the square root of A.
If A is not a perfect square, return floor(sqrt(A)).

NOTE: 
   The value of A*A can cross the range of Integer.
   Do not use the sqrt function from the standard library. 
   Users are expected to solve this in O(log(A)) time.


Problem Constraints

0 <= A <= 109


Input Format

The first and only argument given is the integer A.


Output Format

Return floor(sqrt(A))


Example Input

Input 1:

 11
Input 2:

 9


Example Output

Output 1:

 3
Output 2:

 3


Example Explanation

Explanation 1:
When A = 11 , square root of A = 3.316. It is not a perfect square so we return the floor which is 3.
Explanatino 2:
When A = 9 which is a perfect square of 3, so we return 3.
*/

module.exports = { 
 //param A : an integer
 //return an integer
	sqrt : function(A){
        let low = 1
        let high = A
        let ans = 0

        while(low<=high){
            let mid = Math.floor((low+high)/2)
            let sq = mid * mid
            if(sq === A) return mid
            else if(sq > A) high = mid - 1
            else if(sq < A){
                ans = mid
                low = mid + 1
            }
        }
        return ans
	}
};


//**********************Q3. Sorted Insert Position********************** */

/*
Problem Description

You are given a sorted array A of size N and a target value B.
Your task is to find the index (0-based indexing) of the target value
in the array.

If the target value is present, return its index.
If the target value is not found, return the index of least element greater than equal to B.
If the target value is not found and least number greater than equal to target is also not present, 
return the length of array (i.e. the position where target can be placed)
Your solution should have a time complexity of O(log(N)).


Problem Constraints

1 <= N <= 105
1 <= A[i] <= 105
1 <= B <= 105



Input Format

The first argument is an integer array A of size N.
The second argument is an integer B.



Output Format

Return an integer denoting the index of target value.



Example Input

Input 1:

A = [1, 3, 5, 6]
B = 5 
Input 2:

A = [1, 4, 9]
B = 3


Example Output

Output 1:

2 
Output 2:

1


Example Explanation

Explanation 1:

The target value is present at index 2. 
Explanation 2:

The target value should be inserted at index 1.
*/

module.exports = { 
 //param A : array of integers
 //param B : integer
 //return an integer
	searchInsert : function(A, B){
		let low = 0
		let high = A.length-1
		let ans = A.length
		while(low<=high){
			let mid = Math.floor((low+high)/2)
			if(A[mid] == B)return mid
			else if(A[mid] >= B){
				ans = mid
				high=mid-1
			}else {
				low=mid+1
			}
		}
		return ans
	}
};


//**************************Q4. Find a peak element**************** */

/*
Problem Description

Given an array of integers A, find and return the peak element in it.
An array element is considered a peak if it is not smaller than its neighbors. 
For corner elements, we need to consider only one neighbor.

NOTE:

It is guaranteed that the array contains only a single peak element.
Users are expected to solve this in O(log(N)) time. The array may contain 
duplicate elements.


Problem Constraints

1 <= |A| <= 100000

1 <= A[i] <= 109



Input Format

The only argument given is the integer array A.



Output Format

Return the peak element.



Example Input

Input 1:

A = [1, 2, 3, 4, 5]
Input 2:

A = [5, 17, 100, 11]




Example Output

Output 1:


 5
Output 2:

 100


Example Explanation

Explanation 1:

 5 is the peak.
Explanation 2:

 100 is the peak.
*/

module.exports = { 
 //param A : array of integers
 //return an integer
	solve : function(A){
        let high = A.length-1
        let low = 0

        while(low<=high){
            let mid = Math.floor((low+high)/2)

            let left = mid - 1 >= 0 ? A[mid - 1] : Number.NEGATIVE_INFINITY;
            let right = mid + 1 < A.length ? A[mid + 1] : Number.NEGATIVE_INFINITY;

            if(A[mid] >= left && A[mid] >= right)return A[mid]
            else if(A[mid] < right){
                low = mid+1
            }
            else high = mid-1
        }
        return -1
	}
};
