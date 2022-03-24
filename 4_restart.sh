cd
ssh ubuntu@3.228.44.104
cd
rm -rf optee
rm -rf optee.git
mkdir optee.git
cd optee.git
git init --bare
cd hooks
touch post-receive
nano post-receive
GIT_REPO=$HOME/optee.git
PROJECT_DEST=$HOME/optee

if [ -d $PROJECT_DEST ]; then
    git --work-tree=$PROJECT_DEST --git-dir=$GIT_REPO checkout -f
else
    rm -rf $PROJECT_DEST
    git clone $GIT_REPO $PROJECT_DEST
fi
cd $PROJECT_DEST/
npm install # if it is a npm repository
forever stop ./app.js
forever start ./app.js

exit
control + x
y
enter

chmod +x post-receive
ls -la
cd
cat .env