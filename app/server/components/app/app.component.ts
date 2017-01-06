class AppComponent {
    beforeReady() {
        this.is = 'na-app';
    }

    ready() {
        const bodyParser = require('body-parser');
        const morgan = require('morgan');

        this.morganMW = morgan('dev'); // log requests to the console

        // configure body parser
        this.bodyParserURLMW = bodyParser.urlencoded({ extended: true });
        this.bodyParserJSONMW = bodyParser.json();

        this.port = process.env.PORT || 8080; //set our port

        const mongoose = require('mongoose');
        mongoose.connect('mongodb://@localhost:27017/test'); // connect to our database

        this.appListen = () => {
            console.log(`Magic happens on port ${this.port}`);
        };
    }
}

Polymer(AppComponent);
