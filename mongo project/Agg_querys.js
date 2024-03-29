Use EcommerceDB;



/////////////////////// Display name , color , price from product

db.product.aggregate( [ { $project : { _id : 0 , name : 1 , color : 1 ,price:1} } ] );







db.order_details.aggregate( [ {

   $lookup: {

         from: "order",

         localField: "_id",    

         foreignField: "order_detail",  

         as: "orders"

      }

      }

    ] );



db.admin.aggregate( [

      { $match:{fullName:"esraa kamel"}} 

      ]);     

      



db.stock.aggregate([{$group:{_id:null,numberofStocks:{$sum:1}}}]);







db.order_details.aggregate(

   [

     {

       $group:

         {

           _id: {price:"$price"} ,

           totalAmount: { $sum: { $multiply: [ "$price", 0.05 ] } }

           

         }

     }

   ]

)

     

db.product.aggregate([

   {

     $project: {

       name:1,  

       comments: { $sum: "$product_comments"}

     }

   }

])     

   

   

db.order_details.aggregate([

   {

     $project: {

       totalquantity: { $sum: "$quantity"}

     }

   }

])





db.supplier.aggregate( [

                      { $group : { _id : "$supplier_id", fullName: { $push: "$fullName" }, phoneNumber:{ $push:"$phoneNumber" } }},

                      { $out : "supplier3" }

                  ] )   

                      

                      