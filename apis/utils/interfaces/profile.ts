export interface Profile {
    profileId: string | null,
    profileActivationToken: string,
    profileDateAdded: Date | null,
    profileEmail: string,
    profileHash: string,
    profileIsAdmin: boolean,
    profileName: string,
    profileOrganization: string
}