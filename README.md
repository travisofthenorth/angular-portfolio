angular-portfolio
=================

A simple portfolio app using angular. The hope is that someone with very little technical experience could set up a working portfolio just by dropping these files onto their hosting environment and serving index.html. After that, with a few edits to JSON data files, the site is customized with their content. No backend required!

#### How to run it locally:

    cd app
    python -m SimpleHTTPServer 8000
    
#### Or you can run it using Node (make sure it's installed):

    ./scripts/web-server.js
    
Check out the angular README for more specific information on angular and the included resources.

#### How to configure it:

Check out config.js. In here, you can find a few customizable items, e.g. the site title, the navigation items, and the routes/controllers.

#### How to configure emails:

If you would like to send emails through the contact page, you need to use a server-side script with some SMTP configuration. Included is a PHP script--for any web server using PHP--which makes use of the Swift mail library.

    git checkout php-swift-mail
    
Right now, only Gmail is supported. You must set the SMTP username/password, as well as the To: email address (who should receive the emails) in the send.php script.
    
#### How to SASS it:

    cd app
    compass watch

Customize the CSS if you have experience with SASS. Both the .scss and .css files are included, again, so that the site can be deployed as is or customized.

#### Tests:

angular-README contains some information on running unit and e2e tests, but the gist of it is this:

    # Install dependencies (make sure Node is installed first)
    npm install
    # Run unit tests
    ./scripts/test.sh
    # Run e2e tests
    karma start config/karma-e2e.conf.js
    
#### COMING SOON!

1. Themes! I want to create a few base themes that can be selected in the app config.
2. ~~Probably a server-side script to handle sending an email from the Contact page.~~
3. Better validation/error handling/messages on contact form.
