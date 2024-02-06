const router = require('koa-router')()

const mongoose = require('mongoose');
const { Schema } = mongoose;

var stuSchema = new Schema({
    teaId: { type: Schema.Types.ObjectId, ref: 'teachers' },
    name: { type: String, alias: 'info' },
    age: Number,
    grades: Number
}, { collection: 'students' })

var teaSchma = new Schema({
    name: String
}, { collection: 'teachers' })

var stuModle = mongoose.model('students', stuSchema)
var terModle = mongoose.model('teachers', teaSchma)

router.post('/setData', async (res) => {
    const teacher = await terModle.insertMany([
        { name: '李老师' },
        { name: '王老师' }
    ])
    const student = await stuModle.insertMany([
        { name: "小明", teaId: teacher[0]._id, age: Math.floor(Math.random() * 100), grades: Math.floor(Math.random() * 100) },
        { name: "小李", teaId: teacher[0]._id, age: Math.floor(Math.random() * 100), grades: Math.floor(Math.random() * 100) },
        { name: "小芳", teaId: teacher[1]._id, age: Math.floor(Math.random() * 100), grades: Math.floor(Math.random() * 100) },
        { name: "小猪", teaId: teacher[0]._id, age: Math.floor(Math.random() * 100), grades: Math.floor(Math.random() * 100) },
        { name: "销售", teaId: teacher[1]._id, age: Math.floor(Math.random() * 100), grades: Math.floor(Math.random() * 100) }
    ])
    res.body = student
})
router.post('/getData', async (res) => {
    const student = await stuModle.find()
    res.body = student
})
router.post('/removeData', async (res) => {
    const student = await terModle.remove({ name: /老师/ })
    res.body = student
})

module.exports = router
