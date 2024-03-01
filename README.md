# REST_API-for CRUD Operation
 Rest-API for the basic CRUD Operations Using NodeJs


 # 1 .What i understand about CRUD :

RESTful Architecture: REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on a stateless, client-server communication protocol, typically HTTP, and uses standard operations (GET, POST, PUT, DELETE) to perform actions on resources.

## CRUD Operations:

## Create (POST): 
#This operation is used to create a new resource on the server. In the context of an API, this typically involves sending data to the server to be stored.

## Read (GET):
 This operation is used to retrieve a representation of a resource from the server. It is used to retrieve information.

## Update (PUT or PATCH): 
This operation is used to update an existing resource on the server. PUT is generally used to replace the entire resource, while PATCH is used to partially update it.

## Delete (DELETE):
This operation is used to remove a resource from the server.

## HTTP Methods: 
Each CRUD operation typically corresponds to an HTTP method:

POST for Create
GET for Read
PUT or PATCH for Update
DELETE for Delete


## Update can be done via PUT and PATCH. What the difference on each

PUT is used for full updates, where you replace the entire resource with a new representation, while PATCH is used for partial updates, where you modify specific parts of the resource without affecting the rest. The choice between PUT and PATCH depends on the nature of the update and whether you have the complete representation of the resource or just the changes that need to be applied.