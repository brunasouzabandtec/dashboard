import { Container } from "src/components";

export function Footer() {
  return (
    <footer className="flex-shrink-0 p-4 bg-white sm:p-8">
      <Container>
        <div className="flex flex-col pb-4 space-y-4 border-b border-gray-200 sm:pb-8">
          <span className="text-sm font-semibold leading-5 tracking-wider text-gray-400 uppercase">
            Contato
          </span>
          <span className="text-base leading-6 text-gray-500">
            Endereço: Rua Fiação da Saúde, 194
          </span>
          <span className="text-base leading-6 text-gray-500">
            Telefone: (11) 1234 - 1234
          </span>
          <span className="text-base leading-6 text-gray-500">
            E-mail: homeup@mail.com
          </span>
        </div>
        <div className="pt-4 text-base leading-6 text-center text-gray-400 sm:pt-8">
          © 2020 HOMEUP, Inc.
        </div>
      </Container>
    </footer>
  );
}
