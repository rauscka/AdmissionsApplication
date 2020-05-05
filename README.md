# AdmissionsApplication
Repository for our code creating a mobile app for admissions.

Welcome to our mock Drake Admissions Mobile Application.

Our app is created using React-Native framework & tested using an emulator through Android Studio.

Currently, our app is available for use on Android devices; however, functionality can easily be added for iOS devices through the React Native framework.

Our app is for use by 3 different types of users: students, tour guides, and admissions counselors.  A few admissions counselors are also administrators, meaning they can update the database.  Each user has access to different functionalities due to them accessing different user interfaces upon logging in.

We used Google Firebase to build a Cloud Firestore database.  This is a NoSQL database with 6 different collections (similar to a table/entity).  The following 6 collections are as follows: students, tourGuides, admissionsCounselors, schedule, studentTourGuideMatch, studentAdmissionsCounselorMatch.  Each collection contains documents with fields.  For example, the student collection contains a document for each student with fields for their email, first name, last name, etc...
