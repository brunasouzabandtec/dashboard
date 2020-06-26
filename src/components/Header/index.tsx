import { useRouter } from "next/router";

import { Button, Container } from "src/components";

type Props = {
  children: React.ReactNode;
};

export function Header(props: Props) {
  const { children } = props;

  const router = useRouter();

  return (
    <header className="flex-shrink-0 py-4 bg-gray-800 sm:py-8">
      <Container className="flex items-center justify-between">
        <span className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9 sm:truncate">
          {children}
        </span>
        <div className="space-x-4">
          {router.pathname !== "/employee/register" && (
            <Button onClick={() => router.push("/employee/register")}>
              Registrar funcionário
            </Button>
          )}
          <Button>Sair</Button>
        </div>
      </Container>
    </header>
  );
}
