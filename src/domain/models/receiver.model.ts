import mongoose, { Schema } from "mongoose";

const receiverSchema: mongoose.Schema = new Schema(
	{
		familyName: {
			type: String
		},
		givenNames: {
			type: String
		},
		contactNo: {
			type: String
		},
		address1: {
			type: String
		},
		address2: {
			type: String
		},
		state: {
			type: String
		},
		zipCode: {
			type: Number
		},
		city: {
			type: String
		},
		country: {
			type: String
		},
		travelDocType: {
			type: String
		},
		travelDocNo: {
			type: String
		},
		email: {
			type: String
		}
	}
);

const ReceiverModel = mongoose.model('RECEIVER', receiverSchema);

export default ReceiverModel;