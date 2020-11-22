function Home() {
  return (
    <>
      <header style={{fontSize: 2 + 'rem', display: 'flex', justifyContent: 'center', textAlign: 'center', background: '#7F638F'}}>Lista de desejos</header>

      <body style={{margin: 0, padding: 0, boxSizing: 'border-box'}}>
      <div style={{fontSize: 1.4 + 'rem', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
        <ul style={{listStyle: 'none'}}>
          <li style={{paddingBottom: 1 + 'rem'}}>Viajar sozinho e conhecer paises como: Holanda, Canadá, Nova Zelândia, Marrocos, Itália, França, Irlanda, Alemanha, Noruega, China e Japão</li>
          <li style={{paddingBottom: 1 + 'rem'}}>Saltar de paraquedas</li>
          <li style={{paddingBottom: 1 + 'rem'}}>Fazer bungee jump</li>
          <li style={{paddingBottom: 1 + 'rem'}}>Andar de asa delta</li>
          <li style={{paddingBottom: 1 + 'rem'}}>Esquiar</li>
          <li style={{paddingBottom: 1 + 'rem'}}>Praticar arco e flecha</li>
          <li style={{paddingBottom: 1 + 'rem'}}>Escrever uma história e transforma-lá em um jogo</li>
          <li style={{paddingBottom: 1 + 'rem'}}>Criar meu canal no youtube para programação, jogos e desenhos em pixelart</li>
          <li style={{paddingBottom: 1 + 'rem'}}>Começar a fazer streams sobre tecnologia, desenhos e jogando com amigos</li>
          <li style={{paddingBottom: 1 + 'rem'}}>Me mudar para uma cidade no litoral</li>
          <li style={{paddingBottom: 1 + 'rem'}}>Participar de mais projetos OpenSource para ajudar a comunidade de desenvolvimento</li>
          <li style={{paddingBottom: 1 + 'rem'}}>Faixa preta de Jiu Jitsu</li>
          <li style={{paddingBottom: 1 + 'rem'}}>Pegar pódio em um campeonato Sul Americano</li>
        </ul>
      </div>
    </body>
    </>
  );
}

export default Home;