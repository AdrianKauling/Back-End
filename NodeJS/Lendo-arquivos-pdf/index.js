const  { existsSync } = require('fs')
const  fs = require('fs')
const PDFparser = require('pdf2json')
const pdfCaminho  = "arquivo_pdf_teste.pdf"

if(existsSync(pdfCaminho)) {
    
    const pdfpParser = new PDFparser()

    pdfpParser.on("pdfParser_dataError", errData => { 
        console.log(errData.parserError)
    })

    pdfpParser.on("pdfParser_dataReady", pdfData => {

        let retornoHtml = ""

        pdfData.Pages.forEach((page, index) => {
            retornoHtml += " "

            let y = 0


            page.Texts.forEach((text, index) => {

                if(index == 0) {
                    y = text.y
                }

                text.R.forEach((t) =>{

                    if(text.y !== y) {
                        retornoHtml += " "
                    }

                    retornoHtml += decodeURIComponent(t.T)
                })

                y= text.y
            })

            retornoHtml += " "
        })

        fs.writeFile("resultado.html", retornoHtml, err => {if(err) console.log(err)})
    })

    
    
    pdfpParser.loadPDF(pdfCaminho)
    
    console.log('Arquivo localizado')
}else {
    console.log('Arquivo não localizado');
}