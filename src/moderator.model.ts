export interface ModeratorVote {
  isApproved: boolean | null;
}

export const enum ItemPublishStatus {
  success = "success",
  error = "error",
  notEnoughApprovals = "not-enough-approvals",
  oneOrMoreRejects = "one-or-more-rejects",
  itemNotFound = "item-not-found",
  featureNotFound = "feature-not-found",
  missingThumbnail = "missing-thumbnail"
}

export interface ItemPublishResponse {
  status: ItemPublishStatus;
}

export const enum MODERATOR_ACTION_TYPE {
  add = "add",
  hide = "hide",
  edit = "edit"
}

export const enum MODERATOR_FEATURE_TYPE {
  series = "series",
  episode = "episode"
}

export const enum ItemCollection {
  moderatorSeries = "module-series-new",
  moderatorEpisode = "module-episode-new",
  series = "module-series",
  episode = "module-episode"
}

export interface ModeratorRequirement<T = ModeratorFeature> {
  action: MODERATOR_ACTION_TYPE;
  feature: T;
  votesRequired: number;
}

export interface ThumbnailRequirement {
  name: string;
  ratio: { width: number; height: number };
  dimension: { width: number; height: number };
}

export interface ModeratorFeature {
  name: MODERATOR_FEATURE_TYPE;
  moderatorCollection: ItemCollection;
  collection: ItemCollection;
  thumbnailRequirements: ThumbnailRequirement[];
}

export interface ModeratorFeatures
  extends Record<MODERATOR_FEATURE_TYPE, ModeratorFeature> {}

export const MODERATOR_FEATURE: ModeratorFeatures = {
  [MODERATOR_FEATURE_TYPE.series]: {
    name: MODERATOR_FEATURE_TYPE.series,
    moderatorCollection: ItemCollection.moderatorSeries,
    collection: ItemCollection.series,
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
  [MODERATOR_FEATURE_TYPE.episode]: {
    name: MODERATOR_FEATURE_TYPE.episode,
    moderatorCollection: ItemCollection.moderatorEpisode,
    collection: ItemCollection.episode,
    thumbnailRequirements: []
  }
};

export interface ModeratorRequirements
  extends Record<
    MODERATOR_FEATURE_TYPE,
    Record<MODERATOR_ACTION_TYPE, number>
  > {}

export const MODERATOR_REQUIREMENTS: ModeratorRequirements = {
  [MODERATOR_FEATURE_TYPE.series]: {
    [MODERATOR_ACTION_TYPE.add]: 1,
    [MODERATOR_ACTION_TYPE.edit]: 1,
    [MODERATOR_ACTION_TYPE.hide]: 1
  },
  [MODERATOR_FEATURE_TYPE.episode]: {
    [MODERATOR_ACTION_TYPE.add]: 1,
    [MODERATOR_ACTION_TYPE.edit]: 1,
    [MODERATOR_ACTION_TYPE.hide]: 1
  }
};
