#Stack using Python
'''
Functions: empty(), size(), top(), push(element), pop(), print(), clear()
'''

# Refrenced this from here: https://www.geeksforgeeks.org/stack-in-python/
class Node(object):
    
    def __init__ (self, data=None, next_node=None):
        self.data = data
        self.next_node = next_node

    def get_data(self):
        return self.data

    def get_next(self):
        return self.next_node

    def set_next(self, new_next):
        self.next_node = new_next

class LinkedList(object):
    def __init__(self, head=None):
        self.head = head

    # The implementation of insert is a constant O(1)
    def insert(self, data):
        new_node = Node(data)
        new_node.set_next(self.head)
        self.head = new_node

    # Iterating through all of the linked lists nodes results in O(n) complexity
    def size(self):
        current = self.head
        count = 0
        while current:
            count += 1
            current = current.get_next()
        return count

    # Print all of the elements in the list O(n)
    def print(self):
        current = self.head 
        print("Linked List:", end=" ")       
        while current:
            print(current.get_data(), end=", ")
            current = current.get_next()

    # Search will run in O(n) in worst case
    def search(self, data):
        current = self.head
        found = False
        count = 0
        while current and found is False:
            if current.get_data() == data:
                found = True
                print(str(data) + " was found in position: " + str(count))
            else:
                count += 1
                current = current.get_next()
        if current is None:
            print("Data not in list")
        return current
    
    # Delete runs in O(n) in worst case
    def delete(self, data): 
        current = self.head
        previous = None
        found = False
        while current and found is False:
            if current.get_data() == data:
                print(str(data) + " was deleted")
                found = True
            else:
                previous = current
                current = current.get_next()
        if current is None:
            print("Element was not found anywhere in the list!")
        if previous is None:
            self.head = current.get_next()
        else:
            try:
                previous.set_next(current.get_next())                
            except:
                print("Error finding element")

def main():

    # Stack Variable Reference
    linkedList = LinkedList()

    print("More information can be found here: https://www.geeksforgeeks.org/stack-in-python/")

    isRunning = True

    while isRunning:
        # Clear the terminal history - This is the escape character for clearing the terminal 
        print("\033c")

        # Prompt the user for input
        print("==================================================\n" +
            "Please select from one of the following: \n" +
            "1) Insert\n" +
            "2) Delete\n" +
            "3) Search\n" +
            "4) Size\n"
            "5) Prints all\n"
            "6) Exit Application\n" +
            "==================================================\n" +
            "User Input: ")

        try:
            choice = int(input())
        except KeyboardInterrupt:        
            print("\n\nApplication Exited.....")
            return
        except:
            choice = -99            

        
        # Space out the room a bit before we start prompting the user with more information
        print("\n\n\n")

        # There's no good implmentation of Switch/Case statements so we will use If/Else Statements
        if (choice == 1): #Insert
            choice = input("What would you like to add: ")
            linkedList.insert(choice)
            print(choice + " added.")
            input("Insert any key to continue")
        elif (choice == 2): # Delete
            choice = input("Element to be deleted: ")
            returnData = linkedList.delete(choice)
            input("Insert any key to continue")
        elif (choice == 3): # Search
            choice = input("Element to search for: ")
            linkedList.search(choice)
            input("Insert any key to continue")
        elif (choice == 4): # Size
            print("Size of Linked List: " + str(linkedList.size()))
            input("Insert any key to continue")
        elif (choice == 5): # Print All
            linkedList.print()
            input("\nInsert any key to continue")
        elif (choice == 6): # Exit Application
            isRunning = False
        else:
            print("Error reading input")
            input("Insert any key to continue")

    # On Application Exit
    print("\n\nApplication Exited.....")

if __name__ == "__main__":
    main()