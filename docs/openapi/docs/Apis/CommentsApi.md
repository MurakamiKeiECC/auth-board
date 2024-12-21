# CommentsApi

All URIs are relative to *http://localhost:3000/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createComment**](CommentsApi.md#createComment) | **POST** /posts/{postId}/comments | Create a new comment on a post |
| [**deleteComment**](CommentsApi.md#deleteComment) | **DELETE** /comments/{commentId} | Delete a comment by ID |
| [**getComment**](CommentsApi.md#getComment) | **GET** /comments/{commentId} | Get a comment by ID |
| [**getPostComments**](CommentsApi.md#getPostComments) | **GET** /posts/{postId}/comments | Get a list of comments for a post |


<a name="createComment"></a>
# **createComment**
> Comment createComment(postId, CommentCreate)

Create a new comment on a post

    Add a new comment to a post.

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

<a name="deleteComment"></a>
# **deleteComment**
> deleteComment(commentId)

Delete a comment by ID

    Delete a comment by its unique ID.

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

<a name="getComment"></a>
# **getComment**
> Comment getComment(commentId)

Get a comment by ID

    Retrieve a comment by its unique ID.

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

<a name="getPostComments"></a>
# **getPostComments**
> List getPostComments(postId)

Get a list of comments for a post

    Retrieve a list of comments for a specified post.

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

