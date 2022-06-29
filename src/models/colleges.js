const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema( {  
    name: { type: String, 
		    unique: true,
			required: true },
	fullName: { type: String, 
		        unique: true,
				required: true },
	logoLink: { type: String,
	            required: true,
			     unique: true},
	isDeleted: {type: Boolean, 
	             default: false},
	interns: [{ type: objectId,
	           ref: 'colleges'}]



}, { timestamps: true });


module.exports = mongoose.model('colleges', userSchema)