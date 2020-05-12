# AdmissionsApplication

CS191- Computer Science Capstone Project
Drake Admissions App

Authors:
-Justin Burger (justin.burger@drake.edu)
-Becca Dura (rebecca.dura@drake.edu)
-Karl Rauschenberger (karl.rauschenberger@drake.edu)

This is the repository for our code that creates a mobile application for admissions as our Computer Science Capstone project, called the Drake Admissions App.

Our app was created coded in Javascript using the React-Native framework in IntelliJ IDEA & tested using an emulator through Android Studio.

Currently, our app is only available for use on Android devices; however, functionality can easily be added for iOS devices as well as on a webpage through the React Native framework.

Our app is for use by 3 different types of users: students, tour guides, and admissions counselors who are administrators.  Each user has access to different functionalities due to them accessing different user interfaces upon logging in.  Both students and tour guides can actually log into the mobile application, while administrators can access the Google Firebase console where the database and user accounts can be viewed or updated.

We used Google Firebase to build a Cloud Firestore database.  This is a NoSQL database with 4 different collections (similar to a table/entity).  The 4 collections are as follows: students, tourGuides, admissionsCounselors, and schedule.  Each collection contains documents with fields.  For example, the student collection contains a document for each student with fields for their email, first name, last name, etc...
