'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
// The values below this line have been edited from the original template.
//=========================================================================================================================================

var APP_ID = undefined;

var SKILL_NAME = "Hearts Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a hearts fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
// The 'facts' below have come from my own personal knowledge and the Wikipedia article on Heart of Midlothian F.C:
// https://en.wikipedia.org/wiki/Heart_of_Midlothian_F.C. last accessed: 27.07.17
//=========================================================================================================================================
var data = [
    "Heart of Midlothian Football Club were formed in 1874 by a group of friends from a dancing club of the same name.",
    "Hearts play at Tynecastle Park in Edinburgh, Scotland.",
    "The current head coach of Hearts is Ian Cathro.",
    "John Roberston is hearts record goalscorer. He scored 214 for Hearts in total including 27 against city rivals Hibernian",
    "Hearts have won the Scottish cup 8 times in their history, most recently in 2012.",
    "Hearts have won the Scottish league cup 4 times, most recently in 1962.",
    "Hearts have won the Scottish Premiership or top division 4 times, most recently in 1960 and have been runners up 14 times",
    "The highest attendance for a hearts home game was 57,856 against Barcelona at Murrayfield stadium in 2007.",
    "In 2012, hearts thumped their city rivals 5 1 in the only Scottish cup final to be played between the sides.",
    "Hearts home colours are maroon and white, traditionaly maroon shirts and socks with white shorts.",
    "Hearts most capped player is Steven Presley who had 32 appearances for the Scotland national team.",
    "Hearts biggest defeat was 8 1 against Vale of Leven F C in 1888.",
    "Hearts biggest ever win was twenty-one nil against Anchor in the E F A cup in 1880.",
    "Hibernian are hearts city rivals.  In 334 competitive matches Hearts have won 144 times and hibs have won 94 times.",
    "The first meeting between hearts and hibs took place on Christmas day in 1875.",
    "In 1958, Heart of Midlothian became the third Scottish and fifth British team to compete in European competition.",
    "The club reached the quarter final of the UEFA Cup in the 1988 to 1989 season. They were beaten 2 1 on aggregate by Bayern Munich after winning the first leg 1 nil.",
    "In 1914, 16 hearts players enlisted as part of McCrae's battalion.  The team lost the top league spot but made hearts fans proud for years to come.",
    "In the 2013 to 2014 season, hearts were relagated to the Scottish Championship after administration.  The next season they came straight back up, winning the league with 7 games remaining.",
    "Some famous supporters of hearts are Ronnie Corbett, Ken Stott and Sir Chris Hoy.",
    "The youngest player to play for hearts was Scott Robinson, who made his debut at only 16 years, 1 month and 14 days old.",
    "The player to make most appearances for hearts is Gary MacKay with 640 games.",
    "John Cumming achieved more honours than any other hearts player.  These include 2 league titles, 1 scottish cup and 4 league cups.",
    "Barney battles scored 44 goals in one season, which is the record for a hearts player.",
    "The highest transfer fee paid by hearts was 850000 pounds for Mirsad Beslija from Racing Genk in 2006.",
    "The highest transfer fee hearts ever recieved was 9 million pounds for the sale of Craig Gordon to Sunderland in 2007.",
    "Craig Levein is a former player and manager of hearts and he is now the director of football.",
    "The chairwomen of hearts is Anne Budge.",
    "Ian Cathro's assistant head coach is Austin MacPhee.",
    "The current club captain is Christophe Berra."
];

//=========================================================================================================================================
// All code below this line has been untouched from the original template.
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
