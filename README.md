# elim christmas

The site is a basic single page app using backbone.js, the domain name elimchristmas.com has DNS records pointing to github pages which is where things are hosted for free.

# running the site locally

You'll need [NodeJS](http://www.nodejs.org) and [Lineman](http://www.linemanjs.com) installed to run the app.

1. install node
2. `npm install -g lineman`
3. `npm install`
4. `lineman run`

# building the site for production

1. `lineman build`

This produces the built files in `./dist` that you can upload to FTP.
