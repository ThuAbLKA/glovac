import mongoose, { Schema } from "mongoose";

const authoritySchema: mongoose.Schema = new Schema(
	{
		name: {
			type: String
		},
		country: {
			type: String
		},
		address1: {
			type: String
		},
		address2: {
			type: String
		},
		zipCode: {
			type: Number
		},
		state: {
			type: String
		},
		city: {
			type: String
		},
		contactFax: {
			type: String
		},
		contactTel: {
			type: String
		},
		contactMobile: {
			type: String
		},
		validationUrl: {
			type: String
		}
	}
);

const AuthorityModel = mongoose.model('AUTHORITY', authoritySchema);

export default AuthorityModel;