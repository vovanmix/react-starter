# SwaggerPetstoreSimple.DefaultApi

All URIs are relative to *http://petstore.swagger.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPet**](DefaultApi.md#addPet) | **POST** /pets | 
[**deletePet**](DefaultApi.md#deletePet) | **DELETE** /pets/{id} | 
[**findPetById**](DefaultApi.md#findPetById) | **GET** /pets/{id} | 
[**findPets**](DefaultApi.md#findPets) | **GET** /pets | 


<a name="addPet"></a>
# **addPet**
> Pet addPet(pet)



Creates a new pet in the store.  Duplicates are allowed

### Example
```javascript
var SwaggerPetstoreSimple = require('swagger_petstore__simple');

var apiInstance = new SwaggerPetstoreSimple.DefaultApi();

var pet = new SwaggerPetstoreSimple.NewPet(); // NewPet | Pet to add to the store

apiInstance.addPet(pet).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pet** | [**NewPet**](NewPet.md)| Pet to add to the store | 

### Return type

[**Pet**](Pet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePet"></a>
# **deletePet**
> deletePet(id)



deletes a single pet based on the ID supplied

### Example
```javascript
var SwaggerPetstoreSimple = require('swagger_petstore__simple');

var apiInstance = new SwaggerPetstoreSimple.DefaultApi();

var id = 789; // Number | ID of pet to delete

apiInstance.deletePet(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of pet to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findPetById"></a>
# **findPetById**
> Pet findPetById(id)



Returns a user based on a single ID, if the user does not have access to the pet

### Example
```javascript
var SwaggerPetstoreSimple = require('swagger_petstore__simple');

var apiInstance = new SwaggerPetstoreSimple.DefaultApi();

var id = 789; // Number | ID of pet to fetch

apiInstance.findPetById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of pet to fetch | 

### Return type

[**Pet**](Pet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/xml, text/xml, text/html

<a name="findPets"></a>
# **findPets**
> [Pet] findPets(opts)



Returns all pets from the system that the user has access to

### Example
```javascript
var SwaggerPetstoreSimple = require('swagger_petstore__simple');

var apiInstance = new SwaggerPetstoreSimple.DefaultApi();

var opts = { 
  'tags': ["tags_example"], // [String] | tags to filter by
  'limit': 56 // Number | maximum number of results to return
};
apiInstance.findPets(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tags** | [**[String]**](String.md)| tags to filter by | [optional] 
 **limit** | **Number**| maximum number of results to return | [optional] 

### Return type

[**[Pet]**](Pet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/xml, text/xml, text/html

