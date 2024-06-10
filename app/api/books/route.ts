import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const supabase = createClient();
  const data = await request.json();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const resp = await supabase
    .from('books')
    .insert([{ title: data.title, user_id: user?.id }]);

  return NextResponse.json({
    resp,
  });
}
