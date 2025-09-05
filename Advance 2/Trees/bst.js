//************ Q1. Valid Binary Search Tree *********/
/*
Example Input

Input 1:

 
   1
  /  \
 2    3
Input 2:

 
  2
 / \
1   3


Example Output

Output 1:

 0
Output 2:

 1
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
	isValidBST : function(A){
        function bst(root,s,e){
            if(root == null)return 1
            if(!(s<root.data && root.data<e))return 0
            if(!bst(root.left,s,root.data))return 0
            if(!bst(root.right,root.data,e))return 0
            return 1
        }
        return bst(A,-Infinity,Infinity)
	}
};

//************** Q2. Sorted Array To Balanced BST **********/
/*
Example Input

Input 1:

 A : [1, 2, 3]
Input 2:

 A : [1, 2, 3, 5, 10]


Example Output

Output 1:

      2
    /   \
   1     3
Output 2:

      3
    /   \
   2     5
  /       \
 1         10
*/

// Definition for a binary tree node 
// function TreeNode(data){ 
//       this.data = data 
//       this.left = null 
//       this.right = null 
// } 
module.exports = { 
    /*** param A: list of integer 
    ***  return: root node of balanced BST 
    ***/ 
    sortedArrayToBST: function (nums) {
        function bst(A,s,e){
            if(s>e)return null
            let m = Math.floor((s+e)/2)
            let root = new TreeNode(A[m])
            root.left = bst(A,s,m-1)
            root.right = bst(A,m+1,e)
            return root
        }
        return bst(nums,0,nums.length-1)
    }
};


//************** Q3. Delete a node in BST **************/

/*
Example Input

Input 1:

            15
          /    \
        12      20
        / \    /  \
       10  14  16  27
      /
     8

     B = 10

Output 1:

            15
          /    \
        12      20
        / \    /  \
       8  14  16  27

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
 //return the root node in the tree
	solve : function(A, B){
        function maxi(root){
            while(root.right != null){
                root = root.right
            }
            return root.data
        }
        function mini(root){
            while(root.left != null){
                root = root.left
            }
            return root.data
        }
        function del(root,k){
            if(root == null)return null
            if(root.data > k)root.left = del(root.left,k)
            else if(root.data < k)root.right = del(root.right,k)
            else{
                if(root.left == null && root.right == null)return null
                else if(root.left != null && root.right == null)return root.left
                else if(root.left == null && root.right != null)return root.right
                else{
                    let max = maxi(root.left)
                    root.data = max
                    root.left = del(root.left,max)
                }
            }
            return root
        }
        return del(A,B)
	}
};

//***************** Q4. Search in BST ************/
/*
Input 1:

            15
          /    \
        12      20
        / \    /  \
       10  14  16  27
      /
     8

     B = 16
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
	solve : function(A, B){
        function search(root,k){
            if(root == null)return 0
            if(root.data == k)return 1
            if(root.data > k)return search(root.left,k)
            else if(root.data < k)return search(root.right,k)
        }
        return search(A,B)
	}
};
