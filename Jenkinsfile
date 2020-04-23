pipeline {
    agent any
    environment{
        DOCKER_TAG = getDockerTag()
    }
    stages{
        stage('Build Docker image'){
           steps{
              sh "sudo su -"
              sh "docker build . -t mrunalini117/react-app:${DOCKER_TAG}"
           }
        }
    }
}

def getDockerTag(){
   def tag = sh script: 'git rev-parse HEAD', returnStdout: true
   return tag
}
