class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  //Insert Node
  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }
  insertNode(node, newNode) {
    
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    }
    else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
  // remove(data)
  remove(data) 
{ 
    this.root = this.removeNode(this.root, data); 
} 
removeNode(node, key) 
{  
    if(node === null) 
        return null; 
    else if(key < node.data) 
    { 
        node.left = this.removeNode(node.left, key); 
        return node; 
    } 
    else if(key > node.data) 
    { 
        node.right = this.removeNode(node.right, key); 
        return node; 
    } 
    else
    { 
        if(node.left === null && node.right === null) 
        { 
            node = null; 
            return node; 
        } 
        if(node.left === null) 
        { 
            node = node.right; 
            return node; 
        } 
          
        else if(node.right === null) 
        { 
            node = node.left; 
            return node; 
        } 
        var aux = this.findMinNode(node.right); 
        node.data = aux.data; 
  
        node.right = this.removeNode(node.right, aux.data); 
        return node; 
    } 
}

  // Helper function
  // findMinNode()
  // getRootNode()
  // inorder(node)
  // preorder(node)
  // postorder(node)
  // search(node, data)
} 