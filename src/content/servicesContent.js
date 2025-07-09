import behandling from './../icons/behandling.svg';
import sliping from './../icons/sliping.svg';
import vedlikehold from './../icons/vedlikehold.svg';

const services = [
    {
        name: 'gulvsliping',
        ico: sliping,
        index: 0,
        description: [
            'Ønsker du nytt gulv uten å bytte det gamle? Gulvsliping er en genial metode for å bevare noe av hjemmets sjel og opprinnelige uttrykk.', 
            'Vi har over 15 års erfaring i arbeid med gulvbehandling. Når vi har ferdigslipt ditt gulv vil du ikke kjenne det igjen!',
            'Vi utfører sliping og behandling av alle typer tregulv , trapper, terskler, benkeplater og bordplater. Vi kan dessuten ta på oss oppdrag med å slipe større oppdrag for skoler eller offentlige byggninger.'
        ]
    },
    {
        name: 'behandling',
        ico: behandling,
        index: 1,
       description: [
           'Formålet med slik behandling er beskytte treverket mot slitasje og begrense at smuss og fuktighet trenger ned i treverket.',
        'Et tregulv kan bli fantastisk pent med riktig overflatebehandling. Det finnes utallige varianter for behandling av overflaten. Vår brede erfaring og fagkompetanse sikrer deg som kunde den beste hjelp og veiledning.',
        'Ved overflatebehandling av tregulv og parkett bruker vi gulvlakker som oljebasert-, syntetisk-, vannbasert gulvlakk, eller natur-, og voksoljer til gulvet av beste kvalitet.',
       ]
    },
    {
        name: 'vedlikehold',
        ico: vedlikehold,
        index: 2,
       description: [
        'Periodisk vedlikehold av gulv gir både en økonomisk og miljømessig gevinst.',
        'De ulike overflatebehandlingenen krever ulikt vedlikehold. Ett oljet gulv bør vedlikeholdes ved behov, mens et lakkert gulv klarer seg uten vedlikehold relativt lenge.',
        'Vi har spesialisert oss på å vedlikehold alle typer gulv i alle størrelser.'
       ]
    },
];

export {services};