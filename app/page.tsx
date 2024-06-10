import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Index() {


  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/books");
  }


  return (
    <div className="h-screen content-center">
      Welcome! Please login to continue
      <div className="flex justify-center">
        {<AuthButton />}
      </div>
    </div>
  );
}
