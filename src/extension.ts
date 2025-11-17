import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext){
    //Status Bar
    const xpStatusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    context.subscriptions.push(xpStatusBar);

    let xp = context.globalState.get<number>('xp') || 0;
    let level = Math.floor(Math.sqrt(xp));

    function updateStatusBar(){
        xpStatusBar.text = `AscendOs: Lv ${level} (${xp} XP)`;
        xpStatusBar.show();
    }

    updateStatusBar();


    vscode.workspace.onDidSaveTextDocument(() => {
        xp += 10;
        level = Math.floor(Math.sqrt(xp));
        context.globalState.update('xp', xp);
        updateStatusBar();


    });
}

export function deactivate() {}