//****************  Q1. Level Order ************/
/*
Problem Description

Given a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).



Problem Constraints

1 <= number of nodes <= 105



Input Format

First and only argument is root node of the binary tree, A.



Output Format

Return a 2D integer array denoting the level order traversal of the given binary tree.

Example Input

Input 1:

    3
   / \
  9  20
    /  \
   15   7
Input 2:

   1
  / \
 6   2
    /
   3


Example Output

Output 1:

 [
   [3],
   [9, 20],
   [15, 7]
 ]
Output 2:

 [ 
   [1]
   [6, 2]
   [3]
 ]


Example Explanation

Explanation 1:

 Return the 2D array. Each row denotes the traversal of each level.
 */

 // Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
 //param A : root node of tree
 //return a array of array of integers
	solve : function(A){
        let que = []
        let ans = []
        let s = []

        let curr = A
        que.push(curr)
        while(que.length > 0){
            let sz = que.length
            for(let i=1; i<=sz; i++){
                let rem = que.shift()
                s.push(rem.data)
                if(rem.left != null)que.push(rem.left)
                if(rem.right != null)que.push(rem.right)
            }
            ans.push(s)
            s = []
        }
        return ans
	}
};


// ******************** Q2. Inorder Traversal  *****************************
/*
Problem Description

Given a binary tree, return the inorder traversal of its nodes' values.



Problem Constraints

1 <= number of nodes <= 105



Input Format

First and only argument is root node of the binary tree, A.



Output Format

Return an integer array denoting the inorder traversal of the given binary tree.



Example Input

Input 1:

   1
    \
     2
    /
   3
Input 2:

   1
  / \
 6   2
    /
   3


Example Output

Output 1:

 [1, 3, 2]
Output 2:

 [6, 1, 3, 2]
 */

 // Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
 //param A : root node of tree
 //return a array of integers
	inorderTraversal : function(A){
        let ans = []
        let stack = []
        let curr = A
        while(stack.length > 0 || curr != null){
            while(curr != null){
                stack.push(curr)
                curr = curr.left
            }
            curr = stack.pop()
            ans.push(curr.data)
            curr = curr.right
        }
        return ans
    }
};

//*************************  Q3. Preorder Traversal**************** */

/*
Problem Description

Given a binary tree, return the preorder traversal of its nodes values.



Problem Constraints

1 <= number of nodes <= 105



Input Format

First and only argument is root node of the binary tree, A.



Output Format

Return an integer array denoting the preorder traversal of the given binary tree.



Example Input

Input 1:

   1
    \
     2
    /
   3
Input 2:

   1
  / \
 6   2
    /
   3


Example Output

Output 1:

 [1, 2, 3]
Output 2:

 [1, 6, 2, 3]
*/

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
 //param A : root node of tree
 //return a array of integers
	preorderTraversal : function(A){
        let stack = []
        let ans = []
        let curr = A
        while(curr != null || stack.length > 0){
            while(curr != null){
                ans.push(curr.data)
                stack.push(curr)
                curr = curr.left
            }
            curr = stack.pop()
            curr = curr.right
        }
        return ans
	}
};


//**********************  Q4. Right View of Binary tree ***************/
/*
Problem Description

Given a binary tree of integers denoted by root A. Return an array of integers representing the right view of the Binary tree.

Right view of a Binary Tree is a set of nodes visible when the tree is visited from Right side.



Problem Constraints

1 <= Number of nodes in binary tree <= 100000

0 <= node values <= 10^9



Input Format

First and only argument is head of the binary tree A.



Output Format

Return an array, representing the right view of the binary tree.



Example Input

Input 1:

 
            1
          /   \
         2    3
        / \  / \
       4   5 6  7
      /
     8 
Input 2:

 
            1
           /  \
          2    3
           \
            4
             \
              5


Example Output

Output 1:

 [1, 3, 7, 8]
Output 2:

 [1, 3, 4, 5]
*/

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
 //param A : root node of tree
 //return a array of integers
	solve : function(A){
        let ans = []
        let res = []
        let que = []
        let t = []
        let curr = A
        que.push(curr)
        while(que.length > 0){
            let sz = que.length
            for(let i=1; i<=sz; i++){
                let rem = que.shift()
                t.push(rem.data)
                if(rem.left != null)que.push(rem.left)
                if(rem.right != null)que.push(rem.right)
            }
            ans.push(t)
            t = []
        }
        for(let num of ans){
            res.push(num[num.length-1])
        }
        return res
	}
};
