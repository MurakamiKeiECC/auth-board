# DefaultApi

All URIs are relative to *http://localhost:3000/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createComment**](DefaultApi.md#createComment) | **POST** /posts/{postId}/comments | Create a new comment on a post |
| [**createPost**](DefaultApi.md#createPost) | **POST** /posts | Create a new post |
| [**createUser**](DefaultApi.md#createUser) | **POST** /users | Create a new user |
| [**deleteComment**](DefaultApi.md#deleteComment) | **DELETE** /comments/{commentId} | Delete a comment by ID |
| [**deletePost**](DefaultApi.md#deletePost) | **DELETE** /posts/{postId} | Delete a post by ID |
| [**getComment**](DefaultApi.md#getComment) | **GET** /comments/{commentId} | Get a comment by ID |
| [**getPost**](DefaultApi.md#getPost) | **GET** /posts/{postId} | Get a post by ID |
| [**getPostComments**](DefaultApi.md#getPostComments) | **GET** /posts/{postId}/comments | Get a list of comments for a post |
| [**getPosts**](DefaultApi.md#getPosts) | **GET** /posts | Get a list of posts |
| [**getUser**](DefaultApi.md#getUser) | **GET** /users/{userId} | Get a user by ID |
| [**getUsers**](DefaultApi.md#getUsers) | **GET** /users | Get a list of users |
| [**updatePost**](DefaultApi.md#updatePost) | **PUT** /posts/{postId} | Update a post by ID |
| [**updateUser**](DefaultApi.md#updateUser) | **PUT** /users/{userId} | Update a user by ID |


<a name="createComment"></a>
# **createComment**
> Comment createComment(postId, CommentCreate)

Create a new comment on a post

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **postId** | **Integer**| The ID of the post | [default to null] |
| **CommentCreate** | [**CommentCreate**](../Models/CommentCreate.md)| Comment to create | [optional] |

### Return type

[**Comment**](../Models/Comment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createPost"></a>
# **createPost**
> Post createPost(PostCreate)

Create a new post

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **PostCreate** | [**PostCreate**](../Models/PostCreate.md)| Post to create | [optional] |

### Return type

[**Post**](../Models/Post.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createUser"></a>
# **createUser**
> User createUser(UserCreate)

Create a new user

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **UserCreate** | [**UserCreate**](../Models/UserCreate.md)| User to create | [optional] |

### Return type

[**User**](../Models/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteComment"></a>
# **deleteComment**
> deleteComment(commentId)

Delete a comment by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **commentId** | **Integer**| The ID of the comment | [default to null] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deletePost"></a>
# **deletePost**
> deletePost(postId)

Delete a post by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **postId** | **Integer**| The ID of the post | [default to null] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getComment"></a>
# **getComment**
> Comment getComment(commentId)

Get a comment by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **commentId** | **Integer**| The ID of the comment | [default to null] |

### Return type

[**Comment**](../Models/Comment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPost"></a>
# **getPost**
> Post getPost(postId)

Get a post by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **postId** | **Integer**| The ID of the post | [default to null] |

### Return type

[**Post**](../Models/Post.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPostComments"></a>
# **getPostComments**
> List getPostComments(postId)

Get a list of comments for a post

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **postId** | **Integer**| The ID of the post | [default to null] |

### Return type

[**List**](../Models/Comment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPosts"></a>
# **getPosts**
> List getPosts()

Get a list of posts

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/Post.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> User getUser(userId)

Get a user by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | **Integer**| The ID of the user | [default to null] |

### Return type

[**User**](../Models/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> List getUsers()

Get a list of users

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updatePost"></a>
# **updatePost**
> Post updatePost(postId, PostUpdate)

Update a post by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **postId** | **Integer**| The ID of the post | [default to null] |
| **PostUpdate** | [**PostUpdate**](../Models/PostUpdate.md)| Post details to update | [optional] |

### Return type

[**Post**](../Models/Post.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> User updateUser(userId, UserUpdate)

Update a user by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | **Integer**| The ID of the user | [default to null] |
| **UserUpdate** | [**UserUpdate**](../Models/UserUpdate.md)| User details to update | [optional] |

### Return type

[**User**](../Models/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

