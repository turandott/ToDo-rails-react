function Sidebar({
                     notes,
                     onAddNote,
                     onDeleteNote,
                     activeNote,
                     setActiveNote
                 }) {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)

    return (

        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button onClick={onAddNote}>Add</button>
            </div>
            <div className="app-sidebar-notes">
                {sortedNotes.map((note) => (
                    <div key={note.id} className={`app-sidebar-note ${note.id === activeNote && "active"}`}

                         onClick={() => setActiveNote(note.id)}>
                        <div className="sidebar-note-title">

                            <strong style={{
                                textDecoration: note.status=='done' && 'line-through',
                                color: note.status=='draft' && 'grey'
                            }}>{note.title}</strong>


                            <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                        </div>

                        <p>{note.description && note.description.substr(0, 100) + "..."}</p>

                        <small className="note-meta">
                            Last modified {" "}
                            {new Date(note.updated_at).toLocaleDateString("en-GB", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </small>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;