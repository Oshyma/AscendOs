import * as vscode from 'vscode';

export function showDashboard(context: vscode.ExtensionContext) {
  const panel = vscode.window.createWebviewPanel(
    'ascendOsDashboard',
    'AscendOs Dashboard',
    vscode.ViewColumn.One,
    { enableScripts: true }
  );

  panel.webview.html = `
    <html>
      <body>
        <h1>AscendOs Dashboard</h1>
        <p>XP and loot will appear here!</p>
      </body>
    </html>
  `;
}
