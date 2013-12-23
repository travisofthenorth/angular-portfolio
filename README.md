angular-portfolio
=================

A simple portfolio app using angular. The hope is that someone with very little technical experience could set up a working portfolio just by dropping these files onto their hosting environment and serving index.html. After that, with a few edits to JSON data files, the site is customized with their content. No backend required!

#### How to run it:

    cd app
    python -m SimpleHTTPServer 8000
    
#### Or you can run it using Node (make sure it's installed):

    ./scripts/web-server.js
    
Check out the angular README for more specific information on angular and the included resources.

    
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
