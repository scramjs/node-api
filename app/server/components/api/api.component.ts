class APIComponent {
    beforeReady() {
        this.is = 'na-api';
    }

    ready() {
        // middleware to use for all requests with /api prefix
        this.allMW = (req, res, next) => {
            // do logging
            console.log('Something is happening.');
            next();
        };

        // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
        this.indexHandler = (req, res) => {
            res.json({ message: 'hooray! welcome to our api!' });
        };
    }
}

Polymer(APIComponent);
