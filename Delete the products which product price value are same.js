db.getCollection("product").aggregate(
    [
        { 
            "$group" : { 
                "_id" : "$product_price", 
                "duplicates" : { 
                    "$addToSet" : "$_id"
                }, 
                "count" : { 
                    "$sum" : 1.0
                }
            }
        }, 
        { 
            "$match" : { 
                "count" : { 
                    "$gt" : 1.0
                }
            }
        }
    ]
).forEach(function(doc) {
    db.product.remove({id: {$in: doc.duplicates}})
}
)