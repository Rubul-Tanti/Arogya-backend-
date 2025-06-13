const mongoose =require("mongoose")
const blogsSchema=new mongoose.Schema({
    title: {
    type: String,
    required: true,
    trim: true
  },
  blog: {
    type: String,
    required: true
  },
  images: {
    type: [String], // Array of image URLs
    default: []
  },
  video: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: 'yoga',
    enum: ['yoga'] // You can extend this later if needed
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})
const blogsModel=mongoose.model("blogs",blogsSchema)
module.exports=blogsModel
// async function createnewBlog(){
//   c.map((blog)=>{
//     console.log(blog)
//     blogsModel.create(blog)
//   })
// }
// module.exports=ab