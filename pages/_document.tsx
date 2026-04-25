import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
	}

	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8"/>
					<meta name="apple-mobile-web-app-capable" content="yes"/>
					<link rel="preconnect" href="https://fonts.googleapis.com"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
					<link
						href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..700&family=Space+Grotesk:wght@300..700&display=swap"
						rel="stylesheet"/>
					<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png"/>
					<link rel="manifest" href="/site.webmanifest"/>
				</Head>
				<body className="items-center justify-center bg-[#f7f3ec] dark:bg-[#0b0b0b] text-slate-900 dark:text-slate-100 font-sans text-base antialiased">
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}
