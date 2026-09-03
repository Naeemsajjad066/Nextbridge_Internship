import fs from "fs/promises"

const Notes_Path = process.env.NOTES_PATH || "./data/notes.json"

//Read Notes from disk
async function readNotes() {
    try {
        const data = await fs.readFile(Notes_Path, "utf-8")
        const notes = JSON.parse(data)
        return notes
    } catch (error) {
        if (error.code === "ENOENT") {
            console.log("No notes found, create a new file.")
            return []
        }
        console.error("Error reading notes:", error)
        throw error
    }

}
//Save notes to disk 
async function saveNotes(notes) {
    try {
        const data = JSON.stringify(notes, null, 2)
        await fs.writeFile(Notes_Path, data, "utf-8")
    } catch (error) {
        console.error("Error saving notes:", error)
        throw error
    }

}

//Add note to disk
async function addNote(text) {
    try {
        const notes = await readNotes()
        const note = {
            id: Date.now(),
            text: text
        }
        notes.push(note)
        await saveNotes(notes)
        console.log("Note added successfully");
    } catch (error) {
        console.error("Error adding note:", error)
    }

}

//List notes to terminal
async function listNotes() {
    try {
        const notes = await readNotes()
        if (notes.length === 0) {
            console.log("No Note found");
            return
        }
        notes.forEach(note => {
            console.log(`${note.id} - ${note.text}`);
        });
    } catch (error) {
        console.error("Error listing notes:", error)
    }

}

//Delete Node from disk
async function deleteNote(id) {
    try{
        const notes = await readNotes()
        const updatedNotes = notes.filter((note) => note.id !== Number(id))
        if (updatedNotes.length === notes.length) {
            console.log("Note not found");
            return
        }
        await saveNotes(updatedNotes)
        console.log("Note deleted successfully");
    } catch (error) {
        console.error("Error deleting note:", error)
    }
  
}

export {
    addNote, listNotes, deleteNote
}