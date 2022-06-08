db.getCollection("product").find(
    {}, 
    {
        "product_name": 1.0,
        "product_material": 1.0,
        "_id": 0.0
    }
)
