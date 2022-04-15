/**
 * Model Message
 *
 */
export type Message = {
	id: string;
	content: string;
	createdAt: Date;
	authorId: string;
	roomId: string;
};

/**
 * Model User
 *
 */
export type User = {
	id: string;
	name: string;
};

/**
 * Model Room
 *
 */
export type Room = {
	id: string;
	name: string;
	description: string;
	createdAt: Date;
};
