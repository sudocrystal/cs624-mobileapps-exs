Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@samchung0117 
samchung0117
/
cs624-hos
Private
Fork your own copy of samchung0117/cs624-hos
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
cs624-hos
/
HOS03
/
CopyRepo.md
in
main
 

Spaces

1

Soft wrap
1
# Copying a Repo
2
How to copy a folder from one repository to another repository on GitHub
3
## Prep
4
* Git on your local desktop
5
  * Test whether you have a git on your local machine.
6
    * git --version
7
  * If you cannot find git on your local machine, download git on your local machine from [git-scm.com](https://git-scm.com/downloads)
8
* Turning your email public on GitHub
9
  *  Access your account settings by going to the top right corner and Settings.
10
  * In your account settings, go to the Emails option, and uncheck the "Keep my email address private option."
11
* Knowing your Source Repository
12
  * The repository contains the folder you want to download to your local machine.
13
  * Know the GitHub address of  your source repository. For example, I have my HOP03 source directory at https://github.com/samchung0117/cs624-hos.
14
* Knowing your Target Repository
15
  * It is the repository where you want to copy the folder from your local machine. 
16
  * Know the GitHub address of  your target repository. For example, I have my PO03-todos target directory at https://github.com/samchung0117/cs624-pe-sam.
17
​
18
## Copying the directory from the source repository to your local machine
19
### Local Machine
20
* Open a file explorer on your local machine.
21
* Create a directory on your local machine. For example, I use a Windows local machine. For example, I created a directory called CopyRepo under /Temp. Move to the directory. Then, open a terminal on your local machine.
22
### Source Repository
23
* Navigate to the source repository that contains the folder you want to copy.
24
* Click on the "Clone or download" button and copy the URL of the repository.
25
### Local Machine
26
* Use the git clone command to clone the repository to your local machine. For example, 
27
```sh
28
git clone https://github.com/your-username/old-repo.git
29
```
30
* Once the repository is cloned to your local machine, navigate to the folder that contains the folder you want to copy later.
31
​
32
## Copying the downloaded directory from your local machine to the target repository
33
### Target Repository
34
* Navigate to the target repository where you want to copy the folder in GitHub using a browser.
35
* Click on the "Clone or download" button and copy the URL of the repository.
36
### Local Machine
37
* Use the git clone command to clone the repository to your local machine. For example:
38
```sh
39
git clone https://github.com/your-username/new-repo.git
40
```
41
* Move to the new local directory/repository. Copy the folder, which you copied earlier, to this new directory. (I used Windows Explorer for copying the HOS03 directory.) For example:
42
```sh
43
cd new-repo
44
```
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported
@samchung0117
Commit changes
Commit summary
Create CopyRepo.md
Optional extended description
Add an optional extended description…

chungsam@cityu.edu
Choose which email address to associate with this commit

 Commit directly to the main branch.
 Create a new branch for this commit and start a pull request. Learn more about pull requests.
 
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
