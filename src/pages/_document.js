import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;700&family=Raleway:wght@300;400;700&display=swap" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"></link>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Primary Meta Tags */}
        <meta name="description" content="WUP - Potencialização Empresaria e Executiva" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nemeadvogados.adv.br/" />
        <meta property="og:description" content="WUP - Potencialização Empresaria e Executiva" />
        <meta property="og:image" content="https://i.ibb.co/ZxQ1JYf/neme-tag-img.jpg" />
        {/* Twitter */} 
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.nemeadvogados.adv.br/" />
        <meta property="twitter:description" content="WUP - Potencialização Empresaria e Executiva" />
        <meta property="twitter:image" content="https://i.ibb.co/ZxQ1JYf/neme-tag-img.jpg"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
