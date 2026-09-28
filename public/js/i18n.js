/* ==========================================================================
   99infinity i18n — the whole site speaks the language the user picked.
   The SSR markup is English, so this runtime translates it in place with an
   exact-match + term dictionary and remembers the choice on the device
   (localStorage); the Worker also stores it on the user's own Firebase node,
   so it follows the account on every device.

   Usage:  VGI18N.apply(document.body)   → translate a fresh DOM subtree
           VGI18N.t('Play Now')          → translate a single string (toasts)
           VGI18N.setLang('hi')          → switch the whole site instantly
   ========================================================================== */
(function () {
  'use strict'

  var CODES = ['en', 'hi', 'ta', 'te']
  var NAMES = { en: 'English', hi: 'हिन्दी', ta: 'தமிழ்', te: 'తెలుగు' }
  var STORE_KEY = 'vg_lang'

  var DICTS = {}
  var TERMS = {}

  /* ---------------------------------------------------------------- hindi */
  DICTS.hi = {
    Home: 'होम',
    Activity: 'गतिविधि',
    Promotion: 'प्रोमोशन',
    Account: 'अकाउंट',
    Daily: 'डेली',
    Bonus: 'बोनस',
    Wallet: 'वॉलेट',
    Profile: 'प्रोफ़ाइल',
    Settings: 'सेटिंग्स',
    Language: 'भाषा',
    'About us': 'हमारे बारे में',
    'About Us': 'हमारे बारे में',
    'Security Center': 'सुरक्षा केंद्र',
    'Service center': 'सेवा केंद्र',
    'Customer service': 'ग्राहक सेवा',
    'Customer Service': 'ग्राहक सेवा',
    'Log out': 'लॉग आउट',
    'Log in': 'लॉग इन',
    Register: 'रजिस्टर',
    'Create account': 'अकाउंट बनाएं',
    'Create Account': 'अकाउंट बनाएं',
    'Forgot password': 'पासवर्ड भूल गए',
    'Forgot password?': 'पासवर्ड भूल गए?',
    'Remember me': 'मुझे याद रखें',
    'Reset password': 'पासवर्ड रीसेट करें',
    'Back to log in': 'लॉग इन पर वापस',
    'Already have an account?': 'पहले से अकाउंट है?',
    "Don't have an account?": 'अकाउंट नहीं है?',
    Continue: 'जारी रखें',
    Cancel: 'रद्द करें',
    Confirm: 'कन्फर्म करें',
    Done: 'हो गया',
    'Save Changes': 'बदलाव सेव करें',
    'Go Back': 'वापस जाएं',
    Close: 'बंद करें',
    Refresh: 'रिफ्रेश',
    'Send code': 'कोड भेजें',
    Submit: 'सबमिट करें',
    Next: 'आगे',
    Back: 'पीछे',
    'Play Now': 'अभी खेलें',
    'Join Now': 'अभी जुड़ें',
    'SPIN NOW': 'अभी स्पिन करें',
    'Claim Reward': 'रिवॉर्ड लें',
    'Got It': 'समझ गया',
    'Great, Thanks!': 'बहुत बढ़िया, धन्यवाद!',
    'Log in daily': 'रोज़ लॉग इन करें',
    'Login Streak': 'लॉगिन स्ट्रीक',
    'Streak Progress': 'स्ट्रीक प्रगति',
    'How It Works': 'यह कैसे काम करता है',
    'Daily Login Reward': 'डेली लॉगिन रिवॉर्ड',
    'Daily Reward': 'डेली रिवॉर्ड',
    'Daily Bonus': 'डेली बोनस',
    'Top Games': 'टॉप गेम्स',
    'Play and Win': 'खेलें और जीतें',
    Games: 'गेम्स',
    Popular: 'लोकप्रिय',
    Slots: 'स्लॉट्स',
    Fishing: 'फिशिंग',
    Lottery: 'लॉटरी',
    'Mini games': 'मिनी गेम्स',
    Casino: 'कसीनो',
    Sports: 'स्पोर्ट्स',
    Hot: 'हॉट',
    Jackpot: 'जैकपॉट',
    Event: 'इवेंट',
    Events: 'इवेंट्स',
    'Game Providers': 'गेम प्रोवाइडर',
    'Frequently asked questions': 'अक्सर पूछे जाने वाले सवाल',
    'No games matched your search.': 'कोई गेम नहीं मिला।',
    'No transactions found.': 'कोई ट्रांजैक्शन नहीं मिला।',
    'No activities available right now.': 'अभी कोई गतिविधि उपलब्ध नहीं है।',
    'No Notifications': 'कोई नोटिफिकेशन नहीं',
    'Comming Soon!': 'जल्द आ रहा है!',
    'Already Claimed!': 'पहले ही क्लेम कर चुके हैं!',
    'Total balance': 'कुल बैलेंस',
    'Available balance': 'उपलब्ध बैलेंस',
    Deposit: 'डिपॉज़िट',
    Withdraw: 'विदड्रॉ',
    'Deposit history': 'डिपॉज़िट हिस्ट्री',
    'Withdraw history': 'विदड्रॉ हिस्ट्री',
    'Transaction history': 'ट्रांजैक्शन हिस्ट्री',
    'Game History': 'गेम हिस्ट्री',
    'Bet history': 'बेट हिस्ट्री',
    Transaction: 'ट्रांजैक्शन',
    Bets: 'बेट्स',
    All: 'सभी',
    History: 'हिस्ट्री',
    Notifications: 'नोटिफिकेशन',
    Announcement: 'घोषणा',
    Gifts: 'गिफ्ट्स',
    'Invite Friends': 'दोस्तों को बुलाएं',
    'Refer & Earn': 'रेफर करें और कमाएं',
    'Personal information': 'पर्सनल जानकारी',
    Security: 'सुरक्षा',
    'Game statistics': 'गेम आंकड़े',
    'Payment methods': 'पेमेंट तरीके',
    'Bank Transfer': 'बैंक ट्रांसफर',
    'Account Holder Name': 'अकाउंट होल्डर का नाम',
    'Account Number': 'अकाउंट नंबर',
    'Confirm Account Number': 'अकाउंट नंबर दोबारा लिखें',
    'Bank Name': 'बैंक का नाम',
    'IFSC Code': 'IFSC कोड',
    'Expiry Date': 'एक्सपायरी डेट',
    'Card Number': 'कार्ड नंबर',
    'Name on Card': 'कार्ड पर लिखा नाम',
    'Wallet Address': 'वॉलेट एड्रेस',
    'Amount to Pay': 'देय राशि',
    'Proceed to Pay': 'पेमेंट करें',
    'How to Pay': 'पेमेंट कैसे करें',
    'Enter the exact amount': 'बिल्कुल यही राशि डालें',
    'Scan this QR with any UPI app': 'किसी भी UPI ऐप से यह QR स्कैन करें',
    'Open any UPI app': 'कोई भी UPI ऐप खोलें',
    'Payment Submitted!': 'पेमेंट जमा हो गया!',
    'Confirm Withdrawal': 'विदड्रॉ कन्फर्म करें',
    'Request withdrawal': 'विदड्रॉ रिक्वेस्ट करें',
    Nickname: 'निकनेम',
    'Email Address': 'ईमेल एड्रेस',
    'Phone Number': 'फ़ोन नंबर',
    'Phone number': 'फ़ोन नंबर',
    'Current Password': 'मौजूदा पासवर्ड',
    'New Password': 'नया पासवर्ड',
    'Confirm New Password': 'नया पासवर्ड दोबारा',
    Password: 'पासवर्ड',
    'Change Password': 'पासवर्ड बदलें',
    'Two-Factor Auth (2FA)': 'टू-फैक्टर ऑथ (2FA)',
    'Transaction PIN': 'ट्रांजैक्शन पिन',
    'Anti-Phishing Code': 'एंटी-फिशिंग कोड',
    'Active Devices': 'एक्टिव डिवाइस',
    'Push notifications': 'पुश नोटिफिकेशन',
    'Promotional messages': 'प्रोमोशनल मैसेज',
    'Login alerts': 'लॉगिन अलर्ट',
    'Sound & Vibration': 'साउंड और वाइब्रेशन',
    Off: 'बंद',
    Set: 'सेट',
    'Choose Your Avatar': 'अपना अवतार चुनें',
    'Edit Profile': 'प्रोफ़ाइल एडिट करें',
    'Last login:': 'पिछला लॉगिन:',
    'Enter a password': 'पासवर्ड लिखें',
    Amount: 'राशि',
    'Enter amount': 'राशि डालें',
    'Enter your nickname': 'अपना निकनेम लिखें',
    'Please log in to continue': 'जारी रखने के लिए लॉग इन करें',
    'Please log in to play': 'खेलने के लिए लॉग इन करें',
    'Please log in first': 'पहले लॉग इन करें',
    'Logged in successfully!': 'लॉग इन हो गया!',
    'Account created successfully!': 'अकाउंट बन गया!',
    'Profile updated successfully!': 'प्रोफ़ाइल सेव हो गई!',
    'Password changed successfully!': 'पासवर्ड बदल गया!',
    'You have been logged out successfully!': 'लॉग आउट हो गया!',
    'Language saved': 'भाषा सेव हो गई',
    'Language saved on this device': 'भाषा इस डिवाइस पर सेव हो गई',
    'Setting saved': 'सेटिंग सेव हो गई',
    'Network error, please try again': 'नेटवर्क एरर, दोबारा कोशिश करें',
    'Please Wait!': 'कृपया रुकें!',
    'Checking Your Information!': 'आपकी जानकारी चेक हो रही है!',
    'Better Luck Next Time': 'अगली बार किस्मत आज़माएं',
    'You Won!': 'आप जीत गए!',
    Congratulations: 'बधाई हो',
    'No luck this time. Come back tomorrow!': 'इस बार किस्मत नहीं, कल फिर आएं!',
    'Spin for Luck': 'किस्मत का स्पिन',
    'One spin could unlock your next big win.': 'एक स्पिन आपकी बड़ी जीत ला सकता है।',
    'Tap the button to spin the wheel!': 'व्हील घुमाने के लिए बटन दबाएं!',
    'Keep going!': 'लगे रहें!',
    'Login Marked!': 'लॉगिन दर्ज हो गया!',
    'Streak Complete!': 'स्ट्रीक पूरी!',
    'Free Game Claimed!': 'फ्री गेम क्लेम हो गया!',
    "Mark Today's Login": 'आज का लॉगिन दर्ज करें',
    'Login Marked Today': 'आज का लॉगिन दर्ज',
    'Days Completed': 'दिन पूरे',
    Days: 'दिन',
    Day: 'दिन',
    'Unlocked!': 'अनलॉक!',
    '30 Days': '30 दिन',
    '1 Device': '1 डिवाइस',
    Saved: 'सेव हो गया',
    Support: 'सपोर्ट',
    'Announcements and bonus codes': 'घोषणाएं और बोनस कोड',
    'My game history': 'मेरी गेम हिस्ट्री',
    'My transaction history': 'मेरी ट्रांजैक्शन हिस्ट्री',
    'My deposit history': 'मेरी डिपॉज़िट हिस्ट्री',
    'My withdraw history': 'मेरी विदड्रॉ हिस्ट्री',
    'Your Daily Bonus Awaits': 'आपका डेली बोनस तैयार है',
    'Log in today and claim free rewards instantly.':
      'आज लॉग इन करें और तुरंत फ्री रिवॉर्ड पाएं।',
    '1 Free Game / Day': '1 फ्री गेम / दिन',
    '1 Free Game every day': 'हर दिन 1 फ्री गेम',
    'All security measures are active': 'सभी सुरक्षा उपाय चालू हैं',
    'Your Account is Secure': 'आपका अकाउंट सुरक्षित है',
    'Terms of Service': 'सेवा की शर्तें',
    'Privacy Policy': 'प्राइवेसी पॉलिसी',
    'Terms & Conditions': 'नियम और शर्तें',
    Yes: 'हाँ',
    No: 'नहीं',
    UID: 'UID',
    'Last login': 'पिछला लॉगिन',
    'Clear cache': 'कैश साफ करें',
    'Log in now to participate': 'भाग लेने के लिए अभी लॉग इन करें',
    Recharge: 'रिचार्ज',
    'Total Deposit': 'कुल डिपॉज़िट',
    'Total Withdraw': 'कुल विदड्रॉ',
    Bet: 'बेट',
    Wager: 'वेजर',
    'Lucky Wheel': 'लकी व्हील',
    Search: 'खोजें',
    'Search games': 'गेम्स खोजें',
  }

  TERMS.hi = { Day: 'दिन', Days: 'दिन' }

  /* ---------------------------------------------------------------- tamil */
  DICTS.ta = {
    Home: 'முகப்பு',
    Activity: 'செயல்பாடு',
    Promotion: 'ப்ரொமோஷன்',
    Account: 'கணக்கு',
    Daily: 'தினசரி',
    Bonus: 'போனஸ்',
    Wallet: 'வாலட்',
    Profile: 'சுயவிவரம்',
    Settings: 'அமைப்புகள்',
    Language: 'மொழி',
    'About us': 'எங்களை பற்றி',
    'About Us': 'எங்களை பற்றி',
    'Security Center': 'பாதுகாப்பு மையம்',
    'Service center': 'சேவை மையம்',
    'Customer service': 'வாடிக்கையாளர் சேவை',
    'Customer Service': 'வாடிக்கையாளர் சேவை',
    'Log out': 'வெளியேறு',
    'Log in': 'உள்நுழை',
    Register: 'பதிவு',
    'Create account': 'கணக்கு உருவாக்கு',
    'Create Account': 'கணக்கு உருவாக்கு',
    'Forgot password': 'கடவுச்சொல் மறந்ததா',
    'Forgot password?': 'கடவுச்சொல் மறந்ததா?',
    'Remember me': 'என்னை நினைவில் வை',
    'Reset password': 'கடவுச்சொல்லை மீட்டமை',
    'Back to log in': 'உள்நுழைவுக்கு திரும்பு',
    'Already have an account?': 'ஏற்கனவே கணக்கு உள்ளதா?',
    "Don't have an account?": 'கணக்கு இல்லையா?',
    Continue: 'தொடர்',
    Cancel: 'ரத்து',
    Confirm: 'உறுதிப்படுத்து',
    Done: 'முடிந்தது',
    'Save Changes': 'மாற்றங்களை சேமி',
    'Go Back': 'பின்செல்',
    Close: 'மூடு',
    Refresh: 'புதுப்பி',
    'Send code': 'குறியீடு அனுப்பு',
    Submit: 'சமர்ப்பி',
    Next: 'அடுத்து',
    Back: 'பின்',
    'Play Now': 'இப்போது விளையாடு',
    'Join Now': 'இப்போது சேர்',
    'SPIN NOW': 'இப்போது சுழற்று',
    'Claim Reward': 'பரிசு பெறு',
    'Got It': 'புரிந்தது',
    'Great, Thanks!': 'அருமை, நன்றி!',
    'Log in daily': 'தினமும் உள்நுழைக',
    'Login Streak': 'உள்நுழைவு தொடர்',
    'Streak Progress': 'தொடர் முன்னேற்றம்',
    'How It Works': 'இது எப்படி வேலை செய்கிறது',
    'Daily Login Reward': 'தினசரி உள்நுழைவு பரிசு',
    'Daily Reward': 'தினசரி பரிசு',
    'Daily Bonus': 'தினசரி போனஸ்',
    'Top Games': 'சிறந்த விளையாட்டுகள்',
    'Play and Win': 'விளையாடி வெல்லுங்கள்',
    Games: 'விளையாட்டுகள்',
    Popular: 'பிரபலமானவை',
    Slots: 'ஸ்லாட்ஸ்',
    Fishing: 'மீன்பிடி',
    Lottery: 'லாட்டரி',
    'Mini games': 'மினி விளையாட்டுகள்',
    Casino: 'கேசினோ',
    Sports: 'விளையாட்டு',
    Hot: 'ஹாட்',
    Jackpot: 'ஜாக்பாட்',
    Event: 'நிகழ்வு',
    Events: 'நிகழ்வுகள்',
    'Game Providers': 'விளையாட்டு வழங்குநர்கள்',
    'Frequently asked questions': 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    'No games matched your search.': 'எந்த விளையாட்டும் கிடைக்கவில்லை.',
    'No transactions found.': 'பரிவர்த்தனைகள் இல்லை.',
    'No activities available right now.': 'இப்போது செயல்பாடுகள் இல்லை.',
    'No Notifications': 'அறிவிப்புகள் இல்லை',
    'Comming Soon!': 'விரைவில் வருகிறது!',
    'Already Claimed!': 'ஏற்கனவே பெற்றுவிட்டீர்கள்!',
    'Total balance': 'மொத்த இருப்பு',
    'Available balance': 'கிடைக்கும் இருப்பு',
    Deposit: 'வைப்பு',
    Withdraw: 'எடுப்பு',
    'Deposit history': 'வைப்பு வரலாறு',
    'Withdraw history': 'எடுப்பு வரலாறு',
    'Transaction history': 'பரிவர்த்தனை வரலாறு',
    'Game History': 'விளையாட்டு வரலாறு',
    'Bet history': 'பந்தய வரலாறு',
    Transaction: 'பரிவர்த்தனை',
    Bets: 'பந்தயங்கள்',
    All: 'அனைத்தும்',
    History: 'வரலாறு',
    Notifications: 'அறிவிப்புகள்',
    Announcement: 'அறிவிப்பு',
    Gifts: 'பரிசுகள்',
    'Invite Friends': 'நண்பர்களை அழை',
    'Refer & Earn': 'பரிந்துரைத்து சம்பாதி',
    'Personal information': 'தனிப்பட்ட தகவல்',
    Security: 'பாதுகாப்பு',
    'Game statistics': 'விளையாட்டு புள்ளிவிவரம்',
    'Payment methods': 'கட்டண முறைகள்',
    'Bank Transfer': 'வங்கி பரிமாற்றம்',
    'Account Holder Name': 'கணக்கு வைத்திருப்பவர் பெயர்',
    'Account Number': 'கணக்கு எண்',
    'Confirm Account Number': 'கணக்கு எண்ணை உறுதிப்படுத்து',
    'Bank Name': 'வங்கி பெயர்',
    'IFSC Code': 'IFSC குறியீடு',
    'Expiry Date': 'காலாவதி தேதி',
    'Card Number': 'அட்டை எண்',
    'Name on Card': 'அட்டையில் உள்ள பெயர்',
    'Wallet Address': 'வாலட் முகவரி',
    Nickname: 'புனைப்பெயர்',
    'Email Address': 'மின்னஞ்சல் முகவரி',
    'Phone Number': 'தொலைபேசி எண்',
    'Phone number': 'தொலைபேசி எண்',
    'Current Password': 'தற்போதைய கடவுச்சொல்',
    'New Password': 'புதிய கடவுச்சொல்',
    'Confirm New Password': 'புதிய கடவுச்சொல்லை உறுதிப்படுத்து',
    Password: 'கடவுச்சொல்',
    'Change Password': 'கடவுச்சொல்லை மாற்று',
    'Two-Factor Auth (2FA)': 'இரு-காரணி அங்கீகாரம் (2FA)',
    'Transaction PIN': 'பரிவர்த்தனை பின்',
    'Anti-Phishing Code': 'எதிர்-ஃபிஷிங் குறியீடு',
    'Active Devices': 'செயலில் உள்ள சாதனங்கள்',
    'Push notifications': 'புஷ் அறிவிப்புகள்',
    'Promotional messages': 'விளம்பர செய்திகள்',
    'Login alerts': 'உள்நுழைவு எச்சரிக்கைகள்',
    'Sound & Vibration': 'ஒலி மற்றும் அதிர்வு',
    Off: 'ஆஃப்',
    Set: 'அமை',
    'Choose Your Avatar': 'உங்கள் அவதாரை தேர்வு செய்யுங்கள்',
    'Edit Profile': 'சுயவிவரத்தை திருத்து',
    'Last login:': 'கடைசி உள்நுழைவு:',
    Amount: 'தொகை',
    'Enter amount': 'தொகையை உள்ளிடு',
    'Enter your nickname': 'உங்கள் புனைப்பெயரை உள்ளிடு',
    'Please log in to continue': 'தொடர உள்நுழையுங்கள்',
    'Please log in to play': 'விளையாட உள்நுழையுங்கள்',
    'Please log in first': 'முதலில் உள்நுழையுங்கள்',
    'Logged in successfully!': 'உள்நுழைவு வெற்றி!',
    'Account created successfully!': 'கணக்கு உருவாக்கப்பட்டது!',
    'Profile updated successfully!': 'சுயவிவரம் சேமிக்கப்பட்டது!',
    'Password changed successfully!': 'கடவுச்சொல் மாற்றப்பட்டது!',
    'You have been logged out successfully!': 'வெளியேறிவிட்டீர்கள்!',
    'Language saved': 'மொழி சேமிக்கப்பட்டது',
    'Setting saved': 'அமைப்பு சேமிக்கப்பட்டது',
    'Network error, please try again': 'நெட்வொர்க் பிழை, மீண்டும் முயற்சி செய்யுங்கள்',
    'Please Wait!': 'காத்திருங்கள்!',
    'Checking Your Information!': 'உங்கள் தகவல் சரிபார்க்கப்படுகிறது!',
    'Better Luck Next Time': 'அடுத்த முறை அதிர்ஷ்டம்',
    'You Won!': 'நீங்கள் வென்றீர்கள்!',
    'No luck this time. Come back tomorrow!': 'இந்த முறை அதிர்ஷ்டம் இல்லை. நாளை வாருங்கள்!',
    'Spin for Luck': 'அதிர்ஷ்ட சுழற்சி',
    'Tap the button to spin the wheel!': 'சக்கரத்தை சுழற்ற பொத்தானை தட்டுங்கள்!',
    'Keep going!': 'தொடருங்கள்!',
    'Login Marked!': 'உள்நுழைவு பதிவு!',
    'Streak Complete!': 'தொடர் முழுமை!',
    "Mark Today's Login": 'இன்றைய உள்நுழைவை பதிவு செய்',
    'Login Marked Today': 'இன்று உள்நுழைவு பதிவு',
    'Days Completed': 'நாட்கள் முடிந்தது',
    Days: 'நாட்கள்',
    Day: 'நாள்',
    'Unlocked!': 'திறக்கப்பட்டது!',
    '30 Days': '30 நாட்கள்',
    Saved: 'சேமிக்கப்பட்டது',
    Support: 'ஆதரவு',
    'Your Daily Bonus Awaits': 'உங்கள் தினசரி போனஸ் காத்திருக்கிறது',
    '1 Free Game / Day': '1 இலவச விளையாட்டு / நாள்',
    '1 Free Game every day': 'தினமும் 1 இலவச விளையாட்டு',
    'Your Account is Secure': 'உங்கள் கணக்கு பாதுகாப்பானது',
    'Terms of Service': 'சேவை விதிமுறைகள்',
    'Privacy Policy': 'தனியுரிமைக் கொள்கை',
    Yes: 'ஆம்',
    No: 'இல்லை',
    'Clear cache': 'கேஷ் அழி',
    'Lucky Wheel': 'லக்கி சக்கரம்',
    Search: 'தேடு',
    'Search games': 'விளையாட்டுகளை தேடு',
    'My game history': 'எனது விளையாட்டு வரலாறு',
    'My transaction history': 'எனது பரிவர்த்தனை வரலாறு',
    'My deposit history': 'எனது வைப்பு வரலாறு',
    'My withdraw history': 'எனது எடுப்பு வரலாறு',
  }

  TERMS.ta = { Day: 'நாள்', Days: 'நாட்கள்' }

  /* --------------------------------------------------------------- telugu */
  DICTS.te = {
    Home: 'హోమ్',
    Activity: 'యాక్టివిటీ',
    Promotion: 'ప్రమోషన్',
    Account: 'అకౌంట్',
    Daily: 'డైలీ',
    Bonus: 'బోనస్',
    Wallet: 'వాలెట్',
    Profile: 'ప్రొఫైల్',
    Settings: 'సెట్టింగ్స్',
    Language: 'భాష',
    'About us': 'మా గురించి',
    'About Us': 'మా గురించి',
    'Security Center': 'భద్రతా కేంద్రం',
    'Service center': 'సేవా కేంద్రం',
    'Customer service': 'కస్టమర్ సేవ',
    'Customer Service': 'కస్టమర్ సేవ',
    'Log out': 'లాగ్ అవుట్',
    'Log in': 'లాగిన్',
    Register: 'రిజిస్టర్',
    'Create account': 'అకౌంట్ సృష్టించండి',
    'Create Account': 'అకౌంట్ సృష్టించండి',
    'Forgot password': 'పాస్‌వర్డ్ మర్చిపోయారా',
    'Forgot password?': 'పాస్‌వర్డ్ మర్చిపోయారా?',
    'Remember me': 'నన్ను గుర్తుంచుకో',
    'Reset password': 'పాస్‌వర్డ్ రీసెట్ చేయండి',
    'Back to log in': 'లాగిన్‌కి తిరిగి',
    'Already have an account?': 'ఇప్పటికే అకౌంట్ ఉందా?',
    "Don't have an account?": 'అకౌంట్ లేదా?',
    Continue: 'కొనసాగించు',
    Cancel: 'రద్దు',
    Confirm: 'నిర్ధారించు',
    Done: 'పూర్తయింది',
    'Save Changes': 'మార్పులు సేవ్ చేయి',
    'Go Back': 'వెనక్కి వెళ్లు',
    Close: 'మూసివేయి',
    Refresh: 'రిఫ్రెష్',
    'Send code': 'కోడ్ పంపు',
    Submit: 'సమర్పించు',
    Next: 'తదుపరి',
    Back: 'వెనుక',
    'Play Now': 'ఇప్పుడే ఆడండి',
    'Join Now': 'ఇప్పుడే చేరండి',
    'SPIN NOW': 'ఇప్పుడే స్పిన్',
    'Claim Reward': 'రివార్డ్ పొందండి',
    'Got It': 'అర్థమైంది',
    'Great, Thanks!': 'చాలా బాగుంది, ధన్యవాదాలు!',
    'Log in daily': 'రోజూ లాగిన్ చేయండి',
    'Login Streak': 'లాగిన్ స్ట్రీక్',
    'Streak Progress': 'స్ట్రీక్ పురోగతి',
    'How It Works': 'ఇది ఎలా పనిచేస్తుంది',
    'Daily Login Reward': 'డైలీ లాగిన్ రివార్డ్',
    'Daily Reward': 'డైలీ రివార్డ్',
    'Daily Bonus': 'డైలీ బోనస్',
    'Top Games': 'టాప్ గేమ్స్',
    'Play and Win': 'ఆడండి గెలవండి',
    Games: 'గేమ్స్',
    Popular: 'పాపులర్',
    Slots: 'స్లాట్స్',
    Fishing: 'ఫిషింగ్',
    Lottery: 'లాటరీ',
    'Mini games': 'మినీ గేమ్స్',
    Casino: 'క్యాసినో',
    Sports: 'స్పోర్ట్స్',
    Hot: 'హాట్',
    Jackpot: 'జాక్‌పాట్',
    Event: 'ఈవెంట్',
    Events: 'ఈవెంట్స్',
    'Game Providers': 'గేమ్ ప్రొవైడర్స్',
    'Frequently asked questions': 'తరచుగా అడిగే ప్రశ్నలు',
    'No games matched your search.': 'ఏ గేమ్ దొరకలేదు.',
    'No transactions found.': 'ట్రాన్సాక్షన్‌లు లేవు.',
    'No activities available right now.': 'ఇప్పుడు ఏ యాక్టివిటీ లేదు.',
    'No Notifications': 'నోటిఫికేషన్‌లు లేవు',
    'Comming Soon!': 'త్వరలో వస్తుంది!',
    'Already Claimed!': 'ఇప్పటికే క్లెయిమ్ చేశారు!',
    'Total balance': 'మొత్తం బ్యాలెన్స్',
    'Available balance': 'అందుబాటు బ్యాలెన్స్',
    Deposit: 'డిపాజిట్',
    Withdraw: 'విత్‌డ్రా',
    'Deposit history': 'డిపాజిట్ హిస్టరీ',
    'Withdraw history': 'విత్‌డ్రా హిస్టరీ',
    'Transaction history': 'ట్రాన్సాక్షన్ హిస్టరీ',
    'Game History': 'గేమ్ హిస్టరీ',
    'Bet history': 'బెట్ హిస్టరీ',
    Transaction: 'ట్రాన్సాక్షన్',
    Bets: 'బెట్స్',
    All: 'అన్నీ',
    History: 'హిస్టరీ',
    Notifications: 'నోటిఫికేషన్‌లు',
    Announcement: 'ప్రకటన',
    Gifts: 'గిఫ్ట్‌లు',
    'Invite Friends': 'స్నేహితులను ఆహ్వానించండి',
    'Refer & Earn': 'రెఫర్ చేసి సంపాదించండి',
    'Personal information': 'వ్యక్తిగత సమాచారం',
    Security: 'భద్రత',
    'Game statistics': 'గేమ్ గణాంకాలు',
    'Payment methods': 'పేమెంట్ పద్ధతులు',
    'Bank Transfer': 'బ్యాంక్ ట్రాన్స్ఫర్',
    'Account Holder Name': 'అకౌంట్ హోల్డర్ పేరు',
    'Account Number': 'అకౌంట్ నంబర్',
    'Confirm Account Number': 'అకౌంట్ నంబర్ నిర్ధారించండి',
    'Bank Name': 'బ్యాంక్ పేరు',
    'IFSC Code': 'IFSC కోడ్',
    'Expiry Date': 'ఎక్స్పైరీ తేదీ',
    'Card Number': 'కార్డ్ నంబర్',
    'Name on Card': 'కార్డ్పై పేరు',
    'Wallet Address': 'వాలెట్ అడ్రస్',
    Nickname: 'నిక్నేమ్',
    'Email Address': 'ఈమెయిల్ అడ్రస్',
    'Phone Number': 'ఫోన్ నంబర్',
    'Phone number': 'ఫోన్ నంబర్',
    'Current Password': 'ప్రస్తుత పాస్వర్డ్',
    'New Password': 'కొత్త పాస్వర్డ్',
    'Confirm New Password': 'కొత్త పాస్వర్డ్ నిర్ధారించండి',
    Password: 'పాస్వర్డ్',
    'Change Password': 'పాస్వర్డ్ మార్చండి',
    'Two-Factor Auth (2FA)': 'టూ-ఫ్యాక్టర్ ఆథ్ (2FA)',
    'Transaction PIN': 'ట్రాన్సాక్షన్ పిన్',
    'Anti-Phishing Code': 'యాంటీ-ఫిషింగ్ కోడ్',
    'Active Devices': 'యాక్టివ్ డివైసెస్',
    'Push notifications': 'పుష్ నోటిఫికేషన్లు',
    'Promotional messages': 'ప్రమోషనల్ మెసేజ్లు',
    'Login alerts': 'లాగిన్ అలర్ట్లు',
    'Sound & Vibration': 'సౌండ్ & వైబ్రేషన్',
    Off: 'ఆఫ్',
    Set: 'సెట్',
    'Choose Your Avatar': 'మీ అవతార్ ఎంచుకోండి',
    'Edit Profile': 'ప్రొఫైల్ ఎడిట్ చేయండి',
    'Last login:': 'చివరి లాగిన్:',
    Amount: 'మొత్తం',
    'Enter amount': 'మొత్తం నమోదు చేయండి',
    'Enter your nickname': 'మీ నిక్నేమ్ నమోదు చేయండి',
    'Please log in to continue': 'కొనసాగించడానికి లాగిన్ చేయండి',
    'Please log in to play': 'ఆడటానికి లాగిన్ చేయండి',
    'Please log in first': 'ముందుగా లాగిన్ చేయండి',
    'Logged in successfully!': 'లాగిన్ విజయవంతం!',
    'Account created successfully!': 'అకౌంట్ సృష్టించబడింది!',
    'Profile updated successfully!': 'ప్రొఫైల్ సేవ్ అయింది!',
    'Password changed successfully!': 'పాస్వర్డ్ మారింది!',
    'You have been logged out successfully!': 'లాగ్ అవుట్ అయ్యారు!',
    'Language saved': 'భాష సేవ్ అయింది',
    'Setting saved': 'సెట్టింగ్ సేవ్ అయింది',
    'Network error, please try again': 'నెట్వర్క్ లోపం, మళ్లీ ప్రయత్నించండి',
    'Please Wait!': 'దయచేసి వేచి ఉండండి!',
    'Checking Your Information!': 'మీ సమాచారం తనిఖీ అవుతోంది!',
    'Better Luck Next Time': 'తదుపరిసారి అదృష్టం',
    'You Won!': 'మీరు గెలిచారు!',
    'No luck this time. Come back tomorrow!': 'ఈసారి అదృష్టం లేదు. రేపు రండి!',
    'Spin for Luck': 'అదృష్ట స్పిన్',
    'Tap the button to spin the wheel!': 'చక్రం తిప్పడానికి బటన్ నొక్కండి!',
    'Keep going!': 'కొనసాగించండి!',
    'Login Marked!': 'లాగిన్ నమోదైంది!',
    'Streak Complete!': 'స్ట్రీక్ పూర్తయింది!',
    "Mark Today's Login": 'ఈ రోజు లాగిన్ నమోదు చేయండి',
    'Login Marked Today': 'ఈ రోజు లాగిన్ నమోదైంది',
    'Days Completed': 'రోజులు పూర్తయ్యాయి',
    Days: 'రోజులు',
    Day: 'రోజు',
    'Unlocked!': 'అన్లాక్!',
    '30 Days': '30 రోజులు',
    Saved: 'సేవ్ అయింది',
    Support: 'సపోర్ట్',
    'Your Daily Bonus Awaits': 'మీ డైలీ బోనస్ సిద్ధంగా ఉంది',
    '1 Free Game / Day': '1 ఫ్రీ గేమ్ / రోజు',
    '1 Free Game every day': 'రోజూ 1 ఫ్రీ గేమ్',
    'Your Account is Secure': 'మీ అకౌంట్ సురక్షితం',
    'Terms of Service': 'సేవా నిబంధనలు',
    'Privacy Policy': 'ప్రైవసీ పాలసీ',
    Yes: 'అవును',
    No: 'కాదు',
    'Clear cache': 'క్యాష్ క్లియర్',
    'Lucky Wheel': 'లక్కీ వీల్',
    Search: 'వెతకండి',
    'Search games': 'గేమ్స్ వెతకండి',
    'My game history': 'నా గేమ్ హిస్టరీ',
    'My transaction history': 'నా ట్రాన్సాక్షన్ హిస్టరీ',
    'My deposit history': 'నా డిపాజిట్ హిస్టరీ',
    'My withdraw history': 'నా విత్డ్రా హిస్టరీ',
  }

  TERMS.te = { Day: 'రోజు', Days: 'రోజులు' }

  /* ==========================================================================
     EXTRA VOCABULARY — everything the first pass did not cover yet:
     promotions, activity rules, the daily-reward explainer, deposit steps,
     support, security tools, legal copy and every message the app writes at
     runtime. Kept as separate assignments so the base dictionaries above stay
     readable.
     ========================================================================== */

  /* ------------------------------------------------------------ hindi (extra) */
  Object.assign(DICTS.hi, {
    'View All': 'सभी देखें',
    'Winning information': 'जीत की जानकारी',
    'Get ₹500': '₹500 पाएं',
    'Guest User': 'गेस्ट यूज़र',
    'Log in to participate': 'भाग लेने के लिए लॉग इन करें',
    Devices: 'डिवाइस',
    Device: 'डिवाइस',
    device: 'डिवाइस',
    devices: 'डिवाइस',
    Week: 'सप्ताह',
    Complete: 'पूरे करें',
    'more day': 'और दिन',
    'more days': 'और दिन',
    'to unlock daily free games.': 'डेली फ्री गेम अनलॉक करने के लिए।',
    'You won': 'आपने जीते',
    '1 Free Game': '1 फ्री गेम',
    'Your balance is updated instantly!': 'आपका बैलेंस तुरंत अपडेट हो गया है!',
    'Next spin unlocks at 4:00 AM': 'अगला स्पिन 4:00 AM पर खुलेगा',
    'Spinning — good luck!': 'स्पिन चल रहा है — शुभकामनाएं!',
    'Lucky Wheel is temporarily unavailable.': 'लकी व्हील अभी उपलब्ध नहीं है।',
    'Could not spin right now': 'अभी स्पिन नहीं हो सका',
    BETTER: 'बेहतर',
    LUCK: 'किस्मत',
    FREE: 'फ्री',
    PLAY: 'प्ले',

    /* promo + activity */
    'Welcome Bonus': 'वेलकम बोनस',
    'Double your first deposit up to ₹5,000.': 'पहली डिपॉज़िट पर ₹5,000 तक डबल बोनस।',
    'Daily Reload': 'डेली रीलोड',
    'Top up any day and get 20% extra.': 'किसी भी दिन टॉप-अप करें और 20% अतिरिक्त पाएं।',
    'Earn up to 30% commission per friend.': 'हर दोस्त पर 30% तक कमीशन पाएं।',
    'Weekend Cashback': 'वीकेंड कैशबैक',
    'Up to 10% cashback on weekend losses.': 'वीकेंड के नुकसान पर 10% तक कैशबैक।',
    'VIP Exclusive': 'VIP एक्सक्लूसिव',
    'Personal manager, higher limits and faster payouts.': 'पर्सनल मैनेजर, ज़्यादा लिमिट और तेज़ पेआउट।',
    'Super Jackpot': 'सुपर जैकपॉट',
    'When you win a super jackpot, you will receive additional rewards':
      'सुपर जैकपॉट जीतने पर आपको अतिरिक्त रिवॉर्ड मिलते हैं',
    'Dragon Streak': 'ड्रैगन स्ट्रीक',
    'Ride the winning streak for extra cash rewards.':
      'जीत की स्ट्रीक पर चलें और अतिरिक्त कैश रिवॉर्ड पाएं।',
    'VIP Wheel': 'VIP व्हील',
    'Exclusive spins for VIP members with bigger prizes.':
      'VIP सदस्यों के लिए बड़े इनाम के साथ खास स्पिन।',
    'Log in every day and claim free rewards instantly.':
      'हर दिन लॉग इन करें और तुरंत फ्री रिवॉर्ड पाएं।',
    'Earn commission for every friend who joins and plays.':
      'हर दोस्त के जुड़ने और खेलने पर कमीशन पाएं।',
    'Activity Rules': 'एक्टिविटी नियम',
    'How do I claim the reward?': 'रिवॉर्ड कैसे क्लेम करें?',
    'Log in and tap the claim button on the activity page. The reward is credited instantly to your main wallet.':
      'लॉग इन करें और एक्टिविटी पेज पर क्लेम बटन दबाएं। रिवॉर्ड तुरंत आपके मेन वॉलेट में जुड़ जाता है।',
    'Is there a turnover requirement?': 'क्या टर्नओवर की शर्त है?',
    'Yes. Each bonus carries a turnover requirement which is shown on the activity card before you claim.':
      'हाँ। हर बोनस पर टर्नओवर की शर्त होती है, जो क्लेम करने से पहले एक्टिविटी कार्ड पर दिखाई जाती है।',
    'Can I participate more than once?': 'क्या मैं एक से ज़्यादा बार भाग ले सकता हूं?',
    'Most activities run on a fixed cycle (daily, weekly or per event). Check the activity detail for the reset period.':
      'ज़्यादातर एक्टिविटी तय चक्र पर चलती हैं (रोज़, साप्ताहिक या इवेंट के हिसाब से)। रीसेट अवधि के लिए एक्टिविटी डिटेल देखें।',
    'Rewards are credited automatically to your wallet once the activity requirements are met.':
      'एक्टिविटी की शर्तें पूरी होते ही रिवॉर्ड अपने आप आपके वॉलेट में जुड़ जाता है।',
    'Please read the activity rules carefully before participating.':
      'भाग लेने से पहले एक्टिविटी नियम ध्यान से पढ़ें।',

    /* daily reward explainer */
    'View Full 30-Day Calendar': 'पूरा 30-दिन का कैलेंडर देखें',
    'Hide Full Calendar': 'कैलेंडर छिपाएं',
    'to build your streak. Each day counts toward your 7-day goal.':
      'अपनी स्ट्रीक बनाने के लिए। हर दिन आपके 7-दिन के लक्ष्य में गिना जाता है।',
    'No reward during days 1–7.': 'दिन 1–7 में कोई रिवॉर्ड नहीं।',
    'The first 7 days are just to build the streak. Stay consistent!':
      'पहले 7 दिन सिर्फ स्ट्रीक बनाने के लिए हैं। लगातार बने रहें!',
    'Miss a day = streak resets': 'एक दिन छूटा = स्ट्रीक रीसेट',
    "back to Day 1. So don't skip a day.": 'वापस दिन 1 पर। इसलिए एक भी दिन मत छोड़ें।',
    'Complete 7 days': '7 दिन पूरे करें',
    'to unlock the special reward.': 'खास रिवॉर्ड अनलॉक करने के लिए।',
    'After 7 days:': '7 दिन के बाद:',
    'Once your 7-day login streak is complete, you will get':
      'जब आपकी 7-दिन की लॉगिन स्ट्रीक पूरी हो जाएगी, तो आपको मिलेगा',
    '1 Free Game every day': 'हर दिन 1 फ्री गेम',
    '— as long as you keep logging in daily.': '— जब तक आप रोज़ लॉग इन करते रहेंगे।',
    'Streak Building': 'स्ट्रीक बनाना',
    'Free Game Daily': 'रोज़ फ्री गेम',
    'You get 1 Free Game every day — keep logging in!':
      'आपको हर दिन 1 फ्री गेम मिलता है — रोज़ लॉग इन करते रहें!',
    'You have unlocked 1 Free Game per day.': 'आपने हर दिन 1 फ्री गेम अनलॉक कर लिया है।',
    'Enjoy your daily free game. Come back tomorrow!': 'अपना डेली फ्री गेम खेलें। कल फिर आएं!',
    'Your streak broke — Day 1 starts again': 'आपकी स्ट्रीक टूट गई — फिर से दिन 1 शुरू',

    /* deposit flow */
    'Complete payment within': 'इतने समय में पेमेंट पूरी करें',
    'QR Code Here': 'यहां QR कोड',
    '— Paytm, PhonePe, GPay, or your bank app.':
      '— Paytm, PhonePe, GPay या अपना बैंक ऐप।',
    'Scan the QR code': 'QR कोड स्कैन करें',
    'shown above.': 'ऊपर दिखाया गया है।',
    'and complete the payment.': 'और पेमेंट पूरी करें।',
    'Wait for payment confirmation': 'पेमेंट कन्फर्मेशन का इंतज़ार करें',
    'in your UPI app.': 'अपने UPI ऐप में।',
    'Come back here and tap': 'यहां वापस आकर दबाएं',
    'Verify Payment': 'पेमेंट वेरिफाई करें',
    'below.': 'नीचे।',
    'Your balance will be credited within': 'आपका बैलेंस इतने समय में जुड़ जाएगा',
    '10 minutes': '10 मिनट',
    'after verification.': 'वेरिफिकेशन के बाद।',
    'Cancel & Go Back': 'रद्द करें और वापस जाएं',
    "We're verifying your payment. Your balance will be credited within 10 minutes.":
      'हम आपका पेमेंट वेरिफाई कर रहे हैं। बैलेंस 10 मिनट में जुड़ जाएगा।',
    'Verifying...': 'वेरिफाई हो रहा है...',
    'Minimum deposit is ₹100': 'न्यूनतम डिपॉज़िट ₹100 है',
    'Please enter a valid amount': 'सही राशि डालें',
    'Payment Submitted!': 'पेमेंट सबमिट हो गया!',
    'Great, Thanks!': 'बहुत बढ़िया, धन्यवाद!',

    /* auth */
    'Welcome back — sign in to continue playing':
      'वापसी पर स्वागत है — खेलना जारी रखने के लिए लॉग इन करें',
    'Create an account and claim your welcome bonus':
      'अकाउंट बनाएं और अपना वेलकम बोनस पाएं',
    'Create password': 'पासवर्ड बनाएं',
    'Confirm password': 'पासवर्ड दोबारा लिखें',
    'Invitation code (optional)': 'इनविटेशन कोड (वैकल्पिक)',
    'I am 18+ and I agree to the': 'मैं 18+ हूं और मैं इनसे सहमत हूं',
    'Enter your registered phone number and we will send you a reset code.':
      'अपना रजिस्टर्ड फ़ोन नंबर डालें, हम आपको रीसेट कोड भेजेंगे।',
    'Verification code': 'वेरिफिकेशन कोड',
    'Verification code sent': 'वेरिफिकेशन कोड भेज दिया',
    'Remembered it?': 'याद आ गया?',
    'Passwords do not match': 'पासवर्ड मेल नहीं खाते',
    'Enter a valid 10-digit phone number': 'सही 10 अंकों का फ़ोन नंबर डालें',
    'Password must be at least 6 characters': 'पासवर्ड कम से कम 6 अक्षर का होना चाहिए',
    'Password must be at least 8 characters': 'पासवर्ड कम से कम 8 अक्षर का होना चाहिए',
    'Please accept the terms to continue': 'जारी रखने के लिए शर्तें स्वीकार करें',
    'Something went wrong, try again': 'कुछ गलत हो गया, दोबारा कोशिश करें',
    'Password reset is handled by customer support': 'पासवर्ड रीसेट ग्राहक सेवा संभालती है',
    'No account found with this phone number': 'इस फ़ोन नंबर से कोई अकाउंट नहीं मिला',
    'Incorrect password': 'पासवर्ड गलत है',
    'This phone number is already registered': 'यह फ़ोन नंबर पहले से रजिस्टर्ड है',
    'Account data not found, contact support': 'अकाउंट डेटा नहीं मिला, सपोर्ट से संपर्क करें',
    'Enter your phone number and password': 'फ़ोन नंबर और पासवर्ड डालें',
    'Your Account Is Suspended!': 'आपका अकाउंट सस्पेंड है!',
    'Your Account Is Under Investigation!': 'आपके अकाउंट की जांच चल रही है!',
    'Your account is restricted': 'आपका अकाउंट प्रतिबंधित है',
    'Could not create account, please try again': 'अकाउंट नहीं बन सका, दोबारा कोशिश करें',
    'Logged out': 'लॉग आउट हो गया',

    /* support + messages + 404 */
    'Live chat': 'लाइव चैट',
    'Average reply under 2 minutes': 'औसतन 2 मिनट से कम में जवाब',
    'Email support': 'ईमेल सपोर्ट',
    'Telegram channel': 'टेलीग्राम चैनल',
    'Announcements and bonus codes': 'घोषणाएं और बोनस कोड',
    'Chat with us directly': 'हमसे सीधे चैट करें',
    'How do I create an account?': 'अकाउंट कैसे बनाएं?',
    'Tap Register in the top bar, enter your phone number and a password, then confirm. Registration takes less than a minute.':
      'ऊपर रजिस्टर दबाएं, फ़ोन नंबर और पासवर्ड डालें, फिर कन्फर्म करें। रजिस्ट्रेशन एक मिनट से भी कम में हो जाता है।',
    'How long do withdrawals take?': 'विदड्रॉ में कितना समय लगता है?',
    'Most withdrawals are processed within 1–30 minutes. Bank transfers may take longer on weekends.':
      'ज़्यादातर विदड्रॉ 1–30 मिनट में प्रोसेस हो जाते हैं। वीकेंड पर बैंक ट्रांसफर में थोड़ा ज़्यादा समय लग सकता है।',
    'Is my data safe?': 'क्या मेरा डेटा सुरक्षित है?',
    'Yes. All traffic is encrypted and your password is stored using one-way hashing. We never share your data with third parties.':
      'हाँ। पूरा ट्रैफिक एन्क्रिप्टेड है और आपका पासवर्ड वन-वे हैशिंग से सेव होता है। हम आपका डेटा किसी तीसरे पक्ष से साझा नहीं करते।',
    'What is the minimum deposit?': 'न्यूनतम डिपॉज़िट कितना है?',
    'The minimum deposit is ₹100. There is no maximum limit on most payment methods.':
      'न्यूनतम डिपॉज़िट ₹100 है। ज़्यादातर पेमेंट तरीकों पर कोई अधिकतम सीमा नहीं है।',
    '— No more notifications —': '— और नोटिफिकेशन नहीं —',
    "You're all caught up! Check back later for new updates and rewards.":
      'आप सब देख चुके हैं! नए अपडेट और रिवॉर्ड के लिए बाद में फिर देखें।',
    'Welcome to 99infinity': '99infinity में आपका स्वागत है',
    'Daily Bonus Awaits': 'डेली बोनस तैयार है',
    'Log in today and claim free rewards instantly. Rewards are credited automatically to your wallet once the daily check-in is confirmed.':
      'आज लॉग इन करें और तुरंत फ्री रिवॉर्ड पाएं। डेली चेक-इन कन्फर्म होते ही रिवॉर्ड अपने आप वॉलेट में जुड़ जाता है।',
    'Super Jackpot Event': 'सुपर जैकपॉट इवेंट',
    'When you win a super jackpot, you will receive additional rewards. Join the event and stand a chance to win extra prizes on top of your jackpot payout.':
      'सुपर जैकपॉट जीतने पर आपको अतिरिक्त रिवॉर्ड मिलते हैं। इवेंट में शामिल हों और जैकपॉट के अलावा अतिरिक्त इनाम जीतने का मौका पाएं।',
    'The page you are looking for does not exist.': 'जिस पेज को आप ढूंढ रहे हैं वह मौजूद नहीं है।',
    'Back to home': 'होम पर वापस',

    /* security tools */
    'Choose a strong password to keep your account safe. Password should be at least 8 characters long with a mix of letters, numbers, and symbols.':
      'अकाउंट सुरक्षित रखने के लिए मज़बूत पासवर्ड चुनें। पासवर्ड कम से कम 8 अक्षर का होना चाहिए और उसमें अक्षर, अंक और सिंबल का मेल हो।',
    'Current Password': 'मौजूदा पासवर्ड',
    'New Password': 'नया पासवर्ड',
    'Confirm New Password': 'नया पासवर्ड दोबारा लिखें',
    'Update Password': 'पासवर्ड अपडेट करें',
    'Enter current password': 'मौजूदा पासवर्ड डालें',
    'Enter new password': 'नया पासवर्ड डालें',
    'Re-enter new password': 'नया पासवर्ड दोबारा डालें',
    'Weak password': 'कमज़ोर पासवर्ड',
    'Medium strength': 'मध्यम सुरक्षा',
    'Strong password': 'मज़बूत पासवर्ड',
    'Very strong password': 'बहुत मज़बूत पासवर्ड',
    'Could not change password': 'पासवर्ड बदला नहीं जा सका',
    'Please enter your current password': 'कृपया मौजूदा पासवर्ड डालें',
    'Add an extra layer of security to your account. Scan the QR code with':
      'अपने अकाउंट में सुरक्षा की एक और परत जोड़ें। QR कोड स्कैन करें',
    'app.': 'ऐप से।',
    'QR CODE': 'QR कोड',
    'Open your authenticator app and tap the': 'अपना ऑथेंटिकेटर ऐप खोलें और दबाएं',
    'icon.': 'आइकन।',
    'Scan the QR code above, or enter this code manually:':
      'ऊपर दिया QR कोड स्कैन करें, या यह कोड मैन्युअली डालें:',
    'Enter the 6-digit code from your app to verify.':
      'वेरिफाई करने के लिए ऐप से 6 अंकों का कोड डालें।',
    'Enter 6-digit code': '6 अंकों का कोड डालें',
    'Verify & Enable 2FA': '2FA वेरिफाई करके चालू करें',
    'Set a 4-digit PIN to secure all your transactions. You will need to enter this PIN every time you withdraw funds.':
      'सभी ट्रांजैक्शन सुरक्षित रखने के लिए 4 अंकों का PIN सेट करें। हर बार पैसे निकालते समय यह PIN डालना होगा।',
    'Enter your PIN': 'अपना PIN डालें',
    "Choose a 4-digit code you'll remember": '4 अंकों का कोड चुनें जो आपको याद रहे',
    'Confirm your PIN': 'अपना PIN दोबारा डालें',
    'Re-enter the same 4-digit code': 'वही 4 अंकों का कोड दोबारा डालें',
    'PIN set successfully!': 'PIN सेट हो गया!',
    'PINs do not match. Try again.': 'PIN मेल नहीं खाते। दोबारा कोशिश करें।',
    'Active Devices': 'एक्टिव डिवाइस',
    'You are currently logged in on': 'आप अभी इन पर लॉग इन हैं',
    'If you see any unfamiliar device, log it out immediately.':
      'कोई अनजान डिवाइस दिखे तो उसे तुरंत लॉग आउट करें।',
    'Current': 'मौजूदा',
    'This device': 'यह डिवाइस',
    'Logout': 'लॉग आउट',
    'Log out from all other devices': 'अन्य सभी डिवाइस से लॉग आउट करें',
    'No other devices are signed in.': 'कोई अन्य डिवाइस लॉग इन नहीं है।',
    'Unknown location': 'अज्ञात लोकेशन',
    'Browser': 'ब्राउज़र',
    'Device logged out successfully!': 'डिवाइस लॉग आउट हो गया!',
    'Logged out from this device': 'इस डिवाइस से लॉग आउट हो गया',
    'Logged out from all other devices': 'अन्य सभी डिवाइस से लॉग आउट हो गया',
    'No other devices to log out': 'लॉग आउट करने के लिए कोई अन्य डिवाइस नहीं',
    'Could not log out that device': 'उस डिवाइस को लॉग आउट नहीं किया जा सका',
    'Could not log out the other devices': 'अन्य डिवाइस लॉग आउट नहीं हो सके',
    'Set a unique': 'एक यूनिक',
    "that will appear in all official emails from us. If an email doesn't contain this code, it's a phishing attempt.":
      'जो हमारी सभी ऑफिशियल ईमेल में दिखेगा। अगर किसी ईमेल में यह कोड न हो, तो वह फिशिंग की कोशिश है।',
    'Your Anti-Phishing Code': 'आपका एंटी-फिशिंग कोड',
    'Enter a unique code': 'एक यूनिक कोड डालें',
    'The code should be unique to you and easy to recognize. Do not share it with anyone. Example:':
      'कोड आपके लिए यूनिक और पहचानने में आसान होना चाहिए। इसे किसी के साथ साझा न करें। उदाहरण:',
    'Save Code': 'कोड सेव करें',
    'Anti-Phishing Code saved!': 'एंटी-फिशिंग कोड सेव हो गया!',
    'Code must be at least 4 characters': 'कोड कम से कम 4 अक्षर का होना चाहिए',
    'Could not save setting': 'सेटिंग सेव नहीं हो सकी',

    /* transactions + withdraw */
    'Transaction history': 'ट्रांजैक्शन हिस्ट्री',
    'Deposit history': 'डिपॉज़िट हिस्ट्री',
    'Withdraw history': 'विदड्रॉ हिस्ट्री',
    'Bet history': 'बेट हिस्ट्री',
    'Bonus history': 'बोनस हिस्ट्री',
    'Lucky Spin': 'लकी स्पिन',
    'Withdrawal limit:': 'विदड्रॉ सीमा:',
    'per request': 'प्रति रिक्वेस्ट',
    'Minimum withdrawal is ₹1,000': 'न्यूनतम विदड्रॉ ₹1,000 है',
    'Maximum withdrawal is ₹10,000 at a time': 'एक बार में अधिकतम विदड्रॉ ₹10,000 है',
    'Are you sure you want to withdraw': 'क्या आप सच में विदड्रॉ करना चाहते हैं',
    'via': 'के ज़रिए',
    'Only TRC20 network is supported. Wrong network may result in loss.':
      'केवल TRC20 नेटवर्क सपोर्टेड है। गलत नेटवर्क से नुकसान हो सकता है।',
    'Example: 9876543210@paytm, user@okaxis': 'उदाहरण: 9876543210@paytm, user@okaxis',
    'Full name as on card': 'कार्ड पर लिखा पूरा नाम',
    'Enter full name as per bank': 'बैंक के अनुसार पूरा नाम डालें',
    'Enter account number': 'अकाउंट नंबर डालें',
    'Re-enter account number': 'अकाउंट नंबर दोबारा डालें',
    'e.g., State Bank of India': 'जैसे, State Bank of India',
    'Enter TRC20 wallet address': 'TRC20 वॉलेट एड्रेस डालें',
    'Re-enter wallet address': 'वॉलेट एड्रेस दोबारा डालें',

    /* messages the app writes at runtime */
    'Contact customer support for more information.':
      'अधिक जानकारी के लिए ग्राहक सेवा से संपर्क करें।',
    'Log out': 'लॉग आउट',
    'Please Wait!': 'कृपया रुकें!',
    'Complete Payment': 'पेमेंट पूरी करें',
    'Days Completed': 'दिन पूरे',
    'Congratulations!': 'बधाई हो!',
    'Balance refreshed!': 'बैलेंस रीफ्रेश हो गया!',
    'UID Copied!': 'UID कॉपी हो गया!',
    'Cache cleared successfully!': 'कैश साफ हो गया!',
    'Notification opened': 'नोटिफिकेशन खुल गया',
    'Secret code copied!': 'सीक्रेट कोड कॉपी हो गया!',
    'Failed to copy': 'कॉपी नहीं हो सका',
    'Copy not supported': 'कॉपी सपोर्टेड नहीं है',

    /* legal — about + terms */
    'About Us': 'हमारे बारे में',
    'About us': 'हमारे बारे में',
    "Beginner's Guide": 'शुरुआती गाइड',
    'Customer Service': 'ग्राहक सेवा',
    'Terms of Service': 'सेवा की शर्तें',
    'Privacy Policy': 'प्राइवेसी पॉलिसी',
    'Last Updated: October 2023': 'आखिरी अपडेट: अक्टूबर 2023',
    "India's Leading Interactive Entertainment Platform":
      'भारत का अग्रणी इंटरैक्टिव एंटरटेनमेंट प्लेटफ़ॉर्म',
    Users: 'यूज़र्स',
    Funding: 'फंडिंग',
    Launched: 'लॉन्च',
    '1. Acceptance of Terms': '1. शर्तों की स्वीकृति',
    'By accessing or using the 99infinity platform, you agree to be bound by these Terms of Service. If you do not agree, you must not use our services.':
      '99infinity प्लेटफ़ॉर्म का उपयोग करने पर आप इन सेवा शर्तों से बंधे होने के लिए सहमत होते हैं। अगर आप सहमत नहीं हैं, तो आपको हमारी सेवाओं का उपयोग नहीं करना चाहिए।',
    '2. Eligibility': '2. पात्रता',
    'You must be at least 18 years of age to create an account and participate in any games. We reserve the right to request proof of age at any time.':
      'अकाउंट बनाने और किसी भी गेम में भाग लेने के लिए आपकी उम्र कम से कम 18 वर्ष होनी चाहिए। हम किसी भी समय उम्र का प्रमाण मांगने का अधिकार रखते हैं।',
    '3. Account Responsibility': '3. अकाउंट की ज़िम्मेदारी',
    'You are solely responsible for maintaining the confidentiality of your account credentials. Any activity conducted through your account is your responsibility. Notify us immediately of any unauthorized use.':
      'अपने अकाउंट की लॉगिन जानकारी गुप्त रखने की ज़िम्मेदारी पूरी तरह आपकी है। आपके अकाउंट से होने वाली हर गतिविधि आपकी ज़िम्मेदारी है। किसी भी अनधिकृत उपयोग की जानकारी तुरंत हमें दें।',
    '4. Deposits and Withdrawals': '4. डिपॉज़िट और विदड्रॉ',
    'All deposits must be made through authorized payment methods. Withdrawals are subject to verification and may take up to 24 hours to process. We reserve the right to refuse any transaction.':
      'सभी डिपॉज़िट अधिकृत पेमेंट तरीकों से ही करें। विदड्रॉ वेरिफिकेशन के अधीन हैं और प्रोसेस होने में 24 घंटे तक लग सकते हैं। हम किसी भी ट्रांजैक्शन को अस्वीकार करने का अधिकार रखते हैं।',
    '5. Fair Play': '5. फेयर प्ले',
    'Cheating, collusion, or use of automated bots is strictly prohibited. Any account found violating these rules will be permanently banned, and funds may be forfeited.':
      'धोखाधड़ी, मिलीभगत या ऑटोमेटिक बॉट का उपयोग पूरी तरह मना है। नियम तोड़ते पाए गए अकाउंट पर हमेशा के लिए बैन लगाया जाएगा और फंड ज़ब्त किए जा सकते हैं।',
    '6. Limitation of Liability': '6. दायित्व की सीमा',
    '99infinity is not liable for any technical glitches, network issues, or financial losses incurred during gameplay. Play responsibly.':
      'गेमप्ले के दौरान होने वाली तकनीकी गड़बड़ी, नेटवर्क समस्या या आर्थिक नुकसान के लिए 99infinity ज़िम्मेदार नहीं है। ज़िम्मेदारी से खेलें।',
  })

  /* hindi — about page + privacy policy */
  Object.assign(DICTS.hi, {
    "99infinity is India's leading interactive entertainment platform, bringing together Games, Esports, and a lot more on a single app. Launched in 2018, 99infinity has grown into a cultural phenomenon with a vibrant community of 250 Million+ users. With its mission to democratize entertainment for Bharat, 99infinity is redefining how India engages digitally.":
      '99infinity भारत का अग्रणी इंटरैक्टिव एंटरटेनमेंट प्लेटफ़ॉर्म है, जो गेम्स, ईस्पोर्ट्स और बहुत कुछ एक ही ऐप में लाता है। 2018 में लॉन्च हुआ 99infinity 25 करोड़ से ज़्यादा यूज़र्स के जीवंत समुदाय के साथ एक सांस्कृतिक पहचान बन चुका है। भारत के लिए मनोरंजन को सबके लिए उपलब्ध कराने के मिशन के साथ, 99infinity भारत के डिजिटल अनुभव को नया रूप दे रहा है।',
    "99infinity, a Series-C funded venture, has raised $100 million from Marquee gaming and entertainment investors such as Griffin Gaming Partners, Courtside Ventures, Maker's Fund, all of whom made their first investment in the Indian start-up ecosystem through 99infinity.":
      '99infinity, एक Series-C फंडेड वेंचर, ने Marquee गेमिंग और एंटरटेनमेंट निवेशकों जैसे Griffin Gaming Partners, Courtside Ventures और Maker\'s Fund से $100 मिलियन जुटाए हैं, जिनमें से सभी ने भारतीय स्टार्ट-अप इकोसिस्टम में अपना पहला निवेश 99infinity के ज़रिए किया।',
    '1. Information We Collect': '1. हम कौन सी जानकारी लेते हैं',
    'We collect personal information such as your name, phone number, email address, and device data when you register and use our platform.':
      'रजिस्टर करने और प्लेटफ़ॉर्म उपयोग करने पर हम आपका नाम, फ़ोन नंबर, ईमेल एड्रेस और डिवाइस डेटा जैसी व्यक्तिगत जानकारी लेते हैं।',
    '2. How We Use Your Data': '2. हम आपका डेटा कैसे उपयोग करते हैं',
    'Your data is used to process transactions, provide customer support, prevent fraud, and personalize your gaming experience.':
      'आपका डेटा ट्रांजैक्शन प्रोसेस करने, ग्राहक सहायता देने, धोखाधड़ी रोकने और आपका गेमिंग अनुभव बेहतर बनाने के लिए उपयोग किया जाता है।',
    '3. Data Security': '3. डेटा सुरक्षा',
    'We implement industry-standard encryption and security measures to protect your data. Your password is stored using one-way hashing and is never visible to us.':
      'आपके डेटा की सुरक्षा के लिए हम इंडस्ट्री-स्टैंडर्ड एन्क्रिप्शन और सुरक्षा उपाय अपनाते हैं। आपका पासवर्ड वन-वे हैशिंग से सेव होता है और हमें कभी दिखाई नहीं देता।',
    '4. Sharing with Third Parties': '4. तीसरे पक्ष के साथ साझा करना',
    'We do not sell your personal data. We may share information with payment gateways and regulatory authorities only when required by law.':
      'हम आपका व्यक्तिगत डेटा नहीं बेचते। कानूनी ज़रूरत होने पर ही हम पेमेंट गेटवे और नियामक संस्थाओं के साथ जानकारी साझा कर सकते हैं।',
    '5. Your Rights': '5. आपके अधिकार',
    'You have the right to access, update, or request deletion of your personal data by contacting our customer support team.':
      'अपने व्यक्तिगत डेटा को देखने, अपडेट करने या हटाने का अनुरोध करने का अधिकार आपके पास है — इसके लिए हमारी ग्राहक सेवा टीम से संपर्क करें।',
    '6. Cookies': '6. कुकीज़',
    'We use cookies to enhance your experience and analyze platform traffic. You can disable cookies in your browser settings.':
      'अनुभव बेहतर बनाने और प्लेटफ़ॉर्म ट्रैफिक का विश्लेषण करने के लिए हम कुकीज़ का उपयोग करते हैं। आप ब्राउज़र सेटिंग में कुकीज़ बंद कर सकते हैं।',
  })

  /* one-word joiners have to live in TERMS (the phrase pass skips <4 chars) */
  TERMS.hi.or = 'या'
  TERMS.hi.and = 'और'
  TERMS.ta.or = 'அல்லது'
  TERMS.ta.and = 'மற்றும்'
  TERMS.te.or = 'లేదా'
  TERMS.te.and = 'మరియు'

  /* ----------------------------------------------------------- tamil (extra) */
  Object.assign(DICTS.ta, {
    'View All': 'அனைத்தையும் பார்',
    'Winning information': 'வெற்றி தகவல்',
    'Get ₹500': '₹500 பெறுங்கள்',
    'Guest User': 'விருந்தினர்',
    'Log in to participate': 'பங்கேற்க உள்நுழையவும்',
    Devices: 'சாதனங்கள்',
    Device: 'சாதனம்',
    device: 'சாதனம்',
    devices: 'சாதனங்கள்',
    Week: 'வாரம்',
    Complete: 'முடிக்கவும்',
    'more day': 'இன்னும் ஒரு நாள்',
    'more days': 'இன்னும் நாட்கள்',
    'to unlock daily free games.': 'தினசரி இலவச விளையாட்டுகளை திறக்க.',
    'You won': 'நீங்கள் வென்றது',
    '1 Free Game': '1 இலவச விளையாட்டு',
    'Your balance is updated instantly!': 'உங்கள் இருப்பு உடனே புதுப்பிக்கப்பட்டது!',
    'Next spin unlocks at 4:00 AM': 'அடுத்த சுழற்சி காலை 4:00 மணிக்கு திறக்கும்',
    'Spinning — good luck!': 'சுழல்கிறது — நல்ல அதிர்ஷ்டம்!',
    'Lucky Wheel is temporarily unavailable.': 'லக்கி வீல் தற்காலிகமாக கிடைக்கவில்லை.',
    'Could not spin right now': 'இப்போது சுழற்ற முடியவில்லை',
    BETTER: 'சிறந்த',
    LUCK: 'அதிர்ஷ்டம்',
    FREE: 'இலவசம்',
    PLAY: 'விளையாடு',
    'Welcome Bonus': 'வரவேற்பு போனஸ்',
    'Double your first deposit up to ₹5,000.': 'முதல் வைப்பில் ₹5,000 வரை இரட்டிப்பு.',
    'Daily Reload': 'தினசரி ரீலோட்',
    'Top up any day and get 20% extra.':
      'எந்த நாளிலும் டாப்-அப் செய்து 20% கூடுதலாக பெறுங்கள்.',
    'Earn up to 30% commission per friend.': 'ஒவ்வொரு நண்பருக்கும் 30% வரை கமிஷன் பெறுங்கள்.',
    'Weekend Cashback': 'வார இறுதி கேஷ்பேக்',
    'Up to 10% cashback on weekend losses.':
      'வார இறுதி இழப்புகளுக்கு 10% வரை கேஷ்பேக்.',
    'VIP Exclusive': 'VIP பிரத்யேகம்',
    'Personal manager, higher limits and faster payouts.':
      'தனிப்பட்ட மேலாளர், அதிக வரம்புகள் மற்றும் விரைவான பேஅவுட்.',
    'Super Jackpot': 'சூப்பர் ஜாக்பாட்',
    'When you win a super jackpot, you will receive additional rewards':
      'சூப்பர் ஜாக்பாட் வென்றால் கூடுதல் பரிசுகள் கிடைக்கும்',
    'Dragon Streak': 'டிராகன் ஸ்ட்ரீக்',
    'Ride the winning streak for extra cash rewards.':
      'வெற்றித் தொடரில் சென்று கூடுதல் பண பரிசுகளை பெறுங்கள்.',
    'VIP Wheel': 'VIP சக்கரம்',
    'Exclusive spins for VIP members with bigger prizes.':
      'VIP உறுப்பினர்களுக்கு பெரிய பரிசுகளுடன் பிரத்யேக சுழற்சிகள்.',
    'Log in every day and claim free rewards instantly.':
      'தினமும் உள்நுழைந்து உடனே இலவச பரிசுகளை பெறுங்கள்.',
    'Earn commission for every friend who joins and plays.':
      'சேர்ந்து விளையாடும் ஒவ்வொரு நண்பருக்கும் கமிஷன் பெறுங்கள்.',
    'Activity Rules': 'செயல்பாட்டு விதிகள்',
    'How do I claim the reward?': 'பரிசை எப்படி பெறுவது?',
    'Log in and tap the claim button on the activity page. The reward is credited instantly to your main wallet.':
      'உள்நுழைந்து செயல்பாட்டு பக்கத்தில் க்ளெய்ம் பட்டனை அழுத்தவும். பரிசு உடனே உங்கள் பிரதான வாலட்டில் சேரும்.',
    'Is there a turnover requirement?': 'டர்னோவர் தேவை உள்ளதா?',
    'Yes. Each bonus carries a turnover requirement which is shown on the activity card before you claim.':
      'ஆம். ஒவ்வொரு போனஸுக்கும் டர்னோவர் தேவை உண்டு, அது க்ளெய்ம் செய்யும் முன் செயல்பாட்டு கார்டில் காட்டப்படும்.',
    'Can I participate more than once?': 'ஒன்றுக்கு மேற்பட்ட முறை பங்கேற்க முடியுமா?',
    'Most activities run on a fixed cycle (daily, weekly or per event). Check the activity detail for the reset period.':
      'பெரும்பாலான செயல்பாடுகள் நிலையான சுழற்சியில் நடக்கும் (தினசரி, வாராந்திர அல்லது நிகழ்வு வாரியாக). மீட்டமைப்பு காலத்திற்கு விவரங்களை பார்க்கவும்.',
    'Rewards are credited automatically to your wallet once the activity requirements are met.':
      'செயல்பாட்டு தேவைகள் பூர்த்தியானதும் பரிசுகள் தானாக உங்கள் வாலட்டில் சேரும்.',
    'Please read the activity rules carefully before participating.':
      'பங்கேற்கும் முன் செயல்பாட்டு விதிகளை கவனமாக படிக்கவும்.',
    'View Full 30-Day Calendar': 'முழு 30-நாள் காலெண்டரை பார்',
    'Hide Full Calendar': 'காலெண்டரை மறை',
    'to build your streak. Each day counts toward your 7-day goal.':
      'உங்கள் ஸ்ட்ரீக்கை உருவாக்க. ஒவ்வொரு நாளும் 7-நாள் இலக்கை நோக்கி கணக்கிடப்படும்.',
    'No reward during days 1–7.': 'நாள் 1–7 இல் பரிசு இல்லை.',
    'The first 7 days are just to build the streak. Stay consistent!':
      'முதல் 7 நாட்கள் ஸ்ட்ரீக் உருவாக்க மட்டுமே. தொடர்ந்து இருங்கள்!',
    'Miss a day = streak resets': 'ஒரு நாள் தவறினால் = ஸ்ட்ரீக் மீட்டமை',
    "back to Day 1. So don't skip a day.":
      'மீண்டும் நாள் 1. எனவே ஒரு நாளும் தவிர்க்க வேண்டாம்.',
    'Complete 7 days': '7 நாட்களை முடிக்கவும்',
    'to unlock the special reward.': 'சிறப்பு பரிசை திறக்க.',
    'After 7 days:': '7 நாட்களுக்குப் பிறகு:',
    'Once your 7-day login streak is complete, you will get':
      'உங்கள் 7-நாள் உள்நுழைவு ஸ்ட்ரீக் முடிந்ததும், நீங்கள் பெறுவீர்கள்',
    '1 Free Game every day': 'தினமும் 1 இலவச விளையாட்டு',
    '— as long as you keep logging in daily.': '— தினமும் உள்நுழைந்தால் மட்டுமே.',
    'Streak Building': 'ஸ்ட்ரீக் உருவாக்கம்',
    'Free Game Daily': 'தினசரி இலவச விளையாட்டு',
    'You get 1 Free Game every day — keep logging in!':
      'உங்களுக்கு தினமும் 1 இலவச விளையாட்டு கிடைக்கும் — தினமும் உள்நுழையுங்கள்!',
    'You have unlocked 1 Free Game per day.':
      'நீங்கள் தினமும் 1 இலவச விளையாட்டை திறந்துவிட்டீர்கள்.',
    'Enjoy your daily free game. Come back tomorrow!':
      'உங்கள் தினசரி இலவச விளையாட்டை விளையாடுங்கள். நாளை மீண்டும் வாருங்கள்!',
    'Your streak broke — Day 1 starts again':
      'உங்கள் ஸ்ட்ரீக் உடைந்தது — மீண்டும் நாள் 1 தொடங்குகிறது',

    /* deposit */
    'Complete payment within': 'இந்த நேரத்திற்குள் பணம் செலுத்தவும்',
    'QR Code Here': 'QR கோட் இங்கே',
    '— Paytm, PhonePe, GPay, or your bank app.':
      '— Paytm, PhonePe, GPay அல்லது உங்கள் வங்கி ஆப்.',
    'Scan the QR code': 'QR கோட்டை ஸ்கேன் செய்யவும்',
    'shown above.': 'மேலே காட்டப்பட்டது.',
    'and complete the payment.': 'மற்றும் பணம் செலுத்தவும்.',
    'Wait for payment confirmation': 'பணம் உறுதி செய்யப்படும் வரை காத்திருக்கவும்',
    'in your UPI app.': 'உங்கள் UPI ஆப்பில்.',
    'Come back here and tap': 'இங்கு திரும்பி வந்து அழுத்தவும்',
    'Verify Payment': 'பணம் சரிபார்',
    'below.': 'கீழே.',
    'Your balance will be credited within': 'உங்கள் இருப்பு இதற்குள் சேரும்',
    '10 minutes': '10 நிமிடங்கள்',
    'after verification.': 'சரிபார்ப்புக்குப் பிறகு.',
    'Cancel & Go Back': 'ரத்து செய்து திரும்பவும்',
    "We're verifying your payment. Your balance will be credited within 10 minutes.":
      'உங்கள் பணத்தை சரிபார்க்கிறோம். 10 நிமிடங்களில் இருப்பு சேரும்.',
    'Verifying...': 'சரிபார்க்கிறது...',
    'Minimum deposit is ₹100': 'குறைந்தபட்ச வைப்பு ₹100',
    'Please enter a valid amount': 'சரியான தொகையை உள்ளிடவும்',
    'Payment Submitted!': 'பணம் சமர்ப்பிக்கப்பட்டது!',
    'Great, Thanks!': 'அருமை, நன்றி!',

    /* auth */
    'Welcome back — sign in to continue playing':
      'மீண்டும் வரவேற்கிறோம் — விளையாட தொடர உள்நுழையவும்',
    'Create an account and claim your welcome bonus':
      'கணக்கு உருவாக்கி உங்கள் வரவேற்பு போனஸை பெறுங்கள்',
    'Create password': 'கடவுச்சொல் உருவாக்கவும்',
    'Confirm password': 'கடவுச்சொல்லை உறுதி செய்யவும்',
    'Invitation code (optional)': 'அழைப்பு கோட் (விருப்பம்)',
    'I am 18+ and I agree to the': 'நான் 18+ மற்றும் நான் ஒப்புக்கொள்கிறேன்',
    'Enter your registered phone number and we will send you a reset code.':
      'உங்கள் பதிவு செய்யப்பட்ட தொலைபேசி எண்ணை உள்ளிடவும், மீட்டமைப்பு கோட்டை அனுப்புவோம்.',
    'Verification code': 'சரிபார்ப்பு கோட்',
    'Verification code sent': 'சரிபார்ப்பு கோட் அனுப்பப்பட்டது',
    'Remembered it?': 'நினைவில் உள்ளதா?',
    'Passwords do not match': 'கடவுச்சொற்கள் பொருந்தவில்லை',
    'Enter a valid 10-digit phone number': 'சரியான 10 இலக்க தொலைபேசி எண்ணை உள்ளிடவும்',
    'Password must be at least 6 characters':
      'கடவுச்சொல் குறைந்தது 6 எழுத்துகள் இருக்க வேண்டும்',
    'Password must be at least 8 characters':
      'கடவுச்சொல் குறைந்தது 8 எழுத்துகள் இருக்க வேண்டும்',
    'Please accept the terms to continue': 'தொடர விதிமுறைகளை ஏற்கவும்',
    'Something went wrong, try again': 'ஏதோ தவறு நடந்தது, மீண்டும் முயற்சிக்கவும்',
    'Password reset is handled by customer support':
      'கடவுச்சொல் மீட்டமைப்பை வாடிக்கையாளர் சேவை கையாளுகிறது',
    'No account found with this phone number': 'இந்த எண்ணில் கணக்கு இல்லை',
    'Incorrect password': 'கடவுச்சொல் தவறு',
    'This phone number is already registered': 'இந்த எண் ஏற்கனவே பதிவு செய்யப்பட்டுள்ளது',
    'Account data not found, contact support':
      'கணக்கு தரவு இல்லை, வாடிக்கையாளர் சேவையை தொடர்பு கொள்ளவும்',
    'Enter your phone number and password': 'தொலைபேசி எண் மற்றும் கடவுச்சொல்லை உள்ளிடவும்',
    'Your Account Is Suspended!': 'உங்கள் கணக்கு நிறுத்தப்பட்டுள்ளது!',
    'Your Account Is Under Investigation!': 'உங்கள் கணக்கு விசாரணையில் உள்ளது!',
    'Your account is restricted': 'உங்கள் கணக்கு கட்டுப்படுத்தப்பட்டுள்ளது',
    'Could not create account, please try again':
      'கணக்கை உருவாக்க முடியவில்லை, மீண்டும் முயற்சிக்கவும்',
    'Logged out': 'வெளியேறிவிட்டீர்கள்',

    /* support + messages + 404 */
    'Live chat': 'நேரடி அரட்டை',
    'Average reply under 2 minutes': 'சராசரி பதில் 2 நிமிடங்களுக்குள்',
    'Email support': 'மின்னஞ்சல் ஆதரவு',
    'Telegram channel': 'டெலிகிராம் சேனல்',
    'Announcements and bonus codes': 'அறிவிப்புகள் மற்றும் போனஸ் கோடுகள்',
    'Chat with us directly': 'எங்களுடன் நேரடியாக அரட்டை அடிக்கவும்',
    'How do I create an account?': 'கணக்கை எப்படி உருவாக்குவது?',
    'Tap Register in the top bar, enter your phone number and a password, then confirm. Registration takes less than a minute.':
      'மேல் பட்டியில் பதிவு என்பதை அழுத்தி, தொலைபேசி எண்ணையும் கடவுச்சொல்லையும் உள்ளிட்டு உறுதி செய்யவும். பதிவு ஒரு நிமிடத்திற்குள் முடியும்.',
    'How long do withdrawals take?': 'பணம் எடுக்க எவ்வளவு நேரம் ஆகும்?',
    'Most withdrawals are processed within 1–30 minutes. Bank transfers may take longer on weekends.':
      'பெரும்பாலான பணம் எடுத்தல் 1–30 நிமிடங்களில் செயலாக்கப்படும். வார இறுதிகளில் வங்கி பரிமாற்றம் அதிக நேரம் எடுக்கலாம்.',
    'Is my data safe?': 'என் தரவு பாதுகாப்பாக உள்ளதா?',
    'Yes. All traffic is encrypted and your password is stored using one-way hashing. We never share your data with third parties.':
      'ஆம். அனைத்து தரவும் என்க்ரிப்ட் செய்யப்பட்டுள்ளது, கடவுச்சொல் ஒன்-வே ஹாஷிங் மூலம் சேமிக்கப்படுகிறது. உங்கள் தரவை மூன்றாம் தரப்புடன் பகிர்வதில்லை.',
    'What is the minimum deposit?': 'குறைந்தபட்ச வைப்பு என்ன?',
    'The minimum deposit is ₹100. There is no maximum limit on most payment methods.':
      'குறைந்தபட்ச வைப்பு ₹100. பெரும்பாலான பணம் செலுத்தும் முறைகளில் அதிகபட்ச வரம்பு இல்லை.',
    '— No more notifications —': '— மேலும் அறிவிப்புகள் இல்லை —',
    "You're all caught up! Check back later for new updates and rewards.":
      'அனைத்தையும் பார்த்துவிட்டீர்கள்! புதிய புதுப்பிப்புகளுக்கு பின்னர் வாருங்கள்.',
    'Welcome to 99infinity': '99infinity-க்கு வரவேற்கிறோம்',
    'Daily Bonus Awaits': 'தினசரி போனஸ் காத்திருக்கிறது',
    'Log in today and claim free rewards instantly. Rewards are credited automatically to your wallet once the daily check-in is confirmed.':
      'இன்று உள்நுழைந்து உடனே இலவச பரிசுகளை பெறுங்கள். தினசரி செக்-இன் உறுதியானதும் பரிசுகள் தானாக வாலட்டில் சேரும்.',
    'Super Jackpot Event': 'சூப்பர் ஜாக்பாட் நிகழ்வு',
    'When you win a super jackpot, you will receive additional rewards. Join the event and stand a chance to win extra prizes on top of your jackpot payout.':
      'சூப்பர் ஜாக்பாட் வென்றால் கூடுதல் பரிசுகள் கிடைக்கும். நிகழ்வில் பங்கேற்று ஜாக்பாட் தொகைக்கு மேல் கூடுதல் பரிசுகளை வெல்ல வாய்ப்பு பெறுங்கள்.',
    'The page you are looking for does not exist.': 'நீங்கள் தேடும் பக்கம் இல்லை.',
    'Back to home': 'முகப்புக்கு திரும்பு',

    /* security tools */
    'Choose a strong password to keep your account safe. Password should be at least 8 characters long with a mix of letters, numbers, and symbols.':
      'கணக்கை பாதுகாக்க வலுவான கடவுச்சொல்லை தேர்ந்தெடுக்கவும். கடவுச்சொல் குறைந்தது 8 எழுத்துகள், எழுத்து, எண் மற்றும் குறியீடுகளின் கலவையாக இருக்க வேண்டும்.',
    'Current Password': 'தற்போதைய கடவுச்சொல்',
    'New Password': 'புதிய கடவுச்சொல்',
    'Confirm New Password': 'புதிய கடவுச்சொல்லை உறுதி செய்யவும்',
    'Update Password': 'கடவுச்சொல்லை புதுப்பிக்கவும்',
    'Enter current password': 'தற்போதைய கடவுச்சொல்லை உள்ளிடவும்',
    'Enter new password': 'புதிய கடவுச்சொல்லை உள்ளிடவும்',
    'Re-enter new password': 'புதிய கடவுச்சொல்லை மீண்டும் உள்ளிடவும்',
    'Weak password': 'பலவீனமான கடவுச்சொல்',
    'Medium strength': 'நடுத்தர பாதுகாப்பு',
    'Strong password': 'வலுவான கடவுச்சொல்',
    'Very strong password': 'மிக வலுவான கடவுச்சொல்',
    'Could not change password': 'கடவுச்சொல்லை மாற்ற முடியவில்லை',
    'Please enter your current password': 'தற்போதைய கடவுச்சொல்லை உள்ளிடவும்',
    'Add an extra layer of security to your account. Scan the QR code with':
      'உங்கள் கணக்கிற்கு கூடுதல் பாதுகாப்பு சேர்க்கவும். QR கோட்டை ஸ்கேன் செய்யவும்',
    'app.': 'ஆப் மூலம்.',
    'QR CODE': 'QR கோட்',
    'Open your authenticator app and tap the': 'உங்கள் அங்கீகார ஆப்பை திறந்து அழுத்தவும்',
    'icon.': 'ஐகான்.',
    'Scan the QR code above, or enter this code manually:':
      'மேலே உள்ள QR கோட்டை ஸ்கேன் செய்யவும், அல்லது இந்த கோட்டை கைமுறையாக உள்ளிடவும்:',
    'Enter the 6-digit code from your app to verify.':
      'சரிபார்க்க உங்கள் ஆப்பில் உள்ள 6 இலக்க கோட்டை உள்ளிடவும்.',
    'Enter 6-digit code': '6 இலக்க கோட்டை உள்ளிடவும்',
    'Verify & Enable 2FA': 'சரிபார்த்து 2FA-ஐ இயக்கவும்',
    'Set a 4-digit PIN to secure all your transactions. You will need to enter this PIN every time you withdraw funds.':
      'அனைத்து பரிவர்த்தனைகளையும் பாதுகாக்க 4 இலக்க PIN அமைக்கவும். பணம் எடுக்கும் ஒவ்வொரு முறையும் இந்த PIN-ஐ உள்ளிட வேண்டும்.',
    'Enter your PIN': 'உங்கள் PIN-ஐ உள்ளிடவும்',
    "Choose a 4-digit code you'll remember":
      'உங்களுக்கு நினைவில் இருக்கும் 4 இலக்க கோட்டை தேர்ந்தெடுக்கவும்',
    'Confirm your PIN': 'உங்கள் PIN-ஐ உறுதி செய்யவும்',
    'Re-enter the same 4-digit code': 'அதே 4 இலக்க கோட்டை மீண்டும் உள்ளிடவும்',
    'PIN set successfully!': 'PIN அமைக்கப்பட்டது!',
    'PINs do not match. Try again.': 'PIN பொருந்தவில்லை. மீண்டும் முயற்சிக்கவும்.',
    'Active Devices': 'செயலில் உள்ள சாதனங்கள்',
    'You are currently logged in on': 'நீங்கள் தற்போது உள்நுழைந்துள்ளீர்கள்',
    'If you see any unfamiliar device, log it out immediately.':
      'அறியாத சாதனம் தெரிந்தால் உடனே அதை வெளியேற்றவும்.',
    'Current': 'தற்போதைய',
    'This device': 'இந்த சாதனம்',
    'Logout': 'வெளியேறு',
    'Log out from all other devices': 'மற்ற அனைத்து சாதனங்களிலிருந்தும் வெளியேறவும்',
    'No other devices are signed in.': 'வேறு சாதனங்கள் உள்நுழைந்திருக்கவில்லை.',
    'Unknown location': 'தெரியாத இடம்',
    'Browser': 'உலாவி',
    'Device logged out successfully!': 'சாதனம் வெளியேற்றப்பட்டது!',
    'Logged out from this device': 'இந்த சாதனத்திலிருந்து வெளியேறிவிட்டீர்கள்',
    'Logged out from all other devices':
      'மற்ற அனைத்து சாதனங்களிலிருந்தும் வெளியேறிவிட்டீர்கள்',
    'No other devices to log out': 'வெளியேற்ற வேறு சாதனங்கள் இல்லை',
    'Could not log out that device': 'அந்த சாதனத்தை வெளியேற்ற முடியவில்லை',
    'Could not log out the other devices': 'மற்ற சாதனங்களை வெளியேற்ற முடியவில்லை',
    'Set a unique': 'ஒரு தனித்துவமான',
    "that will appear in all official emails from us. If an email doesn't contain this code, it's a phishing attempt.":
      'எங்கள் அதிகாரப்பூர்வ மின்னஞ்சல்களில் தோன்றும். ஒரு மின்னஞ்சலில் இந்த கோட் இல்லாவிட்டால் அது ஃபிஷிங் முயற்சி.',
    'Your Anti-Phishing Code': 'உங்கள் ஆன்டி-ஃபிஷிங் கோட்',
    'Enter a unique code': 'தனித்துவமான கோட்டை உள்ளிடவும்',
    'The code should be unique to you and easy to recognize. Do not share it with anyone. Example:':
      'கோட் உங்களுக்கு தனித்துவமாகவும் அடையாளம் காண எளிதாகவும் இருக்க வேண்டும். யாருடனும் பகிர வேண்டாம். உதாரணம்:',
    'Save Code': 'கோட்டை சேமி',
    'Anti-Phishing Code saved!': 'ஆன்டி-ஃபிஷிங் கோட் சேமிக்கப்பட்டது!',
    'Code must be at least 4 characters': 'கோட் குறைந்தது 4 எழுத்துகள் இருக்க வேண்டும்',
    'Could not save setting': 'அமைப்பை சேமிக்க முடியவில்லை',

    /* transactions + withdraw */
    'Transaction history': 'பரிவர்த்தனை வரலாறு',
    'Deposit history': 'வைப்பு வரலாறு',
    'Withdraw history': 'பணம் எடுத்த வரலாறு',
    'Bet history': 'பந்தய வரலாறு',
    'Bonus history': 'போனஸ் வரலாறு',
    'Lucky Spin': 'லக்கி ஸ்பின்',
    'Withdrawal limit:': 'பணம் எடுக்கும் வரம்பு:',
    'per request': 'ஒரு கோரிக்கைக்கு',
    'Minimum withdrawal is ₹1,000': 'குறைந்தபட்ச பணம் எடுத்தல் ₹1,000',
    'Maximum withdrawal is ₹10,000 at a time': 'ஒரு முறைக்கு அதிகபட்சம் ₹10,000',
    'Are you sure you want to withdraw': 'நிச்சயமாக பணம் எடுக்க விரும்புகிறீர்களா',
    'via': 'வழியாக',
    'Only TRC20 network is supported. Wrong network may result in loss.':
      'TRC20 நெட்வொர்க் மட்டுமே ஆதரிக்கப்படுகிறது. தவறான நெட்வொர்க் இழப்பை ஏற்படுத்தலாம்.',
    'Example: 9876543210@paytm, user@okaxis': 'உதாரணம்: 9876543210@paytm, user@okaxis',
    'Full name as on card': 'கார்டில் உள்ளபடி முழு பெயர்',
    'Enter full name as per bank': 'வங்கியின் படி முழு பெயரை உள்ளிடவும்',
    'Enter account number': 'கணக்கு எண்ணை உள்ளிடவும்',
    'Re-enter account number': 'கணக்கு எண்ணை மீண்டும் உள்ளிடவும்',
    'e.g., State Bank of India': 'எ.கா., State Bank of India',
    'Enter TRC20 wallet address': 'TRC20 வாலட் முகவரியை உள்ளிடவும்',
    'Re-enter wallet address': 'வாலட் முகவரியை மீண்டும் உள்ளிடவும்',

    /* messages the app writes at runtime */
    'Contact customer support for more information.':
      'மேலும் தகவலுக்கு வாடிக்கையாளர் சேவையை தொடர்பு கொள்ளவும்.',
    'Log out': 'வெளியேறு',
    'Please Wait!': 'காத்திருங்கள்!',
    'Complete Payment': 'பணம் செலுத்தவும்',
    'Days Completed': 'நாட்கள் முடிந்தது',
    'Congratulations!': 'வாழ்த்துகள்!',
    'Balance refreshed!': 'இருப்பு புதுப்பிக்கப்பட்டது!',
    'UID Copied!': 'UID நகலெடுக்கப்பட்டது!',
    'Cache cleared successfully!': 'கேஷ் அழிக்கப்பட்டது!',
    'Notification opened': 'அறிவிப்பு திறக்கப்பட்டது',
    'Secret code copied!': 'ரகசிய கோட் நகலெடுக்கப்பட்டது!',
    'Failed to copy': 'நகலெடுக்க முடியவில்லை',
    'Copy not supported': 'நகலெடுத்தல் ஆதரிக்கப்படவில்லை',

    /* legal — about, terms, privacy */
    'About Us': 'எங்களை பற்றி',
    'About us': 'எங்களை பற்றி',
    "Beginner's Guide": 'தொடக்க வழிகாட்டி',
    'Customer Service': 'வாடிக்கையாளர் சேவை',
    'Terms of Service': 'சேவை விதிமுறைகள்',
    'Privacy Policy': 'தனியுரிமைக் கொள்கை',
    'Last Updated: October 2023': 'கடைசி புதுப்பிப்பு: அக்டோபர் 2023',
    "India's Leading Interactive Entertainment Platform":
      'இந்தியாவின் முன்னணி ஊடாடும் பொழுதுபோக்கு தளம்',
    Users: 'பயனர்கள்',
    Funding: 'நிதி',
    Launched: 'தொடங்கியது',
    '1. Acceptance of Terms': '1. விதிமுறைகளை ஏற்றுக்கொள்ளுதல்',
    '2. Eligibility': '2. தகுதி',
    '3. Account Responsibility': '3. கணக்கு பொறுப்பு',
    '4. Deposits and Withdrawals': '4. வைப்பு மற்றும் பணம் எடுத்தல்',
    '5. Fair Play': '5. நேர்மையான விளையாட்டு',
    '6. Limitation of Liability': '6. பொறுப்பு வரம்பு',
    '1. Information We Collect': '1. நாங்கள் சேகரிக்கும் தகவல்',
    '2. How We Use Your Data': '2. உங்கள் தரவை எப்படி பயன்படுத்துகிறோம்',
    '3. Data Security': '3. தரவு பாதுகாப்பு',
    '4. Sharing with Third Parties': '4. மூன்றாம் தரப்புடன் பகிர்வு',
    '5. Your Rights': '5. உங்கள் உரிமைகள்',
    '6. Cookies': '6. குக்கீகள்',
    'By accessing or using the 99infinity platform, you agree to be bound by these Terms of Service. If you do not agree, you must not use our services.':
      '99infinity தளத்தை பயன்படுத்துவதன் மூலம் இந்த சேவை விதிமுறைகளுக்கு கட்டுப்பட ஒப்புக்கொள்கிறீர்கள். ஒப்புக்கொள்ளவில்லை என்றால் எங்கள் சேவைகளை பயன்படுத்த வேண்டாம்.',
    'You must be at least 18 years of age to create an account and participate in any games. We reserve the right to request proof of age at any time.':
      'கணக்கு உருவாக்கவும் எந்த விளையாட்டிலும் பங்கேற்கவும் குறைந்தது 18 வயது இருக்க வேண்டும். எந்த நேரத்திலும் வயதுச் சான்றை கேட்கும் உரிமை எங்களுக்கு உண்டு.',
    'You are solely responsible for maintaining the confidentiality of your account credentials. Any activity conducted through your account is your responsibility. Notify us immediately of any unauthorized use.':
      'உங்கள் கணக்கு விவரங்களை ரகசியமாக வைத்திருக்கும் பொறுப்பு முழுவதும் உங்களுடையது. உங்கள் கணக்கு வழியாக நடக்கும் எல்லா செயல்களுக்கும் நீங்களே பொறுப்பு. அனுமதியற்ற பயன்பாட்டை உடனே எங்களுக்கு தெரிவிக்கவும்.',
    'All deposits must be made through authorized payment methods. Withdrawals are subject to verification and may take up to 24 hours to process. We reserve the right to refuse any transaction.':
      'அனைத்து வைப்புகளும் அங்கீகரிக்கப்பட்ட முறைகள் மூலமே செய்ய வேண்டும். பணம் எடுத்தல் சரிபார்ப்புக்கு உட்பட்டது, 24 மணி நேரம் வரை ஆகலாம். எந்த பரிவர்த்தனையையும் மறுக்கும் உரிமை எங்களுக்கு உண்டு.',
    'Cheating, collusion, or use of automated bots is strictly prohibited. Any account found violating these rules will be permanently banned, and funds may be forfeited.':
      'ஏமாற்றுதல், கூட்டுச்சதி அல்லது தானியங்கி பாட்கள் பயன்படுத்துதல் கண்டிப்பாக தடைசெய்யப்பட்டுள்ளது. விதிகளை மீறும் கணக்குகள் நிரந்தரமாக தடை செய்யப்படும், பணம் பறிமுதல் செய்யப்படலாம்.',
    '99infinity is not liable for any technical glitches, network issues, or financial losses incurred during gameplay. Play responsibly.':
      'விளையாட்டின் போது ஏற்படும் தொழில்நுட்ப கோளாறு, நெட்வொர்க் பிரச்சினை அல்லது பண இழப்புக்கு 99infinity பொறுப்பல்ல. பொறுப்புடன் விளையாடுங்கள்.',
    'We collect personal information such as your name, phone number, email address, and device data when you register and use our platform.':
      'நீங்கள் பதிவு செய்து தளத்தை பயன்படுத்தும்போது உங்கள் பெயர், தொலைபேசி எண், மின்னஞ்சல் முகவரி மற்றும் சாதன தரவு போன்ற தனிப்பட்ட தகவல்களை சேகரிக்கிறோம்.',
    'Your data is used to process transactions, provide customer support, prevent fraud, and personalize your gaming experience.':
      'உங்கள் தரவு பரிவர்த்தனைகளை செயலாக்க, வாடிக்கையாளர் ஆதரவு அளிக்க, மோசடியை தடுக்க மற்றும் விளையாட்டு அனுபவத்தை தனிப்பயனாக்க பயன்படுகிறது.',
    'We implement industry-standard encryption and security measures to protect your data. Your password is stored using one-way hashing and is never visible to us.':
      'உங்கள் தரவை பாதுகாக்க தொழில்துறை தரமான என்க்ரிப்ஷன் மற்றும் பாதுகாப்பு நடவடிக்கைகளை செயல்படுத்துகிறோம். கடவுச்சொல் ஒன்-வே ஹாஷிங் மூலம் சேமிக்கப்படுகிறது, அது எங்களுக்கு தெரியாது.',
    'We do not sell your personal data. We may share information with payment gateways and regulatory authorities only when required by law.':
      'உங்கள் தனிப்பட்ட தரவை நாங்கள் விற்பதில்லை. சட்டப்படி தேவைப்படும்போது மட்டுமே பணம் செலுத்தும் நிறுவனங்கள் மற்றும் ஒழுங்குமுறை அதிகாரிகளுடன் தகவலை பகிரலாம்.',
    'You have the right to access, update, or request deletion of your personal data by contacting our customer support team.':
      'உங்கள் தனிப்பட்ட தரவை பார்க்க, புதுப்பிக்க அல்லது நீக்க கோரும் உரிமை உங்களுக்கு உண்டு — எங்கள் வாடிக்கையாளர் சேவை குழுவை தொடர்பு கொள்ளவும்.',
    'We use cookies to enhance your experience and analyze platform traffic. You can disable cookies in your browser settings.':
      'அனுபவத்தை மேம்படுத்தவும் தள போக்குவரத்தை பகுப்பாய்வு செய்யவும் குக்கீகளை பயன்படுத்துகிறோம். உலாவி அமைப்புகளில் குக்கீகளை முடக்கலாம்.',
  })

  /* tamil — about page paragraphs (long, kept separate for readability) */
  Object.assign(DICTS.ta, {
    "99infinity is India's leading interactive entertainment platform, bringing together Games, Esports, and a lot more on a single app. Launched in 2018, 99infinity has grown into a cultural phenomenon with a vibrant community of 250 Million+ users. With its mission to democratize entertainment for Bharat, 99infinity is redefining how India engages digitally.":
      '99infinity இந்தியாவின் முன்னணி ஊடாடும் பொழுதுபோக்கு தளம் — கேம்கள், இஸ்போர்ட்ஸ் மற்றும் பலவற்றை ஒரே ஆப்பில் கொண்டு வருகிறது. 2018 இல் தொடங்கப்பட்ட 99infinity, 25 கோடிக்கும் மேற்பட்ட பயனர்களின் சுறுசுறுப்பான சமூகத்துடன் ஒரு கலாச்சார அடையாளமாக வளர்ந்துள்ளது. பாரதத்திற்கான பொழுதுபோக்கை அனைவருக்கும் கொண்டு சேர்க்கும் நோக்கத்துடன், 99infinity இந்தியாவின் டிஜிட்டல் அனுபவத்தை புதுப்பிக்கிறது.',
    "99infinity, a Series-C funded venture, has raised $100 million from Marquee gaming and entertainment investors such as Griffin Gaming Partners, Courtside Ventures, Maker's Fund, all of whom made their first investment in the Indian start-up ecosystem through 99infinity.":
      'Series-C நிதியுதவி பெற்ற 99infinity, Griffin Gaming Partners, Courtside Ventures, Maker\'s Fund போன்ற முன்னணி கேமிங் மற்றும் பொழுதுபோக்கு முதலீட்டாளர்களிடமிருந்து $100 மில்லியன் திரட்டியுள்ளது. இவர்கள் அனைவரும் இந்திய ஸ்டார்ட்-அப் சூழலில் தங்கள் முதல் முதலீட்டை 99infinity மூலம் செய்தவர்கள்.',
  })

  /* --------------------------------------------------------- telugu (extra) */
  Object.assign(DICTS.te, {
    'View All': 'అన్నీ చూడండి',
    'Winning information': 'గెలుపు సమాచారం',
    'Get ₹500': '₹500 పొందండి',
    'Guest User': 'అతిథి',
    'Log in to participate': 'పాల్గొనడానికి లాగిన్ అవ్వండి',
    Devices: 'పరికరాలు',
    Device: 'పరికరం',
    device: 'పరికరం',
    devices: 'పరికరాలు',
    Week: 'వారం',
    Complete: 'పూర్తి చేయండి',
    'more day': 'ఇంకా ఒక రోజు',
    'more days': 'ఇంకా రోజులు',
    'to unlock daily free games.': 'రోజువారీ ఉచిత గేమ్లను తెరవడానికి.',
    'You won': 'మీరు గెలుచుకున్నారు',
    '1 Free Game': '1 ఉచిత గేమ్',
    'Your balance is updated instantly!': 'మీ బ్యాలెన్స్ వెంటనే అప్డేట్ అయింది!',
    'Next spin unlocks at 4:00 AM': 'తదుపరి స్పిన్ ఉదయం 4:00కి తెరుచుకుంటుంది',
    'Spinning — good luck!': 'తిరుగుతోంది — శుభాకాంక్షలు!',
    'Lucky Wheel is temporarily unavailable.': 'లక్కీ వీల్ తాత్కాలికంగా అందుబాటులో లేదు.',
    'Could not spin right now': 'ఇప్పుడు స్పిన్ చేయలేము',
    BETTER: 'మంచి',
    LUCK: 'అదృష్టం',
    FREE: 'ఉచితం',
    PLAY: 'ఆడండి',

    /* promo + activity */
    'Welcome Bonus': 'స్వాగత బోనస్',
    'Double your first deposit up to ₹5,000.': 'మొదటి డిపాజిట్పై ₹5,000 వరకు డబుల్.',
    'Daily Reload': 'డైలీ రీలోడ్',
    'Top up any day and get 20% extra.': 'ఏ రోజైనా టాప్-అప్ చేసి 20% అదనంగా పొందండి.',
    'Earn up to 30% commission per friend.':
      'ప్రతి స్నేహితుడికి 30% వరకు కమిషన్ పొందండి.',
    'Weekend Cashback': 'వీకెండ్ క్యాష్బ్యాక్',
    'Up to 10% cashback on weekend losses.': 'వీకెండ్ నష్టాలపై 10% వరకు క్యాష్బ్యాక్.',
    'VIP Exclusive': 'VIP ప్రత్యేకం',
    'Personal manager, higher limits and faster payouts.':
      'వ్యక్తిగత మేనేజర్, ఎక్కువ లిమిట్లు మరియు వేగవంతమైన పేఅవుట్లు.',
    'Super Jackpot': 'సూపర్ జాక్పాట్',
    'When you win a super jackpot, you will receive additional rewards':
      'సూపర్ జాక్పాట్ గెలిస్తే అదనపు రివార్డులు లభిస్తాయి',
    'Dragon Streak': 'డ్రాగన్ స్ట్రీక్',
    'Ride the winning streak for extra cash rewards.':
      'గెలుపు స్ట్రీక్లో కొనసాగి అదనపు క్యాష్ రివార్డులు పొందండి.',
    'VIP Wheel': 'VIP వీల్',
    'Exclusive spins for VIP members with bigger prizes.':
      'VIP సభ్యులకు పెద్ద బహుమతులతో ప్రత్యేక స్పిన్లు.',
    'Log in every day and claim free rewards instantly.':
      'ప్రతిరోజూ లాగిన్ అయ్యి వెంటనే ఉచిత రివార్డులు పొందండి.',
    'Earn commission for every friend who joins and plays.':
      'చేరి ఆడే ప్రతి స్నేహితుడికి కమిషన్ పొందండి.',
    'Activity Rules': 'యాక్టివిటీ నియమాలు',
    'How do I claim the reward?': 'రివార్డును ఎలా పొందాలి?',
    'Log in and tap the claim button on the activity page. The reward is credited instantly to your main wallet.':
      'లాగిన్ అయ్యి యాక్టివిటీ పేజీలో క్లెయిమ్ బటన్ నొక్కండి. రివార్డు వెంటనే మీ మెయిన్ వాలెట్కు జమ అవుతుంది.',
    'Is there a turnover requirement?': 'టర్నోవర్ షరతు ఉందా?',
    'Yes. Each bonus carries a turnover requirement which is shown on the activity card before you claim.':
      'అవును. ప్రతి బోనస్కు టర్నోవర్ షరతు ఉంటుంది, అది క్లెయిమ్ చేయడానికి ముందు యాక్టివిటీ కార్డులో చూపబడుతుంది.',
    'Can I participate more than once?': 'ఒకసారి కంటే ఎక్కువసార్లు పాల్గొనవచ్చా?',
    'Most activities run on a fixed cycle (daily, weekly or per event). Check the activity detail for the reset period.':
      'చాలా యాక్టివిటీలు నిర్దిష్ట చక్రంలో నడుస్తాయి (రోజువారీ, వారానికి లేదా ఈవెంట్ ప్రకారం). రీసెట్ కాలం కోసం యాక్టివిటీ వివరాలు చూడండి.',
    'Rewards are credited automatically to your wallet once the activity requirements are met.':
      'యాక్టివిటీ షరతులు పూర్తయిన వెంటనే రివార్డులు స్వయంగా మీ వాలెట్కు జమ అవుతాయి.',
    'Please read the activity rules carefully before participating.':
      'పాల్గొనే ముందు యాక్టివిటీ నియమాలను జాగ్రత్తగా చదవండి.',

    /* daily reward explainer */
    'View Full 30-Day Calendar': 'పూర్తి 30-రోజుల క్యాలెండర్ చూడండి',
    'Hide Full Calendar': 'క్యాలెండర్ దాచండి',
    'to build your streak. Each day counts toward your 7-day goal.':
      'మీ స్ట్రీక్ నిర్మించడానికి. ప్రతి రోజు మీ 7-రోజుల లక్ష్యంలో లెక్కించబడుతుంది.',
    'No reward during days 1–7.': '1–7 రోజుల్లో రివార్డు లేదు.',
    'The first 7 days are just to build the streak. Stay consistent!':
      'మొదటి 7 రోజులు స్ట్రీక్ నిర్మించడానికే. నిలకడగా ఉండండి!',
    'Miss a day = streak resets': 'ఒక రోజు తప్పితే = స్ట్రీక్ రీసెట్',
    "back to Day 1. So don't skip a day.":
      'మళ్లీ రోజు 1కి. కాబట్టి ఒక్క రోజు కూడా వదిలేయకండి.',
    'Complete 7 days': '7 రోజులు పూర్తి చేయండి',
    'to unlock the special reward.': 'ప్రత్యేక రివార్డును తెరవడానికి.',
    'After 7 days:': '7 రోజుల తర్వాత:',
    'Once your 7-day login streak is complete, you will get':
      'మీ 7-రోజుల లాగిన్ స్ట్రీక్ పూర్తయిన తర్వాత మీకు లభిస్తుంది',
    '1 Free Game every day': 'ప్రతిరోజూ 1 ఉచిత గేమ్',
    '— as long as you keep logging in daily.': '— ప్రతిరోజూ లాగిన్ అవుతూ ఉంటే మాత్రమే.',
    'Streak Building': 'స్ట్రీక్ నిర్మాణం',
    'Free Game Daily': 'రోజువారీ ఉచిత గేమ్',
    'You get 1 Free Game every day — keep logging in!':
      'మీకు ప్రతిరోజూ 1 ఉచిత గేమ్ లభిస్తుంది — ప్రతిరోజూ లాగిన్ అవ్వండి!',
    'You have unlocked 1 Free Game per day.':
      'మీరు రోజుకు 1 ఉచిత గేమ్ను అన్లాక్ చేసారు.',
    'Enjoy your daily free game. Come back tomorrow!':
      'మీ రోజువారీ ఉచిత గేమ్ ఆడండి. రేపు మళ్లీ రండి!',
    'Your streak broke — Day 1 starts again':
      'మీ స్ట్రీక్ తెగిపోయింది — మళ్లీ రోజు 1 ప్రారంభం',

    /* deposit */
    'Complete payment within': 'ఈ సమయంలోపు పేమెంట్ పూర్తి చేయండి',
    'QR Code Here': 'QR కోడ్ ఇక్కడ',
    '— Paytm, PhonePe, GPay, or your bank app.':
      '— Paytm, PhonePe, GPay లేదా మీ బ్యాంక్ యాప్.',
    'Scan the QR code': 'QR కోడ్ను స్కాన్ చేయండి',
    'shown above.': 'పైన చూపబడింది.',
    'and complete the payment.': 'మరియు పేమెంట్ పూర్తి చేయండి.',
    'Wait for payment confirmation': 'పేమెంట్ కన్ఫర్మేషన్ కోసం వేచి ఉండండి',
    'in your UPI app.': 'మీ UPI యాప్లో.',
    'Come back here and tap': 'ఇక్కడికి తిరిగి వచ్చి నొక్కండి',
    'Verify Payment': 'పేమెంట్ వెరిఫై చేయండి',
    'below.': 'కింద.',
    'Your balance will be credited within': 'మీ బ్యాలెన్స్ ఇంతలో జమ అవుతుంది',
    '10 minutes': '10 నిమిషాలు',
    'after verification.': 'వెరిఫికేషన్ తర్వాత.',
    'Cancel & Go Back': 'రద్దు చేసి వెనక్కి వెళ్లండి',
    "We're verifying your payment. Your balance will be credited within 10 minutes.":
      'మేము మీ పేమెంట్ను వెరిఫై చేస్తున్నాము. 10 నిమిషాల్లో బ్యాలెన్స్ జమ అవుతుంది.',
    'Verifying...': 'వెరిఫై అవుతోంది...',
    'Minimum deposit is ₹100': 'కనీస డిపాజిట్ ₹100',
    'Please enter a valid amount': 'సరైన మొత్తాన్ని నమోదు చేయండి',
    'Payment Submitted!': 'పేమెంట్ సబ్మిట్ అయింది!',
    'Great, Thanks!': 'బాగుంది, ధన్యవాదాలు!',

    /* auth */
    'Welcome back — sign in to continue playing':
      'తిరిగి స్వాగతం — ఆడటం కొనసాగించడానికి లాగిన్ అవ్వండి',
    'Create an account and claim your welcome bonus':
      'ఖాతా సృష్టించి మీ స్వాగత బోనస్ పొందండి',
    'Create password': 'పాస్వర్డ్ సృష్టించండి',
    'Confirm password': 'పాస్వర్డ్ను నిర్ధారించండి',
    'Invitation code (optional)': 'ఇన్విటేషన్ కోడ్ (ఐచ్ఛికం)',
    'I am 18+ and I agree to the': 'నేను 18+ మరియు నేను అంగీకరిస్తున్నాను',
    'Enter your registered phone number and we will send you a reset code.':
      'మీ నమోదిత ఫోన్ నంబర్ను నమోదు చేయండి, రీసెట్ కోడ్ పంపుతాము.',
    'Verification code': 'వెరిఫికేషన్ కోడ్',
    'Verification code sent': 'వెరిఫికేషన్ కోడ్ పంపబడింది',
    'Remembered it?': 'గుర్తుకు వచ్చిందా?',
    'Passwords do not match': 'పాస్వర్డ్లు సరిపోలలేదు',
    'Enter a valid 10-digit phone number': 'సరైన 10 అంకెల ఫోన్ నంబర్ నమోదు చేయండి',
    'Password must be at least 6 characters': 'పాస్వర్డ్ కనీసం 6 అక్షరాలు ఉండాలి',
    'Password must be at least 8 characters': 'పాస్వర్డ్ కనీసం 8 అక్షరాలు ఉండాలి',
    'Please accept the terms to continue': 'కొనసాగడానికి నిబంధనలను అంగీకరించండి',
    'Something went wrong, try again': 'ఏదో తప్పు జరిగింది, మళ్లీ ప్రయత్నించండి',
    'Password reset is handled by customer support':
      'పాస్వర్డ్ రీసెట్ను కస్టమర్ సపోర్ట్ నిర్వహిస్తుంది',
    'No account found with this phone number': 'ఈ నంబర్తో ఖాతా కనబడలేదు',
    'Incorrect password': 'పాస్వర్డ్ తప్పు',
    'This phone number is already registered': 'ఈ నంబర్ ఇప్పటికే నమోదైంది',
    'Account data not found, contact support':
      'ఖాతా డేటా కనబడలేదు, సపోర్ట్ను సంప్రదించండి',
    'Enter your phone number and password': 'ఫోన్ నంబర్ మరియు పాస్వర్డ్ నమోదు చేయండి',
    'Your Account Is Suspended!': 'మీ ఖాతా సస్పెండ్ చేయబడింది!',
    'Your Account Is Under Investigation!': 'మీ ఖాతా విచారణలో ఉంది!',
    'Your account is restricted': 'మీ ఖాతా పరిమితం చేయబడింది',
    'Could not create account, please try again':
      'ఖాతా సృష్టించలేకపోయాము, మళ్లీ ప్రయత్నించండి',
    'Logged out': 'లాగ్ అవుట్ అయ్యారు',

    /* support + messages + 404 */
    'Live chat': 'లైవ్ చాట్',
    'Average reply under 2 minutes': 'సగటు రిప్లై 2 నిమిషాల్లో',
    'Email support': 'ఇమెయిల్ సపోర్ట్',
    'Telegram channel': 'టెలిగ్రామ్ ఛానల్',
    'Announcements and bonus codes': 'ప్రకటనలు మరియు బోనస్ కోడ్లు',
    'Chat with us directly': 'మాతో నేరుగా చాట్ చేయండి',
    'How do I create an account?': 'ఖాతా ఎలా సృష్టించాలి?',
    'Tap Register in the top bar, enter your phone number and a password, then confirm. Registration takes less than a minute.':
      'పైన రిజిస్టర్ నొక్కి, ఫోన్ నంబర్ మరియు పాస్వర్డ్ నమోదు చేసి నిర్ధారించండి. రిజిస్ట్రేషన్ ఒక నిమిషంలోపు పూర్తవుతుంది.',
    'How long do withdrawals take?': 'విత్డ్రా ఎంత సమయం తీసుకుంటుంది?',
    'Most withdrawals are processed within 1–30 minutes. Bank transfers may take longer on weekends.':
      'చాలా విత్డ్రాలు 1–30 నిమిషాల్లో ప్రాసెస్ అవుతాయి. వీకెండ్లలో బ్యాంక్ ట్రాన్స్ఫర్కు ఎక్కువ సమయం పట్టవచ్చు.',
    'Is my data safe?': 'నా డేటా సురక్షితమా?',
    'Yes. All traffic is encrypted and your password is stored using one-way hashing. We never share your data with third parties.':
      'అవును. మొత్తం ట్రాఫిక్ ఎన్క్రిప్ట్ చేయబడింది, మీ పాస్వర్డ్ వన్-వే హాషింగ్తో నిల్వ ఉంటుంది. మీ డేటాను మూడవ పక్షాలతో పంచుకోము.',
    'What is the minimum deposit?': 'కనీస డిపాజిట్ ఎంత?',
    'The minimum deposit is ₹100. There is no maximum limit on most payment methods.':
      'కనీస డిపాజిట్ ₹100. చాలా పేమెంట్ పద్ధతులపై గరిష్ఠ పరిమితి లేదు.',
    '— No more notifications —': '— ఇంకా నోటిఫికేషన్లు లేవు —',
    "You're all caught up! Check back later for new updates and rewards.":
      'అన్నీ చూసేశారు! కొత్త అప్డేట్లు మరియు రివార్డుల కోసం తర్వాత చూడండి.',
    'Welcome to 99infinity': '99infinityకు స్వాగతం',
    'Daily Bonus Awaits': 'డైలీ బోనస్ సిద్ధంగా ఉంది',
    'Log in today and claim free rewards instantly. Rewards are credited automatically to your wallet once the daily check-in is confirmed.':
      'ఈ రోజు లాగిన్ అయ్యి వెంటనే ఉచిత రివార్డులు పొందండి. డైలీ చెక్-ఇన్ నిర్ధారణ అయిన వెంటనే రివార్డులు స్వయంగా వాలెట్కు జమ అవుతాయి.',
    'Super Jackpot Event': 'సూపర్ జాక్పాట్ ఈవెంట్',
    'When you win a super jackpot, you will receive additional rewards. Join the event and stand a chance to win extra prizes on top of your jackpot payout.':
      'సూపర్ జాక్పాట్ గెలిస్తే అదనపు రివార్డులు లభిస్తాయి. ఈవెంట్లో పాల్గొని జాక్పాట్ మొత్తంపై అదనపు బహుమతులు గెలిచే అవకాశం పొందండి.',
    'The page you are looking for does not exist.': 'మీరు వెతుకుతున్న పేజీ లేదు.',
    'Back to home': 'హోమ్కు తిరిగి వెళ్లండి',

    /* security tools */
    'Choose a strong password to keep your account safe. Password should be at least 8 characters long with a mix of letters, numbers, and symbols.':
      'ఖాతాను సురక్షితంగా ఉంచడానికి బలమైన పాస్వర్డ్ ఎంచుకోండి. పాస్వర్డ్ కనీసం 8 అక్షరాలు, అక్షరాలు, అంకెలు మరియు సింబల్స్ కలగలిపి ఉండాలి.',
    'Current Password': 'ప్రస్తుత పాస్వర్డ్',
    'New Password': 'కొత్త పాస్వర్డ్',
    'Confirm New Password': 'కొత్త పాస్వర్డ్ను నిర్ధారించండి',
    'Update Password': 'పాస్వర్డ్ అప్డేట్ చేయండి',
    'Enter current password': 'ప్రస్తుత పాస్వర్డ్ నమోదు చేయండి',
    'Enter new password': 'కొత్త పాస్వర్డ్ నమోదు చేయండి',
    'Re-enter new password': 'కొత్త పాస్వర్డ్ను మళ్లీ నమోదు చేయండి',
    'Weak password': 'బలహీన పాస్వర్డ్',
    'Medium strength': 'మధ్యస్థ భద్రత',
    'Strong password': 'బలమైన పాస్వర్డ్',
    'Very strong password': 'చాలా బలమైన పాస్వర్డ్',
    'Could not change password': 'పాస్వర్డ్ మార్చలేకపోయాము',
    'Please enter your current password': 'దయచేసి ప్రస్తుత పాస్వర్డ్ నమోదు చేయండి',
    'Add an extra layer of security to your account. Scan the QR code with':
      'మీ ఖాతాకు అదనపు భద్రత జోడించండి. QR కోడ్ను స్కాన్ చేయండి',
    'app.': 'యాప్తో.',
    'QR CODE': 'QR కోడ్',
    'Open your authenticator app and tap the': 'మీ ఆథెంటికేటర్ యాప్ తెరిచి నొక్కండి',
    'icon.': 'ఐకాన్.',
    'Scan the QR code above, or enter this code manually:':
      'పైన ఉన్న QR కోడ్ను స్కాన్ చేయండి, లేదా ఈ కోడ్ను మాన్యువల్గా నమోదు చేయండి:',
    'Enter the 6-digit code from your app to verify.':
      'వెరిఫై చేయడానికి మీ యాప్లోని 6 అంకెల కోడ్ను నమోదు చేయండి.',
    'Enter 6-digit code': '6 అంకెల కోడ్ నమోదు చేయండి',
    'Verify & Enable 2FA': 'వెరిఫై చేసి 2FA ఆన్ చేయండి',
    'Set a 4-digit PIN to secure all your transactions. You will need to enter this PIN every time you withdraw funds.':
      'అన్ని లావాదేవీలను సురక్షితం చేయడానికి 4 అంకెల PIN సెట్ చేయండి. డబ్బు తీసే ప్రతిసారీ ఈ PIN నమోదు చేయాలి.',
    'Enter your PIN': 'మీ PIN నమోదు చేయండి',
    "Choose a 4-digit code you'll remember": 'మీకు గుర్తుండే 4 అంకెల కోడ్ ఎంచుకోండి',
    'Confirm your PIN': 'మీ PIN నిర్ధారించండి',
    'Re-enter the same 4-digit code': 'అదే 4 అంకెల కోడ్ను మళ్లీ నమోదు చేయండి',
    'PIN set successfully!': 'PIN సెట్ అయింది!',
    'PINs do not match. Try again.': 'PINలు సరిపోలలేదు. మళ్లీ ప్రయత్నించండి.',
    'Active Devices': 'యాక్టివ్ పరికరాలు',
    'You are currently logged in on': 'మీరు ప్రస్తుతం లాగిన్ అయ్యారు',
    'If you see any unfamiliar device, log it out immediately.':
      'తెలియని పరికరం కనిపిస్తే వెంటనే దాన్ని లాగ్ అవుట్ చేయండి.',
    'Current': 'ప్రస్తుత',
    'This device': 'ఈ పరికరం',
    'Logout': 'లాగ్ అవుట్',
    'Log out from all other devices': 'ఇతర అన్ని పరికరాల నుండి లాగ్ అవుట్ చేయండి',
    'No other devices are signed in.': 'ఇతర పరికరాలు లాగిన్ అవ్వలేదు.',
    'Unknown location': 'తెలియని ప్రాంతం',
    'Browser': 'బ్రౌజర్',
    'Device logged out successfully!': 'పరికరం లాగ్ అవుట్ అయింది!',
    'Logged out from this device': 'ఈ పరికరం నుండి లాగ్ అవుట్ అయ్యారు',
    'Logged out from all other devices': 'ఇతర అన్ని పరికరాల నుండి లాగ్ అవుట్ అయ్యారు',
    'No other devices to log out': 'లాగ్ అవుట్ చేయడానికి ఇతర పరికరాలు లేవు',
    'Could not log out that device': 'ఆ పరికరాన్ని లాగ్ అవుట్ చేయలేకపోయాము',
    'Could not log out the other devices': 'ఇతర పరికరాలను లాగ్ అవుట్ చేయలేకపోయాము',
    'Set a unique': 'ఒక ప్రత్యేకమైన',
    "that will appear in all official emails from us. If an email doesn't contain this code, it's a phishing attempt.":
      'మా అధికారిక ఇమెయిల్స్లో కనిపిస్తుంది. ఏ ఇమెయిల్లో ఈ కోడ్ లేకపోతే అది ఫిషింగ్ ప్రయత్నం.',
    'Your Anti-Phishing Code': 'మీ యాంటీ-ఫిషింగ్ కోడ్',
    'Enter a unique code': 'ప్రత్యేక కోడ్ నమోదు చేయండి',
    'The code should be unique to you and easy to recognize. Do not share it with anyone. Example:':
      'కోడ్ మీకు ప్రత్యేకంగా, సులభంగా గుర్తించగలిగేలా ఉండాలి. ఎవరితోనూ పంచుకోవద్దు. ఉదాహరణ:',
    'Save Code': 'కోడ్ సేవ్ చేయండి',
    'Anti-Phishing Code saved!': 'యాంటీ-ఫిషింగ్ కోడ్ సేవ్ అయింది!',
    'Code must be at least 4 characters': 'కోడ్ కనీసం 4 అక్షరాలు ఉండాలి',
    'Could not save setting': 'సెట్టింగ్ సేవ్ కాలేదు',

    /* transactions + withdraw */
    'Transaction history': 'లావాదేవీల చరిత్ర',
    'Deposit history': 'డిపాజిట్ చరిత్ర',
    'Withdraw history': 'విత్డ్రా చరిత్ర',
    'Bet history': 'బెట్ చరిత్ర',
    'Bonus history': 'బోనస్ చరిత్ర',
    'Lucky Spin': 'లక్కీ స్పిన్',
    'Withdrawal limit:': 'విత్డ్రా పరిమితి:',
    'per request': 'ప్రతి రిక్వెస్ట్కు',
    'Minimum withdrawal is ₹1,000': 'కనీస విత్డ్రా ₹1,000',
    'Maximum withdrawal is ₹10,000 at a time': 'ఒకసారి గరిష్ఠ విత్డ్రా ₹10,000',
    'Are you sure you want to withdraw': 'మీరు నిజంగా విత్డ్రా చేయాలనుకుంటున్నారా',
    'via': 'ద్వారా',
    'Only TRC20 network is supported. Wrong network may result in loss.':
      'TRC20 నెట్వర్క్ మాత్రమే సపోర్ట్ చేయబడుతుంది. తప్పు నెట్వర్క్ నష్టం కలిగించవచ్చు.',
    'Example: 9876543210@paytm, user@okaxis': 'ఉదాహరణ: 9876543210@paytm, user@okaxis',
    'Full name as on card': 'కార్డులో ఉన్నట్లు పూర్తి పేరు',
    'Enter full name as per bank': 'బ్యాంక్ ప్రకారం పూర్తి పేరు నమోదు చేయండి',
    'Enter account number': 'ఖాతా నంబర్ నమోదు చేయండి',
    'Re-enter account number': 'ఖాతా నంబర్ను మళ్లీ నమోదు చేయండి',
    'e.g., State Bank of India': 'ఉదా., State Bank of India',
    'Enter TRC20 wallet address': 'TRC20 వాలెట్ అడ్రస్ నమోదు చేయండి',
    'Re-enter wallet address': 'వాలెట్ అడ్రస్ను మళ్లీ నమోదు చేయండి',

    /* messages the app writes at runtime */
    'Contact customer support for more information.':
      'మరింత సమాచారం కోసం కస్టమర్ సపోర్ట్ను సంప్రదించండి.',
    'Log out': 'లాగ్ అవుట్',
    'Please Wait!': 'దయచేసి వేచి ఉండండి!',
    'Complete Payment': 'పేమెంట్ పూర్తి చేయండి',
    'Days Completed': 'రోజులు పూర్తయ్యాయి',
    'Congratulations!': 'అభినందనలు!',
    'Balance refreshed!': 'బ్యాలెన్స్ రిఫ్రెష్ అయింది!',
    'UID Copied!': 'UID కాపీ అయింది!',
    'Cache cleared successfully!': 'క్యాష్ క్లియర్ అయింది!',
    'Notification opened': 'నోటిఫికేషన్ తెరవబడింది',
    'Secret code copied!': 'సీక్రెట్ కోడ్ కాపీ అయింది!',
    'Failed to copy': 'కాపీ చేయలేకపోయాము',
    'Copy not supported': 'కాపీ సపోర్ట్ చేయబడదు',

    /* legal */
    'About Us': 'మా గురించి',
    'About us': 'మా గురించి',
    "Beginner's Guide": 'ప్రారంభకుల గైడ్',
    'Customer Service': 'కస్టమర్ సర్వీస్',
    'Terms of Service': 'సేవా నిబంధనలు',
    'Privacy Policy': 'ప్రైవసీ పాలసీ',
    'Last Updated: October 2023': 'చివరి అప్డేట్: అక్టోబర్ 2023',
    "India's Leading Interactive Entertainment Platform":
      'భారతదేశపు ప్రముఖ ఇంటరాక్టివ్ ఎంటర్టైన్మెంట్ ప్లాట్ఫారమ్',
    Users: 'వినియోగదారులు',
    Funding: 'ఫండింగ్',
    Launched: 'ప్రారంభం',
    '1. Acceptance of Terms': '1. నిబంధనల అంగీకారం',
    '2. Eligibility': '2. అర్హత',
    '3. Account Responsibility': '3. ఖాతా బాధ్యత',
    '4. Deposits and Withdrawals': '4. డిపాజిట్లు మరియు విత్డ్రాలు',
    '5. Fair Play': '5. నిష్పక్షపాత ఆట',
    '6. Limitation of Liability': '6. బాధ్యత పరిమితి',
    '1. Information We Collect': '1. మేము సేకరించే సమాచారం',
    '2. How We Use Your Data': '2. మీ డేటాను ఎలా ఉపయోగిస్తాము',
    '3. Data Security': '3. డేటా భద్రత',
    '4. Sharing with Third Parties': '4. మూడవ పక్షాలతో పంచుకోవడం',
    '5. Your Rights': '5. మీ హక్కులు',
    '6. Cookies': '6. కుకీలు',
  })

  /* telugu — long legal paragraphs (kept separate for readability) */
  Object.assign(DICTS.te, {
    "99infinity is India's leading interactive entertainment platform, bringing together Games, Esports, and a lot more on a single app. Launched in 2018, 99infinity has grown into a cultural phenomenon with a vibrant community of 250 Million+ users. With its mission to democratize entertainment for Bharat, 99infinity is redefining how India engages digitally.":
      '99infinity భారతదేశపు ప్రముఖ ఇంటరాక్టివ్ ఎంటర్టైన్మెంట్ ప్లాట్ఫారమ్ — గేమ్లు, ఈస్పోర్ట్స్ మరియు మరెన్నో ఒకే యాప్లో అందిస్తుంది. 2018లో ప్రారంభమైన 99infinity, 25 కోట్లకు పైగా వినియోగదారుల సజీవ సముదాయంతో సాంస్కృతిక గుర్తింపుగా ఎదిగింది. భారత్కు వినోదాన్ని అందరికీ అందించే లక్ష్యంతో, 99infinity భారత డిజిటల్ అనుభవాన్ని కొత్త రూపంలో నిర్వచిస్తోంది.',
    "99infinity, a Series-C funded venture, has raised $100 million from Marquee gaming and entertainment investors such as Griffin Gaming Partners, Courtside Ventures, Maker's Fund, all of whom made their first investment in the Indian start-up ecosystem through 99infinity.":
      'Series-C నిధులతో నడిచే 99infinity, Griffin Gaming Partners, Courtside Ventures, Maker\'s Fund వంటి ప్రముఖ గేమింగ్ మరియు వినోద పెట్టుబడిదారుల నుండి $100 మిలియన్లు సేకరించింది. వీరందరూ భారతీయ స్టార్ట్-అప్ పర్యావరణంలో తమ మొదటి పెట్టుబడిని 99infinity ద్వారానే చేశారు.',
    'By accessing or using the 99infinity platform, you agree to be bound by these Terms of Service. If you do not agree, you must not use our services.':
      '99infinity ప్లాట్ఫారమ్ను ఉపయోగించడం ద్వారా మీరు ఈ సేవా నిబంధనలకు కట్టుబడటానికి అంగీకరిస్తున్నారు. అంగీకరించకపోతే మా సేవలను ఉపయోగించవద్దు.',
    'You must be at least 18 years of age to create an account and participate in any games. We reserve the right to request proof of age at any time.':
      'ఖాతా సృష్టించి ఏ గేమ్లోనైనా పాల్గొనడానికి మీకు కనీసం 18 ఏళ్లు ఉండాలి. ఎప్పుడైనా వయస్సు రుజువు అడిగే హక్కు మాకు ఉంది.',
    'You are solely responsible for maintaining the confidentiality of your account credentials. Any activity conducted through your account is your responsibility. Notify us immediately of any unauthorized use.':
      'మీ ఖాతా వివరాలను గోప్యంగా ఉంచే బాధ్యత పూర్తిగా మీదే. మీ ఖాతా ద్వారా జరిగే ప్రతి కార్యకలాపానికి మీరే బాధ్యులు. అనధికారిక వినియోగం జరిగితే వెంటనే మాకు తెలియజేయండి.',
    'All deposits must be made through authorized payment methods. Withdrawals are subject to verification and may take up to 24 hours to process. We reserve the right to refuse any transaction.':
      'అన్ని డిపాజిట్లు అధికారిక పేమెంట్ పద్ధతుల ద్వారానే చేయాలి. విత్డ్రాలు వెరిఫికేషన్కు లోబడి ఉంటాయి, ప్రాసెస్ కావడానికి 24 గంటలు పట్టవచ్చు. ఏ లావాదేవీనైనా తిరస్కరించే హక్కు మాకు ఉంది.',
    'Cheating, collusion, or use of automated bots is strictly prohibited. Any account found violating these rules will be permanently banned, and funds may be forfeited.':
      'మోసం, కుట్ర లేదా ఆటోమేటిక్ బాట్ల వినియోగం కఠినంగా నిషేధించబడింది. నియమాలు ఉల్లంఘించిన ఖాతాలు శాశ్వతంగా నిషేధించబడతాయి, నిధులు జప్తు కావచ్చు.',
    '99infinity is not liable for any technical glitches, network issues, or financial losses incurred during gameplay. Play responsibly.':
      'ఆట సమయంలో ఏర్పడే సాంకేతిక సమస్యలు, నెట్వర్క్ లోపాలు లేదా ఆర్థిక నష్టాలకు 99infinity బాధ్యత వహించదు. బాధ్యతగా ఆడండి.',
  })

  Object.assign(DICTS.te, {
    'We collect personal information such as your name, phone number, email address, and device data when you register and use our platform.':
      'మీరు నమోదు చేసి ప్లాట్ఫారమ్ను ఉపయోగించినప్పుడు మీ పేరు, ఫోన్ నంబర్, ఇమెయిల్ అడ్రస్ మరియు పరికర డేటా వంటి వ్యక్తిగత సమాచారాన్ని సేకరిస్తాము.',
    'Your data is used to process transactions, provide customer support, prevent fraud, and personalize your gaming experience.':
      'మీ డేటాను లావాదేవీలు ప్రాసెస్ చేయడానికి, కస్టమర్ సపోర్ట్ అందించడానికి, మోసాలను నివారించడానికి మరియు మీ గేమింగ్ అనుభవాన్ని మెరుగుపరచడానికి ఉపయోగిస్తాము.',
    'We implement industry-standard encryption and security measures to protect your data. Your password is stored using one-way hashing and is never visible to us.':
      'మీ డేటాను రక్షించడానికి పరిశ్రమ ప్రమాణాల ఎన్క్రిప్షన్ మరియు భద్రతా చర్యలను అమలు చేస్తాము. మీ పాస్వర్డ్ వన్-వే హాషింగ్తో నిల్వ ఉంటుంది, అది మాకు ఎప్పుడూ కనిపించదు.',
    'We do not sell your personal data. We may share information with payment gateways and regulatory authorities only when required by law.':
      'మేము మీ వ్యక్తిగత డేటాను అమ్మము. చట్టపరంగా అవసరమైనప్పుడు మాత్రమే పేమెంట్ గేట్వేలు మరియు నియంత్రణ సంస్థలతో సమాచారాన్ని పంచుకోవచ్చు.',
    'You have the right to access, update, or request deletion of your personal data by contacting our customer support team.':
      'మీ వ్యక్తిగత డేటాను చూడటం, అప్డేట్ చేయడం లేదా తొలగించమని అడగడం మీ హక్కు — ఇందుకు మా కస్టమర్ సపోర్ట్ బృందాన్ని సంప్రదించండి.',
    'We use cookies to enhance your experience and analyze platform traffic. You can disable cookies in your browser settings.':
      'అనుభవాన్ని మెరుగుపరచడానికి మరియు ప్లాట్ఫారమ్ ట్రాఫిక్ను విశ్లేషించడానికి మేము కుకీలను ఉపయోగిస్తాము. బ్రౌజర్ సెట్టింగ్లలో కుకీలను ఆఫ్ చేయవచ్చు.',
  })

  /* ------------------------------------------------- leftover UI copy (audit) */
  /* Everything the automated page audit still found in English: footer warnings,
     dialog copy, section labels, aria-labels and the browser-side validators. */
  Object.assign(DICTS.hi, {
    'Gambling can be addictive, please play rationally.':
      'जुआ लत लगा सकता है, कृपया समझदारी से खेलें।',
    '99infinity only accepts customers above the age of 18.':
      '99infinity केवल 18 वर्ष से अधिक उम्र के ग्राहकों को स्वीकार करता है।',
    'Are you sure you want to log out? You will need to log in again to access your account.':
      'क्या आप वाकई लॉग आउट करना चाहते हैं? अकाउंट इस्तेमाल करने के लिए दोबारा लॉग इन करना होगा।',
    "Don't log in yet, continue browsing": 'अभी लॉग इन न करें, ब्राउज़ करते रहें',
    'We will send a verification code to your registered phone number.':
      'हम आपके रजिस्टर्ड फ़ोन नंबर पर वेरिफिकेशन कोड भेजेंगे।',
    'Your profile details have been updated.': 'आपकी प्रोफ़ाइल डिटेल अपडेट हो गई है।',
    'Enter an amount to continue. This is a UI demo — no real payment is processed.':
      'आगे बढ़ने के लिए राशि डालें। यह एक UI डेमो है — कोई असली पेमेंट प्रोसेस नहीं होता।',
    'One spin could unlock your next big win.':
      'एक स्पिन आपकी अगली बड़ी जीत खोल सकता है।',
    'Could not claim right now': 'अभी क्लेम नहीं हो सका',
    Promotions: 'प्रमोशन',
    Detail: 'विवरण',
    Feedback: 'फ़ीडबैक',
    Notification: 'नोटिफिकेशन',
    'My Top-Up Coupons': 'मेरे टॉप-अप कूपन',
    'Edit avatar': 'अवतार बदलें',
    'Pick one of our preset avatars to personalize your profile':
      'अपनी प्रोफ़ाइल सजाने के लिए हमारे तैयार अवतारों में से एक चुनें',
    'Two-Factor Auth': 'टू-फैक्टर ऑथ (2FA)',
    'Verification Code': 'वेरिफिकेशन कोड',
    'Terms & Conditions': 'नियम और शर्तें',
    'Not found': 'नहीं मिला',
    'Low fee': 'कम फीस',
    Instant: 'तुरंत',
    'No fee': 'कोई फीस नहीं',
    'Debit / Credit Card': 'डेबिट / क्रेडिट कार्ड',
    'UPI ID': 'UPI आईडी',
    '1–30 minutes': '1–30 मिनट',
    'All security measures are active': 'सभी सुरक्षा उपाय चालू हैं',
    'Enter a password': 'पासवर्ड डालें',
    'Enter the exact amount': 'सही राशि डालें',
    'How to Pay': 'पेमेंट कैसे करें',
    'Open any UPI app': 'कोई भी UPI ऐप खोलें',
    'Proceed to Pay': 'पेमेंट के लिए आगे बढ़ें',
    'Request withdrawal': 'विदड्रॉ रिक्वेस्ट करें',
    'Scan this QR with any UPI app': 'इस QR को किसी भी UPI ऐप से स्कैन करें',
    'Free Game Claimed!': 'फ्री गेम क्लेम हो गया!',
    'Please enter a valid 6-digit code': 'सही 6 अंकों का कोड डालें',
    'Please select a payment method': 'कृपया पेमेंट तरीका चुनें',
    'Enter valid account number': 'सही अकाउंट नंबर डालें',
    'Enter valid expiry (MM/YY)': 'सही एक्सपायरी (MM/YY) डालें',
    'Enter valid CVV': 'सही CVV डालें',
    'Enter valid 11-digit IFSC': 'सही 11 अंकों का IFSC डालें',
    'Enter valid USDT wallet address': 'सही USDT वॉलेट एड्रेस डालें',
    'Enter name on card': 'कार्ड पर लिखा नाम डालें',
    'Enter account holder name': 'अकाउंट होल्डर का नाम डालें',
    'Enter a valid email address': 'सही ईमेल एड्रेस डालें',
    'Time expired. Please try again.': 'समय खत्म हो गया। दोबारा कोशिश करें।',
    'Insufficient balance — deposit first': 'बैलेंस कम है — पहले डिपॉज़िट करें',
    'Withdrawal failed': 'विदड्रॉ नहीं हो सका',
    'Withdrawal requested!': 'विदड्रॉ रिक्वेस्ट भेज दी!',
    '2FA enabled successfully!': '2FA सफलतापूर्वक चालू हो गया!',
    'Could not save language': 'भाषा सेव नहीं हो सकी',
    'Could not save profile': 'प्रोफ़ाइल सेव नहीं हो सकी',
    'Network error, try again': 'नेटवर्क समस्या, दोबारा कोशिश करें',
    'Minimum withdrawal is': 'न्यूनतम विदड्रॉ है',
    'Maximum withdrawal is': 'अधिकतम विदड्रॉ है',
    'Go to slide': 'स्लाइड पर जाएं',
    Previous: 'पिछला',
    'Show password': 'पासवर्ड दिखाएं',
    Delete: 'हटाएं',
    'Copy secret code': 'सीक्रेट कोड कॉपी करें',
    'Event Rewards': 'इवेंट रिवॉर्ड',
    'event rewards': 'इवेंट रिवॉर्ड',
    'and unlock all 8 exclusive rewards': 'और सभी 8 एक्सक्लूसिव रिवॉर्ड अनलॉक करें',
    '1—30 minutes': '1—30 मिनट',
    Wallet: 'वॉलेट',
    'Total Withdrawal Amount': 'कुल विदड्रॉ राशि',
    'Total deposit amount': 'कुल डिपॉज़िट राशि',
    'Main wallet': 'मेन वॉलेट',
    '3rd party wallet': 'थर्ड-पार्टी वॉलेट',
    'Main wallet transfer': 'मेन वॉलेट ट्रांसफर',
    'Withdrawal history': 'विदड्रॉ हिस्ट्री',
  })
  TERMS.hi.DAY = 'दिन'

  Object.assign(DICTS.ta, {
    'Gambling can be addictive, please play rationally.':
      'சூதாட்டம் பழக்கமாகலாம், அறிவுடன் விளையாடுங்கள்.',
    '99infinity only accepts customers above the age of 18.':
      '99infinity 18 வயதுக்கு மேற்பட்ட வாடிக்கையாளர்களை மட்டுமே ஏற்கிறது.',
    'Are you sure you want to log out? You will need to log in again to access your account.':
      'நிச்சயமாக வெளியேற விரும்புகிறீர்களா? கணக்கை பயன்படுத்த மீண்டும் உள்நுழைய வேண்டும்.',
    "Don't log in yet, continue browsing": 'இன்னும் உள்நுழைய வேண்டாம், தொடர்ந்து பாருங்கள்',
    'We will send a verification code to your registered phone number.':
      'உங்கள் பதிவு செய்யப்பட்ட தொலைபேசி எண்ணுக்கு சரிபார்ப்பு கோட்டை அனுப்புவோம்.',
    'Your profile details have been updated.': 'உங்கள் சுயவிவர விவரங்கள் புதுப்பிக்கப்பட்டன.',
    'Enter an amount to continue. This is a UI demo — no real payment is processed.':
      'தொடர தொகையை உள்ளிடவும். இது ஒரு UI டெமோ — உண்மையான பணம் செலுத்தப்படாது.',
    'One spin could unlock your next big win.':
      'ஒரு சுழற்சி உங்கள் அடுத்த பெரிய வெற்றியை திறக்கலாம்.',
    'Could not claim right now': 'இப்போது க்ளெய்ம் செய்ய முடியவில்லை',
    Promotions: 'ப்ரொமோஷன்கள்',
    Detail: 'விவரம்',
    Feedback: 'கருத்து',
    Notification: 'அறிவிப்பு',
    'My Top-Up Coupons': 'எனது டாப்-அப் கூப்பன்கள்',
    'Edit avatar': 'அவதாரை மாற்று',
    'Pick one of our preset avatars to personalize your profile':
      'உங்கள் சுயவிவரத்தை அழகாக்க நாங்கள் தயார் செய்த அவதார்களில் ஒன்றை தேர்ந்தெடுக்கவும்',
    'Two-Factor Auth': 'இரு-காரணி அங்கீகாரம் (2FA)',
    'Verification Code': 'சரிபார்ப்பு கோட்',
    'Terms & Conditions': 'விதிமுறைகள் மற்றும் நிபந்தனைகள்',
    'Not found': 'கிடைக்கவில்லை',
    'Low fee': 'குறைந்த கட்டணம்',
    Instant: 'உடனடி',
    'No fee': 'கட்டணம் இல்லை',
    'Debit / Credit Card': 'டெபிட் / கிரெடிட் கார்டு',
    'UPI ID': 'UPI ஐடி',
    '1–30 minutes': '1–30 நிமிடங்கள்',
    'All security measures are active': 'அனைத்து பாதுகாப்பு நடவடிக்கைகளும் செயலில் உள்ளன',
    'Enter a password': 'கடவுச்சொல்லை உள்ளிடவும்',
    'Enter the exact amount': 'சரியான தொகையை உள்ளிடவும்',
    'How to Pay': 'எப்படி செலுத்துவது',
    'Open any UPI app': 'எந்த UPI ஆப்பையும் திறக்கவும்',
    'Proceed to Pay': 'செலுத்த தொடரவும்',
    'Request withdrawal': 'பணம் எடுக்க கோரிக்கை',
    'Scan this QR with any UPI app': 'இந்த QR-ஐ எந்த UPI ஆப் மூலமும் ஸ்கேன் செய்யவும்',
    'Free Game Claimed!': 'இலவச விளையாட்டு பெறப்பட்டது!',
  })
  TERMS.ta.DAY = 'நாள்'

  Object.assign(DICTS.ta, {
    'Please enter a valid 6-digit code': 'சரியான 6 இலக்க கோட்டை உள்ளிடவும்',
    'Please select a payment method': 'பணம் செலுத்தும் முறையை தேர்ந்தெடுக்கவும்',
    'Enter valid account number': 'சரியான கணக்கு எண்ணை உள்ளிடவும்',
    'Enter valid expiry (MM/YY)': 'சரியான காலாவதி (MM/YY) உள்ளிடவும்',
    'Enter valid CVV': 'சரியான CVV உள்ளிடவும்',
    'Enter valid 11-digit IFSC': 'சரியான 11 இலக்க IFSC உள்ளிடவும்',
    'Enter valid USDT wallet address': 'சரியான USDT வாலட் முகவரியை உள்ளிடவும்',
    'Enter name on card': 'கார்டில் உள்ள பெயரை உள்ளிடவும்',
    'Enter account holder name': 'கணக்கு வைத்திருப்பவர் பெயரை உள்ளிடவும்',
    'Enter a valid email address': 'சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்',
    'Time expired. Please try again.': 'நேரம் முடிந்தது. மீண்டும் முயற்சிக்கவும்.',
    'Insufficient balance — deposit first': 'இருப்பு போதவில்லை — முதலில் வைப்பு செய்யவும்',
    'Withdrawal failed': 'பணம் எடுத்தல் தோல்வி',
    'Withdrawal requested!': 'பணம் எடுக்கும் கோரிக்கை அனுப்பப்பட்டது!',
    '2FA enabled successfully!': '2FA வெற்றிகரமாக இயக்கப்பட்டது!',
    'Could not save language': 'மொழியை சேமிக்க முடியவில்லை',
    'Could not save profile': 'சுயவிவரத்தை சேமிக்க முடியவில்லை',
    'Network error, try again': 'நெட்வொர்க் பிழை, மீண்டும் முயற்சிக்கவும்',
    'Minimum withdrawal is': 'குறைந்தபட்ச பணம் எடுத்தல்',
    'Maximum withdrawal is': 'அதிகபட்ச பணம் எடுத்தல்',
    'Go to slide': 'ஸ்லைடுக்கு செல்லவும்',
    Previous: 'முந்தைய',
    'Show password': 'கடவுச்சொல்லை காட்டு',
    Delete: 'நீக்கு',
    'Copy secret code': 'ரகசிய கோட்டை நகலெடு',
    'Event Rewards': 'நிகழ்வு பரிசுகள்',
    'event rewards': 'நிகழ்வு பரிசுகள்',
    'and unlock all 8 exclusive rewards':
      'மற்றும் அனைத்து 8 பிரத்யேக பரிசுகளையும் திறக்கவும்',
    '1—30 minutes': '1—30 நிமிடங்கள்',
    Wallet: 'வாலட்',
    'Total Withdrawal Amount': 'மொத்த பணம் எடுத்த தொகை',
    'Total deposit amount': 'மொத்த வைப்பு தொகை',
    'Main wallet': 'பிரதான வாலட்',
    '3rd party wallet': 'மூன்றாம் தரப்பு வாலட்',
    'Main wallet transfer': 'பிரதான வாலட் மாற்றம்',
    'Withdrawal history': 'பணம் எடுத்த வரலாறு',
  })

  Object.assign(DICTS.te, {
    'Gambling can be addictive, please play rationally.':
      'జూదం అలవాటుగా మారవచ్చు, దయచేసి తెలివిగా ఆడండి.',
    '99infinity only accepts customers above the age of 18.':
      '99infinity 18 ఏళ్ల పైబడిన వినియోగదారులను మాత్రమే అంగీకరిస్తుంది.',
    'Are you sure you want to log out? You will need to log in again to access your account.':
      'నిజంగా లాగ్ అవుట్ చేయాలనుకుంటున్నారా? ఖాతా వాడాలంటే మళ్లీ లాగిన్ అవ్వాలి.',
    "Don't log in yet, continue browsing": 'ఇంకా లాగిన్ అవ్వకండి, చూస్తూ ఉండండి',
    'We will send a verification code to your registered phone number.':
      'మీ నమోదిత ఫోన్ నంబర్కు వెరిఫికేషన్ కోడ్ పంపుతాము.',
    'Your profile details have been updated.': 'మీ ప్రొఫైల్ వివరాలు అప్డేట్ అయ్యాయి.',
    'Enter an amount to continue. This is a UI demo — no real payment is processed.':
      'కొనసాగడానికి మొత్తాన్ని నమోదు చేయండి. ఇది UI డెమో — నిజమైన పేమెంట్ జరగదు.',
    'One spin could unlock your next big win.':
      'ఒక స్పిన్ మీ తదుపరి పెద్ద గెలుపును తెరవవచ్చు.',
    'Could not claim right now': 'ఇప్పుడు క్లెయిమ్ చేయలేకపోయాము',
    Promotions: 'ప్రమోషన్లు',
    Detail: 'వివరాలు',
    Feedback: 'ఫీడ్బ్యాక్',
    Notification: 'నోటిఫికేషన్',
    'My Top-Up Coupons': 'నా టాప్-అప్ కూపన్లు',
    'Edit avatar': 'అవతార్ మార్చండి',
    'Pick one of our preset avatars to personalize your profile':
      'మీ ప్రొఫైల్ను అందంగా మార్చుకోవడానికి మా సిద్ధమైన అవతార్లలో ఒకటి ఎంచుకోండి',
    'Two-Factor Auth': 'టూ-ఫ్యాక్టర్ ఆథ్ (2FA)',
    'Verification Code': 'వెరిఫికేషన్ కోడ్',
    'Terms & Conditions': 'నిబంధనలు మరియు షరతులు',
    'Not found': 'కనబడలేదు',
    'Low fee': 'తక్కువ ఫీజు',
    Instant: 'తక్షణం',
    'No fee': 'ఫీజు లేదు',
    'Debit / Credit Card': 'డెబిట్ / క్రెడిట్ కార్డు',
    'UPI ID': 'UPI ఐడీ',
    '1–30 minutes': '1–30 నిమిషాలు',
    'All security measures are active': 'అన్ని భద్రతా చర్యలు అమలులో ఉన్నాయి',
    'Enter a password': 'పాస్వర్డ్ నమోదు చేయండి',
    'Enter the exact amount': 'సరైన మొత్తాన్ని నమోదు చేయండి',
    'How to Pay': 'ఎలా పేమెంట్ చేయాలి',
    'Open any UPI app': 'ఏదైనా UPI యాప్ తెరవండి',
    'Proceed to Pay': 'పేమెంట్ కోసం కొనసాగండి',
    'Request withdrawal': 'విత్డ్రా కోరండి',
    'Scan this QR with any UPI app': 'ఈ QRను ఏదైనా UPI యాప్తో స్కాన్ చేయండి',
    'Free Game Claimed!': 'ఉచిత గేమ్ పొందబడింది!',
  })
  TERMS.te.DAY = 'రోజు'

  Object.assign(DICTS.te, {
    'Please enter a valid 6-digit code': 'సరైన 6 అంకెల కోడ్ నమోదు చేయండి',
    'Please select a payment method': 'దయచేసి పేమెంట్ పద్ధతిని ఎంచుకోండి',
    'Enter valid account number': 'సరైన ఖాతా నంబర్ నమోదు చేయండి',
    'Enter valid expiry (MM/YY)': 'సరైన ఎక్స్పైరీ (MM/YY) నమోదు చేయండి',
    'Enter valid CVV': 'సరైన CVV నమోదు చేయండి',
    'Enter valid 11-digit IFSC': 'సరైన 11 అంకెల IFSC నమోదు చేయండి',
    'Enter valid USDT wallet address': 'సరైన USDT వాలెట్ అడ్రస్ నమోదు చేయండి',
    'Enter name on card': 'కార్డులో ఉన్న పేరు నమోదు చేయండి',
    'Enter account holder name': 'ఖాతాదారు పేరు నమోదు చేయండి',
    'Enter a valid email address': 'సరైన ఇమెయిల్ అడ్రస్ నమోదు చేయండి',
    'Time expired. Please try again.': 'సమయం ముగిసింది. మళ్లీ ప్రయత్నించండి.',
    'Insufficient balance — deposit first': 'బ్యాలెన్స్ సరిపోదు — ముందు డిపాజిట్ చేయండి',
    'Withdrawal failed': 'విత్డ్రా విఫలమైంది',
    'Withdrawal requested!': 'విత్డ్రా రిక్వెస్ట్ పంపబడింది!',
    '2FA enabled successfully!': '2FA విజయవంతంగా ఆన్ అయింది!',
    'Could not save language': 'భాష సేవ్ కాలేదు',
    'Could not save profile': 'ప్రొఫైల్ సేవ్ కాలేదు',
    'Network error, try again': 'నెట్వర్క్ లోపం, మళ్లీ ప్రయత్నించండి',
    'Minimum withdrawal is': 'కనీస విత్డ్రా',
    'Maximum withdrawal is': 'గరిష్ఠ విత్డ్రా',
    'Go to slide': 'స్లైడ్కు వెళ్లండి',
    Previous: 'మునుపటి',
    'Show password': 'పాస్వర్డ్ చూపించు',
    Delete: 'తొలగించు',
    'Copy secret code': 'సీక్రెట్ కోడ్ కాపీ చేయండి',
    'Event Rewards': 'ఈవెంట్ రివార్డులు',
    'event rewards': 'ఈవెంట్ రివార్డులు',
    'and unlock all 8 exclusive rewards': 'మరియు అన్ని 8 ప్రత్యేక రివార్డులను తెరవండి',
    '1—30 minutes': '1—30 నిమిషాలు',
    Wallet: 'వాలెట్',
    'Total Withdrawal Amount': 'మొత్తం విత్డ్రా మొత్తం',
    'Total deposit amount': 'మొత్తం డిపాజిట్ మొత్తం',
    'Main wallet': 'మెయిన్ వాలెట్',
    '3rd party wallet': 'థర్డ్-పార్టీ వాలెట్',
    'Main wallet transfer': 'మెయిన్ వాలెట్ ట్రాన్స్ఫర్',
    'Withdrawal history': 'విత్డ్రా చరిత్ర',
  })

  /* ------------------------------------------- deposit · live UPI payments (new UI) */
  Object.assign(DICTS.hi, {
    'Generating QR…': 'QR बन रहा है…',
    'Pay via UPI App': 'UPI ऐप से पेमेंट करें',
    'Open payment page': 'पेमेंट पेज खोलें',
    'Waiting for payment confirmation…': 'पेमेंट कन्फर्मेशन का इंतज़ार…',
    'Payment reference (UTR)': 'पेमेंट रेफरेंस (UTR)',
    'I have paid — Check status': 'पेमेंट कर दिया — स्टेटस देखें',
    'Generate a new QR': 'नया QR बनाएं',
    'Checking…': 'चेक हो रहा है…',
    'Creating order…': 'ऑर्डर बन रहा है…',
    'Payment Received!': 'पेमेंट मिल गई!',
    'Your wallet has been updated.': 'आपका वॉलेट अपडेट हो गया है।',
    'Minimum deposit is': 'कम से कम डिपॉज़िट',
    'Deposits are temporarily unavailable. Please try again later.':
      'डिपॉज़िट अभी उपलब्ध नहीं है। कृपया थोड़ी देर बाद कोशिश करें।',
    'The payment gateway is not configured yet. Please try again later.':
      'पेमेंट गेटवे अभी सेट नहीं हुआ है। कृपया थोड़ी देर बाद कोशिश करें।',
    'QR unavailable — use the UPI app button': 'QR नहीं दिख रहा — UPI ऐप बटन इस्तेमाल करें',
    'Almost out of time — please finish the payment now': 'समय लगभग खत्म — कृपया अभी पेमेंट पूरी करें',
    'This payment window has closed. Generate a new QR to try again.':
      'पेमेंट का समय खत्म हो गया है। दोबारा कोशिश के लिए नया QR बनाएं।',
    'Payment received — your balance will be updated after verification':
      'पेमेंट मिल गई — वेरिफिकेशन के बाद बैलेंस अपडेट होगा',
    'Gateway unreachable — please keep waiting': 'गेटवे से संपर्क नहीं हो पाया — कृपया इंतज़ार करें',
    'No payment received yet': 'अभी कोई पेमेंट नहीं मिली',
    'Could not start the payment': 'पेमेंट शुरू नहीं हो सकी',
    'Could not check the payment': 'पेमेंट चेक नहीं हो सकी',
    'We are verifying your payment — your balance will update shortly.':
      'हम आपकी पेमेंट वेरिफाई कर रहे हैं — बैलेंस थोड़ी देर में अपडेट हो जाएगा।',
    'has been added to your wallet.': 'आपके वॉलेट में जोड़ दिए गए हैं।',
    'added to your wallet': 'वॉलेट में जोड़ा गया',
  })

  Object.assign(DICTS.ta, {
    'Generating QR…': 'QR உருவாக்கப்படுகிறது…',
    'Pay via UPI App': 'UPI ஆப் மூலம் செலுத்து',
    'Open payment page': 'பேமெண்ட் பக்கத்தைத் திற',
    'Waiting for payment confirmation…': 'பேமெண்ட் உறுதிப்படுத்தலுக்காக காத்திருக்கிறது…',
    'Payment reference (UTR)': 'பேமெண்ட் குறிப்பு (UTR)',
    'I have paid — Check status': 'பணம் செலுத்திவிட்டேன் — நிலையைப் பார்',
    'Generate a new QR': 'புதிய QR உருவாக்கு',
    'Checking…': 'சரிபார்க்கப்படுகிறது…',
    'Creating order…': 'ஆர்டர் உருவாக்கப்படுகிறது…',
    'Payment Received!': 'பேமெண்ட் பெறப்பட்டது!',
    'Your wallet has been updated.': 'உங்கள் வாலட் புதுப்பிக்கப்பட்டது.',
    'Minimum deposit is': 'குறைந்தபட்ச டெபாசிட்',
    'Deposits are temporarily unavailable. Please try again later.':
      'டெபாசிட் தற்காலிகமாக இல்லை. சிறிது நேரம் கழித்து முயற்சிக்கவும்.',
    'The payment gateway is not configured yet. Please try again later.':
      'பேமெண்ட் கேட்வே இன்னும் அமைக்கப்படவில்லை. சிறிது நேரம் கழித்து முயற்சிக்கவும்.',
    'QR unavailable — use the UPI app button': 'QR கிடைக்கவில்லை — UPI ஆப் பொத்தானைப் பயன்படுத்தவும்',
    'Almost out of time — please finish the payment now': 'நேரம் முடியப்போகிறது — இப்போதே பேமெண்டை முடிக்கவும்',
    'This payment window has closed. Generate a new QR to try again.':
      'பேமெண்ட் நேரம் முடிந்தது. மீண்டும் முயற்சிக்க புதிய QR உருவாக்கவும்.',
    'Payment received — your balance will be updated after verification':
      'பேமெண்ட் பெறப்பட்டது — சரிபார்ப்புக்குப் பிறகு இருப்பு புதுப்பிக்கப்படும்',
    'Gateway unreachable — please keep waiting': 'கேட்வேயை அணுக முடியவில்லை — காத்திருக்கவும்',
    'No payment received yet': 'இன்னும் பேமெண்ட் வரவில்லை',
    'Could not start the payment': 'பேமெண்டைத் தொடங்க முடியவில்லை',
    'Could not check the payment': 'பேமெண்டைச் சரிபார்க்க முடியவில்லை',
    'We are verifying your payment — your balance will update shortly.':
      'உங்கள் பேமெண்டை சரிபார்க்கிறோம் — இருப்பு விரைவில் புதுப்பிக்கப்படும்.',
    'has been added to your wallet.': 'உங்கள் வாலட்டில் சேர்க்கப்பட்டது.',
    'added to your wallet': 'வாலட்டில் சேர்க்கப்பட்டது',
  })


  Object.assign(DICTS.te, {
    'Generating QR…': 'QR సృష్టించబడుతోంది…',
    'Pay via UPI App': 'UPI యాప్తో పేమెంట్ చేయండి',
    'Open payment page': 'పేమెంట్ పేజీ తెరవండి',
    'Waiting for payment confirmation…': 'పేమెంట్ నిర్ధారణ కోసం వేచి ఉంది…',
    'Payment reference (UTR)': 'పేమెంట్ రెఫరెన్స్ (UTR)',
    'I have paid — Check status': 'పేమెంట్ చేశాను — స్థితి చూడండి',
    'Generate a new QR': 'కొత్త QR సృష్టించండి',
    'Checking…': 'చెక్ చేస్తోంది…',
    'Creating order…': 'ఆర్డర్ సృష్టించబడుతోంది…',
    'Payment Received!': 'పేమెంట్ అందింది!',
    'Your wallet has been updated.': 'మీ వాలెట్ అప్డేట్ అయింది.',
    'Minimum deposit is': 'కనీస డిపాజిట్',
    'Deposits are temporarily unavailable. Please try again later.':
      'డిపాజిట్లు తాత్కాలికంగా అందుబాటులో లేవు. కొద్దిసేపటి తర్వాత ప్రయత్నించండి.',
    'The payment gateway is not configured yet. Please try again later.':
      'పేమెంట్ గేట్వే ఇంకా సెట్ చేయబడలేదు. కొద్దిసేపటి తర్వాత ప్రయత్నించండి.',
    'QR unavailable — use the UPI app button': 'QR అందుబాటులో లేదు — UPI యాప్ బటన్ వాడండి',
    'Almost out of time — please finish the payment now':
      'సమయం దాదాపు ముగిసింది — దయచేసి ఇప్పుడే పేమెంట్ పూర్తి చేయండి',
    'This payment window has closed. Generate a new QR to try again.':
      'పేమెంట్ సమయం ముగిసింది. మళ్లీ ప్రయత్నించడానికి కొత్త QR సృష్టించండి.',
    'Payment received — your balance will be updated after verification':
      'పేమెంట్ అందింది — వెరిఫికేషన్ తర్వాత బ్యాలెన్స్ అప్డేట్ అవుతుంది',
    'Gateway unreachable — please keep waiting': 'గేట్వే అందుబాటులో లేదు — వేచి ఉండండి',
    'No payment received yet': 'ఇంకా పేమెంట్ రాలేదు',
    'Could not start the payment': 'పేమెంట్ ప్రారంభించలేకపోయాం',
    'Could not check the payment': 'పేమెంట్ చెక్ చేయలేకపోయాం',
    'We are verifying your payment — your balance will update shortly.':
      'మీ పేమెంట్ను వెరిఫై చేస్తున్నాం — బ్యాలెన్స్ కొద్దిసేపట్లో అప్డేట్ అవుతుంది.',
    'has been added to your wallet.': 'మీ వాలెట్కు జోడించబడింది.',
    'added to your wallet': 'వాలెట్కు జోడించబడింది',
  })

  /* ------------------------------------------- deposit · manual request fallback */
  Object.assign(DICTS.hi, {
    'Request Submitted!': 'रिक्वेस्ट सबमिट हो गई!',
    'Our team verifies your deposit and credits your wallet — usually within a few minutes.':
      'हमारी टीम आपका डिपॉज़िट वेरिफाई करके वॉलेट में क्रेडिट कर देगी — आमतौर पर कुछ ही मिनटों में।',
    'Submitting…': 'सबमिट हो रहा है…',
    'Could not submit the deposit request': 'डिपॉज़िट रिक्वेस्ट सबमिट नहीं हो सकी',
  })

  Object.assign(DICTS.ta, {
    'Request Submitted!': 'கோரிக்கை சமர்ப்பிக்கப்பட்டது!',
    'Our team verifies your deposit and credits your wallet — usually within a few minutes.':
      'எங்கள் குழு உங்கள் டெபாசிட்டை சரிபார்த்து வாலட்டில் சேர்க்கும் — வழக்கமாக சில நிமிடங்களில்.',
    'Submitting…': 'சமர்ப்பிக்கப்படுகிறது…',
    'Could not submit the deposit request': 'டெபாசிட் கோரிக்கையை சமர்ப்பிக்க முடியவில்லை',
  })

  Object.assign(DICTS.te, {
    'Request Submitted!': 'రిక్వెస్ట్ సబ్మిట్ అయింది!',
    'Our team verifies your deposit and credits your wallet — usually within a few minutes.':
      'మా టీమ్ మీ డిపాజిట్ను వెరిఫై చేసి వాలెట్కు జోడిస్తుంది — సాధారణంగా కొన్ని నిమిషాల్లో.',
    'Submitting…': 'సబ్మిట్ అవుతోంది…',
    'Could not submit the deposit request': 'డిపాజిట్ రిక్వెస్ట్ సబ్మిట్ చేయలేకపోయాం',
  })

  Object.assign(DICTS.hi, {
    'Live UPI QR is being set up. Your deposit request will be verified by our team and credited to your wallet.':
      'लाइव UPI QR सेट हो रहा है। आपकी डिपॉज़िट रिक्वेस्ट हमारी टीम वेरिफाई करके वॉलेट में क्रेडिट करेगी।',
  })
  Object.assign(DICTS.ta, {
    'Live UPI QR is being set up. Your deposit request will be verified by our team and credited to your wallet.':
      'நேரடி UPI QR அமைக்கப்படுகிறது. உங்கள் டெபாசிட் கோரிக்கையை எங்கள் குழு சரிபார்த்து வாலட்டில் சேர்க்கும்.',
  })
  Object.assign(DICTS.te, {
    'Live UPI QR is being set up. Your deposit request will be verified by our team and credited to your wallet.':
      'లైవ్ UPI QR సెట్ చేయబడుతోంది. మీ డిపాజిట్ రిక్వెస్ట్ను మా టీమ్ వెరిఫై చేసి వాలెట్కు జోడిస్తుంది.',
  })

  Object.assign(DICTS.hi, {
    'Live UPI payments are being set up. Please try again in a few minutes.':
      'लाइव UPI पेमेंट सेट हो रहे हैं। कृपया कुछ मिनट बाद कोशिश करें।',
  })
  Object.assign(DICTS.ta, {
    'Live UPI payments are being set up. Please try again in a few minutes.':
      'நேரடி UPI பேமெண்ட் அமைக்கப்படுகிறது. சில நிமிடங்களில் மீண்டும் முயற்சிக்கவும்.',
  })
  Object.assign(DICTS.te, {
    'Live UPI payments are being set up. Please try again in a few minutes.':
      'లైవ్ UPI పేమెంట్స్ సెట్ చేయబడుతున్నాయి. కొన్ని నిమిషాల్లో మళ్లీ ప్రయత్నించండి.',
  })

  /* --------------------------------------------------------------- runtime */
  var registry = [] /* captured text nodes / attributes + their English source */
  var phraseCache = {}
  var current = readLang()

  function readLang() {
    try {
      var v = localStorage.getItem(STORE_KEY)
      return CODES.indexOf(v) >= 0 ? v : 'en'
    } catch (e) {
      return 'en'
    }
  }

  function dictFor(code) {
    return DICTS[code] || {}
  }

  function phraseKeys(code) {
    if (phraseCache[code]) return phraseCache[code]
    var keys = Object.keys(dictFor(code)).sort(function (a, b) {
      return b.length - a.length
    })
    phraseCache[code] = keys
    return keys
  }

  function esc(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  }

  /** Safe pattern for a dictionary phrase: a word boundary only where the phrase
   *  itself starts/ends with a word character, so phrases that finish with a dot
   *  or a bracket ("... ₹5,000.", "([...])") still match inside a sentence. */
  function phraseRe(key) {
    var pre = /^\w/.test(key) ? '\\b' : ''
    var post = /\w$/.test(key) ? '\\b' : ''
    return new RegExp(pre + esc(key) + post, 'g')
  }

  /** exact match first, then word-level replacement inside mixed strings
   *  (e.g. "Day 5", "3 Games", "2 / 7 Days Completed") */
  function translate(str) {
    if (str == null) return str
    if (current === 'en') return str
    var d = dictFor(current)
    var text = String(str)
    var trimmed = text.trim()
    if (d[trimmed]) return text.replace(trimmed, d[trimmed])

    var out = text
    var keys = phraseKeys(current)
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i]
      if (k.length < 4 || out.indexOf(k) === -1) continue
      out = out.replace(phraseRe(k), d[k])
    }
    var terms = TERMS[current] || {}
    var tk = Object.keys(terms)
    for (var j = 0; j < tk.length; j++) {
      var term = tk[j]
      if (out.indexOf(term) === -1) continue
      out = out.replace(phraseRe(term), terms[term])
    }
    return out
  }

  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1 }

  function skipped(node) {
    var p = node.parentNode
    if (!p) return true
    if (SKIP[p.nodeName]) return true
    return !!(p.closest && p.closest('[data-i18n-skip]'))
  }

  function capture(root) {
    if (!root || !document.createTreeWalker) return
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null)
    var node
    while ((node = walker.nextNode())) {
      if (!node.nodeValue || !node.nodeValue.trim()) continue
      if (skipped(node)) continue
      if (typeof node.__vgSrc === 'string') continue
      node.__vgSrc = node.nodeValue
      registry.push({ node: node })
    }
    var els = root.querySelectorAll ? root.querySelectorAll('[placeholder],[title],[aria-label]') : []
    for (var i = 0; i < els.length; i++) {
      var el = els[i]
      if (el.closest && el.closest('[data-i18n-skip]')) continue
      if (el.__vgAttr) continue
      el.__vgAttr = {
        placeholder: el.getAttribute('placeholder'),
        title: el.getAttribute('title'),
        'aria-label': el.getAttribute('aria-label'),
      }
      registry.push({ el: el })
    }
  }

  function apply(root) {
    root = root || document.body
    if (!root) return
    capture(root)
    paint()
  }

  /** Only re-paints the entries we already know — no DOM walk. Used right after
   *  JS wrote a fresh value (toast, live balance, modal copy). */
  function refresh() {
    paint()
  }

  function paint() {
    var alive = 0
    for (var i = 0; i < registry.length; i++) {
      var e = registry[i]
      if (e.node) {
        if (!e.node.isConnected) continue
        /* the element may have been marked "do not translate" after capture
           (real user data such as a nickname, a UID or a device model) */
        if (skipped(e.node)) continue
        /* something wrote new text into a node we already knew (a live balance,
           a wheel result). Adopt that text as the new English source so it is
           translated now — and again on the next language switch. */
        if (typeof e.node.__vgOut === 'string' && e.node.nodeValue !== e.node.__vgOut) {
          e.node.__vgSrc = e.node.nodeValue
        }
        e.node.nodeValue = translate(e.node.__vgSrc)
        e.node.__vgOut = e.node.nodeValue
      } else {
        if (!e.el.isConnected) continue
        if (e.el.closest && e.el.closest('[data-i18n-skip]')) continue
        var src = e.el.__vgAttr || {}
        if (src.placeholder != null) e.el.setAttribute('placeholder', translate(src.placeholder))
        if (src.title != null) e.el.setAttribute('title', translate(src.title))
        if (src['aria-label'] != null) e.el.setAttribute('aria-label', translate(src['aria-label']))
      }
      alive++
    }
    /* drop the entries of pages the user already left */
    if (registry.length > 4000 && alive < registry.length / 2)
      registry = registry.filter(function (x) {
        return (x.node || x.el).isConnected
      })
    document.documentElement.lang = current
  }

  /** Re-translates everything already captured — cheap, used right after JS has
   *  written a fresh value (toast message, live counter, modal copy). */
  function refresh() {
    apply(null)
  }

  function setLang(code) {
    if (CODES.indexOf(code) < 0) code = 'en'
    current = code
    try {
      localStorage.setItem(STORE_KEY, code)
    } catch (e) {
      /* private mode — the choice simply lasts for this visit */
    }
    apply(document.body)
    return current
  }

  function t(str) {
    return translate(str == null ? '' : String(str))
  }

  window.VGI18N = {
    codes: CODES,
    names: NAMES,
    dicts: DICTS,
    terms: TERMS,
    t: t,
    translate: translate,
    apply: apply,
    refresh: refresh,
    setLang: setLang,
    getLang: function () {
      return current
    },
    name: function (code) {
      return NAMES[code || current] || 'English'
    },
  }

  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', function () {
      apply(document.body)
    })
  else apply(document.body)

})()
