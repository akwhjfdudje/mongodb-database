posts = connect('mongodb://127.0.0.1:27017/posts');

posts.posts.insertMany([
	{
		title:"First post",
		body:"this is the first post"
	},
	{
		title:"Second post",
		body:"this is the second post"
	},
	{
		title:"Third post",
		body:"this is the third post"
	},
	{
		title:"Fourth post",
		body:"this is the fourth post"
	}

])
