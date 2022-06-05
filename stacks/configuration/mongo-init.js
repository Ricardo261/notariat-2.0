let error = false
print("**** Going to start Mongo seed ****")

var admin = db.getSiblingDB("admin")
admin.auth("appsmith", "H3jTXc27fNQnd")

let res = [
    db.createUser(
        {
            user: "appsmith",
            pwd: "H3jTXc27fNQnd",
            roles: [{
                role: "root",
                db: "admin"
            }, "readWrite"]
        }
    )
]

printjson(res)

if (error) {
  print('Error occurred while inserting the records')
}
