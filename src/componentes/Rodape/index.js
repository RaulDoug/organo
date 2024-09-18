import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <section>
        <ul>
          <li>
            <a href="https://facebook.com">
              <img src="/imagens/fb.png" alt="Logo Facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <img src="/imagens/tw.png" alt="Logo Twitter" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <img src="/imagens/ig.png" alt="Logo Instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="Logo Organo" />
      </section>
      <section>
        <p>Desenvolvido por Raul.</p>
      </section>
    </footer>
  );
};

export default Rodape;
