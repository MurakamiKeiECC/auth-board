# UsersApi

All URIs are relative to *http://localhost:3000/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createUser**](UsersApi.md#createUser) | **POST** /users | Create a new user |
| [**getUser**](UsersApi.md#getUser) | **GET** /users/{userId} | Get a user by ID |
| [**getUsers**](UsersApi.md#getUsers) | **GET** /users | Get a list of users |
| [**updateUser**](UsersApi.md#updateUser) | **PUT** /users/{userId} | Update a user by ID |


<a name="createUser"></a>
# **createUser**
> User createUser(UserCreate)

Create a new user

    Create a new user in the system.

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

<a name="getUser"></a>
# **getUser**
> User getUser(userId)

Get a user by ID

    Retrieve a user by their unique ID.

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

    Retrieve a list of all users in the system.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> User updateUser(userId, UserUpdate)

Update a user by ID

    Update the details of a user identified by their ID.

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

