# Deploying With Dokku

The easiest way to get any Node app running is to use Dokku. Spin up a Dokku droplet on Digital Ocean: [Dokku Droplet by Digital Ocean](https://marketplace.digitalocean.com/apps/dokku). When going through the initial Dokku setup, make sure to enabled the "Virtual Host" option to use subdomains for each app.

*NOTE: Droplet must have at least 1GB of RAM or else the build will fail.*

### Create the App

https://dokku.com/docs/deployment/application-deployment/

### Environment Variables

https://dokku.com/docs/configuration/environment-variables/

### Routing App to Root Domain:

```sh
dokku domains:add my-app-name mydomain.com
```

### Configure SSL/HTTPS Via Let's Encrypt:

Read documentation here: [Dokku - Let's Encrypt](https://github.com/dokku/dokku-letsencrypt)

### App Crash Restart Policy:

```sh
dokku ps:set-restart-policy my-app-name always
```

### Add Git Remote to Deploy:

```sh
git remote add dokku dokku@mydomain.com:my-app-name
git push dokku master
```

### Check Error Logs:

```sh
dokku ls
docker logs <container ID>
```

### More Dokku Documentation:

For info on setting up other plugins (databases, etc), read this documentation: [Dokku - Application Deployment](http://dokku.viewdocs.io/dokku/deployment/application-deployment/)