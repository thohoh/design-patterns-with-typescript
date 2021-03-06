import { ICommand } from '../common/command.interface';
import { EmptyCommand } from '../common/commands/empty.command';

export class RemoteController {
    private onCommands: ICommand[] = [];
    private offCommands: ICommand[] = [];
    private SLOTS_AMOUNT: number = 6;
    private commansHistory: ICommand[] = [];

    private lastCommand: ICommand;

    constructor() {
        // Null Pattern usage
        let emptyCommand: ICommand = new EmptyCommand();

        for(let i = 0; i < this.SLOTS_AMOUNT; i++) {
            this.onCommands[i] = emptyCommand;
            this.offCommands[i] = emptyCommand;
        }

        this.lastCommand = emptyCommand;
    }

    public setSlot(slotNumber: number, onCommand: ICommand, offCommand: ICommand): void {
        this.onCommands[slotNumber] = onCommand;
        this.offCommands[slotNumber] = offCommand;
    }

    public onButtonWasPressed(slotNumber: number): void {
        let command: ICommand = this.onCommands[slotNumber];
        command.execute();
        this.commansHistory.push(command);
    }

    public offButtonWasPressed(slotNumber: number): void {
        let command: ICommand = this.offCommands[slotNumber];
        command.execute();
        this.commansHistory.push(command);
    }

    public onUndoButtonWasPressed(): void {
        let lastCommand: ICommand = this.commansHistory.pop();

        if (lastCommand) {
            lastCommand.undo();
        }
    }
}