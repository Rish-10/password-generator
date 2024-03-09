# password-generator
This is my completely self-built, reliable password generator, created entirely on my own.

I have included the ability to modify the parameters of the password, such as the length and type of characters used. I also added an extra layer of randomisation by mixing the order of characters in the list after the parameters are chosen. 

As you see in the code, I did this by using a while loop and a new list. It chooses a random element in the characters array, making sure that item hasn't already been copied over to the randomised array and then copying it, ensuring to add it to the list of indexes that have been copied so when the loop repeats it doesn't copy the same item twice.

Then I assign the randomised character array to the original character array. 

Check out the code live at: https://rishipasswords.netlify.app

Please feel free to test it and let me know your feedback.

Enjoy!
