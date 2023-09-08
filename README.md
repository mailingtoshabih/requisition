Fixed Bug report

Bug 1: Empty Form Submission
Issue: In both the JobDetailsForm and InterviewDetailsForm components, the next button was working and the form was submitting even when some fields were empty.
Solution: We used Formik's isValid property to disable the "Submit" button until the form is valid, ensuring that the form is not submitted with empty fields.

Bug 2: Data Not Updating in Real-time
Issue: The data in the PreviewCard component was not updating in real-time as expected.
Solution: Used react-redux toolkit. Verified that the data is being fetched and updated correctly from the Redux store. Ensured that the component re-renders when data changes to reflect updates.

Bugs 3 : Non Retaining Values
Solution : Retained values using redux-toolkit and retained data in the global store. Data is stored in the global store for consistent accessibility and persistence.

Bug 4 : On the job details form when the user submits the form it was not going to the next step even when there are no errors on the screen.
Solution : In Interview Setting, Added validation schema in the Interview Settings component and configured the necessary adjustments to enable smooth form advancement.

Bug 5 : Missing Yup Library
Solution : Resolved the issue by importing the Yup library, ensuring proper functionality in form validation.


Remaining Bugs
______________
Bug : The dropdown menu is still overlapping elements below it. Unfortunately, this issue remains unresolved due to time constraints. Else everything is working great.
