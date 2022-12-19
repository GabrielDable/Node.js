/*

- Adding a Debugging Configuration



        Attaching a script or package to the debugging process anda ttaching the debbuging to the runtime and integratedterminal

            Run / Add  with NPM

            It will generate a folde .vcsode with a lauch.json file

            One will set a debug script in the laucnh.json file.

            AS the debugging is feature of VC, the json file will be in folder of this application named .vscode. 

            This file contain metadata to configure the debbuging process with the script

            We can add the nodemon package to be runnable whilst debugging. */
/*
            {
                        "type": "pwa-node",
                        "request": "launch",
                        "name": "Launch Program",
                        "skipFiles": [
                            "<node_internals>/**"
                        ],
                        "program": "${workspaceFolder}/Users/user/Desktop/JS/Move/Node.js/Server/server.js",
                        "restart" : true,
                        "runtimeExecutable": "nodemon",
                        "console": "integratedTerminal"
                    
                    }
                ]

            /*

            to work properly,
            Nodemon must be installed as a dev package in the folder you are executing the scripts adn also as globally
            One must create a package with a start property containing node aplication.hs SCRIPT
            One must add configuration of the debugger passing the aformentioned key values.
            every time you debug , make a change and save it; debbuging will restart.