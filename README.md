# pandagame

Run Panda Run!
==============

For this last project with WDI, I wanted to make something that was different than everyone else. Instead of making yet another CRUD app, I decided to make a game instead. Initially I explored the possibility of using Phaser.io, a gaming library. However, I realized that the game library is almost a replica of one another. So I decided that I was going to build a game from scratch. One that catches user's attention and really get them to engaged. Users play a Male Panda, who is accidentally mistaken for a Female Panda by the ZooKeepers, who is then placed in the breeding pen as it was mating season. This idea came to me one day while I was watching YouTube. You know, one of those cute baby panda youtube videos. I was inspired to say the least. ANYWAY~


Game Play
---------
Users need to find their escape within 1 minute before their legs give in or before they get caught by the other male Panda using the Up Down Left & Right key. Hints for the escape are given at set intervals. Have fun!


Solution
--------
The solution to the escape is the ribbon tied on the panda's head. By clicking on it or dragging it away, the identity of the Panda is then exposed. Scaring the other Male Panda away. 

Technical Stand Point
---------------------
The co ordinates of both pandas are determined (x1,y1) & (x2,y2). The position of the Male Panda (in heat) is moved using a mathematical formula. If the difference is a negative or positive value, the panda would move towards the other by closing in the difference (to 0) using CSS attributes. When it goes too close to the player, an event then triggers for Game Over. The distance between player and the Male Panda are determined using the Pythagoras Theorem. 

Future Improvements
-------------------
My codes are not exactly pretty, given the time, I would go back and refactor my codes, making them DRY and tidy. 



