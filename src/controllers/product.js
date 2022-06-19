const {product, user, category, productcaegory}= require(`../../models`)


exports.addProduct= async(req, res)=>{
    try {
            const {
                name,
                stock,
                price,
                desc,
                idUser,
            } = req.body;
            const path = process.env.PATH_FILE;
            let newProduct = await product.create({
                name,
                stock,
                price,
                desc,
                image :path + req.files.image[0].filename,
                idUser,
            });

            let productData = await product.findOne({
            where: {
                id: newProduct.id,
            },
            include: [
                {
                model: user,
                as: "user",
                attributes: {
                    exclude: ["createdAt", "updatedAt", "password"],
                },
                },
            ],
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
            });   

            res.send({
            status: "success",
            data: productData,
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
            status: "failed",
            message: error.message,
            });
        }
    };


exports.getProducts = async(req,res)=>{
    try {
        let data = await product.findAll({
            include:[
                {
                    model:user,
                    as:"user",
                    attributes:{
                        exclude:["createdAt","updatedAt","password","name","email","status"],
                    },
                },
            ],
            attributes:{
                exclude:['idUser','createdAt','updatedAt']
            }
        })
        res.send({
            status:"success",
            data:{
                product: data // iko tadi eby pake user lah bang ganti
            }
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: error.name,
            message: error.message
        })
    }
}

exports.getProduct = async(req,res)=>{
    try {
        const {id} = req.params
        let data = await product.findOne({
            where:{
                id:id
            },
            include:[
                {
                    model:user,
                    as:"user",
                    attributes:{
                        exclude:["createdAt","updatedAt","password","name","email","status"],
                    },
                },
                
            ],
            attributes:{
                exclude:['createdAt','updatedAt']
            }
        })
        res.send({
            status:"success",
            data:{
                product : data
            }
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: error.name,
            message: error.message
        })
    }
}

exports.updateProduct = async(req, res) => {
    try {
        const { id } = req.params;
        // const data = {
        //     name: req?.body?.name,
        //     desc: req?.body.desc,
        //     price: req?.body?.price,
        //     image: req?.file?.filename,
        //     qty: req?.body?.qty,
        //     idUser: req?.user?.id,
        // };
        const path = process.env.PATH_FILE;
        const {name, desc, price, qty, stock} = req.body;
        const data = {
            name,
            stock,
            price,
            desc,
            qty,
            image :path + req.files.image[0].filename,
        }
        await product.update(data, {
            where: {
            id,
            },
        });
    
        res.send({
        status: "success",
        data: {
            product : data
        }
        });
        } catch (error) {
            console.log(error)
            res.send({
                status: 'failed',
                message: error.message
            })
        }
    }

exports.deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params

        await product.destroy({
            where:{
                id
            }
        })
        res.send({
            status:'success',
            message:`Delete product id:${id} finished`
        })
    } catch (error) {
        res.send({
            status:'failed',
            message: error.message
        })
    }
}