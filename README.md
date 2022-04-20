## Task for package items weight calculations( W x H x L) (microservice accessed through a REST API )

## Download Code

After download the code run these commands:

1. npm install
2. npm start
3. url in postman (request method post): http://localhost:3000/
   json body request:
   
   {"items":[
        {
            "width": 10,
            "height": 10,
            "length": 10
        },
        {
            "width": 11,
            "height": 11,
            "length": 11
        },
        {
            "width": 12,
            "height": 13,
            "length": 14
        }
    ]}
   
4. Success Response :

{
    "status": true,
    "message": "Package Items Dimensions W X H X L.",
    "package": {
        "data": {
            "Width": 2,
            "Height": 4,
            "Length": 1
        }
    }
}

