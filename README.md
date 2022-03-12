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

Adds a new message to the database.

<!-- Adds a new message to the database. Requires `name`, `id_user`.
**Example:**
Posting this data:
```{
"name": "Here's an example message being submitted",
"profile_pic": "",
"handle": @sleepingbeauty
}

 will return you the following data:
[
_id: new ObjectId("61e1e679f9d6a781f2ba03ef"),
name: 'Tanja',
profile_pic: 'https://tvline.com/wp-content/uploads/2016/03/freeform-sleeping-beauty-series.jpg',
handle: '@sleepingbeauty'
}
]
 -->
