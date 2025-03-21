const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const crypto = require('crypto');

// Initialize App
dotenv.config();
const app = express();
const port = process.env.PORT || 8070;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Generate a consistent secret key (store it securely in .env for production)
const secretKey = crypto.randomBytes(32).toString('hex');

// MongoDB Connection
const mongoURI = process.env.MONGODB_URL;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connection successful!');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

// Session Middleware
app.use(session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: mongoURI }),
}));

// Import Routes
const fertilizerRouter = require('./routes/Sudarshan/inventory_mgmt/fertilizers.js');
const dealerRouter = require('./routes/Sudarshan/dealer_acc_mgmt/dealers.js');
const farmerFeedbackRoutes = require("./routes/Veenath/farmerfeedbacks.js");
const farmerReportRoutes = require("./routes/Veenath/farmerReports.js");
const farmerRouter = require("./routes/Thisaravi/farmers.js");
const soilTestRouter = require("./routes/Thisaravi/soilTests.js");
const pdfRouter = require("./routes/Thisaravi/PDFRoutes.js");
const topFertilizer = require("./routes/Kande/TopFertilizerRoutes.js");
const topSellingSchema = require("./routes/Kande/TopSellingRoutes.js");
const topAreasSchema = require("./routes/Kande/TopAreasRoutes.js");
const userSchema = require("./routes/Kande/managerloginRoutes.js");
const adminRoutes = require('./routes/Kande/admin.js');
const labRouter = require("./routes/Oshini/lab_account/labAccounts.js");
const itemRouter = require('./routes/Lasindu/ItemR');
const orderRouter = require('./routes/Lasindu/OrderR');
const labSlotRouter = require("./routes/Oshini/lab_account/labSlots.js");
const testRequestRouter = require("./routes/Oshini/test_request/testRequests.js");
const dealerRoutes = require('./routes/Rahul/dealer.routes');
const farmerRoutes = require('./routes/Rahul/farmer.routes');
const labsRouter = require('./routes/Rahul/labs.js');
const dealerReportRouter = require('./routes/Rahul/dealersReport.js');
const replyRoutes = require('./routes/Rahul/reply.js');
const farmerReport = require('./routes/Rahul/farmerReport.js');
const countDealer = require('./routes/Rahul/countCealer.js');
const inquiryCount = require('./routes/Rahul/inquiryCount.js');
const profileRoutes = require('./routes/Rahul/Profile.js');
const labReportRouter = require("./routes/Oshini/test_request/labReports.js");
const articleRoutes = require('./routes/Nilupul/articleRoutes.js');

// Use Routes
app.use('/fertilizer', fertilizerRouter);
app.use('/dealer', dealerRouter);
app.use("/api/feedbacks", farmerFeedbackRoutes);
app.use("/api/reports/", farmerReportRoutes);
app.use("/Farmer", farmerRouter);
app.use("/SoilTest", soilTestRouter);
app.use('/pdfRouter', pdfRouter);
app.use("/topfertilizercategory", topFertilizer);
app.use("/topdealer", topSellingSchema);
app.use("/toparea", topAreasSchema);
app.use(userSchema);
app.use('/api/admin', adminRoutes);
app.use("/labAccount", labRouter);
app.use('/item', itemRouter);
app.use('/order', orderRouter);
app.use("/labSlot", labSlotRouter);
app.use("/testRequest", testRequestRouter);
app.use(dealerRoutes);
app.use(farmerRoutes);
app.use('/labs', labsRouter);
app.use("/farmerReport", dealerReportRouter);
app.use('/replies', replyRoutes);
app.use("/farmerReport", farmerReport);
app.use('/admin', adminRoutes);
app.use(countDealer);
app.use(inquiryCount);
app.use('/api/profile', profileRoutes);
app.use('/api/auth', adminRoutes);
app.use("/labReport", labReportRouter);
app.use('/api/articles', articleRoutes);

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
