# PollTogether
Together or together? For THAT is the question
### https://ms13380.github.io/PollTogether/
=======
Heroku: https://poll-together.herokuapp.com/
## Made by the Polars

## How PollTogether Came to Be

```md
OUR INSPIRATION was simple - To CREATE a fun way, accurate, and graphically-appealing way to get your "Fist-of-Five"!
IT SOLVES - HOW can you gauge what your students are thinking or what do they want to do instantly? 🤔
AS A bootcamp instructor or for anyone who cares easily create a poll, PollTogether is here for you!

THE QUESTION is, "Together or together?" 
The SOLUTION is PollTogether 👍
```
![image](https://user-images.githubusercontent.com/103905661/185743118-751bf828-f95e-4e09-8ab9-a10704058d2c.png)

## How-To: Polling made fun and easy

```md
WHEN you first visit our site you're given 6 examples of polls
REGISTER to start your journey - Upper Right hand corner, middle option, click to register 
LOGIN the fun begins. Once you login current page will now show the most recent polls
CLICK TO SEARCH Now you're in the driver seat. Find past polls you've conducted to see the results or use the polls again
BUTTONS of creative fun. We've made creating a poll easy. 
You'll be presented options for:
   WHAT you want to take a poll on
   WHO can take the poll
   WHAT options of answers your users can have
SHARE your poll. Your users will now have a poll's ID that you shared with them so they can answer
NO FIST-OF-TEN We've got you covered because we coded it in such a way that your user can only answer once per their credentials
THEN an answer is recorded in the database
SEE the results. Once the polling is comnplete, you now have a graphical representation of what your users chose
THEN I see the polls I have created, and the option to log out

```
### Technology Utilized

```md

Bootstrap
JS

```


### Database Models

Your database should contain the following four models, including the requirements listed for each model:

* `User`

  * `id`

    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `username`
  
    * String.
  
    * Doesn't allow null values.

  * `email`
  
    * String.
  
    * Doesn't allow null values.

  * `password`
  
    * String.
  
    * Doesn't allow null values.

* `Poll`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Generated 6 diget code

  * `poll_name`
  
    * String.
  
    * Allow null values.

  * `description`
  
    * String.
  
    * Allow null values.

  * `created_by`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * References the `User` model's `id`.

* `Answer`

  * `poll_id`
  
    * Integer.
  
    * Doesn't allow null values.

    * References the `Poll` model's `id`.

  * `answer`
  
    * String.

    * Doesn't allow null values.


### Associations

You'll need to execute association methods on your Sequelize models to create the following relationships between them:

* `Poll` belongs to `User`, and `User` has many `Poll` models.

* `Answer` belongs to `Poll` model, and `Poll` has many `Answer` models.
