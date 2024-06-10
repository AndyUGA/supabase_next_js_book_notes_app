import { createClient } from "@/utils/supabase/server";


export default async function Notes({ params }: { params: { id: string } }) {
    console.log(4, params.id);

    const supabase = createClient();
    const { data: notes } = await supabase.from("notes").select("description").eq('book_id', params.id);
    console.log(9, notes);
    return <>
        <div>
            My notes
        </div>
        <div>
            {notes && notes.map(note =>
                <div>

                    {note.description}

                </div>
            )}
        </div>


    </>
}