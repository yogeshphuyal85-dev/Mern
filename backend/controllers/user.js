import database from "../database/database.js";

export const getUser = (req, res) => {
    // const user={
    //     username: "Yogesh Phuyal",
    //     email: "yogesh@gmail.com",
    //     phone_number: "9800000000",
    //     address: "Gothgaun, Morang",
    //     role: "user",
    // };
    // console.log(user);
    
    // return res.send(user);

    try{
        const q = "SELECT * FROM users";

        database.query(q, (err, result) => {
            if (err) {
                return res.send({
                    message: "Error while fetching data",
                    error: err,
                });
            }
            return res.send({
                message: "Data fetched successfully",
                data: result});
            });
    } catch (error) {
        console.log(error);
    }
};


export const getSingleUser = (req, res) => {
    try{
        const {id} = req.params;

        const q = "SELECT * FROM users WHERE id = ?";

        database.query(q, [id], (err, result) => {
            if (err) {
                return res.status(500).send({
                    message: "Error while fetching data",
                    error: err,
                });
            }
            return res.status(200).send({
                data: result[0],
            });
        });
    }catch (error) {
        console.log(error);
    }
};


export const postUser = (req, res) => {
    const {username, email, password, phone_number, address,} = req.body;

    const q=`INSERT INTO users (username, email, password, phone_number, address) VALUES(?, ?, ?, ?, ?)`;

     database.query(q, [username, email, password, phone_number, address], (err, result) => {
        if (err) {
            return res.send({message: "Error while inserting data", error: err});
        }
        return res.send({message: "Data inserted successfully", result: result});
     });
};