class CString
{
private:
	char* cstr;
public:
	int length;
	CString();
	CString(char* str);
	CString(CString& str);
	~CString();

	operator char*();
	operator const char*();
	CString operator+(const CString& q);
	CString operator=(const CString& q);
	bool operator==(const CString& q);

	friend std::ostream& operator<<(std::ostream& os, const CString& dt);

	friend std::istream& operator>>(std::istream& os, const CString& dt);
};
