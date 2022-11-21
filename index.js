const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Doctors portal is running on port ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
