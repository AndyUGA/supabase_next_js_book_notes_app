"use client"


import { useRouter } from 'next/navigation';
import { useState } from "react";


export default function SaveBook() {

    const [title, setTitle] = useState('');
    const router = useRouter();

    async function saveBook() {


        const resp = await fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'title': title })
        });

        if (resp.ok) {
            router.refresh();
            setTitle('');
        }

    }

    return (
        <div>
            <input className='border-2' placeholder='Add Book' value={title} onChange={(e) => {
                setTitle(e.target.value);
            }} />
            <button onClick={saveBook}> Save Book </button>

        </div>
    )
}
