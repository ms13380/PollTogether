# PollTogether
Together or together? For THAT is the question
### https://ms13380.github.io/PollTogether/
=======
Heroku: https://poll-together.herokuapp.com/
## Made by the Polars

## User Story

```md
Our inspiration was simple - A fun way, accurate, and user-friendly way to get your "Fist-of-Five"
HOW can you gauge what your students are thinking or what do they want to do?
AS A bootcamp instructor or for anyone who cares easily create a poll, PollTogether is here for you!

The question is, "Together or together?" The answer is PollTogether
```

## Acceptance Criteria

```md
GIVEN a polling site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which allows me to search for a poll and allows me to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see the polls I have created, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing polls I have created
WHEN I click on an existing poll I have created
THEN I am presented with the results of the poll
WHEN I type a poll's id into the search bar, it brings up the poll's page.
WHEN I click on an answer choice
THEN an answer is recorded in the database
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
