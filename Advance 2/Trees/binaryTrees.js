//**************** Q1. Balanced Binary Tree **************/
/*
Problem Description

Given a root of binary tree A, determine if it is height-balanced.
A height-balanced binary tree is defined as a binary tree in which 
the depth of the two subtrees of every node never differ by more than 1.

Input 1:

    1
   / \
  2   3

  Input 2:

 
       1
      /
     2
    /
   3

Output 1:
1

Output 2:
0
*/

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
 //param A : root node of tree
 //return an integer
	isBalanced : function(A){
        let isbal = 1
        function bal(root){
            height(root)
            return isbal
        }
        function height(root){
            if(root == null)return -1
            let lht = height(root.left)
            let rht = height(root.right)
            if(Math.abs(lht-rht)>1)isbal = 0
            return Math.max(lht,rht)+1
        }
        return bal(A)
	}
};

//********************** Q2. Path Sum ****************/
/*
Problem Description

Given a binary tree and a sum, determine if the tree has a 
root-to-leaf path such that adding up all the values along the 
path equals the given sum.

Input 1:

 Tree:    5
         / \
        4   8
       /   / \
      11  13  4
     /  \      \
    7    2      1

 B = 22

 Input 2:

 Tree:    5
         / \
        4   8
       /   / \
     -11 -13  4

 B = -1

 Output 1:

 1
Output 2:

 0
*/

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
 //param A : root node of tree
 //param B : integer
 //return an integer
	hasPathSum : function(A, B){
        function sum(root,s){
            if(root == null)return 0
            if(root.left == null && root.right == null)return root.data == s ? 1: 0
            if(sum(root.left,s-root.data))return 1
            if(sum(root.right,s-root.data))return 1
            return 0
        }
        return sum(A,B)
	}
}


//********************* Q3. Equal Tree Partition *****************/
/*
Problem Description

Given a binary tree A. Check whether it is possible to partition the 
tree to two trees which have equal sum of values after removing exactly 
one edge on the original tree.

Input 1:

 
                5
               /  \
              3    7
             / \  / \
            4  6  5  6
Input 2:

 
                1
               / \
              2   10
                  / \
                 20  2

Output 1:

 1
Output 2:

 0
*/

// Definition for a binary tree node
// function TreeNode(data){
//   this.data = data
//   this.left = null
//   this.right = null
// }

module.exports = { 
    //param A : root node of tree
    //return an integer
    solve : function(A){
        let ans = 0;

        function getSum(root){
            if(root == null) return 0;
            return root.data + getSum(root.left) + getSum(root.right);
        }

        function checkSubtree(root, total){
            if(root == null) return 0;
            let lsum = checkSubtree(root.left, total);
            let rsum = checkSubtree(root.right, total);
            let sumHere = lsum + rsum + root.data;
            if(sumHere === total/2) ans = 1;
            return sumHere;
        }

        let totalSum = getSum(A);
        if(totalSum % 2 !== 0) return 0;   // odd sum → not possible

        checkSubtree(A, totalSum);
        return ans;
    }
};

