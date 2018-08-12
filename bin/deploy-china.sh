# http://tutorweb.rikai-bots.com/static/assets/check.html

DEPLOY_LOGIN="ubuntu@www.rikai-bots.com"
DEPLOY_DIR=/opt/rikai/web-apps/tutorweb/course
SOURCE_DIR=docs

set -x
ssh ${DEPLOY_LOGIN} "mkdir -p $DEPLOY_DIR"

# cos googledocs doesnt keep permissions
# chmod -R 777 assets

syncRemote() {

  rsync -avz --progress \
    $SOURCE_DIR/* \
    ${DEPLOY_LOGIN}:$DEPLOY_DIR

}

syncRemote

echo "DONE!"

echo "find here: http://tutorweb.rikai-bots.com/course/"