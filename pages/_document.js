import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Adding the ethers.js CDN script */}
        <script
          src="https://cdn.jsdelivr.net/npm/ethers@5.6.9/dist/ethers.umd.min.js"
          integrity="sha384-LO0z+X7jDTakq2XMmgSkBRyymDEvGV9mP7k+u1HpfTHpF+lnxzV4QxHbQ0mUUGFb"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
