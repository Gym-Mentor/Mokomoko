**SUB_PJT 2**
<br/>

Command line instructions

You can also upload existing files from your computer using the instructions below.


Git global setup

git config --global user.name "이름"
git config --global user.email "계정(메일주소)"

Create a new repository

git clone https://lab.ssafy.com/s05-webmobile2-sub2/S05P12D104.git
cd S05P12D104
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

Push an existing folder

cd existing_folder
git init
git remote add origin https://lab.ssafy.com/s05-webmobile2-sub2/S05P12D104.git
git add .
git commit -m "Initial commit"
git push -u origin master

Push an existing Git repository

cd existing_repo
git remote rename origin old-origin
git remote add origin https://lab.ssafy.com/s05-webmobile2-sub2/S05P12D104.git
git push -u origin --all
git push -u origin --tags
