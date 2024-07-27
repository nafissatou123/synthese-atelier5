import {Button, TextField} from "@vaadin/react-components";
import {useState} from "react";
import {ChatAiService} from "Frontend/generated/endpoints";
import Markdown from "react-markdown";
import Layout from "Frontend/views/layout";

export default function Chat(){
    const [question,setQuestion] = useState<string>("");
    const [response,setResponse] = useState<string>("");

    async function send(){
        ChatAiService.ragChat(question).then(resp=>{
                setResponse(resp)
            }
        )

    }

    return (
        <div className="p-3">
            <h3>Chat Bot</h3>
            <Layout/>
            <div>
                <TextField style={{width :'80%'}} onChange={(e=>setQuestion(e.target.value))}/>
                <Button theme="primary" onClick={send}>Send</Button>
                <div>
                    <Markdown>
                        {response}
                    </Markdown>
                </div>
            </div>
        </div>
    )
}