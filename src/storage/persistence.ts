import * as vscode from "vscode";

export class Persistence {
    private storage: vscode.Memento;

    constructor(storage: vscode.Memento) {
        this.storage = storage;
    }

    /**
     * Sauvegarde n'importe quelle donnée.
     */
    async set<T>(key: string, value: T): Promise<void> {
        try {
            await this.storage.update(key, value);
        } catch (error) {
            console.error(`[AscendOs-Persistence] Failed to save key: ${key}`, error);
        }
    }

    /**
     * Récupère une donnée stockée ou renvoie une valeur par défaut.
     */
    get<T>(key: string, defaultValue: T): T {
        try {
            const value = this.storage.get<T>(key);
            return value !== undefined ? value : defaultValue;
        } catch (error) {
            console.error(`[AscendOs-Persistence] Failed to load key: ${key}`, error);
            return defaultValue;
        }
    }

    /**
     * Supprime une entrée spécifique.
     */
    async remove(key: string): Promise<void> {
        try {
            await this.storage.update(key, undefined);
        } catch (error) {
            console.error(`[AscendOs-Persistence] Failed to remove key: ${key}`, error);
        }
    }

    /**
     * Réinitialise tout AscendOs (XP, inventaire, missions…)
     * Attention : à utiliser avec confirmation.
     */
    async resetAll(): Promise<void> {
        try {
            // VS Code ne permet pas de clear total → on écrase manuellement.
            const keys = Object.keys((this.storage as any)._value);

            for (const key of keys) {
                await this.storage.update(key, undefined);
            }

            console.log("[AscendOs-Persistence] All data wiped.");
        } catch (error) {
            console.error(`[AscendOs-Persistence] Failed to wipe data`, error);
        }
    }
}
