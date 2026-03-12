pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/Tejaswi1216/student-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t tejaswi1216/2023bec0058_jaddu .'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push tejaswi1216/2023bec0058_jaddu'
            }
        }

    }
}