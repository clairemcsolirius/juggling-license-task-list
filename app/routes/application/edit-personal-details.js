module.exports = router =>{

router.post('/application/edit-personal-details/name', (req, res) => {
    res.redirect('telephone')
})

router.post('/application/edit-personal-details/telephone', (req, res) => {
    res.redirect('address')
})

router.post('/application/edit-personal-details/address', (req, res) => {
    res.redirect('check')
})

router.post('/application/edit-personal-details/check', (req, res) => {
    res.redirect('/application')
})
}