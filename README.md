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

You would not things are ready to the next steps if you do `kubectl get nodes` and you can see 3 nodes listed and ready. The you can do:

#### Set DockerHub and AWS secrets in your GitHub repository

#### Create secrets in your new EKS cluster

-   jwt-secret > JWT_KEY=<some_key_here>
-   stripe-secret > STRIPE_KEY=<your_stripe_private_key>

#### Setup Ingress-Nginx

Follow the instructions from the Ingress-Nginx [installation page](https://kubernetes.github.io/ingress-nginx/deploy/#aws)

#### Deploy your manifests for the first time

In order to deploy all your manifests for the first time you need to promote a change on any of the yaml files in your `infra/k8s` directory (adding a comment should be enough), and complete a normal pull request merged to `main`.

You can validate things worked by looking at GitHub Actions logs, or by running `kybectl get pods` and see multiple podes created (or being created).

#### Connecting a domain with your Load Balancer
