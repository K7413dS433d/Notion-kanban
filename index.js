import express from "express"
import "./src/Scheduler/cron_runner.js";

const port = process.env.PORT || 3000

const app = express()

app.get("/", (req, res) => {
    res.send("Hello, Notion Kanban!")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
