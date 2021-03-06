import { Method } from 'axios';

// apis/FormSchema.ts
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface requestHeaderProps {
    baseURL: string | undefined;
    url: string;
    method: Method;
}

export default class FormSchema {
    getFormsSchemaByName(name: string) {
        const requestHeader: requestHeaderProps = {
            baseURL: baseURL,
            url: `/form/schema/${name}`,
            method: 'GET'
        };
        return requestHeader;
    }
}
