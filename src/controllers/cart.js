const {user,product,cart}= require(`../../models`)

exports.getCarts = async(req,res)=>{
    try {
        const data = await cart.findAll({
            include: [
                {
                model: user,
                as: "user",
                attributes: {
                    exclude: ["createdAt", "updatedAt", "password","status"],
                },
                },
                {
                    model: product,
                    as: "products",
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
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
                user:{
                    data
                }
            }
        })
    } catch (error) {
        res.send({
            status:"error",
            message:error.message
        })
    }
}

exports.deleteCart= async(req,res)=>{
    try {
        const {id} = req.params
    
        await cart.destroy({
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
            message:'server error'
        })
    }
}

exports.getCart = async(req,res)=>{
    try {
        const {id} = req.params
        const data = await cart.findOne({
            where:{
                idUser:id
            },
                include: [
                    {
                    model: user,
                    as: "user",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password","status"],
                    },
                    },
                    {
                        model: product,
                        as: "products",
                        attributes: {
                            exclude: ["createdAt", "updatedAt"],
                        },
                        },                ],
                attributes:{
                    exclude:['createdAt','updatedAt']
                }
            })
        res.send({
            status:"success",
            data:{
                user:{
                    data
                }
            }
        })
    } catch (error) {
        res.send({
            status:"error",
            message:error.message
        })
    }
}

exports.addCart = async(req,res)=>{
    try{
        const data={
            idProduct:req.body.idProduct,
            idUser:req.user.id,
        };
        const createdData = await cart.create(data);

        let whis = await cart.findOne({
            where: {
                id: createdData.id,
            },
            include: [
                {
                model: user,
                as: "user",
                attributes: {
                    exclude: ["createdAt", "updatedAt", "password"],
                },
                },
                {
                    model: product,
                    as: "products",
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
            status:"success",
            data:{
                user:{
                whis
                }
            }
        })
    }catch(error){
        res.send({
            status:"error",
            message:error.message
        })
    }
}
