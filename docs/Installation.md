# How to Install Mochaccino
---
### Requirements: <br />
---
1.  Linux terminal in windows (this was made with the ubuntu terminal), <br />
1.  Linux subsystem for windows turned on, <br />
1.  dos2unix (`apt-get install dos2unix`), <br />
1.  nodejs (`apt-get install nodejs`), <br />

### Installation
---
* First, cd into the disk you want to install on (for most it's c) <br />
cd /mnt/c/ <br />
* Next, make the source for Mochaccino <br />
`git clone https://github.com/mochaccino-lang/mochaccino.git `<br />
* Now you have to make an alias for the compiler, a guide is here: <br />
https://www.hostingadvice.com/how-to/set-command-aliases-linuxubuntudebian/
set the name to 'bpc', and set inside the quotes to be '`node /mnt/c/mochaccino/src/compiler.js`' <br>
* You've successfully installed Mochaccino! <br>
---
If you're installing on ubuntu or another linux distro, just take the first two off of the requirements