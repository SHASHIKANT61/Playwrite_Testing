
pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Checkout Main Branch') {
            steps {
                echo 'Fetching code from GitHub Main branch'

                git branch: 'main',
                    url: 'https://github.com/SHASHIKANT61/Playwrite_Testing.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browser') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Execute Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            echo 'Playwright execution completed'
        }

        success {
            echo 'Tests passed successfully'
        }

        failure {
            echo 'Tests failed'
        }
    }
}
