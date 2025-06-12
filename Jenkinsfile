pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "zyond/apple-store-web"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/zyond26/AppleStore.git', credentialsId: 'github-credentials-id'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}:${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials-id') {
                        dockerImage.push()
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh "docker rm -f apple-store-container || true"
                    sh "docker run -d -p 8088:80 --name apple-store-container ${DOCKER_IMAGE}:${env.BUILD_NUMBER}"
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline chạy thành công.'
        }
        failure {
            echo 'Pipeline thất bại, kiểm tra logs để tìm lỗi.'
        }
    }
}