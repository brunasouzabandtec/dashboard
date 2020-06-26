import { Container, Footer, Header } from "src/components";

type Props = {
  children: React.ReactNode;
  heading: string;
};

export function Layout(props: Props) {
  const { children, heading } = props;

  return (
    <div className="flex flex-col min-h-screen">
      <Header>{heading}</Header>
      <Container className="flex-grow w-full py-4 space-y-8 sm:py-8">
        {children}
      </Container>
      <Footer />
    </div>
  );
}
