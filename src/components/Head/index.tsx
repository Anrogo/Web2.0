import Head from "next/head";

interface HeadOptionsProps {
  page: string;
}

const HeadOptions: React.FC<HeadOptionsProps> = ({ page }) => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{page}</title>
      <meta name="author" content="Antonio Rodríguez González" />
      <meta name="description" content="Web Portafolio personal de Antonio Rodríguez González. v2.0" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="keywords" content="desarrollador web, react, frontend, programador" />
      <meta />
    </Head>
  );
};

export default HeadOptions