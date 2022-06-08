db.getCollection("product").find({"product_price": {"$gt": 500.0}}).limit(4)
