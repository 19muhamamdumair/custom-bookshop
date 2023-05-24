sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'authorsapp/test/integration/FirstJourney',
		'authorsapp/test/integration/pages/AuthorsList',
		'authorsapp/test/integration/pages/AuthorsObjectPage',
		'authorsapp/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, AuthorsList, AuthorsObjectPage, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('authorsapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAuthorsList: AuthorsList,
					onTheAuthorsObjectPage: AuthorsObjectPage,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);