db.getCollection("product").find(
    {
        "product_price": {
            "$not": {
                "$gte": 400.0,
                "$lte": 600.0
            }
        }
    }
)
