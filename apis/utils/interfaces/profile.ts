export interface Profile {
    profileId: string | null,
    profileActivationToken: string,
    profileDateAdded: string,
    profileEmail: string,
    profileHash: string,
    profileIsAdmin: boolean,
    profileName: string,
    profileOrganization: string
}