import {AppProps} from 'next/app';
import Head from 'next/head';
import {ThemeProvider, useTheme} from 'next-themes';

import Layout from '../components/Layout';
import personalInfo from '../components/data/personalInfo.json';
import GoogleTag from '../components/GoogleTag';

import 'tailwindcss/tailwind.css';

const App = ({Component, pageProps}: Readonly<AppProps>): JSX.Element => {
	const {resolvedTheme} = useTheme();

	return (
		<ThemeProvider attribute="class">
			<GoogleTag/>
			<Head>
				<title>{personalInfo.title}</title>
				<link rel="canonical" href={personalInfo.domain}/>
				<link rel="icon" href="/favicon/kth.png"/>
				<meta name="description" content={personalInfo.name+"'s personal website"}/>
				<meta property="og:description" content={personalInfo.name+"'s personal website"}/>
				<meta property="og:image" content="/favicon/favicon.ico"/>
				<meta property="og:locale" content="en_US"/>
				<meta property="og:type" content="website"/>
			</Head>
			<div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <img 
          src="https://cdn.dribbble.com/users/948499/screenshots/5407585/comp_1_3.gif" 
          alt="Maintenance Logo" 
          className="w-48 h-48"
        />
        <h1 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
         
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          
        </p>
      </div>
			{/* <Layout>
				<main className="flex flex-col m-auto leading max-w-4xl items-start p-5">
					<Component {...pageProps}/>
				</main>
			</Layout> */}
		</ThemeProvider>
	);
};

export default App;
