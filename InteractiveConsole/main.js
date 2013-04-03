var COMMAND_LINE_PREFIX = '/Users/new.user/espresso:';


function placeCaretAtEnd( el ) {
    el.focus();
    if( typeof window.getSelection != "undefined" && typeof document.createRange != "undefined" ) {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if( typeof document.body.createTextRange != "undefined" ) {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}


//TODO add this function to a object
var getCurrentContent = function() {
    //TODO call with id
    var s = $('#consoleText #form .user-string').last().html();

    return  s.split(COMMAND_LINE_PREFIX)[1] || '';
}

var getCurrentSpan = function() {
    //TODO call with id
    var s = $('#consoleText #form').children().last();

    return  s || '';
}

$(document).ready(function() {

    //    alert('Page loaded');
    var form = $('#form');

    $('#reset').click(function() {
        alert('button pressed');
    });

    $('#consoleText, #start, #reset').hide();

    var history = [];
    var history_index = '';

    var inputField = $('#input');
    //    var inputFieldContent = inputField.val();
    //    alert(inputField);
    //localStorage.setItem('Username', inputField.val());

//    inputField.on('blur', function(){
//        if($(this).val() !== '' && $(this).val() !== 'Name'){
//            var e = jQuery.Event("keypress");
//            e.keyCode = 13;
//            $(this).trigger(e);
//        }
//    });

    inputField.keypress(function( e ) {

        if( e.keyCode === 13 ) {
            COMMAND_LINE_PREFIX = '/Users/' + inputField.val() + '/espresso:';
            $('#consoleText, #start, #reset').show();
            $('.user-string').html(COMMAND_LINE_PREFIX).focus();
            //            placeCaretAtEnd(getCurrentSpan().get(0));

            inputField.hide();
            $('#consoleText').hide();
            console.log(inputField);
            var user_string = "<div contenteditable class='user-string'>" + COMMAND_LINE_PREFIX + "</div>";

            form.append(user_string);
            placeCaretAtEnd(getCurrentSpan().get(0)); //get(0) to get the pure html element
            getCurrentSpan().focus();



                $('#p1').html('Well done' + ' ' + inputField.val() + '!' + ' The console is now ready for initialising a M-Project Application!');
                $('#p2').text('').append($('<span>').html('Call&nbsp;')).append($('<span>').addClass('command').html('espresso help'));

                $('#consoleText').show();
                placeCaretAtEnd(getCurrentSpan().get(0)); //get(0) to get the pure html element
                getCurrentSpan().focus();


        }
    })
            form.keypress(function( e ) {

                if( e.keyCode !== 13 ) {

                    return true;
                }

                else if( e.keyCode === 13 ) {

                    $('.user-string').each(function() {
                        $(this).attr('contenteditable', true);
                    });


                    var final_word = getCurrentContent();
                    console.log(final_word);


                    //            console.log(final_word);
                    history.push(final_word);
                    history_index = history.length - 1;
                    var to_write = Parser.parse(final_word);
                    var final_element = "<div class='normal-text'>" + to_write + "</div>"

                    form.append(final_element, user_string);
                    placeCaretAtEnd(getCurrentSpan().get(0));

                    if( getCurrentSpan() ) {
                        getCurrentSpan().focus();
                    }

                    form.scrollTop(form.get(0).scrollHeight); //force div#form to go to the bottom of scroll

                    //            console.log($("<br>"));
                    var test = Parser.parse(final_word);
                }

                if( Lib.compare(final_word, 'E0010') ) {
                    alert('gut');
                    $('#p1').text('Great! Now you have an overview about the different espresso commands');
                    $('#p2').text('The init command looks well.').append($('<span>').html('Type' + ' ')).append($('<span>').addClass('command').html('espresso init help')).append($('<span>').html(' ' + 'to see the possible parameters'));

                }

                else if( Lib.compare(final_word, 'E0020') ) {
                    alert('gut');
                    $('#p1').text('Good work! To create a Sample Application we have to use the parameters -e and -p. -e will create a Hello world sample Application. Parameter -p defines the project name.');
                    $('#p2').text('So type "espresso init -e -p HelloWorldSample"');
                    $('#p2').text('').append($('<span>').html('So type' + ' ')).append($('<span>').addClass('command').html('espresso init -e -p HelloWorldSample')).append($('<span>'));

                } else if( Lib.compare(final_word,'E0030')  ) { alert('gut');
                    $('#p1').text('Your HelloWorldSample project has been created successfully!');
                    $('#p2').text('').append($('<span>').html('Now type' + ' ')).append($('<span>').addClass('command').html('espresso server')).append($('<span>').html(' '+ 'to see your project running in the browser!'));

                }
                word = [];

                return false; //avoids contentEditable insertion of the line break character (enter = 13


                return true;


            });


        });



    fired = false;
    form.keydown(function( e ) {
        if( e.keyCode === 17 ) {
            form.keydown(function( e ) {
                if( e.keyCode === 67 ) {
                    console.log(fired);
                    if( !fired ) {
                        fired = true;

                        console.log('insert new line here');
                        var new_line = $('<div></div>').addClass('user-string').attr('contentEditable', true).html(COMMAND_LINE_PREFIX).appendTo('#form');

                        placeCaretAtEnd(getCurrentSpan().get(0)); //get(0) to get the pure html element
                        new_line.focus();
//                        getCurrentSpan().focus();
                    }
                }

            });
        }
    })
//    if( e.keyCode === 17 ) {
        form.keyup(function( e ) {
            if( e.keyCode === 67 ) {
                fired = false;
                console.log(fired);
            }
        })
//    }

    form.keyup(function( e ) {


        if( e.keyCode === 8 ) { //detect backspace
            word.pop();
        }

        if( e.keyCode === 38 ) { //Up
            if( (history_index < 0 ) && HISTORY_FLAG ) {
                history_index = 0;
                console.log('history true');
                console.log(history[history_index], history_index);
                HISTORY_FLAG = false;
            } else if( (history_index === 0) && !HISTORY_FLAG ) {
                console.log('history false');
                history_index = 1;
                console.log(history[history_index], history_index);
            } else {
                console.log(history[history_index], history_index);
                history_index -= 1;
            }

        }

        if( e.keyCode === 40 ) { //Down
            if( (history_index > history.length - 1 ) && HISTORY_FLAG ) {
                history_index = history.length - 1;
                console.log(history[history_index], history_index);
                HISTORY_FLAG = false;
                console.log('history true');
            } else if( (history_index === history.length - 1) && !HISTORY_FLAG ) {
                history_index = history.length - 2;
                console.log('history false');
                console.log(history[history_index], history_index);
            } else {
                console.log(history[history_index], history_index);
                history_index += 1;
            }
        }

    });

    var Parser = {};

    Parser.parse = function( final_word ) {
        var output = Lib.find(final_word);
        if( output != -1 ) {
            return output;
        }

        return false;
    }


//        if( final_word == 'Hallo' ) {
//            console.log('Gut');
//        } else if( final_word == 'espresso server' ) {
//            console.log('server');
//            final_word = 'LOG: Server running at http://127.0.0.1:8000/HelloWorldSample';
//        } else if( final_word == 'build' ) {
//            console.log('build');
//        } else if( final_word == 'espresso init help' ) {
//            console.log('espresso init help');
//            final_word = "<div class='init-help'>" + "<span>Available options: </span></br>" + "<span>-p, --project=PROJECT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Project name</span></br>" + "<span>-d, --directory=DIRECTORY &nbsp;&nbsp;&nbsp;&nbsp; Specify a custom projects directory Default: $PWD</span></br>" + "<span>-e, --example &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Generate an example \"Hello World\" application Default: false</span></br>" + "<span>-h, --help &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Show this help for command init Default: false</span>" + "</div>";
//
//        }
//
//        else if( final_word == 'espresso help' ) {
//            console.log('help');
//            final_word = "<div class='help'>" + '<span>Usage: espresso <command> [<options>]</span></br>' + '<span> Available commands:</span></br>' + '<span> build&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Command to build a project</span></br>' + '<span> deploy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Command deploy projects</span></br> ' + '<span> drink&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lean back and enjoy a cup of coffee</span></br>' + '<span> generate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Command to generate new or additional files for a project</span></br>' + '<span> init&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Command line tool to generate a new project</span></br>' + '<span> package&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Command to build native applications</span></br>' + '<span> server&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Command to run the Development server</span></br>' + '<span> version&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Command to print the Espresso version</span></br>' + '<span> help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Command to show help for a subcommand</span>' + '</div>';
//
//        } else if( final_word == 'espresso generate -help' ) {
//            console.log('espresso generate -help');
//            final_word = "<div class='generateHelp'>" + '<span>Option port needs an argument!</span></br>' + '<span> Usage: espresso generate [<options>]</span></br>' + '<span> Available options:</span></br>' + '<span>  &nbsp;&nbsp;  -d, --directory=DIRECTORY   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Specify a custom project directory Default: $PWD</span></br> ' + '<span>    &nbsp;&nbsp;-m, --model=MODEL           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create a new model</span></br>' + '<span>   &nbsp;&nbsp; -c, --controller=CONTROLLER &nbsp;&nbsp;&nbsp;Create a new controller </span></br>' + '<span>    &nbsp;&nbsp;-v, --view=VIEW             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create a new page</span></br>' + '<span>   &nbsp;&nbsp; -x, --validator=VALIDATOR   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create a new validator</span></br>' + '<span>    &nbsp;&nbsp;-i, --i18n                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Create a new i18n files</span></br>' + '<span>  &nbsp;&nbsp;  -t, --target                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Create a new "targets.json" sample file</span></br>' + '<span>   &nbsp;&nbsp; -s, --sockserver=SOCKSERVER &nbsp;&nbsp;Create a new socket-server </span></br>' + '<span>    &nbsp;&nbsp;-p, --port=PORT             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Specify a port for the socket-server Default: 8080</span></br>' + '<span>    &nbsp;&nbsp;-h, --help                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Show this help for command generate Default: false</span></br>' + '</div>';
////        } else if( final_word == 'espresso drink' ) {
////            console.log('drink');
////            final_word = "<div class='drink'>" + '<span> Lean back and enjoy a cup of Espresso.</span></br></br>' + '<span>    ( (                              </span></br>' + '<span>    &nbsp;&nbsp;) )</span></br>' + '<span>  .&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;..   </span></br>' + '<span>  |     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;|]</span></br>' + '<span>       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;/ </span></br>' + '<span>    `-&nbsp;-&nbsp;-&nbsp;-</span></br>' + '</div>';
//
//
//        } else if( final_word == 'espresso init -e -p HelloWorldSample' ) {
//            console.log('espresso init');
//            final_word = "<div class='init'>" + '<span>LOG: /Users/dominik/Desktop/HelloWorldSample/config.json generated!</span></br>' + '<span>LOG: /Users/dominik/Desktop/HelloWorldSample/app/main.js generated!</span></br>' + '<span>LOG: /Users/dominik/Desktop/HelloWorldSample/app/resources/base/images/Icon@2x.png generated!</span></br>' + '<span>LOG: /Users/dominik/Desktop/HelloWorldSample/app/resources/base/images/Icon-72.png generated! </span></br>' + '<span>LOG: /Users/dominik/Desktop/HelloWorldSample/app/resources/base/images/Icon.png generated!</span></br>' + '<span>LOG: /Users/dominik/Desktop/HelloWorldSample/app/resources/base/style.css generated!</span></br>' + '<span>Project successfully generated!</span>' + '</div>';


//        } else {
//            console.log('bad');
//            final_word = '-bash:' + final_word + ' ' + 'command not found';
//        }//Doo something
//
//        return final_word;
//    }

//    var s = prompt('type message');
//
//    $('#consoleText').html(s);




