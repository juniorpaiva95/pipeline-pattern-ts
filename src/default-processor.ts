import ProcessorInterface from "./processor.interface";

export default class DefaultProcessor implements ProcessorInterface {

    process(args: any, ...stages: Array<any>) {
        
        stages.forEach((stage: any) => {
            args = stage(args);
        });

        return args;
    }

    
}