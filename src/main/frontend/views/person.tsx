import Layout from "Frontend/views/layout";
import {AutoCrud} from "@vaadin/hilla-react-crud";
import {PersonService} from "Frontend/generated/endpoints";
import PersonModel from "Frontend/generated/org/sid/chatbotrag/person/PersonModel";

export default function Person(){
    return(
        <div className="p-3">
            <Layout/>
            <h1>Created person page</h1>
            <AutoCrud service={PersonService} model={PersonModel}/>
        </div>


    )
}