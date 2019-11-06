//1-	find comments of users

	var userObj= db.user.findOne({"userName":"abanoub"},{"add_comments":1});
    db.comment.find({"_id":{"$in":userObj.add_comments}});
    
	var userObj= db.user.findOne({"userName":"fady"},{"add_comments":1});
    db.comment.find({"_id":{"$in":userObj.add_comments}});   
    
	var userObj= db.user.findOne({"userName":"mostafa"},{"add_comments":1});
    db.comment.find({"_id":{"$in":userObj.add_comments}}); 
    
	var userObj= db.user.findOne({"userName":"amany"},{"add_comments":1});
	db.comment.find({"_id":{"$in":userObj.add_comments}});

	var userObj= db.user.findOne({"userName":"malak"},{"add_comments":1});
	db.comment.find({"_id":{"$in":userObj.add_comments}});




//2-	 find orders of users

	var userObj= db.user.findOne({"userName":"abanoub"},{"has_orders":1});
	db.order.find({"_id":{"$in":userObj.has_orders}});

	var userObj= db.user.findOne({"userName":"mahmoud"},{"has_orders":1});
	db.order.find({"_id":{"$in":userObj.has_orders}});

	var userObj= db.user.findOne({"userName":"mohamed"},{"has_orders":1});
	db.order.find({"_id":{"$in":userObj.has_orders}});

	var userObj= db.user.findOne({"userName":"magy"},{"has_orders":1});
	db.order.find({"_id":{"$in":userObj.has_orders}});

	var userObj= db.user.findOne({"userName":"ibraheem"},{"has_orders":1});
	db.order.find({"_id":{"$in":userObj.has_orders}})
 

 //3-find payment of order_details

		var order_data= db.order_details.findOne({"_id":1},{"payment":1});
         	db.payment.find({"_id":order_data.payment})

		var order_data= db.order_details.findOne({"_id":2},{"payment":1});
	db.payment.find({"_id":order_data.payment})


		var order_data= db.order_details.findOne({"_id":3},{"payment":1});
	db.payment.find({"_id":order_data.payment})


		var order_data= db.order_details.findOne({"_id":4},{"payment":1});
	db.payment.find({"_id":order_data.payment})


		var order_data= db.order_details.findOne({"_id":5},{"payment":1});
	db.payment.find({"_id":order_data.payment})

______________________________________________
//4-find products that admin added it 
	var adminObj= db.admin.findOne({"adminName":"ali95"},{"add_products":1});
	db.product.find({"_id":{"$in":adminObj.add_products}});
	var adminObj= db.admin.findOne({"adminName":"alaa94"},{"add_products":1});
	db.product.find({"_id":{"$in":adminObj.add_products}});
	var adminObj= db.admin.findOne({"adminName":"bahaa93"},{"add_products":1});
	db.product.find({"_id":{"$in":adminObj.add_products}});
	var adminObj= db.admin.findOne({"adminName":"esraa96"},{"add_products":1});
	db.product.find({"_id":{"$in":adminObj.add_products}});


//5-stock ‘s products
	var stockObj= db.stock.findOne({"_id":1},{"has_products":1});
	db.product.find({"_id":{"$in":stockObj.has_products}});

	var stockObj= db.stock.findOne({"_id":2},{"has_products":1});
	db.product.find({"_id":{"$in":stockObj.has_products}});

	var stockObj= db.stock.findOne({"_id":3},{"has_products":1});
	db.product.find({"_id":{"$in":stockObj.has_products}});

	var stockObj= db.stock.findOne({"_id":4},{"has_products":1});
	db.product.find({"_id":{"$in":stockObj.has_products}});

	var stockObj= db.stock.findOne({"_id":5},{"has_products":1});
	db.product.find({"_id":{"$in":stockObj.has_products}});



    //6-products ‘s category
	 var categoryObj= db.category.findOne({"categoryName":"gloves"},{"belongTo_products":1});
	db.product.find({"_id":{"$in":categoryObj.belongTo_products}});
        
	     var categoryObj= db.category.findOne({"categoryName":"hats"},{"belongTo_products":1});
	db.product.find({"_id":{"$in":categoryObj.belongTo_products}});
        
	  var categoryObj= db.category.findOne({"categoryName":"pants"},{"belongTo_products":1});
	db.product.find({"_id":{"$in":categoryObj.belongTo_products}});
        
	 var categoryObj= db.category.findOne({"categoryName":"shoes"},{"belongTo_products":1});
	db.product.find({"_id":{"$in":categoryObj.belongTo_products}});
        
	 var categoryObj= db.category.findOne({"categoryName":"tops"},{"belongTo_products":1});
	db.product.find({"_id":{"$in":categoryObj.belongTo_products}});



    //7-product ‘s supplier

	var supplierObj= db.supplier.findOne({"fullName":"Alaa Naeeim"},{"products":1});
	db.product.find({"_id":{"$in":supplierObj.products}});

    var supplierObj= db.supplier.findOne({"fullName":"Yasser reda"},{"products":1});
	db.product.find({"_id":{"$in":supplierObj.products}});

	var supplierObj= db.supplier.findOne({"fullName":"Mark Alas"},{"products":1});
	db.product.find({"_id":{"$in":supplierObj.products}});

	var supplierObj= db.supplier.findOne({"fullName":"youssef nor"},{"products":1});
	db.product.find({"_id":{"$in":supplierObj.products}});

	var supplierObj= db.supplier.findOne({"fullName":"ramy Azeer"},{"products":1});
    db.product.find({"_id":{"$in":supplierObj.products}});
    


