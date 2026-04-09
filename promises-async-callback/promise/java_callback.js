axios.get("https://jsonplaceholder.typicode.com/users/1")

    .then(function (response) {
        showaiting(true);
        var user = response.data;
        // Display user info
        var userInfo = document.getElementById("user-info");
        userInfo.innerHTML =     "<p><strong>Name:</strong> " + user.name + "</p>" +
            "<p><strong>Username:</strong> " + user.username + "</p>" +
            "<p><strong>Email:</strong> " + user.email + "</p>" +
            "<p><strong>Phone:</strong> " + user.phone + "</p>" +
            "<p><strong>Website:</strong> " + user.website + "</p>" +
            "<p><strong>Company:</strong> " + user.company.name + "</p>";
    })
    .then(function () {
        return axios.get("https://jsonplaceholder.typicode.com/posts?userId=1");   
    })
    .then(function (response) {
        var posts = response.data;
        // Display posts
        var postsList = document.getElementById("posts-list");
        for (var i = 0; i < posts.length; i++) {
            var postDiv = document.createElement("div");        
            postDiv.className = "post";
            postDiv.innerHTML = "<h3>" + (i + 1) + ". " + posts[i].title + "</h3>" +
                "<p>" + posts[i].body + "</p>";
            postsList.appendChild(postDiv);
        }
    }).then(function () {
        return axios.get("https://jsonplaceholder.typicode.com/comments?postId=1");
    })
    .then(function (response) {
        var comments = response.data;
        // Display comments
        var commentsList = document.getElementById("comments-list");
        for (var i = 0; i < comments.length; i++) {
            var commentDiv = document.createElement("div");
            commentDiv.className = "comment";
            commentDiv.innerHTML = "<p><strong>" + comments[i].name + ":</strong> " + comments[i].body + "</p>";
            commentsList.appendChild(commentDiv);
        }
        document.getElementById("loading").style.display = "none";
        document.getElementById("content").style.display = "block";
    }).catch(function (err) {
        document.getElementById("loading").innerHTML = '<span class="error">' + err + '</span>';
    }); 
