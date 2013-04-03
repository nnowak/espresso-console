/**
 * Created with JetBrains WebStorm.
 * User: n.nowak
 * Date: 02.04.13
 * Time: 16:38
 * To change this template use File | Settings | File Templates.
 */
var commands={

    "hallo":"Hallo",
    "espressoserver":'LOG: Server running at http://127.0.0.1:8000/HelloWorldSample',
    "espressogeneratehelp":"Usage: espresso generate\nAvailable options:\n\t\t\t\t\t\t-d, --directory=DIRECTORY \t\t\t\t\t\tSpecify a custom project directory Default: $PWD</span></br><span>\t\t\t\t\t-m, --model=MODEL           \t\t\t\t\t\t\t\t\tCreate a new model</span></br><span>   \t\t -c, --controller=CONTROLLER \tCreate a new controller </span></br><span>    \t\t-v, --view=VIEW \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCreate a new page</span></br><span>   \t\t -x, --validator=VALIDATOR   \t\t\t\tCreate a new validator</span></br><span>    \t\t\t-i, --i18n                 \t\t\t\t\t\t&nbsp\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t Create a new i18n files</span></br><span>  &nbsp;&nbsp;  -t, --target\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t \t\t\t\t\t\t\t\t\t\t\t\t\t\tCreate a new targets.json sample file</span></br><span>   \t\t -s, --sockserver=SOCKSERVER\t\tCreate a new socket-server </span></br><span>    \t\t-p, --port=PORT            \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSpecify a port for the socket-server Default: 8080</span></br><span>    \t\t-h, --help                  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tShow this help for command generate Default: false</span></br></div>",
    "espressodrink": "<div class='drink'><span> Lean back and enjoy a cup of Espresso.</span></br></br><span>    ( (                              </span></br><span>    \t\t) )</span></br> <span>  .\t.\t.\t.\t.\t.\t..   </span></br><span>  |     \t\t\t\t\t\t\t|]</span></br><span>      \t\t\t\t\t\t\t\t/ </span></br><span>    `-\t-\t-\t-</span></br></div>",

    "espressohelp":"<div class='help'><span>Usage: espresso <command> [<options>]</span></br><span> Available commands:</span></br><span> build\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCommand to build a project</span></br><span> deploy\t\t\t\t\t\t\t\t\t\t\t\tCommand deploy projects</span></br><span> drink\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLean back and enjoy a cup of coffee</span></br><span> generate\t\t\t\t\t\t\t\t\t\tCommand to generate new or additional files for a project</span></br><span> init\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCommand line tool to generate a new project</span></br><span> package\t\t\t\t\t\t\t\t\t\tCommand to build native applications</span></br><span> server\t\t\t\t\t\t\t\t\t\t\t\t\tCommand to run the Development server</span></br><span> version\t\t\t\t\t\t\t\t\t\t\t\tCommand to print the Espresso version</span></br><span> help\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCommand to show help for a subcommand</span></div>",

    "espressoinit-e-phelloworldsample":"<div class='init'><span>LOG: /Users/dominik/Desktop/HelloWorldSample/config.json generated!</span></br><span>LOG: /Users/dominik/Desktop/HelloWorldSample/app/main.js generated!</span></br><span>LOG: /Users/dominik/Desktop/HelloWorldSample/app/resources/base/images/Icon@2x.png generated!</span></br><span>LOG: /Users/dominik/Desktop/HelloWorldSample/app/resources/base/images/Icon-72.png generated! </span></br><span>LOG: /Users/dominik/Desktop/HelloWorldSample/app/resources/base/images/Icon.png generated!</span></br><span>LOG: /Users/dominik/Desktop/HelloWorldSample/app/resources/base/style.css generated!</span></br><span>Project successfully generated!</span></div>",

    "espressobuild":"build",
    "espresso":"<div class='help'><span>Usage: espresso <command> [<options>]</span></br><span> Available commands:</span></br><span> build\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCommand to build a project</span></br><span> deploy\t\t\t\t\t\t\t\t\t\t\t\tCommand deploy projects</span></br><span> drink\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLean back and enjoy a cup of coffee</span></br><span> generate\t\t\t\t\t\t\t\t\t\tCommand to generate new or additional files for a project</span></br><span> init\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCommand line tool to generate a new project</span></br><span> package\t\t\t\t\t\t\t\t\t\tCommand to build native applications</span></br><span> server\t\t\t\t\t\t\t\t\t\t\t\t\tCommand to run the Development server</span></br><span> version\t\t\t\t\t\t\t\t\t\t\t\tCommand to print the Espresso version</span></br><span> help\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCommand to show help for a subcommand</span></div>",
    "espressoinithelp":"<div class='init-help'><span>Available options: </span></br><span>-p, --project=PROJECT \t\t\t\t\t\t\t\t\t\t\t\t Project name</span></br><span>-d, --directory=DIRECTORY \t\t\t\t Specify a custom projects directory Default: $PWD</span></br><span>-e, --example \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t Generate an example \"Hello World\" application Default: false</span></br><span>-h, --help \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t Show this help for command init Default: false</span></div>",

    "espressogenerate":"espresso generate",
    "gitstatus":"<div class='git'><span># On branch master</span></br><span>#</span></br><span># Initial commit</span></br><span>#</span></br><span># Untracked files:</span></br><span>#   (use 'git add <file>...' to include in what will be committed)</span></br><span>#</span></br><span>#    HelloWorldSample</span></br><span>nothing added to commit but untracked files present (use 'git add' to track)</span></div>",
    "gitadd":"git add",
    "gitcommit":"git commit",
    "gitclone":"git clone",
    "gitpull":"git pull",
    "gitpush":"git push",
    "E0010":"espresso help",
    "E0020":"espresso init help",
    "E0030":"espresso init -e -p HelloWorldSample",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":""

};