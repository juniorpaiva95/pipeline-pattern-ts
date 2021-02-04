interface PipelineInterface {
    
    pipe(operation: CallableFunction): void;

    process(payload: any): any;
}

export default PipelineInterface;