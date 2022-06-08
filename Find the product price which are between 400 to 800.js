db.getCollection("product").find(
    {
        "product_price": {
            "$gte": 400.0,
            "$lte": 800.0
        }
    }
)
