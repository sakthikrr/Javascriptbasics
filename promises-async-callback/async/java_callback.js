showLoader(true);

axios.get("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
        var user = response.data;
        // Display user info
        displayUserInfo(user);
    })
    .then(function () {
        return axios.get("https://jsonplaceholder.typicode.com/posts?userId=1");   
    })
    .then(function (response) {
        var posts = response.data;
        // Display posts
        displayPosts(posts);
    }).then(function () {
        return axios.get("https://jsonplaceholder.typicode.com/comments?postId=1");
    })
    .then(function (response) {
        var comments = response.data;
        // Display comments
        displayComments(comments);
    }).catch(function (err) {
        document.getElementById("loading").innerHTML = '<span class="error">' + err + '</span>';
    }).finally(function () {
        showLoader(false);
    }); 
