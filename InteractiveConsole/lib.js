var Lib = {};


Lib.find = function(finalWord){

    var word = finalWord.toLowerCase();
    var _word = word.replace(/ /g,'');
    var output = commands[_word];
    if(output){
        return output.replace(/\n/g, '<br />').replace(/\t/g, '&nbsp;');
    } else {
        return '-bash:' + word + ' ' + 'command not found';
    }

}

Lib.compare = function(final_word, key){

    var comp = final_word.toLocaleLowerCase();
    var output = commands[key];
    if(output === comp){
        return output;
    } else {
        return false;
    }

}