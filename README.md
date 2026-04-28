# Applied-Programming-Assignment-2
Applied Programming Assignment 2

Link to StreamFlix: https://blankisback.github.io/Applied-Programming-Assignment-2/

Link to Google Lighthouse report: https://pagespeed.web.dev/analysis/https-blankisback-github-io-Applied-Programming-Assignment-2/8xb1f9m4kq?form_factor=desktop

<img width="1036" height="486" alt="image" src="https://github.com/user-attachments/assets/bce4d8a0-1351-4c5a-b82e-3a26cb1c08c8" />



Wireframe:

<img width="1366" height="719" alt="image" src="https://github.com/user-attachments/assets/d6d81f70-dd57-4f24-84ae-ab1302a267c8" />

<img width="1366" height="719" alt="image" src="https://github.com/user-attachments/assets/1926ae8b-21e1-460f-99a5-1f45ca06cd09" />

<img width="1366" height="719" alt="image" src="https://github.com/user-attachments/assets/3bde8972-101c-40c5-a2e5-0f942222a172" />

<img width="3840" height="3840" alt="image" src="https://github.com/user-attachments/assets/62304240-4aef-4130-9340-962d86913892" />


Things that have changed in relation to the Wireframe:

1) There is no reccomended title at the top of the page - This is due to me not knowing how to implement this using HTML - however in a future update I would implement a large container at the top of the site with a randomly selected cover art with the correpsonding title and the watch now button.
2) I have implemented access to the OMDB database using their free API key, this allows access to more detailed information about the movie such as the runtime and description - this is different to the wireframe as there is no way to directly call a database using figma (as far as I know)
3) Lastly as there is no selectable plans for the users subscription, I have decided to not implement inputs for card details as there is no way for the user to select a payment plan or know how much they would be paying.

Things I have kept the same in relation to the Wireframe:

1) Overall aesthetic of the color scheme, this is due to a brand being most recognizable by their colours
2) General layout of the movies being in a grid format which can be scrolled through
3) Location of the buttons - this is because the human eye follows a F pattern when going through a site so by keeping the buttons in the same place as every site the user will not feel overwhelmed with content on the page.

# Design

The aim of this site is to provide accessibility features that mainline providers such as Netflix and Amazon Prime do not offer.

As the main Focus of this site is the usability it may in the long rung lack feautures that Netflix and Amazon Prime offer, such as a wider range of content and membership options.


Profile One:
<img width="947" height="615" alt="image" src="https://github.com/user-attachments/assets/ce307cef-5b07-4d76-96ae-d7069181c682" />

As this user prefers darker backgrounds due to visual impairment, I have implemented a Dark mode toggle feature, this allows users to switch between a white background to contrast the black text OR alternatively invert and have a black background with white text - changeable upon discretion.



Profile Two:
<img width="937" height="612" alt="image" src="https://github.com/user-attachments/assets/f9bbb43e-5031-4a1c-b78d-1a9f87e554d3" />

As there is currently no videos embeded into the site, implementing a function to place subtitles over media is not possible, however it would work similar to netflix subtitles where they are located at the bottom of the screen as to not cover up any important details onscreen.




Profile Three:
<img width="925" height="608" alt="image" src="https://github.com/user-attachments/assets/6775066f-50a1-4df7-9c5d-8a53026b4cf9" />


As there is currently no videos embeded into the site, implementing a function to check whether the user is still watching the content is not possible,



- Implemented Access to OMDB API Key allowing the site to fetch information about movies and movie art




# Development

<img width="1355" height="551" alt="image" src="https://github.com/user-attachments/assets/cbd438b2-7555-4b73-8397-8cebccfc98e8" />
Shows what the site would look like when DARK MODE is toggled

<img width="1362" height="835" alt="image" src="https://github.com/user-attachments/assets/e97999af-4be2-4547-b0a9-9f7cfbfd2ec1" />
Shows what the site would look like when LIGHT mode is enabled

<img width="1365" height="652" alt="image" src="https://github.com/user-attachments/assets/c22bed66-042f-4efa-9e56-444fa328e96e" />
Shows how the search function works - however in a future development/update i would have the input box visibile instead of being placed under the container which can make it difficult for users to know what movie they are searching for (i.e if there is a spelling error)

<img width="1365" height="652" alt="image" src="https://github.com/user-attachments/assets/0d27e087-1bc1-4f46-8910-b8a5209cf7d5" />
Shows what happens when a user clicks onto a movie cover image, this displays information fetched using the OMDB api key 

<img width="1365" height="707" alt="image" src="https://github.com/user-attachments/assets/6c86d427-48b8-4c0a-8165-3dac6db673b4" />
User is redirected to the sign in page when pressing the corresponding button in the top right hand corner of the index page. As there is no backend database to store user information this currently does nothing as there is no way to store the data except locally.

<img width="1358" height="650" alt="image" src="https://github.com/user-attachments/assets/d2b567b8-36e8-4593-be5e-d8ab26e5fdc6" />
Demonstrates input validation for the sign in form.

<img width="1358" height="650" alt="image" src="https://github.com/user-attachments/assets/03fe757b-08e5-4148-acef-65429d6c3216" />
Demonstrates input validation for the sign in form.




# Testing

One bug i have found is that when the user switches to "Light mode" and they interact with the cover for a movie to read the description, the container in which the information is displayed remains in dark mode (refer to screenshot below):

<img width="937" height="857" alt="image" src="https://github.com/user-attachments/assets/caecd9b5-7644-4fb3-afaf-eb5d45e8c76e" />

This is likely due to an issue with how the container is stored as when I am updating the background color to white - containers are stored seperate to this so they are not updated and inverted to fit the changed color scheme




HTML VALIDATOR:
<img width="1017" height="720" alt="image" src="https://github.com/user-attachments/assets/486a6fd1-2611-4b4f-a1f0-b6fca447ba41" />
https://validator.w3.org/nu/?doc=https%3A%2F%2Fblankisback.github.io%2FApplied-Programming-Assignment-2%2Findex.html


CSS VALIDATOR:
<img width="1027" height="1447" alt="image" src="https://github.com/user-attachments/assets/d42bfa7a-1205-4842-8c95-238b82705521" />
https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fblankisback.github.io%2FApplied-Programming-Assignment-2%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en

















References:

OMDB API - https://www.omdbapi.com
FREECODE CAMP - https://www.freecodecamp.org/news/make-api-calls-in-javascript/

