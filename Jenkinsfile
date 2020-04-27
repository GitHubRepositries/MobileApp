pipeline {
    agent any
    environment{
        DOCKER_TAG = getDockerTag()
        INSTANCE_IP = getInstanceIp()
    }
    stages{
        stage('Build Docker image'){
           steps{
              sh "docker build . -t mrunalini117/react-app:${DOCKER_TAG}"
           }
        }
        stage('Dockerhub push'){
          steps{
            withCredentials([string(credentialsId: 'Docker_hub_pwd', variable: 'dockerHubPwd')]) {
                 sh "docker login -u mrunalini117 -p ${dockerHubPwd}"
                 sh "docker push mrunalini117/react-app:${DOCKER_TAG}"
            }
          }
        }
        stage('Deploy to k8s'){
           steps{
                    sh "chmod +x changeTag.sh"
                    sh "./changeTag.sh ${DOCKER_TAG}"
                    sh "cp -R helm-chart1/ /home/ec2-user/app"
                    sh "su ec2-user | cd /home/ec2-user/app | helm install first-release helm-chart1/"
           }
        }
    }
}

def getDockerTag(){
   def tag = sh script: 'git rev-parse HEAD', returnStdout: true
   return tag
}

def getInstanceIp(){
   def ip = sh script: 'curl ifconfig.co', returnStdout: true
   return ip;
}
