function showLoader(visible) {
    document.getElementById("loading").style.display = visible ? "block" : "none";
    document.getElementById("content").style.display = visible ? "none" : "block";
}

function displayUserInfo(user) {
    var userInfo = document.getElementById("user-info");
    userInfo.innerHTML = "<p><strong>Name:</strong> " + user.name + "</p>" +
        "<p><strong>Username:</strong> " + user.username + "</p>" +
        "<p><strong>Email:</strong> " + user.email + "</p>" +
        "<p><strong>Phone:</strong> " + user.phone + "</p>" +
        "<p><strong>Website:</strong> " + user.website + "</p>" +
        "<p><strong>Company:</strong> " + user.company.name + "</p>";
}

function displayPosts(posts) {
    var postsList = document.getElementById("posts-list");
    for (var i = 0; i < posts.length; i++) {
        var postDiv = document.createElement("div");
        postDiv.className = "post";
        postDiv.innerHTML = "<h3>" + (i + 1) + ". " + posts[i].title + "</h3>" +
            "<p>" + posts[i].body + "</p>";
        postsList.appendChild(postDiv);
    }
}

function displayComments(comments) {
    var commentsList = document.getElementById("comments-list");
    for (var i = 0; i < comments.length; i++) {
        var commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = "<p><strong>" + comments[i].name + ":</strong> " + comments[i].body + "</p>";
        commentsList.appendChild(commentDiv);
    }
}
