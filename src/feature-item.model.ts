import {
	FEATURE_TYPE,
	FeatureItemCollection,
	ITEM_ACTION_TYPE,
	FeatureItemDeleteStatus,
	ItemPublishStatus
} from "./feature-item.const";

export interface ThumbnailRequirement {
	name: string;
	ratio: { width: number; height: number };
	dimension: { width: number; height: number };
}

export interface FeatureItem {
	name: FEATURE_TYPE;
	moderatorCollection: FeatureItemCollection;
	collection: FeatureItemCollection;
	requirements: ModeratorRequirements;
	thumbnailRequirements: ThumbnailRequirement[];
}

export interface FeatureItems extends Record<FEATURE_TYPE, FeatureItem> {}

export interface ModeratorRequirements extends Record<ITEM_ACTION_TYPE, number> {}

export interface ModeratorRequirement<T = FeatureItem> {
	action: ITEM_ACTION_TYPE;
	feature: T;
	votesRequired: number;
}

export interface ItemPublishResponse {
	status: ItemPublishStatus;
}

export interface ItemDeleteResponse {
	status: FeatureItemDeleteStatus;
}
