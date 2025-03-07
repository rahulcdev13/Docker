# Docker

# Installing Ubuntu from Microsoft Store

## Step 1: Install Ubuntu from Microsoft Store
1. Open **Microsoft Store** and search for **Ubuntu**.
2. Click on **Install** and wait for the installation to complete.
3. Launch **Ubuntu** from the Start menu.

## Step 2: Set Up UNIX Username and Password
When Ubuntu launches for the first time, you will be prompted to set up a UNIX username and password.
- **Username:** `rahulc`
- **Password:** `rahulc`

## Step 3: Check IPv4 Address
Run the following command to check your system's IPv4 address:
```bash
ip addr show
```
Your IP address should be similar to: `172.23.1.99`

---

# How to Install Docker on Ubuntu 24.04

## Step 1: Install Required Dependencies
```bash
sudo apt update && sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

## Step 2: Add Docker’s GPG Key
```bash
sudo mkdir -p /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
```

## Step 3: Add Docker Repository
```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

## Step 4: Update System and Install Docker
```bash
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
```

## Step 5: Verify Docker Installation
```bash
sudo docker --version
```
**Expected Output:**
```
Docker version 26.1.4, build 5650f9b
```

---

# How to Install Podman on Ubuntu 24.04

## Step 1: Update System
```bash
sudo apt update
```

## Step 2: Install Podman
```bash
sudo apt install podman -y
```

## Step 3: Verify Podman Installation
```bash
podman --version
```

## Step 4: Set Alias for Docker Commands
If you want to use `docker` commands with Podman, set an alias:
```bash
alias docker=podman
```

## Step 5: Check Podman Registries
```bash
podman info
```
This will display system-wide information, including storage, networking, logging drivers, and running containers.

---

# Working with Podman

## Search for an Image in Registry
```bash
podman search nginx
```

## Pull an Image from Docker Hub
```bash
podman pull docker.io/library/nginx
```

## List Downloaded Images
```bash
podman images
```

## Run a Container
```bash
podman run -d docker.io/library/nginx
```

## Check Running Containers
```bash
podman ps
```

## Run Container with Port Binding
```bash
podman run -dt -p 8080:80 docker.io/library/nginx
```
- Access the running container at: [http://localhost:8080](http://localhost:8080)

## Stop a Running Container
```bash
podman stop <container_name>
```

## Run Multiple Containers on Different Ports
```bash
podman run -dt -p 8081:80 docker.io/library/nginx
podman run -dt -p 8082:80 docker.io/library/nginx
```

## Assign a Name to a Container
```bash
podman run -d --name my_container docker.io/library/nginx
```

## View All Containers (Including Stopped Ones)
```bash
podman ps -a
```

## Remove a Container
```bash
podman rm <container_name>
```

---

# How to Create a Custom Docker Image

## Step 1: Create a New Directory
```bash
mkdir myimage && cd myimage
```

## Step 2: Create `index.html` and `Dockerfile`

### Create `index.html`
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Custom Page</title>
</head>
<body>
    <h1>Welcome to My Custom Docker Image</h1>
</body>
</html>
```

### Create `Dockerfile`
```dockerfile
# Step 1: Use an Nginx image as the base
FROM nginx:alpine

# Step 2: Copy index.html to the Nginx default HTML folder
COPY index.html /usr/share/nginx/html/index.html

# Step 3: Expose port 80
EXPOSE 80

# Step 4: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
```

## Step 3: Build the Docker Image
```bash
docker build -t my-html-app .
```
- `my-html-app` is the name of your custom image.

## Step 4: Run the Custom Image
```bash
docker run -d -p 8080:80 my-html-app
```

## Step 5: Access in Browser
[http://localhost:8080](http://localhost:8080)

**Congratulations! Your custom Docker image is running successfully.**
