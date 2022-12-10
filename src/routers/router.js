const express = require('express')
const router = express.Router()

const {createGrn, getGrn, updateGrn, deleteGrn, updateGrnStatus} = require('../controlers/grnController')
const {addGrnLineItem} = require('../controlers/grnLineItemControler')
const {createOrder, getOrder, updateOrder, deleteOrder, updateOrderStatus} = require('../controlers/orderController')
const {addOrderLIneItem} = require('../controlers/orderController')
const {addItem,getItem} = require('../controlers/orderLIneItemController')


//-------------For grn------------------//
router.post("/grn", createGrn )
router.get("/grn", getGrn )
router.put("/grn/:id", updateGrn )
router.delete("/grn/:id", deleteGrn )
router.post('/grn/update-status/:id', updateGrnStatus)

//-------------For grnLineItem-------------//
router.post("/grnLineItem", addGrnLineItem )

//-------------For order------------------//
router.post("/order", createOrder )
router.get("/order", getOrder )
router.put("/order/:id", updateOrder )
router.delete("/order/:id", deleteOrder )
router.post('/order/update-status/:id', updateOrderStatus)


//-------------For grnLineItem-------------//
router.post("/orderLIneItem", addOrderLIneItem )

//-------For Item----------//
router.post('/item', addItem)
router.get('/item', getItem)

router.all("/*", function (req, res) {
    res.status(404).send({
        status: false,
        message: "Invalid URL !!!"
    })
})




module.exports = router