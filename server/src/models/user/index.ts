import { Schema } from "mongoose"

export interface User {
	_id: string
	address: string
	nonce: string
	username: string
	about: string
	email: string
	receiveNotifications: boolean
	imageURL: string
	registered: boolean
}

export const UserSchema = new Schema(
	{
		_id: {
			type: String,
		},
		address: {
			type: String,
			required: true,
			unique: true,
			immutable: true,
		},
		nonce: {
			type: String,
		},
		username: {
			type: String,
		},
		email: {
			type: String,
		},
		about: {
			type: String,
		},
		imageURL: {
			type: String,
		},
		receiveNotifications: {
			type: Boolean,
			default: false,
			required: true,
		},
		registered: {
			type: Boolean,
			default: false,
			required: true,
		},
	},
	{ timestamps: {} }
)
