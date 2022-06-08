db.getCollection("product").find(
    {
        "$or": [
            {
                "product_color": "indigo"
            },
            {
                "product_price": 492.0
            }
        ]
    }
)
