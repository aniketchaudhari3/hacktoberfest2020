// QUESTION LINK : https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/562/week-4-october-22nd-october-28th/3509/



/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        if (head == NULL)return NULL;
        set<ListNode*> s;
        ListNode* fast = head;
        ListNode* slow = head;

        while (1) {
            if (fast == NULL || fast -> next == NULL)
                return NULL;
            fast = fast ->next ->next;
            slow = slow -> next;
            if (fast == slow)
                break;
        }

        slow = head;
        while (slow != fast) {
            slow = slow -> next;
            fast = fast -> next;
        }
        return slow;
    }
};
