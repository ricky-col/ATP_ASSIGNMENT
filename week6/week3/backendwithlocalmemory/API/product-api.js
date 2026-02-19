import exp from "express"
//create a mini -express(separate route)app
export const productapp = exp.Router()
//CREATE USER API(application proGRam interface) = (req handlers - route )

// product array
let product = []

    //GET
    productapp.get('/products',(req,res)=>{
    
        res.json({message:"all products",payload:product})
    })

    // get the object using brand id
    productapp.get('/products-id/:id',(req,res)=>{
        let id = Number(req.params.id)
        let getobj = product.findIndex(prod=>prod.productId===id)
        if(getobj===-1)
        {
            res.status(404).json({message:"product not found"})
        }
        let prod = product[getobj]
        res.status(200).json({message:"product found",payload:prod})
    })

    // get the object using brand name
    productapp.get("/products-name/:name", (req,res) => {
    let name = req.params.name;
    let reqObjs = product.find(prod => prod.name === name);
    res.status(200).json({message: "product found",payload:product})
    })

    //adding new products using post
    productapp.post('/products',(req,res)=>
    {
        let newproduct = req.body
        product.push(newproduct)
        res.status(200).json({message:"new products added",payload:product})
    });

    //edititng the product details using id
    productapp.put('/products/:id',(req,res)=>
    {
        let reqproduct = Number(req.params.id);
        let index = product.findIndex(prodobj => prodobj.productId === reqproduct)
        if(index === -1)
        {
            res.status(404).json({message:"product id not found"})
        }
        let changed = product.splice(index,1,req.body)
        res.status(200).json({message:"Product",payload:product});
    })

    //deleting the product using id
    productapp.delete('/products/:id',(req,res)=>{
    let deletproduct = Number(req.params.id);
    let index = product.findIndex(prodobj => prodobj.productId === deletproduct)
    if(index==-1)
    {
        res.status(404).json({message:"product not found"})
    }
    let deletedproduct = product.splice(index, 1)
    res.status(200).json({message:"product deleted",payload:product})

   })

//g