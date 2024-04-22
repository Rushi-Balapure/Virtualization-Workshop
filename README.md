# Virtualization Workshop

This workshop aims to understand the concepts of Virtualization, offering hands-on projects on Virtualization, both locally and on the cloud. 

## Installation and Configuration
For this project, we need to install and configure the following dependencies:  
Apache2 (HTTP Server)  
OpenSSH Server  
Git  

## Apache2 (HTTP Server)
1. Download the files
```bash
 sudo apt install apache2
```
2. Start the server
```bash
sudo systemctl start apache2
```
3. Enable the server
```bash
sudo systemctl enable apache2
```
4. Check the status for the service 
```bash
sudo systemctl status apache2
```
If the installation is successful it should give the following output:-   
<img alt="demo" src="https://bitlaunch.io/blog/content/images/2020/08/Screenshot-2020-08-24-at-11.37.05.png">

Now we need to try to access the webpage   
For this we need the IP Address
To get the IP Address we need to first install the Net-Tools (Network Tools)   
1. Install Net-tools
```bash
sudo apt install net-tools
```
2. Run the command
```bash
ifconfig
```
<img alt="demo" src="https://drive.google.com/uc?export=view&id=1H1I6klmkzacXpqo3wjRQbshltxCsHiwb">

3. Enter the IP Address in any browser   

<img alt="demo" src="https://drive.google.com/uc?export=view&id=1GkK94T7X1FlhKXHnerWvtnfncpk5fzuM">


4. It should give this output
   
<img alt="demo" src="https://help.nextcloud.com/uploads/default/original/2X/1/1c46cfc954ab87f32bbcec2e6bf73d2f12b07964.png" width="500" height="500">

## OpenSSH Server

1. Download the server
```bash
sudo apt install openssh-server
```
2. Start the service
```bash
sudo systemctl start ssh
```
3. Enable the service
```bash
sudo systemctl enable ssh
```
4. Check the status
```bash
sudo systemctl status ssh
```
If the installation is successful it should give the following output:-   
<img alt="demo" src="https://bitlaunch.io/blog/content/images/2020/08/Screenshot-2020-08-24-at-11.37.05.png">

Now we need to check the SSH server, by doing a remote login   
On a different machine   
```bash
ssh Username@IP_Address
```

## Git

1. Install git
```bash
sudo apt install git
```
## Configure the Firewall
We need to configure the firewell so that only the connection to our HTTP Server(port:80) and SSH server (port:22) are allowed

1. Enable the Firewall
```bash
sudo ufw enable
```
2. Allow TCP connection for the HTTP server on Port 80
```bash
sudo ufw allow http
```
3. Allow TCP connection for the SSH remote logins on Port 22
```bash
sudo ufw allow ssh
```
4.Check the status 
``` bash
sudo ufw status
```     

On Cloud

We will study about the deployment of website on EC2 instance using Apache and SSL configurations.
This workshop aims to understand the concepts of Virtualization on cloud, running instances on cloud, knowledge about Elastic IP, SSL configurations.

## Installation and Configuration
For this project, we need to install and configure the following dependencies:  
Git   
Apache2 (HTTP Server)    
CertBot apache   

## Install Git   
1. Install Git using the command below
```bash
 sudo yum install git
```   


## Apache2 (HTTP Server)
1. Download the files
```bash
 sudo yum install httpd
```
2. Start the server
```bash
sudo systemctl start httpd
```
3. Enable the server
```bash
sudo systemctl enable httpd
```
4. Check the status for the service 
```bash
sudo systemctl status httpd
```

## Check your server  
1. Go to your web browser and type the public IP address and the port.

## Allocate Elastic IP address
1. From the EC2 side dashboard, go to Elastic IP address and create a new Elastic IP.

2. Allocate this IP address to the created EC2 instance.


## Get your domain name 
1. Visit the website- "https://www.getfreedomain.name/" to get a free domain name service.

2. Use the Elastic IP address created before to route the domain name to the address.


## Create SSL certificate for your DNS
1. Create a virtual host configuration file:
```bash
 sudo nano /etc/httpd/conf.d/<DNS>.conf
```
2. Add the Virtual Host Configuration:Add the following configuration to the file:
```bash
<VirtualHost *:80>
    ServerName virtualization.mooo.com
    DocumentRoot /var/www/html

    ErrorLog /var/log/httpd/virtualization.mooo.com-error.log
    CustomLog /var/log/httpd/virtualization.mooo.com-access.log combined
</VirtualHost>

```
3. Install Certbot with Apache plugin:
```bash
sudo yum install certbot-apache
```
4. Run CertBot with Apache Plugin
```bash
sudo certbot --apache
```







