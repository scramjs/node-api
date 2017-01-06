class BearsIdComponent {
    beforeReady() {
        this.is = 'na-bears-id';
    }

    ready() {
        var Bear = require('./models/bear');

        // get the bear with that id
        this.getHandler = (req, res) => {
            console.log(req.params);
            Bear.findById(req.params.bear_id, function(err, bear) {
                if (err)
                    res.send(err);
                res.json(bear);
            });
        };

        // update the bear with this id
        this.updateHandler = (req, res) => {
            Bear.findById(req.params.bear_id, function(err, bear) {

                if (err)
                    res.send(err);

                bear.name = req.body.name;
                bear.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Bear updated!' });
                });

            });
        };

        // delete the bear with this id
        this.deleteHandler = (req, res) => {
            Bear.remove({
                _id: req.params.bear_id
            }, function(err, bear) {
                if (err)
                    res.send(err);

                res.json({ message: 'Successfully deleted' });
            });
        };
    }
}

Polymer(BearsIdComponent);
