function getUser(callback) {
    console.log(callback)
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1");

    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
        } else {
            callback("Error fetching user");
        }
    };

    xhr.send();
}

function getPosts(userId, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
        } else {
            callback("Error fetching posts");
        }
    };

    xhr.send();
}

function getComments(postId, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
        } else {
            callback("Error fetching comments");
        }
    };

    xhr.send();
}

// Callback Hell (using normal functions instead of arrow functions)
getUser(function (err, user) {
    if (err) return console.log(err);

    getPosts(user.id, function (err, posts) {
        if (err) return console.log(err);

        getComments(posts[0].id, function (err, comments) {
            if (err) return console.log(err);

            console.log({ user: user, posts: posts, comments: comments });
        });
    });
});