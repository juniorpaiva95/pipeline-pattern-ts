import ProcessorInterface from "./processor.interface";

export default class AsyncProcessor implements ProcessorInterface {

    process(args: any, ...stages: Array<any>) {

        if (stages.length === 0) {
            return args;
        }

        let stageOutput = args;

        stages.forEach(function (stage, counter) {

            if (stageOutput && typeof stageOutput.then === 'function') {
                // Chame a próxima fase apenas quando a promessa for cumprida
                stageOutput = stageOutput.then(stage);
            } else {

                // Caso contrário, chame o próximo estágio com a saída do último estágio
                if (typeof stage === 'function') {
                    stageOutput = stage(stageOutput);
                } else {
                    stageOutput = stage;
                }
            }

        });

        return stageOutput;
    }


}
