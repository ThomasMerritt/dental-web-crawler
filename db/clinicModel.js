import mongoose from 'mongoose';

const clinicScheme = new mongoose.Schema({
    clinicName: ({ type: String, required: true }),
    fullAddress: ({ type: String, required: true }),
    zipCode: ({ type: String, required: true }),
    acceptMedicaid: ({ type: Boolean, default: false }),
    affordabilitySuppot: ({ type: Boolean, default: false }),
    websiteURL: ({ type: String }),
    dataSource: ({ type: String }),
    county: ({ type: String }),
    medianIncome: ({ type: String }),
    incomeLevel: ({ type: String }),
    ruralUrbanClass: ({ type: String }),
    coordinates: {
        lat: ({ type: String }),
        lon: ({ type: String })
    }
}, {
    timestamps: true
});

export const Clinic = mongoose.model('Clinic', clinicScheme);