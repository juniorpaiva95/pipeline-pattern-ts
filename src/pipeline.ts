import DefaultProcessor from "./default-processor";
import PipelineInterface from "./pipeline.interface";
import ProcessorInterface from "./processor.interface";

class Pipeline implements PipelineInterface {

    /**
     * @private
     * @type {Array<any>}
     * @memberof Pipeline
     */
    private stages: Array<any> = [];

    /**
     * @private
     * @type {ProcessorInterface}
     * @memberof Pipeline
     */
    private processor: ProcessorInterface;

    /**
     * Creates an instance of Pipeline.
     * @param {ProcessorInterface} [processor]
     * @param {...any} stages
     * @memberof Pipeline
     */
    constructor(processor?: ProcessorInterface, stages?: Array<any>) {
        this.processor = processor ?? new DefaultProcessor();
        this.stages = stages ?? [];
    }

    /**
     * @param {CallableFunction} stage
     * @return {*}  {Pipeline}
     * @memberof Pipeline
     */
    pipe(stage: CallableFunction | Promise<any>): Pipeline {
        
        // let pipeline: Pipeline = Object.assign({}, this);
        
        this.stages.push(stage);

        // console.log("Pipe atualizado", this);
        return this;
    }

    /**
     * @param {*} payload
     * @return {*} 
     * @memberof Pipeline
     */
    process(payload: any) {
        return this.processor.process(payload, ...this.stages);
    }
}

export default Pipeline;