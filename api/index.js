require('dotenv').config();

const express = require('express');
const app = express();

const appName = process.env.APP_NAME || 'Student Feedback System';
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send(appName);
});

app.get('/status', (req, res) => {
  res.json({ status: 'Running' });
});

app.post('/feedback', (req, res) => {
  const { studentName, course, rating, comment } = req.body || {};
  const errors = [];

  if (typeof studentName !== 'string' || studentName.trim() === '') {
    errors.push('studentName is required.');
  } else if (studentName.trim().length > 40) {
    errors.push('studentName must not exceed 40 characters.');
  }

  if (typeof course !== 'string' || course.trim() === '') {
    errors.push('course is required.');
  }

  if (typeof rating !== 'number' || rating < 1 || rating > 5) {
    errors.push('rating must be a number between 1 and 5.');
  }

  if (typeof comment !== 'string') {
    errors.push('comment must be a string.');
  }

  if (errors.length > 0) {
    return res.status(400).json({ error: errors.join(' ') });
  }

  return res.status(200).json({
    message: 'Feedback received successfully',
    feedback: {
      studentName: studentName.trim(),
      course: course.trim(),
      rating,
      comment
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
