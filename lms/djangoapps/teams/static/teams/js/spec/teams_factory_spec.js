define(["jquery", "backbone", "teams/js/teams_tab_factory"],
    function($, Backbone, TeamsTabFactory) {
        'use strict';
       
        describe("Teams tab", function() {
            var teamsTab;

            beforeEach(function() {
                setFixtures('<section class="teams-content"></section>');
                teamsTab = new TeamsTabFactory({
                    topics: {results: []},
                    topics_url: '',
                    teams_url: '',
                    maxTeamSize: 9999
                    course_id: 'edX/DemoX/Demo_Course'
                });
            });

            afterEach(function() {
                Backbone.history.stop();
            });

            it("can load templates", function() {
                expect($("body").text()).toContain("This is the new Teams tab");
            });

            it("displays a header", function() {
                expect($("body").html()).toContain("See all teams in your course, organized by topic");
            });
        });
    }
);
