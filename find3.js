const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017").then(()=>{

mongoose
  .connect("mongodb://localhost:27017/Sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongodb successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const student = new mongoose.Schema({
  name: String,
  workout: Boolean,
  height: Number,
});

const Student = new mongoose.model("Student", student);

const adder = async () => {
  const ss = await Student.find()
    
  console.log(ss);
};

adder();
