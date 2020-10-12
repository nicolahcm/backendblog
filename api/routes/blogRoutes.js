'use strict';
module.exports = function (app) {
    var blogPosts = require('../controllers/blogController');

    // todoList Routes
    app.route('/posts')
        .get(blogPosts.list_all_posts)
        .post(blogPosts.create_a_post);


    app.route('/posts/:postId')
        .get(blogPosts.read_a_post)
        .put(blogPosts.update_a_post)
        .delete(blogPosts.delete_a_post)
        .patch(blogPosts.patch_a_post)

};