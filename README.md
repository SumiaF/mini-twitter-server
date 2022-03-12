# mini-twitter-server

## Table of Contents

- [GET all users](https://mini-twitter-server.herokuapp.com/users)
- [GET a random user](https://mini-twitter-server.herokuapp.com/me)
- [GET a single user by id](https://mini-twitter-server.herokuapp.com/user/:id)
- [GET all messages ](https://mini-twitter-server.herokuapp.com/messages)
- [GET all messages from particular user ](https://mini-twitter-server.herokuapp.com//users/id/messages)
- [GET a single message by id](https://mini-twitter-server.herokuapp.com/messages/id)
- [POST one message](https://mini-twitter-server.herokuapp.com/messages)


### GET all users

| URL                                             | Method |
| ----------------------------------------------- | ------ |
| https://mini-twitter-server.herokuapp.com/users | `GET`  |

Returns all users in the database.


### GET one random user

| URL                                          | Method |
| -------------------------------------------- | ------ |
| https://mini-twitter-server.herokuapp.com/me | `GET`  |

Returns random user very timeyou do a fetch in the database.


### GET a single user by id

| URL                                                | Method |
| -------------------------------------------------- | ------ |
| https://mini-twitter-server.herokuapp.com/user/:id | `GET`  |

Returns a user by id very timeyou do a fetch in the database.


### GET all messages

| URL                                                | Method |
| -------------------------------------------------- | ------ |
| https://mini-twitter-server.herokuapp.com/messages | `GET`  |

Returns all messages pesent in database


### GET all messages belonging to one common user handle/unique id

| URL                                                          | Method |
| ------------------------------------------------------------ | ------ |
| https://mini-twitter-server.herokuapp.com//users/id/messages | `GET`  |

Returns all messages for a user whose `user_id` matches the `${id}` provided in the URL.


### GET a single message by id

| URL                                                   | Method |
| ----------------------------------------------------- | ------ |
| https://mini-twitter-server.herokuapp.com/messages/id | `GET`  |

Returns a message by id very timeyou do a fetch in the database.

### POST one message

| URL                                                 | Method  |
| --------------------------------------------------- | ------- |
| https://mini-twitter-server.herokuapp.com/messages  | `POST`  |

Adds a new message to the database. Requires `name`, `id_user`.

**Example:**
Posting this data:
``` 
{
 "text": "This is a test message with POSTMAN",
 "id_user": "622a4f94bd3ddc6358011fae"
}

 will return you the following data:
{
"text": "This is a test message with POSTMAN",
"id_user": "622a4f94bd3ddc6358011fae",
"_id": "622c924ec9d516f4f8418706",
"createdAt": "2022-03-12T12:30:06.504Z",
"updatedAt": "2022-03-12T12:30:06.504Z",
"__v": 0
}

## Random user from database
| URL  | Method  |
| ------------ | ------------ |
| https://mini-twitter-server.herokuapp.com/me  | `GET`  |

Returns a random user from the database.
{
"_id": "622a4f94bd3ddc6358011fae",
"name": "Jenn",
"email": "abc@gmail.com",
"profilePic": "images\\man1.jpg"
}
