// using CatalogService as service from '../../srv/catalog-service';

// annotate service.Books with @(
//     UI.LineItem : [
//         {
//             $Type : 'UI.DataField',
//             Label : 'ID',
//             Value : ID,
//         },
//         {
//             $Type : 'UI.DataField',
//             Label : 'title',
//             Value : title,
//         },
//         {
//             $Type : 'UI.DataField',
//             Label : 'stock',
//             Value : stock,
//         },
//         {
//             $Type : 'UI.DataField',
//             Label : 'author_ID',
//             Value : author_ID,
//         },
//     ]
// );



// annotate service.Books with @(UI : {HeaderInfo : {
//     TypeName       : 'Book',
//     TypeNamePlural : 'Books',
//     Title          : {Value : title},
//     Description    : {Value : ID}
// }});
// /**
// * ***
// *
// * Object Page Facets
// *
// * ***
// */
// annotate service.Books with @(UI : {
//     Facets                : [
//         {
//             $Type  : 'UI.ReferenceFacet',
//             Label  : 'Basic Info',
//             Target : '@UI.FieldGroup#BasicInfo'
//         },
//     ],
//     FieldGroup #BasicInfo : {Data : [
//         {Value : ID},
//         {Value : title},
//     ]}


// });



// annotate service.Cart with @(
//     UI.LineItem : [
//         {
//             $Type : 'UI.DataField',
//             Label : 'ID',
//             Value : ID,
//         },
//         {
//             $Type : 'UI.DataField',
//             Label : 'Book ID',
//             Value : book_id,
//         },
//         {
//             $Type : 'UI.DataField',
//             Label : 'Book Name',
//             Value : title,
//         },
//         {
//             $Type : 'UI.DataField',
//             Label : 'Quantity',
//             Value : quantity,
//         },
//         {
//             $Type : 'UI.DataField',
//             Label : 'Amount',
//             Value : amount,
//         },
//     ]
// );