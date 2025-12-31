import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="/assets/img/favicon.png" />
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=hind:400,500,600|lexend:400,500,600" rel="stylesheet" />
                <link rel="stylesheet" href="/assets/css/fontawesome-all.min.css" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                               })(window,document,'script','dataLayer','GTM-W3S5R5BF');`,
                    }}
                />
                {/* End Google Tag Manager */}

                
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
