function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{
    let hoja = SpreadsheetApp.openById('12MhlFYwGpxh1Aivef851ifWsnEcGt3m8bcRtK7Ek9zQ').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}