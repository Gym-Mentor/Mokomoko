``**SUB_PJT 2**
<br/>

Command line instructions<br/>

You can also upload existing files from your computer using the instructions below.<br/>


Git global setup<br/>

git config --global user.name "이름"<br/>
git config --global user.email "계정(메일주소)"<br/>

Create a new repository<br/>

git clone https://lab.ssafy.com/s05-webmobile2-sub2/S05P12D104.git<br/>
cd S05P12D104<br/>
touch README.md<br/>
git add README.md<br/>
git commit -m "add README"<br/>
git push -u origin master<br/>

Push an existing folder<br/>

cd existing_folder<br/>
git init<br/>
git remote add origin https://lab.ssafy.com/s05-webmobile2-sub2/S05P12D104.git<br/>
git add .<br/>
git commit -m "Initial commit"<br/>
git push -u origin master<br/>

Push an existing Git repository<br/>

cd existing_repo<br/>
git remote rename origin old-origin<br/>
git remote add origin https://lab.ssafy.com/s05-webmobile2-sub2/S05P12D104.git<br/>
git push -u origin --all<br/>
git push -u origin --tags<br/>
