import Link from 'next/link';

function About() {
  return (
    <>
      <header style={{fontSize: 2 + 'rem', display: 'flex', justifyContent: 'center', textAlign: 'center', background: '#7F638F'}}>Lista de desejos</header>

      <body style={{margin: 0, padding: 0, boxSizing: 'border-box'}}>
      <div style={{fontSize: 1.4 + 'rem', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
        <p>É isso</p>
      </div>
      <footer style={{fontSize: 2 + 'rem', display: 'flex', justifyContent: 'center', textAlign: 'center', background: '#7F638F'}}>
      <Link href="/">
        <a style={{textDecoration: 0, color: '#000'}}>Voltar para a lista</a>
      </Link>
      </footer>
      
    </body>
    </>
  );
}

export default About;