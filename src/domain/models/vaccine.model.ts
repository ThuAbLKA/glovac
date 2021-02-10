import mongoose, { Schema } from "mongoose";

const vaccineSchema: mongoose.Schema = new Schema(
	{
		name: {
			type: String
		},
		countryOfOrigin: {
			type: String
		},
		manufacturer: {
			type: String
		},
		dosage: {
			type: Number
		},
		extName: {
			type: String
		}
	}
);

const VaccineModel = mongoose.model('VACCINE', vaccineSchema);

export default VaccineModel;