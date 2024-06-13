import AuthForm from "@/components/auth-form";

export interface HomeProps {
  searchParams: { [key: string]: string };
}

export default function Home({ searchParams }: HomeProps) {
  const formMode = searchParams.mode || "login";
  return <AuthForm mode={formMode} />;
}
