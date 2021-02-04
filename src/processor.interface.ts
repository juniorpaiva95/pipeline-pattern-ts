export default interface ProcessorInterface {

    /**
     * @param {*} payload
     * @param {...any} stages
     * @return {*}  {*}
     * @memberof ProcessorInterface
     */
    process(payload: any, ...stages: any): any;

}