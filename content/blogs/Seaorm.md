---
title: Seaorm
description: This blog will describe the process of me learning about Seaorm
production: false
tags: ['podman','database','postgres','rust','seaorm']
---

# Seaorm
It is a library in rust to do asyncrounous database object mapping.
:::tip Rest of the blog will assume that you are using the below github repo as a starting point
[Project Github](https://github.com/aadi58002/seaorm-practice)
:::
## Local Setup
I am thinking of using postgres with seaorm
- Read For Reasons to use [Postgres over mysql](https://developer.okta.com/blog/2019/07/19/mysql-vs-postgres)

### Setup Postgres Local instance with pgAdmin
We will be using podman-compose to run postgres and pgAdmin.  
[Postgres compose file with PgAdmin](https://github.com/khezen/compose-postgres)

Steps:-
1. Run podman-compose up in 
2. A prompt will appear for a password. I will use the password -> `root`.  
3. You will see a button to add a new server in the start page.  
4. Now use the command `docker inspect postgres_container` to get the Ip (in the form of  `"IPAddress": "10.89.1.2"`)at which the postgres container is running in.
5. Use the `General > name field` to be any name you want but change the Connection > Host name/address to &lt;IP of the docker container&gt; and Connection > password &lt;Your Postgres Password&gt; and Connection > username &lt;Your Postgres Username&gt;.  

