
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import SaveBook from './components/SaveBookInput';
import Link from 'next/link';

export default async function Books() {



    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }



    const { data: books } = await supabase.from("books").select("id,title");
    console.log(23, books);

    return <>
        <div>

            My books:
        </div>
        <div>
            {books && books.map(book =>
                <div>
                    <Link href={`/books/${book.id}`}>
                        {book.title}
                    </Link>
                </div>
            )}
        </div>
        <>
            <SaveBook />
        </>

    </>
}