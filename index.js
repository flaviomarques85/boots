const readline = require('readline-sync')

function start(){
    const content  = {}
    content.searchTerm = askAndReturnSerchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSerchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix(){
        const prefixes = ['who is', 'whats is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes,'Close one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]


        return selectedPrefixText
    }
    
    console.log(content)
}

start()
