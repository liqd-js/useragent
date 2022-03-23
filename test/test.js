const UserAgent = require('../lib/useragent');

for( let i = 0; i < 1000; ++i )
{
    let res = 
    [
        UserAgent.isBot( 'googlebot"];' ),
        UserAgent.isBot( 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0' ),
        UserAgent.isBot( 'Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)' )
    ]
}

setTimeout(() =>
{
    let start = process.hrtime(), cnt = 0;

    for( let i = 0; i < 1000; ++i )
    {
        let res = 
        [
            ++cnt && UserAgent.isBot( 'googlebot"];' ),
            ++cnt && UserAgent.isBot( 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0' ),
            ++cnt && UserAgent.isBot( 'Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)' )
        ]
    }

    let end = process.hrtime(start);

    console.log((( end[0] * 1e3 + end[1] / 1e6 ) / cnt ).toFixed(2));

},
1000 );