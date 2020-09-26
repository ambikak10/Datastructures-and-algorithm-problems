using System;
class GFG
{
    static Node head;
    // Tree Node Structure  
    public class Node
    {
        public int data;
        public Node next;

        // Create new Node  
        public Node(Node next, int data)
        {
            this.data = data;
            this.next = next;
        }
    }
    public void midpoint_util(Node head)
    {
        int count = 0;
        Node mid = head;

        // If we reached end of linked list  
        while (head != null)
        {
            if ((count % 2) == 1)
                mid = mid.next;
            ++count;
            head = head.next;
        }

        if (mid != null)
        {
            Console.WriteLine("The mid element is " + mid.data);

        }
    }
        // Rolling back, decrement n by one  
       public void push(Node head_ref, int new_data)
        {

            // Allocate node  
            Node new_node = new Node(head_ref, new_data);

            // Move the head to point to the new node  
            head = new_node;
        }
 
 
public static void main(String[] args) 
{ 
    GFG ll = new GFG(); 
  
    for(int i = 5; i > 0; i--)  
    { 
        ll.push(head, i);  
        ll.midpoint_util(head); 
    } 
} 
}