// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    readonly id: number;
    readonly login: string;
    readonly avatar_url: string;
    readonly name?: string;
    readonly location?: string;
    readonly email?: string;
    readonly company?: string;
    readonly bio?: string;
    readonly html_url: string;
    declined?: boolean;
};
