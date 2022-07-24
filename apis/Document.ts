import { AxiosRequestConfig } from 'axios';

// apis/Document.ts
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default class Absence {
    getAllDocuments() {
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            url: `/documents`,
            method: 'GET'
        };
        return requestHeader;
    }

    getDocumentById(id: string) {
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            url: `/documents/${id}`,
            method: 'GET'
        };
        return requestHeader;
    }

    getDocumentsByTagID(id: string) {
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            url: `/api/v1/documents/tags/${id}`,
            method: 'GET'
        };
        return requestHeader;
    }

    getAllUploadedDocuments() {
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            url: `/documents/uploaded`,
            method: 'GET'
        };
        return requestHeader;
    }

    getAndPredictLatestUploadedDocument() {
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            url: `/api/v1/documents/latest/predict`,
            method: 'GET'
        };
        return requestHeader;
    }
}
