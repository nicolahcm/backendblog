'use strict';


var mongoose = require('mongoose'),
    Posts = mongoose.model('Posts');

exports.list_all_posts = function (req, res) {
    var query = req.query;
    console.log("query", query);

    Posts.find(query, /*{ sort: { featured: 1 } },*/ function (err, posts) {
        if (err)
            res.send(err);
        console.log(posts);
        res.json(posts)
        //res.json(posts);
    });
};




exports.create_a_post = function (req, res) {
    var new_post = new Posts(req.body);
    new_post.save(function (err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
};



exports.read_a_post = function (req, res) {
    Posts.findById(req.params.postId, function (err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
};


exports.update_a_post = function (req, res) {
    Posts.findOneAndUpdate({ _id: req.params.postId }, req.body, { new: true }, function (err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
};




exports.patch_a_post = function (req, res) {
    Posts.findOneAndUpdate({ _id: req.params.postId }, { $set: req.body }, { new: true }, function (err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
}



exports.delete_a_post = function (req, res) {
    Posts.remove({
        _id: req.params.postId
    }, function (err, post) {
        if (err)
            res.send(err);
        res.json({ message: 'Post successfully deleted' });
    });
};
