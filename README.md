# FRONTEND Angular task

## Story 
As a customer 
I want to maintain a shopping list by adding and removing articles, 
to have a good overview about articles which I may want to buy later.

Acceptance criteria:
- Products can be searched with a search field
- Each product can be added to a shopping list
- Shopping list can be viewed
- Products can be removed from shopping list
- Name of shopping lists can be defined and changed

API connection:
- Client may restrict access to API. This can be bypassed.

Design:
- User friendly. No specific restrictions. 


## Setup
We provide a simple Angular 1.x starter application. This runs with similar dependencies and modules like our shop. Please have a look into the _package.json_ file to check existing scripts you can use. 

## Developer informations
Here you can find endpoints and parameters you can use for your application.  **API Endpoint:** https://api.efood.real.de/api/v2/real

Search:
``` 
GET: products/search
    Params: 
    query: string (example below)
 	currentPage: int (starting from 0)
 	pageSize: int (items per page)
```

Query example:
```
{term}:{sorting}:category:{categoryID}
term = free text query
sorting = relevance / price-(asc|desc) / name-(asc|desc)
category = 1 is all categories
```
## Result
Please provide us your result via mail. You can provide us a zip file or if possible a repository with your commits. 

## Good Luck
If you have any questions or need additional information, please always feel free to ask!