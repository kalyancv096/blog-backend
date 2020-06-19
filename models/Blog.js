const mongoose = require("mongoose");
//step1: store predefined mmongoose schema object in to one vatriable
let schema = mongoose.Schema;
//now create blog instance of this schema and devolop it
let blogSchema = new schema({
  blogId: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
  },
  bodyHtml: {
    type: String,
  },
  views: {
    type: Number,
    default: 0
  },
  isPublised: {
    type: Boolean,
  },
  category: {
    type: String,
  },
  author: {
    type: String,
    required: true
  },
 tags:[],
  created: {
    type: Date,
    default: Date.now,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

module.exports=mongoose.model('Blogs', blogSchema)