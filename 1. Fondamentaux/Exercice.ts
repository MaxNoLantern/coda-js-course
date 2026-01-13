interface Person {
    name: string;
    firstName: string;
    adress: {
        primary : string;
        zipCode: string;
        city: string;
    }  ;
}

const : Person = {
    name: "Barreau",
    adress: {
        primary: "1 rue des fleurs",
        zipCode: "21000",
        city: "Dijon",
    },
};

