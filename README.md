# inventory-management-system

-to start the the server steps.

1- git clone https://github.com/Abhishekmohanty-eng/inventory-management-system.git
    


2-type on terminal cd src the coming to src directory 



3.  to run server  type "node index" .




problem statement.

1.  grn

{id,createdAt, updatedAt, deleted, status(GENERATED,COMPLETED, CANCELLED),  invoiceNumber, vendorName, vendorFullAddress, grnLineItems: grnLineItem[] , date }



2.  grnLineItem

 {id,createdAt, updatedAt,deleted,  productName, quantity, stockPrice }



3.  order

 {id,createdAt, updatedAt,deleted,status(GENERATED, COMPLETED,CANCELLED),  invoiceNumber, customerName, customerFullAddress, orderLineItems: orderLIneItem[], date}



4.  orderLIneItem

 {id,createdAt, updatedAt,deleted,  productName, quantity, sellPrice }



5.  Item

{ id,createdAt, updatedAt,deleted, productName(unique), quantity, stockPrice, sellPrice }



Action

GRN created -> status = GENERATED, information get saved into db.

GRN completed -> status = COMPLETED, where item quantity also get updated.

Order created ->  status = GENERATED, information get saved into db.

Order completed ->status = COMPLETED, where item quantity also get updated.




APIS

/grn (post, get, put ,delete)

/grn/update-status ( post ) body { status: “COMPLETED” }, or { status: “CANCELLED” }

/order (post, get, put ,delete)

/order/update-status ( post ) body { status: “COMPLETED” }, or { status: “CANCELLED” }

/item (get)

