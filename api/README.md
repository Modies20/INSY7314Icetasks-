# Student Feedback System API

## Setup
1. Run `npm install`
2. Run `npm start`
3. Open http://localhost:3000/
4. Open http://localhost:3000/status

## Postman tests
### Valid feedback
POST http://localhost:3000/feedback
{
  "studentName": "John",
  "course": "Web Development",
  "rating": 5,
  "comment": "Excellent module"
}

### Invalid feedback
POST http://localhost:3000/feedback
{
  "studentName": "",
  "course": "Web Development",
  "rating": 5,
  "comment": "Excellent module"
}
