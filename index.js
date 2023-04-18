import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
    organization: "org-oDSyVjam1SW3r44RFzZAML2Y",
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
console.log(response);