# Blog Site

### ⮚ How to start a local version of the blog site

*You can either run the Installer.bat or follow the instructions below*

1. Download NodeJS from here if you do not already have it: https://nodejs.org/en/
    * If you plan to run this as a full service (ie. deloying to a VM) install PM2 listed here: https://www.npmjs.com/package/pm2 and start the service from the BlogSite file directory by running 
    ``` pm2 start server.js ```
    * If you are running on a windows system be sure to go into ``` Allow an app through Windows Firewall ``` and select ``` C:\Program Files\nodejs\node.exe ``` 
2. To initalize you local package open your choice of terminal browser and navigate to your local copy of **hacktoberfest2020\BlogSite** and run ``` npm init -y ```
3. Next Copy and paste the following into your terminal and run it ``` npm install express.js pm2 ```
4. You can now start the application by running ``` Node server.js ``` *or by double clicking StartService.bat*
5. Open your browser and head to this link: [http://localhost/] *or click the BlogSite shortcut in the folder*