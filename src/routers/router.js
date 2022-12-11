const express = require('express')
const router = express.Router()

const {
    creatingGrn,
    getGrn,
    updateGrn,
    deleteGrn,
    updateGrnStatus
} = require('../controlers/grnController')
const {addGrnLineItem
} = require('../controlers/grnLineItemControler')
const {createOrder, getOrder, updateOrder, deleteOrder, updateOrderStatus
} = require('../controlers/orderController')
const {addOrderLIneItem
} = require('../controlers/orderController')
const {addItem,getItem
} = require('../controlers/orderLIneItemController')

router.post("/grn", creatingGrn )
router.get("/grn", getGrn )
router.put("/grn/:id", updateGrn )
router.delete("/grn/:id", deleteGrn )
router.post('/grn/update-status/:id', updateGrnStatus)

router.post("/grnLineItem", addGrnLineItem )


router.post("/order", createOrder )
router.get("/order", getOrder )
router.put("/order/:id", updateOrder )
router.delete("/order/:id", deleteOrder )
router.post('/order/update-status/:id', updateOrderStatus)

router.post("/orderLIneItem", addOrderLIneItem )

router.post('/item', addItem)
router.get('/item', getItem)



module.exports = router




