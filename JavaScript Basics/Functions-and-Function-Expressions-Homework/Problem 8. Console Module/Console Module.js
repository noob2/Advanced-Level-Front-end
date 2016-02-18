var consoleModule = (function () {
    function writeLine() {
        var message = arguments[0];
        for (var i = 0; i < arguments.length; i++) {
            message = message.replace('{' + i + '}', arguments[i + 1]);
        }
        console.log(message);
    }

    return {
        writeLine: writeLine,
        writeWarning: writeLine,
        writeError: writeLine
    }
})();

consoleModule.writeLine('When the {0} are {1} and the {2} are {3}', 'days', 'cold', 'cards', 'fold');
consoleModule.writeWarning("Maybe something's {0} with me, but ooh at least {1}", 'wrong', 'I am free, ooh I am free...');
consoleModule.writeError("I'm gonna {0} the {1} and {2}", 'pick up', 'pieces', 'build a lego house');