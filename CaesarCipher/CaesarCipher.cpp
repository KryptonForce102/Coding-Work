// Literal half-ass caesar cipher that doesn't work with spaces.

#include <iostream>
using namespace std;

string cipher(string text, int shift){
  string newText = "";
  
  for (int i = 0; i < text.length(); i++){
    int charInt = isupper(text[i]) ? 65 : 97;
    newText += char(int(text[i] + shift - (charInt)) % 26 + charInt);
  }

  return newText;
}

int main(){
  // Cipher variables
  string text = "";
  int shift = 0;

  // Get input
  cout << "Enter text:\n";
  cin >> text;
  cout << "Enter Shift:\n";
  cin >> shift;

  cout << cipher(text, shift);
  return 0;
}
