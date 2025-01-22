"use client";

import Script from "next/script";
import { useEffect } from "react";

interface AnalyticsProps {
    gid: string;
}

export default function Analytics({ gid }: AnalyticsProps) {
    useEffect(() => {
        // Validate the Google Analytics Tracking ID
        const isValidGid = /^G-[A-Z0-9]+$/.test(gid);
        if (!isValidGid) {
            console.error(
                "Invalid Google Analytics Tracking ID. Expected format: G-[A-Z0-9]+"
            );
            return;
        }
    }, [gid]);

    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${gid}`}
            />

            <Script id="google-analytics" strategy="lazyOnload">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gid}', {
            page_path: window.location.pathname,
          });
        `}
            </Script>
        </>
    );
}
