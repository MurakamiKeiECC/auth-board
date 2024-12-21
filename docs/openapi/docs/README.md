# Documentation for Bulletin Board API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost:3000/api/v1*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *CommentsApi* | [**createComment**](Apis/CommentsApi.md#createcomment) | **POST** /posts/{postId}/comments | Create a new comment on a post |
*CommentsApi* | [**deleteComment**](Apis/CommentsApi.md#deletecomment) | **DELETE** /comments/{commentId} | Delete a comment by ID |
*CommentsApi* | [**getComment**](Apis/CommentsApi.md#getcomment) | **GET** /comments/{commentId} | Get a comment by ID |
*CommentsApi* | [**getPostComments**](Apis/CommentsApi.md#getpostcomments) | **GET** /posts/{postId}/comments | Get a list of comments for a post |
| *PostsApi* | [**createPost**](Apis/PostsApi.md#createpost) | **POST** /posts | Create a new post |
*PostsApi* | [**deletePost**](Apis/PostsApi.md#deletepost) | **DELETE** /posts/{postId} | Delete a post by ID |
*PostsApi* | [**getPost**](Apis/PostsApi.md#getpost) | **GET** /posts/{postId} | Get a post by ID |
*PostsApi* | [**getPosts**](Apis/PostsApi.md#getposts) | **GET** /posts | Get a list of posts |
*PostsApi* | [**updatePost**](Apis/PostsApi.md#updatepost) | **PUT** /posts/{postId} | Update a post by ID |
| *UsersApi* | [**createUser**](Apis/UsersApi.md#createuser) | **POST** /users | Create a new user |
*UsersApi* | [**getUser**](Apis/UsersApi.md#getuser) | **GET** /users/{userId} | Get a user by ID |
*UsersApi* | [**getUsers**](Apis/UsersApi.md#getusers) | **GET** /users | Get a list of users |
*UsersApi* | [**updateUser**](Apis/UsersApi.md#updateuser) | **PUT** /users/{userId} | Update a user by ID |


<a name="documentation-for-models"></a>
## Documentation for Models

 - [Comment](./Models/Comment.md)
 - [CommentCreate](./Models/CommentCreate.md)
 - [Post](./Models/Post.md)
 - [PostCreate](./Models/PostCreate.md)
 - [PostUpdate](./Models/PostUpdate.md)
 - [User](./Models/User.md)
 - [UserCreate](./Models/UserCreate.md)
 - [UserUpdate](./Models/UserUpdate.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

All endpoints do not require authorization.
