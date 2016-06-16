
#include "stdafx.h"
#include <iostream>
#include <cstring>
#include <cstdio>
#include "MyString.h"

CString::CString()
{
}

CString::CString(char *str)
{
	length = strlen(str);
	cstr = new char[length + 1];
	strcpy(cstr, str);
}

CString::CString(CString& q)
{
	if (this == &q)
	{
		return;
	}
	length = strlen(q.cstr);
	cstr = new char[length + 1];
	strcpy(cstr, q.cstr);
}

CString::~CString()
{
	if (cstr)
	{
		//delete[] cstr;
	}
}

CString::operator char*()
{
	return cstr;
}

CString::operator const char* ()
{
	return cstr;
}

CString CString::operator +(const CString &q)
{
	CString s;
	s.length = strlen(cstr) + strlen(q.cstr);
	s.cstr = new char[length + 1];
	strcpy(s.cstr, cstr);
	strcat(s.cstr, q.cstr);
	return s;
}

CString CString::operator =(const CString &q)
{
	if (this != &q)
	{
		if (cstr) 
		{
			delete[] cstr;
		}
		length = strlen(q.cstr);
		cstr = new char[length + 1];
		strcpy(cstr, q.cstr);
	}
	return *this;
}

bool CString::operator==(const CString &q)
{
	if (length == q.length)
	{
		bool equal = true;
		for (int i = 0; i < length; i++)
		{
			if (cstr[i] != q.cstr[i]) 
			{
				equal = false;
			}
		}
		return equal;
	}
	else
	{
		return false;
	}
}

std::ostream& operator<<(std::ostream& os, const CString& str)
{
	os << str.cstr << std::endl;
	return os;
}

std::istream& operator >> (std::istream& is, CString& dt)
{
	char s[40];
	is >> s;
	dt = CString(s);
	return is;
}

int main()
{
	CString a = CString("Hello000");
	CString b = CString("Hello");

	CString c = a + b;

	std::cout << c;

	return 0;
}
