const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 80;

/***
 * TODO: This entire thing is very, very much WIP. It does what it needs to for now, but there is still major work left to be done
 * - Finish implementing PUT method including password functionality (including password handling)
 * - Persistence
 * - ???
 * - Profit
 */

// Standard values
let treeTotal = 110;
let treeGoal = 200;
let adFactor = 0.5;

// TODO: Once this attribute is actually used for something, it needs to be dealt with properly (salted + hashed; forcibly changed on first run)
let password = "root";

const app = express();

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.json({
        "treeTotal": treeTotal,
        "treeGoal": treeGoal,
        "adFactor": adFactor
    });
});

// This is currently just a placeholder since the corresponding POST-method is not set up yet. It's also pretty ugly.
app.get('/edit', (req, res) => {
    return res.send("<div class=\"container\">" +
        "<h1>Edit values</h1>" +
        "<form action=\"http://localhost/edit\" method=\"POST\">" +
        "    <div class=\"form-group\">" +
        "        <label for=\"Tree Total\">Tree Total: </label>" +
        "            <input class=\"form-control\" name=\"treeTotal\">" +
        "        </div>" +
        "        <div class=\"form-group\">" +
        "            <label for=\"Tree Goal\">Tree Goal: </label>" +
        "            <input class=\"form-control\" name=\"treeGoal\">" +
        "        </div>" +
        "        <div class=\"form-group\">" +
        "            <label for=\"Ad Factor\">Ad Factor: </label>" +
        "            <input class=\"form-control\" name=\"adFactor\">" +
        "        </div>" +
        "        <div class=\"form-group\">" +
        "            <label for=\"Password\">Password: </label>" +
        "            <input class=\"form-control\" name=\"password\">" +
        "        </div>" +
        "        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>" +
        "    </form>" +
        "</div>")
});

// TODO: Implement this
app.post('/edit', (req, res) => {
    return res.send("Not yet implemented");
});

// This is currently just a placeholder since the corresponding POST-method is not set up yet. It's also pretty ugly.
app.get('/password', (req, res) => {
    return res.send("<div class=\"container\">" +
        "<h1>Edit Password</h1>" +
        "<form action=\"http://localhost/password\" method=\"POST\">" +
        "    <div class=\"form-group\">" +
        "        <label for=\"Old Password\">Old password: </label>" +
        "            <input class=\"form-control\" name=\"oldPassword\">" +
        "        </div>" +
        "        <div class=\"form-group\">" +
        "            <label for=\"New Password\">New Password: </label>" +
        "            <input class=\"form-control\" name=\"newPassword\">" +
        "        </div>" +
        "        <div class=\"form-group\">" +
        "            <label for=\"New Password confirm\">New Password (confirm): </label>" +
        "            <input class=\"form-control\" name=\"newPasswordConfirm\">" +
        "        </div>" +
        "        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>" +
        "    </form>" +
        "</div>")
});

// TODO: Implement this
app.post('/password', (req, res) => {
    return res.send("Not yet implemented");
});

app.listen(PORT, () => {
    console.log(`Tree Tapper Server running on Port ${PORT}`);
})
