public class LinkedList
{
  Node head;

  // Helper function to traverse 
  void traverse(Node head)
  {
    while (head != null)
    {
      Console.Write(head.data + "->");
      head = head.next;
    }
  }

  // Helper function to insert data in linked list 
  void insert(int x)
  {
    Node temp = new Node(x);
    if (head == null) head = temp;
    else
    {
      temp.next = head;
      head = temp;
    }
  }

  // Helper function to reverse the list 
  public static Node reverse(Node head)
  {
    if (head == null ||
       head.next == null) return head;

    Node prev = null;
    Node curr = head;
    while (curr != null)
    {
      Node temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    head = prev;
    return head;
  }

  // Function to add two lists 
  public static Node sum(Node l1, Node l2)
  {
    if (l2 == null) return l1;
    if (l1 == null) return l2;

    // reverse l1 list 
    l1 = reverse(l1);

    // reverse l2 list 
    l2 = reverse(l2);

    // storing head whose reverse is  
    // to be returned. This is where  
    // which will be final node 
    Node head = l1;
    Node prev = null;
    int c = 0, sum;
    while (l1 != null && l2 != null)
    {
      sum = c + l1.data + l2.data;
      l1.data = sum % 10;
      c = sum / 10;
      prev = l1;
      l1 = l1.next;
      l2 = l2.next;
    }

    if (l1 != null || l2 != null)
    {
      if (l2 != null) prev.next = l2;
      l1 = prev.next;
      while (l1 != null)
      {
        sum = c + l1.data;
        l1.data = sum % 10;
        c = sum / 10;
        prev = l1;
        l1 = l1.next;
      }
    }
    if (c > 0) prev.next = new Node(c);
    return reverse(head);
  }
  