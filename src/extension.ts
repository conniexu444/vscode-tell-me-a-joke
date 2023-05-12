import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.tellJoke', () => {
        vscode.window.showInformationMessage(getRandomJoke());
    });

    context.subscriptions.push(disposable);
}

function getRandomJoke() {
    const jokes = [
        "Why don't programmers like nature? It has too many bugs.",
    	"Why do programmers always mix up Halloween and Christmas? Because Oct 31 === Dec 25.",
    	"Why do programmers prefer iOS development? Because on iOS, there are no Windows or Gates.",
    	"Why do programmers always get Christmas and Halloween mixed up? Because 31 OCT equals 25 DEC.",
    	"Why did the programmer quit his job? Because he didn't get arrays.",
    	"Why did the programmer go broke? Because he used up all his cache.",
    	"Why do programmers prefer dark mode? Because light attracts bugs.",
		"Why was the computer cold? It left its Windows open.",
		"Why did the web developer walk out of a restaurant? He didn't like the table layout.",
		"How do you comfort a JavaScript bug? You console it.",
		"Why did the developer go broke? Because he used up all his cache.",
		"Why did the developer go broke? Because he lost his drive.",
		"How many programmers does it take to change a light bulb? None, that's a hardware problem.",
		"I would tell you a joke about UDP, but you might not get it.",
		"Why don't programmers like to go outside? The sunlight causes too many glares on their screens.",
		"Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
		"Why do programmers always get Christmas and Halloween mixed up? Because Oct 31 == Dec 25.",
		"A SQL query walks into a bar, sees two tables and asks... can I join you?",
		"Why was the JavaScript book always nervous? It didn't want to have its cover judged.",
		"Why did the programmer get kicked out of school? Because he kept breaking the class rules.",
		"Why was the computer cold at work? It left its Windows open.",
		"What do you call a programmer from Finland? Nerdic.",
		"Why did the computer break up with the internet? There was no connection.",
		"Why do Java programmers have to wear glasses? Because they don’t C#.",
		"A programmer had a problem. He decided to use Java. He now has a ProblemFactory."
    ];

    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

export function deactivate() {}
