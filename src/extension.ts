import * as vscode from 'vscode';
import { showDashboard } from './ui/panelProvider';
import { Persistence } from './storage/persistence';
import { XPSystem } from './systems/xpSystem';
export function activate(context: vscode.ExtensionContext){
    //Status Bar
    const xpStatusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    context.subscriptions.push(xpStatusBar);

    const persistence = new Persistence(context.globalState);
    const xpSystem = new XPSystem(persistence);

    function updateStatusBar(){
        xpStatusBar.text = `AscendOs: Lv ${xpSystem.getLevel} (${xpSystem.getXP} XP)`;
        xpStatusBar.show();
    }

    updateStatusBar();

    let disposable = vscode.commands.registerCommand('ascendos.showDashboard', () => {
    showDashboard(context);
    });
    context.subscriptions.push(disposable);
}

export function deactivate() {}