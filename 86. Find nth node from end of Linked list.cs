using System; 
  
public class LinkedList 
{ 
    Node head; // head of the list 
  
    /* Linked List node */
    public class Node  
    { 
        public int data; 
        public Node next; 
        public Node(int d) 
        { 
            data = d; 
            next = null; 
        } 
    } 
  
    /* Function to get the nth node from end of list */
    void printNthFromLast(int n) 
    { 
        Node main_ptr = head; 
        Node ref_ptr = head; 
  
        int count = 0; 
        if (head != null) 
        { 
            while (count < n)  
            { 
                if (ref_ptr == null) 
                { 
                    Console.WriteLine(n + " is greater than the no "
                                    + " of nodes in the list"); 
                    return; 
                } 
                ref_ptr = ref_ptr.next; 
                count++; 
            } 
            while (ref_ptr != null) 
            { 
                main_ptr = main_ptr.next; 
                ref_ptr = ref_ptr.next; 
            } 
            Console.WriteLine("Node no. " + n + " from last is " + main_ptr.data); 
        } 
    } 
  
    /* Inserts a new Node at front of the list. */
    public void push(int new_data) 
    { 
        /* 1 & 2: Allocate the Node & 
                Put in the data*/
        Node new_node = new Node(new_data); 
  
        /* 3. Make next of new Node as head */
        new_node.next = head; 
  
        /* 4. Move the head to point to new Node */
        head = new_node; 
    } 
  
    /*Driver code */
    public static void Main(String[] args) 
    { 
        LinkedList llist = new LinkedList(); 
        llist.push(20); 
        llist.push(4); 
        llist.push(15); 
        llist.push(35); 
  
        llist.printNthFromLast(4); 
    } 
} 