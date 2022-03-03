import Head from "next/head";

export default function Home() {
  return (
    <>
      <>
        <Head>
          <title>La Bonita kupal</title>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
        </Head>
        <meta
          name="keywords"
          content="cosmetics, la bonita, liptint, makeup, fashion"
        />
      </>

      <body>
        <h1 className="text-3xl font-bold">Main Page</h1>
      </body>
    </>
  );
}
