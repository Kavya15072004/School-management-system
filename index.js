const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/school_management', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

const Student = mongoose.model('Student', new mongoose.Schema({
    name: String,
    age: Number,
    grade: String
}));

app.get('/students', async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

app.post('/students', async (req, res) => {
    const { name, age, grade } = req.body;
    const student = new Student({ name, age, grade });
    await student.save();
    res.json(student);
});

app.delete('/students/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Student deleted' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
