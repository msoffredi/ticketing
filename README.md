# Microservices in JavaScript (NodeJS + React + NextJS)

## Source

This repo contains multiple services and files related to a course from [Stephen Grider](https://www.linkedin.com/in/stephengrider/). The course can be found in [Udemy](https://www.udemy.com/course/microservices-with-node-js-and-react/). The code in this repo has been slightly modified and adjusted my me so it may not match the original one 100%.

## How to set this up locally

### Requirements

To set this up locally you will need:

-   [Git](https://git-scm.com/downloads) (obviously), to fork this repo
-   Docker, ideally [Docker-desktop](https://docs.docker.com/get-docker/) with Kubernetes support
-   [NodeJS](https://nodejs.org/en/download/) v14+
-   [Skaffold](https://skaffold.dev/docs/install/)

For a full functionality you will also need:

-   An account in [DockerHub](https://hub.docker.com/)
-   An account in [Stripe](https://stripe.com/) (although you don't need a fully activated account since we will only use it in testing mode)

### Steps

1. Some steps here

## How to set this up in AWS

Keep in mind that in order to set this up in AWS you need to successfully complete your local setup to a point where everything works locally 100%.

### Requirements

-   You obviously need an [AWS account](https://aws.amazon.com/) (it may require some payment method)
-   You need AWS CLI installed and configured in your computer

### Steps

Follow [this instructions](https://docs.aws.amazon.com/eks/latest/userguide/getting-started-console.html) to create a cluster with 3 nodes in your prefered region and get kubectl configured to talk to your new cluster.

You would not things are ready to the next steps if you do `kubectl get nodes` and you can see 3 nodes listed and ready.
