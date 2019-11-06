use EcommerceDB

//how product weight to all brand in products
//1
db.product.aggregate([{$group : {_id : "$brand", weight_Products_for_All_brand : {$sum : "$weight"}}}])


//how color in all brand
db.product.aggregate([{$group : {_id : "$brand", Colors_for_All_brand : {$sum : 1}}}])


//Maximus price in all brand [max Price]
db.product.aggregate([{$group : {_id : "$brand", Max_Price : {$max : "$price"}}}])
//Minimum price in all brand [max Price]
db.product.aggregate([{$group : {_id : "$brand", Minimum_Price : {$min : "$price"}}}])

//AVG price in all brand [max Price]
db.product.aggregate([{$group : {_id : "$brand", Aerage_Price : {$avg : "$price"}}}])
   
//add new column in table
db.product.aggregate([{$group : {_id : "$brand", product : {$addToSet : "$NewColumnProduct"}}}]);
///////////////////////////////////////////New Aggregate/////////////////////////////////////
//select first product from selection
db.product.aggregate(
   [
     { $sort: { model: 1, price: 1 } },
     {
       $group:
         {
           _id: "$model",
           firstPoduct: { $first: "$name" }
         }
     }
   ]
)
     
     
//select last product from selection
db.product.aggregate(
   [
     { $sort: { model: 1, price: 1 } },
     {
       $group:
         {
           _id: "$model",
           firstPoduct: { $last: "$name" }
         }
     }
   ]
)
  
     
     
 //return number of row in table
db.category.aggregate( [ { $collStats: { count: { } } } ] )

db.product.aggregate( [ { $collStats: { count: { } } } ] )



 //add new fields in table and calculate the number of products in all stock

 db.stock.aggregate( [
   {
     $addFields: {
       totalproducts: { $size: "$has_products" }
     }
   },
   {
     $addFields: { totalproducts:
       { $add: [ "$totalproducts"] } }
   }
] )
   
   
/////Select Random From Tables
   
db.product.aggregate(
   [ { $sample: { size: 5 } } ]
)