import { Persistence } from "../storage/persistence";
export class XPSystem {
    private persistence: Persistence;
    private readonly XP_KEY = "ascendos.xp";
    private readonly LEVEL_KEY = "ascendos.level";

    private xp: number;
    private level: number;

     constructor(persistence: Persistence) {
        this.persistence = persistence;

        this.xp = this.persistence.get<number>("xp", 0);
        this.level = this.persistence.get<number>("level", 1);
    }


    private xpToNextLevel(level: number): number {
        return Math.floor(100 * Math.pow(level, 1.3));
    }

    public addXP(amount: number): { xp: number; level: number; leveledUp: boolean } {
        this.xp += amount;

        let leveledUp = false;
        while (this.xp >= this.xpToNextLevel(this.level)) {
            this.xp -= this.xpToNextLevel(this.level);
            this.level++;
            leveledUp = true;
        }

        this.save();

        return {
            xp: this.xp,
            level: this.level,
            leveledUp
        };
    }

    public getXP(): number {
        return this.xp;
    }

    public getLevel(): number {
        return this.level;
    }

    public getProgressPercentage(): number {
        const required = this.xpToNextLevel(this.level);
        return Math.min(100, (this.xp / required) * 100);
    }

    public reset(): void {
        this.xp = 0;
        this.level = 1;
        this.save();
    }

    private save() {
        this.persistence.set(this.XP_KEY, this.xp);
        this.persistence.set(this.LEVEL_KEY, this.level);
    }
}
