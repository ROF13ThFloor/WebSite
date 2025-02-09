"use client"; // Required for Next.js App Router

import { useEffect } from "react";
import Script from 'next/script';
import ReactGA from "react-ga4";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "";

const GoogleTag = (): JSX.Element => {
    useEffect(() => {
        if (GA_TRACKING_ID) {
            ReactGA.initialize(GA_TRACKING_ID); // Ensure GA4 is initialized
        }
    }, []);

    return (
        <>
            {/* Load GTM Script */}
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
            <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
        </>
    );
};

export default GoogleTag;
