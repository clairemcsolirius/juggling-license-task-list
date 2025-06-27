module.exports = router =>{

router.post('/application/edit-experience/juggling-balls', (req, res) => {
    res.redirect('juggling-trick')
})

router.post('/application/edit-experience/juggling-trick', (req, res) => {
    res.redirect('start-date')
})

router.post('/application/edit-experience/start-date', (req, res) => {
    res.redirect('check')
})



}