//8-shiper’s order_detali

		var supplierObj= db.shipper.findOne({"fullName":"Mark Lami"},{"orders":1});
	db.order_details.find({"_id":{"$in":supplierObj.orders}});

    var supplierObj= db.shipper.findOne({"fullName":"Lami Ashrif"},{"orders":1});
	db.order_details.find({"_id":{"$in":supplierObj.orders}});

    var supplierObj= db.shipper.findOne({"fullName":"Ashrif Ramy"},{"orders":1});
	db.order_details.find({"_id":{"$in":supplierObj.orders}});

    var supplierObj= db.shipper.findOne({"fullName":" Ramy assad"},{"orders":1});
	db.order_details.find({"_id":{"$in":supplierObj.orders}});

    var supplierObj= db.shipper.findOne({"fullName":" assad mohammed"},{"orders":1});
	db.order_details.find({"_id":{"$in":supplierObj.orders}});




//9-order_details’s products

		var order_data= db.order_details.findOne({"_id":1},{"products":1});
	db.product.find({"_id":{"$in":order_data.products}});

    var order_data= db.order_details.findOne({"_id":2},{"products":1});
	db.product.find({"_id":{"$in":order_data.products}});

    var order_data= db.order_details.findOne({"_id":3},{"products":1});
	db.product.find({"_id":{"$in":order_data.products}});


    var order_data= db.order_details.findOne({"_id":4},{"products":1});
	db.product.find({"_id":{"$in":order_data.products}});

    var order_data= db.order_details.findOne({"_id":5},{"products":1});
	db.product.find({"_id":{"$in":order_data.products}});



//10-product update

	db.product.update({'name':"lsebell's stage hat"},{$set:{'details':' beautiful hat New update'}})

	db.product.update({'name':"lsebell's stage hat"},{$set:{'color':'brown'}})

	db.product.update({'name':"lsebell's stage hat"},{$set:{'brand':'town team'}})




//11-user update 

	db.user.update({'userName':"abanoub"},{$set:{'bio':'23 years old New update'}})

	db.user.update({'userName':"abanoub"},{$set:{'adderss':'assiut New update'}})

	db.user.update({'userName':"abanoub"},{$set:{'BirthDate':'22/5/2002 New update'}})




//12-category update 

    db.category.update({_id:1},{$set:{ "description" : "this is category called hat or cap New update"}})

    db.category.update({_id:2},{$set:{ "description" : "this is category called shoes New update"}})




//13-remove user

    db.user.insert({_id:13,fullName:"mrihan mhamed",userName:"mrihan",website:"www.facebook.com/mrihan90",
              bio:"23 years old",email:"mrihan.mohamed@gmail.com",phoneNumber:"01126312079",
              gender:"female",password:"123",BirthDate:"12/12/1995",adderss:"minia"}); 

    db.user.remove({userName:"mrihan"});



//14-remove product


    db.product.insert({_id:101,name:"product to be deleted",brand:"cazary",model:2015,color:"green",price:25,
    details:"beautiful hat",weight:50,date:new Date()});
    
    db.product.remove({name:"product to be deleted"});




//15-remove comment

	db.comment.insert({_id:200,stringComment:"good",date:new Date()});

    db.comment.remove({_id:200});


//16-save product

    db.product.insert({_id:200,name:"lsebell's stage hat",brand:"cazary",model:2015,color:"green",price:25,
    details:"beautiful hat",weight:50,date:new Date(),product_comments:[1,2]});

    db.product.save({_id:200,name:"new product",color:"yellow"})




//17-save comment

	db.comment.insert({_id:200,stringComment:"good",date:new Date()});
    
    db.comment.save({_id:200,stringComment:"bad"})


//18-index of user

	db.user.ensureIndex({"userName":1},{unique:true})
        
	db.user.ensureIndex({"email":1},{unique:true})

//19-index of category

    db.category.ensureIndex({"categoryName":1},{unique:true})

//20-index of admin

	 db.admin.ensureIndex({"adminName":1},{unique:true})



