export const enum ItemDeleteStatus {
	itemNotFound = "item-not-found",
	success = "success",
	featureNotFound = "feature-not-found",
	batchDeleteError = "batch-delete-error"
}

export interface ItemDeleteResponse {
	status: ItemDeleteStatus;
}
