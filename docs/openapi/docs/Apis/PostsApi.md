# PostsApi

All URIs are relative to *http://localhost:3000/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPost**](PostsApi.md#createPost) | **POST** /posts | Create a new post |
| [**deletePost**](PostsApi.md#deletePost) | **DELETE** /posts/{postId} | Delete a post by ID |
| [**getPost**](PostsApi.md#getPost) | **GET** /posts/{postId} | Get a post by ID |
| [**getPosts**](PostsApi.md#getPosts) | **GET** /posts | Get a list of posts |
| [**updatePost**](PostsApi.md#updatePost) | **PUT** /posts/{postId} | Update a post by ID |


<a name="createPost"></a>
# **createPost**
> Post createPost(PostCreate)

Create a new post

    Create a new post in the system.

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

<a name="deletePost"></a>
# **deletePost**
> deletePost(postId)

Delete a post by ID

    Delete a post by its unique ID.

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

<a name="getPost"></a>
# **getPost**
> Post getPost(postId)

Get a post by ID

    Retrieve a post by its unique ID.

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

<a name="getPosts"></a>
# **getPosts**
> List getPosts()

Get a list of posts

    Retrieve a list of all posts.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/Post.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updatePost"></a>
# **updatePost**
> Post updatePost(postId, PostUpdate)

Update a post by ID

    Update the details of a post identified by its ID.

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

