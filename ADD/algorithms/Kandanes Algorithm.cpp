// Implemented in c++ 14
#include <iostream>
using namespace std;

// Function to find contiguous sub-array with the largest sum
// in given set of integers
int kadane(int arr[], int n)
{
	// stores maximum sum sub-array found so far
	int max_so_far = 0;

	// stores maximum sum of sub-array ending at current position
	int max_ending_here = 0;

	// traverse the given array
	for (int i = 0; i < n; i++)
	{
		// update maximum sum of sub-array "ending" at index i (by adding
		// current element to maximum sum ending at previous index i-1)
		max_ending_here = max_ending_here + arr[i];

		// if maximum sum is negative, set it to 0 (which represents
		// an empty sub-array)
		max_ending_here = max(max_ending_here, 0);

		// update result if current sub-array sum is found to be greater
		max_so_far = max(max_so_far, max_ending_here);
	}

	return max_so_far;
}

int main()
{  
  int n,i;
  cout<<"enter number of elements";
  cin>>n;
	int arr[n];
  cout<<"enter elemnets of array";
  for(i=0;i<n;i++)
  {
     cin>>arr[i];
  }
  cout << "The sum of contiguous sub-array with the largest sum is " <<
			kadane(arr, n);

	return 0;
}
