pipeline {
    agent any
    stages {
        stage('Clone repo') {
            steps {
                git 'https://github.com/zyond26/AppleStore.git' // Thay URL repo của bạn
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("apple-store-web:${env.BUILD_NUMBER}")
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh "docker rm -f apple-store-container || true"
                    sh "docker run -d -p 80:80 --name apple-store-container apple-store-web:${env.BUILD_NUMBER}"
                }
            }
        }
    }
}