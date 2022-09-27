// // syntax tio import modules keyword v name = require packet name
// const http =require('http')
// http.createServer((req,res)=>{
// // request response
//   res.end('mitk kundapura')
// }).listen(4000)
// // starts server 4000 (localhost:4000)
const express = require('express');
const app = express()

app.use(express.json())

const items = []
//app.get(endpoint,callback)
//app.methodname n two parameters


//read the student record...................get method to read
app.get('/items', (req, res) => {
  try {
    res.send(items)
  } catch (error) {
    res.send(error)
  }
})

//creating a student record.................post method to create
app.post('/items', (req, res) => {
  try {
    // const student =req.body
    // students.push(student)
    const item = req.body;
    items.push(item);
    res.send(items);
  } catch (error) {
    res.send(error)
  }
})

//read student record with  id
app.get('/items/:id', (req, res) => {
  try {
const item = items.find((item) => item.id == req.params.id)
res.send(item)
  } catch (error) {
  res.send(error)
}
})



//update student record......................put method to update
app.put('/items/:id', (req, res) => {
  try {
    const id = req.params.id
    const index = items.findIndex((item) => item.id == id)
    items[index] = req.body
    res.send(items)
  } catch (error) {
    res.send(error)
  }
})

// delete student record......................delete method to delete
app.delete('/items/:id', (req, res) => {
  try {
    const id = req.params.id
    const index = items.findIndex((item) => item.id == id)
    items.splice(index, 1)
    res.send("deleted")
  } catch (error) {
    res.send(error)
  }
})

app.listen(3005, () => {
  console.log('server is running on port ')
});




