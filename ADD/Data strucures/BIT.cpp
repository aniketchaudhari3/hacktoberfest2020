#include <iostream>
#include <vector>
using namespace std;

// 0-base BIT(Binary Indexed Tree)
#define lb(x) (x&-x)
template<typename T>
struct BIT {
	int sz;
	T *ary;
	BIT(int _sz): sz(_sz), ary(new T[_sz+1]()) {}
	void update(int x, T val) {
		for(; x <= sz; x += lb(x))
			ary[x] += val;
	}
	T query(int x) {
		T res = ary[0];
		for(; x > 0; x -= lb(x))
			res += ary[x];
		return res;
	}
};
#undef lb

int main() {
	int sz;
	cout << "size of array: "; cin >> sz;
	vector<int> v(sz);
	BIT<int> bit(sz);
	for(;;) {
		cout << "1. Update value\n"
			 << "2. Query range of array\n"
			 << "3. Print array\n"
			 << "> ";
		int opt;
		cin >> opt;
		switch (opt) {
			case 1: {
				int idx, val;
				cout << "index: "; cin >> idx;
				cout << "value: "; cin >> val;
				idx--;
				bit.update(idx, val-v[idx]);
				v[idx] = val;
				break;
			}
			case 2: {
				int left, right;
				cout << "left index(included): "; cin >> left;
				cout << "right index(included): "; cin >> right;
				cout << bit.query(right+1) - bit.query(left) << endl;
				break;
			}
			case 3: {
				cout << "array: ";
				for(int i = 0; i < sz; i++)
					cout << v[i] << " \n"[i+1==sz];
				break;
			}
		}
	}
}
