const db = require("../create_database")

const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "Nav@gur1",
        database: "mydata",
    },
});


getCourses = (req, res) => {
    knex.from('data_id').select("*")
        .then((rows) => {
            res.send(rows)
        })
}
getCourseById = (req, res) => {
    const { id } = req.params;
    knex.schema.hasTable("data_id").then(function(exists) {
        if (exists) {
            return knex.from('data_id').select("*").where("id", id)
                .then(function(result) {
                    if (result != 0) { res.send(result) } else { res.status(500).send("id is not found") }
                })
        }
    })
}
createCourse = (req, res) => {
    const newcourse = req.body;
    knex.schema.hasTable("data_id").then(function(exists) {
        if (exists) {
            res.send('new course has been added to database')
            return knex("data_id").insert({ id: newcourse.id, name: newcourse.name, logo: newcourse.logo, notes: newcourse.notes, days_to_complete: newcourse.days_to_complete, short_description: newcourse.short_description, type: newcourse.type, lang_available: newcourse.lang_available.toString() })
        }
    })
}
deleteCourse = (req, res) => {
    const { id } = req.params
    knex.schema.hasTable("data_id").then(function(exists) {
        if (exists) {
            res.send({ Success: `data deleted by id:${id} successfully.` });
            return knex("data_id").where("id", id).del();
        }
    })
}
updateCourse = (req, res) => {
    const id = req.params.id
    var name = req.body.name;
    var logo = req.body.logo
    var notes = req.body.notes
    var days_to_complete = req.body.days_to_complete
    var short_description = req.body.short_description
    var type = req.body.type
    var lang_available = req.body.lang_available
    knex.schema.hasTable("data_id").then(function(exists) {
        if (exists) {
            res.send({ Success: `course data updated successfully.` })
            return knex("data_id")
                .update({ name: name, logo: logo, notes: notes, days_to_complete: days_to_complete, short_description: short_description, type: type, lang_available: lang_available.toString() })
                .where("id", id)
        }
    })

}

module.exports = {
    getCourses,
    getCourseById,
    createCourse,
    deleteCourse,
    updateCourse
}