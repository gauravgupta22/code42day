SecureTM:
SecureTM is a fast and secure way for developers to implement mobile no. verification functionality in their websites for better authentication of users.

Live demo:
The API server is live at a linux virtual machine on amazon EC2.
check out this link for quick demo:
http://52.36.24.247/

How to set up:
<div id="SecureTM_window"></div>
<script type="text/javascript"  src="http://52.36.24.247/javascripts/g1.js"></script>
Adding this two lines of code is all you need to setup SecureTM.

Warning:
to test this yourself, first create a web server in any platform of your choice and add the above code to required html file.
it is important to create a server, because this wont work with file protocol.

How does SecureTM work?
the SecureTM script automatically inject the code in the html div tag and makes xmlHttpRequests to the server API on user interaction.

API:

POST request to http://52.36.24.247/SecureTM/sendOTP
with mobileNo=0123456789

POST request to http://52.36.24.247/SecureTM/resendOTP
with mobileNo=0123456789

POST request to http://52.36.24.247/SecureTM/verifyOTP
with mobileNo=0123456789 & otp=012345

The response is returned in JSON format.

Contact:
Gaurav Gupta +917860931204
Akash Gupta
Hemanshu Sondhi