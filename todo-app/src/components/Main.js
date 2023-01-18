import ReactMarkdown from "react-markdown";


function Main({ activeNote, onUpdateNote }){

    const onEditField=(key, value)=>{
        onUpdateNote({
            ...activeNote,
            [key]:value,
            lastModified: Date.now(),

        })
    }

    if (!activeNote) return <div className="no-active-note">No Active Note</div>;

    return(
        <div className="app-main">
            <div className="app-main-note-edit">
                <select className="selector"
                        id="status"
                        value={activeNote.status}
                        onChange={(e)=>onEditField("status", e.target.value)}
                >
                    <option value="draft">draft</option>
                    <option value="active">active</option>
                    <option value="done">done</option>
                </select>
                <input type="text" id="title"
                       value={activeNote.title}
                       onChange={(e)=>onEditField("title", e.target.value)}
                       autoFocus/>

                <textarea id="description" placeholder="Write your note here.."
                          value={activeNote.description}
                          onChange={(e)=>onEditField("description", e.target.value)}/>
            </div>
            <div className="app-main-note-preview">
                <h1 className="preview-title">{activeNote.title}</h1>
                <ReactMarkdown className="markdown-preview">{activeNote.description}</ReactMarkdown>
            </div>
        </div>
    )
}
export default Main;