# WDI_Project1
How the game is played 

You move the characters by pressing the two keys assigned to each character alternatley. The winner is the first person to reach the finish line.


#How it works
For each character there are two keys assigned for movement. The way I got them to alternate was by having a global variable called turn count and every time one of the keys is pressed it adds one to the turn count. The way this is used for example is for player 1 the z key only fires if the turn count is divisible by two and the x key only fires when turn count is not divisable by two. The way the win function works is on every key press it checks to see where the right edge of both characters is compared to the left edge of the finish line. When someone gets over the finish line one of the win banners and reset button are triggered depending on who won.






