
pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy with Docker') {
            steps {
                sh '''
                    docker build -t my-node-app .
                    docker rm -f node-container || true
                    docker run -d --name node-container -p 3000:3000 my-node-app
                '''
            }
        }
    }
}

