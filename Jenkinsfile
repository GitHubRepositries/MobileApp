pipeline {
    agent any
    environment{
        DOCKER_TAG = getDockerTag()
        INSTANCE_IP = getInstanceIp()
    }
    stages{
        stage('Build Docker image'){
           steps{
              sh "docker build . -t raghavendrachervirala/pentagon:${DOCKER_TAG}"
           }
        }
        stage('Dockerhub push'){
          steps{
            withCredentials([string(credentialsId: 'Docker_hub_pwd', variable: 'dockerHubPwd')]) {
                 sh "docker login -u raghavendrachervirala -p ${dockerHubPwd}"
                 sh "docker push raghavendrachervirala/pentagon:${DOCKER_TAG}"
            }
          }
        }
        stage('Deploy to k8s'){
           steps{
                sh "chmod +x changeTag.sh"
                sh "./changeTag.sh ${DOCKER_TAG}"
                sshagent(['kops-machine']) {
                 sh "scp -o StrictHostKeyChecking=no helm-chart1/ ec2-user@13.59.43.215:/home/ec2-user/app/"
                 script{
                    sh "ssh ec2-user@13.59.43.215 helm install first-release helm-chart1/"
                 }
              }
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
