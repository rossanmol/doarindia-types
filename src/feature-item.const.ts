import { FeatureItems } from "./feature-item.model";

export const enum FeatureItemError {
	error = "error",
	invalidFeature = "invalid-feature",
	invalidFeatureItem = "invalid-feature-item"
}

export const enum FeatureItemDeleteStatus {
	success = "success",
	error = "error",
	dependenciesNotEmpty = "dependencies-not-empty",
	batchDeleteError = "batch-delete-error"
}

export const enum FeatureItemPublishStatus {
	success = "success",
	error = "error",
	notEnoughApprovals = "not-enough-approvals",
	oneOrMoreRejects = "one-or-more-rejects",
	missingThumbnail = "missing-thumbnail"
}

export enum FEATURE_TYPE {
	series = "series",
	episode = "episode"
}

export const enum FeatureItemCollection {
	moderatorSeries = "module-series-new",
	moderatorEpisode = "module-episode-new",
	series = "module-series",
	episode = "module-episode"
}

export const enum ITEM_ACTION_TYPE {
	add = "add",
	hide = "hide",
	edit = "edit"
}

export const MODERATOR_FEATURE: FeatureItems = {
	[FEATURE_TYPE.series]: {
		name: FEATURE_TYPE.series,
		moderatorCollection: FeatureItemCollection.moderatorSeries,
		collection: FeatureItemCollection.series,
		requirements: {
			[ITEM_ACTION_TYPE.add]: 1,
			[ITEM_ACTION_TYPE.edit]: 1,
			[ITEM_ACTION_TYPE.hide]: 1
		},
		thumbnailRequirements: [
			{
				name: "rectangular",
				ratio: { width: 16, height: 9 },
				dimension: { width: 1600, height: 900 }
			},
			{
				name: "wide",
				ratio: { width: 21, height: 9 },
				dimension: { width: 2100, height: 900 }
			}
		]
	},
	[FEATURE_TYPE.episode]: {
		name: FEATURE_TYPE.episode,
		moderatorCollection: FeatureItemCollection.moderatorEpisode,
		collection: FeatureItemCollection.episode,
		requirements: {
			[ITEM_ACTION_TYPE.add]: 1,
			[ITEM_ACTION_TYPE.edit]: 1,
			[ITEM_ACTION_TYPE.hide]: 1
		},
		thumbnailRequirements: [
			{
				name: "rectangular",
				ratio: { width: 16, height: 9 },
				dimension: { width: 320, height: 180 }
			}
		]
	}
};
