const HOJA = SpreadsheetApp.openById('12MhlFYwGpxh1Aivef851ifWsnEcGt3m8bcRtK7Ek9zQ').getActiveSheet();

function doGet(datos)
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function doPost(datos)
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{
    return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre, apellidos, correo, telf)
{
    HOJA.appendRow([nombre,apellidos,correo,telf]);
}