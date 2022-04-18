/**
 * Model Message
 *
 */
export type Message = {
	id: string;
	content: string;
	createdAt: Date;
	author: User;
	room: Room;
};

/**
 * Model User
 *
 */
export type User = {
	id: string;
	name: string;
	rooms: Room[];
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
	messages: Message[];
};
