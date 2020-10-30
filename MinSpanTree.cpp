#include<bits/stdc++.h>
using namespace std;
long long int par[100001],size[100001];
int parent(int x)
{
	if (par[x]==-1)
		return x;
	else
	{
		int y;
		y = parent(par[x]);
		return y;
	}
}

int main () {
	long long int n,m;
	cin>>n>>m;
	for (long long int i=0;i<n;i++)
	{
		par[i]=-1; size[i]=1;
	}

	vector< pair<long long int, pair<long long int,long long int> > > edge;
	for (int i=0;i<m;i++)
	{
		long long int u,v,w;
		cin>>u>>v>>w;
		edge.push_back({w,{u,v}});
	}
	sort(edge.begin(),edge.end());
	long long int c=0,ans=0;
	for (long long int i=0;i<edge.size();i++)
	{
		if (c==n-1)
			break;
		long long int u=edge[i].second.first;
		long long int v=edge[i].second.second;
		long long int w=edge[i].first;

		long long int x1=parent(u); long long int x2=parent(v);
		if (x1!=x2)
		{
			if (size[x1]>=size[x2])
			{
				par[x2]=x1;
				size[x1]+=size[x2];
			}
			else
			{
				par[x1]=x2;
				size[x2]+=size[x1];
			}
				ans = ans + w;
				c++;
		}
	}

	cout <<ans<<"\n";
}

		

