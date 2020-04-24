pipeline {
    agent any
    environment{
        DOCKER_TAG = getDockerTag()
    }
    stages{
        stage('Build Docker image'){
           steps{
              sh "docker build . -t mrunalini117/react-app:${DOCKER_TAG}"
           }
        }
        stage(Dockerhub push){
          steps{
            withCredentials([string(credentialsId: 'Docker_hub_pwd', variable: 'dockerHubPwd')]) {
                 sh "docker login -u mrunalini117 -p ${dockerHubPwd}"
                 sh "docker push mrunalini117/react-app:${DOCKER_TAG}"
            }
          }
        }
    }
}

def getDockerTag(){
   def tag = sh script: 'git rev-parse HEAD', returnStdout: true
   return tag
}
