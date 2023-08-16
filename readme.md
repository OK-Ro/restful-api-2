Our POST request just lets the user add anything to the database. Add the following
checks (and make sure to inform the user with error messages what is going wrong):
- Make sure that ONLY the fields title, director and release_date are given OR
only put those 3 fields into the database
- Have our API decide what the id will be so that it is unique in our list
- If everything is successful, let our user know what id was given to the movie
so they can access it easily again
- If not successful then let the user know what is wrong. Remember that the
user cannot see your code so the error message needs to have all the
information the user of your API will need!
- If you try to delete a movie with an id that is not in the list, you still get the message
that the movie was deleted. It would be much nicer if the person using our API gets
the message that no movie with that id exists. Something like ‘The movie with id 123