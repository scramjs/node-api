class BearsComponent {
    beforeReady() {
        this.is = 'na-bears';
    }

    ready() {
        var Bear = require('./models/bear');

        // create a bear (accessed at POST http://localhost:8080/bears)
        this.createHandler = (req, res) => {
            var bear = new Bear();		// create a new instance of the Bear model
            bear.name = req.body.name;  // set the bears name (comes from the request)

            bear.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear created!' });
            });
        };

        // get all the bears (accessed at GET http://localhost:8080/api/bears)
        this.getAllHandler = (req, res) => {
            Bear.find(function(err, bears) {
                if (err)
                    res.send(err);

                res.json(bears);
            });
        };
    }
}

Polymer(BearsComponent);
