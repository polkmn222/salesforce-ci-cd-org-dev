({
	validateItemForm : function(component) {
        var validItem = true;
        
        var nameField = component.find("itemname");
        var itemname = nameField.get("v.value");
        if($A.util.isEmpty(itemname)){
            validItem = false;
            nameField.set("v.errors", [{message:"Item name can't be blank"}]);
        }
        else{
            nameField.set("v.errors",null);
        }
        
        var quantityField = component.find("quantity");
        var quantity = nameField.get("v.value");
        if($A.util.isEmpty(quantity)){
            validItem = false;
            quantityField.set("v.errors", [{message:"Quantity can't be blank"}]);
        }
        else{
            quantityField.set("v.errors",null);
        }
        
        var priceField = component.find("price");
        var price= nameField.get("v.value");
        if($A.util.isEmpty(price)){
            validItem = false;
            priceField.set("v.errors", [{message:"Price can't be blank"}]);
        }
        else{
            priceField.set("v.errors",null);
        }
        return validItem;
	},
    
    createItem : function(component, newItem){
        var createItem = component.getItem("createItem");
        createItem.setParams({"item":item});
        createItem.fire();
        component.set("v.newItem",{
                'sObjectType':'Camping_Item__c',
                             'Name':'',
                             'Quantity__c':0,
                             'Price__c':0,
                             'Packed__c':false});
    } 
    
})