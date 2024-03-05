/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./App.js",
   "./Screens/Signup.js", 
   "./Screens/Login.js", 
   "./Screens/Home.js",
   "./Screens/Gallery.js",
   "./Screens/Notifications.js",
   "./Screens/Components/Home/Carousels.js",
   "./Screens/Components/Home/Trendings.js",
   "./Screens/Components/Home/AllServices.js",
   
   "./Screens/Components/Gallery/ImageItem.js",
   "./Screens/Components/Home/AllServices/Jobs.js",
   "./Screens/Components/Home/AllServices/GetBill.js",
   "./Screens/Components/Home/AllServices/DailyMajduri.js",
   "./Screens/Components/Home/AllServices/Complaint.js",
   "./Screens/Components/Home/AllServices/Complaint/Pending.js",
   "./Screens/Components/Home/AllServices/Complaint/Resolved.js",
   "./Screens/Components/Home/AllServices/GetBill/BillCard.js",
   "./Screens/Components/Home/AllServices/GetBill/PaidHistory.js",
   "./Screens/Components/Home/AllServices/GetBill/Offers.js",
   "./Screens/Profile.js",
],
  theme: {
    extend: {},
  },
  plugins: [],
}