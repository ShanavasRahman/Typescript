type ObjType={
    firstName: string;
    lastName: string;
    age: number;
    place: string;
}

let obj: ObjType = {
    firstName: "shanavas",
    lastName: "Rahman",
    age: 25,
    place:"Palakkad"
}

for (let key in obj) {
    console.log(obj[key as keyof typeof obj]);
}


