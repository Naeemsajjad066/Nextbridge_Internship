import readline from "readline";
import { addNote, deleteNote, listNotes } from "./notes.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function showMenu() {
    console.log(`
===== Notes Manager =====

1. Add Note
2. List Notes
3. Delete Note
4. Exit
   `);

    rl.question("Choose an option: ", handleChoice);
}

async function handleChoice(choice) {
    switch (choice) {
        case "1":
            rl.question("Enter your note: ", async (text) => {
                await addNote(text);
                showMenu();
            });
            break;
        case "2":
            await listNotes();
            showMenu();
            break;

        case "3":
            rl.question("Enter note ID: ", async (id) => {
                await deleteNote(id);
                showMenu();
            });
            break;

        case "4":
            rl.close();
            break;

        default:
            console.log("Invalid option.");
            showMenu();
    }


}

export {showMenu}
