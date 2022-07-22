import { model, Model } from "mongoose"
import { User, UserSchema } from "models/user"


// Discriminators

export interface Database {
	User: Model<User>
}

export const db: Database = {
	User: model<User>("User", UserSchema),
}
