export enum THUMBNAIL_MULTIPLIER {
	ExtraSmall = 5,
	Small = 10,
	Medium = 20,
	Large = 50,
	ExtraLarge = 100
}

function getEnumValues(Enum: any) {
	const keys = Object.keys(Enum).filter(k => typeof Enum[k as any] === "number"); // ["A", "B"]
	return keys.map(k => Enum[k as any]); // [0, 1]
}

export const THUMBNAIL_MULTIPLIERS: number[] = getEnumValues(THUMBNAIL_MULTIPLIER);