import AsyncProcessor from './async-processor';
import DefaultProcessor from './default-processor';
import Pipeline from './pipeline';

// console.log("Hello world!");

// Gets the user by ID and returns promise
var getUserById = function (userId: any) {
    return new Promise((resolve, reject) => {
        console.log("Espere 2 seconds");
        setTimeout(() => {
            console.log("Estou na primeira Promise");
            resolve(userId);
            // resolve(Object.assign({ "name": "John Doe", "email": "johndoe@gmail.com", "password": "****" }, { age: userId }));
        }, 7000)
    })
};

function verifyInApi(payload: any) {
    return new Promise((resolve) => {
        console.log("Espere 5 seconds")
        setTimeout(() => {
            console.log("Estou na segunda Promise", { ...payload, teste: "value" });
            resolve({ teste: 'value' })
        }, 1000);
    })
}

const toLowerCase = (input: string) => input.toLowerCase();
const removePunctuation = (input: string) => input.replace(/\./g, "").replace(/!/g, "");
const toArray = (input: string) => input.split(" ");
const joinWithHyphen = (input: string[]) => input.join("-");


let pipeline: Pipeline = new Pipeline(new AsyncProcessor, [
    toLowerCase,
    removePunctuation,
    toArray,
    joinWithHyphen,
    getUserById
]);

// pipeline
//     .pipe(getUserById)
//     .pipe(verifyInApi)
//     // .pipe((pipe: any) => {
//     //     console.log('Pipe', pipe);
//     //     return pipe + 'asd';
//     // })
//     .pipe(soma)
//     .pipe(soma)
//     .pipe(soma)
// .pipe((pipe: any) => {
//     console.log("Eita segundo pipe", pipe);
//     return pipe + 'SEGUNDO PIPE';
// })

// console.log(pipeline.process("This... is a file name!"));
console.log(pipeline.process("This... is a file name!").then((result: any) => console.log(result)));
// pipeline.process("This... is a file name!")
    // .then((result: any) => {
    //     console.log("Resultado", result)
    // })
    // .catch((err: any) => console.log(err));
// console.log(pipeline);