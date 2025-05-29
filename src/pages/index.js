import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chelci Lee - Portfolio</title>
        <meta name="description" content="Portfolio of Chelci Lee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-center">
        <div className="container">
          <div className="text-container">
            <div className="font">Hi, I'm Chelci Lee</div>
            <p className="home-paragraph">I AM A DEVELOPER AND UX/UI DESIGNER BASED IN ITALY. I HAVE MANY YEARS OF EXPERIENCE IN CONSULTING IN ALL AREAS OF DIGITAL. I LOVE MINIMAL AND BRUTALIST DESIGN. I LOVE NATURE, PIZZA AND ART.</p>
            <h1 className="responsive-text">Circuit</h1>
            <h1 className="responsive-text">Moment</h1>
            <h1 className="responsive-text">Emerge</h1>
            <h1 className="responsive-text">Brine</h1>
          </div>
        </div>
      </main>
    </>
  );
} 