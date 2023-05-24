module.exports = srv =>{
    console.log(`Service name:${srv.name} is served at ${srv.path} `);

    // srv.after('READ','Books',xs =>{
    //     console.log(xs);
    //     return xs; 
    // })
}