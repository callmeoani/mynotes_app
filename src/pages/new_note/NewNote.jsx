// ============== || PACKAGES IMPORTS || ==================
import { Form, redirect } from "react-router-dom";
import { createNote } from "../../utilities/notes";

// ============== || ICONS IMPORTS || ==================

// ============== || IMAGES IMPORTS || ==================

// ============== || FUNCTIONS/UTILITIES IMPORTS || ==================

// ============== || HOOKS IMPORTS || ==================

// ============== || COMPONENTS IMPORTS || ==================
import "./NewNote.css";
import { useNoteType } from "../../store/Stores";

export default function NewNote() {
  const noteType = useNoteType((state) => state.noteType);

  return (
    <>
      <div className="NewNote">
        <h2>New Note of type: {noteType}</h2>
        <Form method="post">
          <p>
            <label>
              Title
              <br />
              <input type="text" name="title" />
            </label>
          </p>
          <p>
            <label htmlFor="content">Content</label>
            <br />
            <textarea name="content" rows="10" cols="30" id="content" />
          </p>
          <p>
            <button type="submit">Save</button>
          </p>
        </Form>
      </div>
    </>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const note = await createNote({
    title: formData.get("title"),
    content: formData.get("content"),
  });
  return redirect(`/note/${note.id}`);
}
