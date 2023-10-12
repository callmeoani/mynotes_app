// ============== || PACKAGES IMPORTS || ==================
// import { useNoteType } from "../../store/Stores";
import { Form, redirect, useLoaderData } from "react-router-dom";

// ============== || ICONS IMPORTS || ==================

// ============== || IMAGES IMPORTS || ==================

// ============== || FUNCTIONS/UTILITIES IMPORTS || ==================

// ============== || HOOKS IMPORTS || ==================

// ============== || COMPONENTS IMPORTS || ==================
import "./Note.css";
import { deleteNote, getNote } from "../../utilities/notes";

export default function Note() {
  // const noteType = useNoteType((state) => state.noteType);
  const note = useLoaderData();

  return (
    <>
      <div className="Note">
        <div>
          <h2>{note.title}</h2>
          <div>{note.content}</div>
          <Form method="post" style={{ marginTop: "2rem" }}>
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </>
  );
}

export async function loader({ params }) {
  const note = await getNote(params.noteId);
  if (!note) throw new Response("", { status: 404 });
  return note;
}

export async function action({ params }) {
  await deleteNote(params.noteId);
  return redirect("/");
}
