def notify(String step, String result){
    def apiUrl = "https://oapi.dingtalk.com/robot/send?access_token=e975ba8a8aa185d005a42922a7a4cc1eb675d77c28826862429749011358313c"
    def payload = "{\"msgtype\":\"link\",\"link\":{\"title\":\"${env.JOB_NAME}/${env.BUILD_NUMBER}\",\"text\":\"${step} result: ${result}\",\"messageUrl\":\"http://192.168.1.244:8000/\"}}"
    sh "curl -s -H \"Content-type: application/json\" -X POST -d '${payload}' ${apiUrl}"
}

node{
    stage('checkout'){
        checkout scm
    }

    stage('build'){
        try {
            sh "yarn && yarn run build"
            notify("build", "success")
        }
        catch(Exception e) {
           notify("build", "failed")
           throw e;
        }
    }

     stage('publish'){
        try {
            sh "rsync -rv build/ root@192.168.1.244:/home/programs/tv/integration/tv_website/v2"
            notify("publish", "success")
        }
        catch(Exception e) {
           notify("publish", "failed")
           throw e;
        }
    }
}
