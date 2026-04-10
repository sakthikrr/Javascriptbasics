 async function fetchData() 
    {
            try {
                showLoader(true);
                const userResponse = await axios.get("https://jsonplaceholder.typicode.com/users/1");
                const user = userResponse.data;
                displayUserInfo(user);
                const postsResponse = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=1");
                const posts = postsResponse.data;
                displayPosts(posts);
                const commentsResponse = await axios.get("https://jsonplaceholder.typicode.com/comments?postId=1");
                const comments = commentsResponse.data;
                displayComments(comments);
            } catch (err) {
                document.getElementById("loading").innerHTML = '<span class="error">' + err + '</span>';    

            } finally {
                showLoader(false);  
            }
    }
fetchData();