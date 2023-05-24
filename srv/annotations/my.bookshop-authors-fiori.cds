using CatalogService as service from '../catalog-service';

annotate service.Authors with {
    ID    @(
        title               : 'Auhor ID',
        Common.FieldControl : #Mandatory
    );
    // name        @(title : 'Name',
    //                                           //    Common.FieldControl : #Mandatory
    //                       );
   

    // books       @(title : 'Books');


};

annotate service.Authors with @(UI : {


    SelectionFields     : [

        name,
    ],


    LineItem            : {$value : [
        {
            $Type             : 'UI.DataField',
            Value             : ID,
        },
        {
            $Type             : 'UI.DataField',
            Value             : name,
        },
    ]

    },

    PresentationVariant : {
        SortOrder      : [{
            $Type      : 'Common.SortOrderType',
            Property   : ID,
            Descending : false
        }],
        // Visualizations : ['@UI.LineItem']

    }
});


annotate service.Authors with @(UI : {HeaderInfo : {

    TypeName       : '{i18n>Author}',
    TypeNamePlural : '{i18n>Authors}',
    Title          : {Value : ID},
    Description    : {Value : name}
}});


/**
 * *
 *
 * Object Page Facets
 *
 * *
 */
annotate service.Authors with @(UI : {
    Facets                : [
        {
            $Type  : 'UI.ReferenceFacet',
            Label  : '{i18n>basicInfo}',
            Target : '@UI.FieldGroup#BasicInfo'
        },
    ],
    FieldGroup #BasicInfo : {Data : [
        {Value : ID},
        {Value : name},
    ]}


});