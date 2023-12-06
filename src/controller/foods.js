const getAllFoods = (req, res) =>{
    res.json({
        message: 'GET  all foods succes',
    })
}

const createNewFoods = (req, res) =>{
    console.log(req.body);
    res.json({
        message: 'Berhasil Menambahkan pengguna',
        data: req.body
    })
}



module.exports = {
    getAllFoods,
    createNewFoods
}