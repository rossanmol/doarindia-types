export interface Allowed {
	bucketId: null;
	capabilities: string[];
	namePrefix: null;
}

export interface AuthorizedAccount {
	absoluteMinimumPartSize: number;
	accountId: string;
	allowed: Allowed;
	apiUrl: string;
	authorizationToken: string;
	downloadUrl: string;
	minimumPartSize: number;
	recommendedPartSize: number;
}

export interface UploadUrl {
	authorizationToken: string;
	bucketId: string;
	uploadUrl: string;
	fileName: string;
}

export interface AuthorizeAccountOptions {
	accountId: string;
	authorizationToken: string;
}

export interface AccountKey {
	keyName: string;
	applicationKeyId: string;
	applicationKey: string;
	capabilities: string[];
	accountId: string;
	expirationTimestamp?: number;
	bucketId: string;
	namePrefix: string;
}



export interface AuthorizeDownloadOptions {
	validDurationInSeconds: number;
	bucketId: string;
	fileNamePrefix: string;
}

export interface DownloadAuthorization {
	authorizationToken: string;
	bucketId: string;
	fileNamePrefix: string;
}

export interface BackblazeBucket {
	id: string;
	name: string;
}

export interface NestBackblazeDownloadResponse {
	downloadUrl: string;
}

export interface NestBackblazeUploadResponse extends UploadUrl {
	fileName: string;
}

export interface BackblazeUploadResponse {
	fileId: string;
	fileName: string;
	accountId: string;
	bucketId: string;
	contentLength: number;
	contentSha1: string;
	contentType: string;
	fileInfo: {
		author: string;
	};
}


export enum BACKBLAZE_FEATURE_TYPE {
	episode = "episode",
	movie = "movie"
}

export const BACKBLAZE_BUCKET: Record<BACKBLAZE_FEATURE_TYPE, BackblazeBucket> = {
	[BACKBLAZE_FEATURE_TYPE.episode]: {
		id: "441e5b7775edbe5068200118",
		name: "doarindia-episodes"
	},
	[BACKBLAZE_FEATURE_TYPE.movie]: {
		id: "64beab1705edce9068200118",
		name: "doarindia-movies"
	}
};