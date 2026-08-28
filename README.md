# Portfolio

This repository contains the source code for my personal developer portfolio, hosted with Cloudflare at https://adamtait.net/. It is a React-based website written using TypeScript. The directory structure of this solution is based on [Bulletproof React](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)'s architecture guidelines. Vite was also used to assist with deploying the website.

## Build Instructions

This assumes the current directory is the project. To build the project locally, follow these instructions:

```bash
# Clone the repository.
git clone https://github.com/phyr0n/Portfolio.git

# Install dependencies.
yarn

# Start the local development server.
yarn dev
```

## Docker and Kubernetes

This next bit is just here for my personal sake. It was a little project of mine to learn Docker and Kubernetes and see if I can deploy a website and learn how both technologies work. Below is how you build an image of my portfolio and run it in Docker and Kubernetes.

### Docker

To build the Docker image (make sure Docker Engine is running on Windows), run:

```bash
docker buildx build -t adamtait.net:latest .

# Check this afterwards to see if adamtait.net:latest appears in the images.
docker images
```

### Kubernetes

Again, make sure Docker Engine is running. This is only intended to run locally for testing. Run the following commands:

```bash
# Apply all templates inside the Kubernetes folder.
kubectl apply -f ./kubernetes

# Temporarily port forward the service to port 8080.
kubectl port-forward -n portfolio-frontend service/portfolio-service 8080:80

# Go to localhost:8080 and see it work :D

# Clean up the objects since we'll no longer use them.
kubectl delete -f ./kubernetes
```