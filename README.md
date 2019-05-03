This app lets user enter their profile url and returns a table with different issues 

It has a httpService which makes the API call to the github API which searches the issues containing the username and returns the result as the user submits the url.

Currently the url is splited and the username is extracted which upon various testing didn't fail but is not full proof as the structure of the URL can change anytime.

If given more time, I would have studied the Github API a bit more and performed various checks before displaying the results like incomplete_results, state.
