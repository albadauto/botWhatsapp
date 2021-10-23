const puppeteer = require('puppeteer');

(async () => {
    try{
        const browser = await puppeteer.launch({headless:false});
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36')
        const contactName = 'Daniel Fatec'
        await page.goto('https://web.whatsapp.com');

        await page.waitForSelector(`span[title="${contactName}"]`)
        await page.click(`span[title="${contactName}"]`);
        await page.waitForSelector('._2vbn4')

        let countMessages = 20

        for(let i = 0; i < countMessages; i++){
            await page.type('._2vbn4', 'Teste de robô')
            delay(500)
            await page.waitForSelector('._4sWnG')
            await page.click('._4sWnG')
        }


    }catch(e){
        console.log(e)
    }
    
})();

function delay(time){
    return new Promise(function(resolve){
        setTimeout(resolve, time)
    })
}