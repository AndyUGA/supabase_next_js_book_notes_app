
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import SaveBook from './components/input';

export default async function Books() {



    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }



    const { data: books } = await supabase.from("books").select();


    return <>
        <div>

            My books:
        </div>
        <div>
            {books && books.map(book =>
                <div>
                    {book.title}
                </div>
            )}
        </div>
        <>
            <SaveBook />
        </>

    </>
}