import { eins } from './Eintrag 1/eintrag1';
import { zwei } from './Eintrag 2/eintrag2';
import { drei } from './Eintrag 3/eintrag3';
import { vier } from './Eintrag 4/eintrag4';
import { fuenf } from './Eintrag 5/eintrag5';
import { sechs } from './Eintrag 6/eintrag6';
import { sieben } from './Eintrag 7/eintrag7';
import { acht } from './Eintrag 8/eintrag8';
import { neun } from './Eintrag 9/eintrag9';
import { zehn } from './Eintrag 10/eintrag10';
import { elf } from './Eintrag 11/eintrag11';
import { zwoelf } from './Eintrag 12/eintrag12';

export const Info = [
    {
       number: 12,
       name: "Sonntage sind keine Strandtage",
       date: '12.9.2022',
       location: [{name: "Busan",
                wikiId: "Q16520"}
                ],
        images: [1, 2, 3, 4, 5, 6],
        data: zwoelf
    },
    {
        number: 11,
        name: "Graue Wolken über Seoul",
        date: '12.8.2022',
        location: [{name: "Seoul",
                    wikiId: 'Q8684'},
                    ],
        images: [1, 2, 3, 4],
        data: elf 
    },
    {
        number: 10,
        name: "Sonneuntergang für zwei hervorragende Monate",
        date: '1.8.2022',
        location: [{name: "Kota Kinabalu",
                    wikiId: 'Q137271'},
                    {name: "Ranau",
                    wikiId: 'Q1185989'},
                    {name: 'Bangkok',
                    wikiId: 'Q1861'}],
        images: [1, 2, 3, 4, 5],
        data: zehn 
    },
    {
        number: 9,
        name: "Buddha bei die Fische",
        date: '17.7.2022',
        location: [{name: "Melaka",
                    wikiId: 'Q61089'}, 
                    {name: "Kuala Lumpur",
                    wikiId: 'Q1865'}],
        images: [1, 2, 3, 4, 5, 6],
        data: neun
    },
    {
        number: 8,
        name: "Im Schatten des Marina Bay",
        date: '6.7.2022',
        location: [{name: "Singapur",
                    wikiId: 'Q13882341'}],
        images: [1, 2, 3, 4, 5, 6],
        data: acht
    },
    {
        number: 7,
        name: "Irgendwelche Inseln, deren Namen ich längst vergessen habe",
        date: '30.6.2022',
        location: [{name: "Ko Phi Phi",
                    wikiId: 'Q511957'}],
        images: [1, 2, 3, 4],
        data: sieben
    },
    {
        number: 6,
        name: "Kunst kann manchmal auch die Natur, der See aber definitiv",
        date: '25.6.2022',
        location: [{name: "Khao Sok",
                    wikiId: 'Q1760520'}],
        images: [1, 2, 3, 4],
        data: sechs
    },
    {
        number: 5,
        name: "Was wird hier wohl von Einheimischen und was von Touristen bewohnt?",
        date: '23.6.2022',
        location: [],
        images: [1],
        data: fuenf
    },
    {
        number: 4,
        name: "Abgesang auf's Inselleben",
        date: '18.6.2022',
        location: [{name: "Koh Tao",
                    wikiId: 'Q525940'}, 
                    {name: "Koh Phangan",
                    wikiId: 'Q1725550'}],
        images: [1, 2, 3],
        data: vier
    },
    {
        number: 3,
        name: "Endlich ein Foto mit Jonny",
        date: '14.6.2022',
        location: [],
        images: [1, 2],
        data: drei
    },
    {
        number: 2,
        name: "Bangkok bei Nacht von oben",
        date: '11.6.2022',
        location: [{name: "Bangkok",
                    wikiId: 'Q1861'}, 
                    {name: "Koh Tao",
                    wikiId: 'Q525940'}],
        images: [1, 2, 3],
        data: zwei
    },
    {
        number: 1,
        name: "Bangkok bei Nacht",
        date: '5.6.2022',
        location: [{name: "Köln",
                    wikiId: 'Q365'}, 
                    {name: "Bangkok",
                    wikiId: 'Q1861'}],
        images: [1, 2],
        data: eins,
    }
];