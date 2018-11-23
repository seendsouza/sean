# Database Structure
SEAN uses a Firebase realtime database to store all of its data, and is organized in the following hierarchy.

- User
	- UserName
	- Password
	- Level of Education
	- Tags
- Mentor
	- MentorName
	- Password
	- Level of Education
	- Tags
- Tags
	- Subject
		- Mentors
			- MentorName
		- Users
			- UserName

## Users

User data is set to the firebase database under the username entered in the registration page. This username serves as their identifier and each user must have a distinct username. The details the user entered like their name, level of education, etc. is put under their username in the database.

### Tags

Tags for users are extracted from the abstract the user enters in the requests page. We use the Indico API extracting tags about the text. The tags that match the abstract with a likelihood of 85% or more are updated under the user’s name. The profession in the tags along with the username are put into the tags heading to make referencing the users and mentors associated with certain tags easier and faster for the frontend


## Mentors

Mentor data is set to the firebase database under the mentor name entered in the registration page. This mentor name serves as their identifier and each mentor must have a distinct username. The details the mentor entered like their name, level of education, etc. is put under their mentor name in the database.
