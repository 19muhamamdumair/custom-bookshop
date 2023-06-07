const { Books } = cds.entities('my.bookshop');
module.exports = srv =>{
    console.log(`Service name:${srv.name} is served at ${srv.path} `);
    // const {Books}=this.entities;

    // srv.after('READ','Books',xs =>{
    //     console.log(xs);
    //     return xs; 
    // })

    srv.on('addToCart', 'Books', async req => {
        console.log("hello world ",req.params[0])
        // await cds.update(Orders, req.params[0].ID).set({status: 'Open'});
      });
}