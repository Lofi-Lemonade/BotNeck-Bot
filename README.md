BotNeck Bot
==========
BotNeck Bot is a self-bot that is implemented into discord as a **BandagedDiscord** plugin. It is designed to be dynamic and easy to use. That means it is extremely easy to add your own commands to the bot without having to modify the code!

----------

Features
--------

BotNeck Bot offers lots of already built in commands such as:

 - Magic 8ball
 - Calculator
 - Random choice chooser
 - Text flipper
 - Help
 - Lenny face
 - Lmgtfy link generator
 - Love calculator
 - Text to regional text
 - Easy module/command reloader
 - Roll a dice
 - Backup/Save the chat

BotNeck is also special as it uses a send hook to capture the message before it is ever sent to the server. That means the message is never edited or deleted from the server and is instead captured, modified and sent to the server. This will in turn prevent spamming of messages for users on the server.
I am also working on adding more features and commands as time goes on.


----------

API
---

 - BotNeckAPI.getCurrentServerId() - Returns the ID of the current open server
 - BotNeckAPI.getCurrentChannelId() - Returns the ID of the current open channel
 - BotNeckAPI.getLastUserMessageId() - Returns the ID of the last message the user sent
 - BotNeckAPI.getLastBotMessageId() - Returns the ID of the last message the bot sent
 - BotNeckAPI.getModulesPath() - Returns the path to the modules folder
 - BotNeckAPI.setAuthHeader(xmlhttprequest, apiKey) - Sets the Authorization token of the request
 - BotNeckAPI.generateError(error) - Generates an error embed with the specified message and returns it
 - BotNeckAPI.getArgumentNumber(args) - Gets the number of generic arguments specified
 - BotNeckAPI.getArgumentsAsString(args) - Returns all the arguments as a string
 - APIKey - A variable containing the API key of the module


----------

How to install
--------------

 1. Download the ZIP file from the Releases section.
 2. Extract all folders and files from the ZIP file into your BetterDiscord plugins.
 3. Restart discord if you have it open.
 4. You are done!


----------

How to install a module
-----------------------
> **Warning**
> Some modules may do malicious things without your knowledge. It is highly recommended that you only use modules from a trusted source!

 1. Go to your BetterDiscord plugins folder.
 2. Inside the folder open the BotNeck_Modules folder.
 3. Put the .botneck.js file/files inside the folder.
 4. And you are done!