const express = require('express')
const router = express.Router()

/* GET redirect page. */
router.get('/coding-hub-website', (req, res, next) => {
  res.redirect('https://www.coding-hub.com')
})

module.exports = router
