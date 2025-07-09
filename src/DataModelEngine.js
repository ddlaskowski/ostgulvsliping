import logotype from './icons/logotype.svg';

const getClientData = function (type) {
    const clientData = {
        clientName: "Østgulvsliping AS",
        clientKey: "",
        uid: "OST00",
        clientCompanyTaxNumber: "929 492 471 MVA",
        clientCompanyName: "Østgulvsliping AS",
        clientAddress: "Antenneveien 1",
        clientCity: "1154 Oslo",
        clientDomain: "ostgulvsliping.no",
        clientEmail: "post@ostgulvsliping.no",
        clientPhone: "+4746375611",
        clientFancyPhone: '463 75 611',
        facebook: "profile.php?id=100089121682585&mibextid=ZbWKwL",
        instagram: "ostgulvsliping",
        logotype: logotype,

    }
    return clientData[type];
}

export { getClientData };

