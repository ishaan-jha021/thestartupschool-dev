export interface FounderEvent {
  tag: string;
  eventName: string;
  exhibitionCentre: string;
  location: string;
  startDate: string;
  month: string;
  weblink: string;
}

export function parseEventStringDates(event: FounderEvent): { start: string, end: string } | null {
  const year = 2026;
  const str = `${event.startDate}`.toLowerCase().trim();

  const getMonthNum = (mStr: string) => {
    if (mStr.includes('jan')) return '01';
    if (mStr.includes('feb')) return '02';
    if (mStr.includes('mar')) return '03';
    if (mStr.includes('apr')) return '04';
    if (mStr.includes('may')) return '05';
    if (mStr.includes('jun')) return '06';
    if (mStr.includes('jul')) return '07';
    if (mStr.includes('aug')) return '08';
    if (mStr.includes('sep')) return '09';
    if (mStr.includes('oct')) return '10';
    if (mStr.includes('nov')) return '11';
    if (mStr.includes('dec')) return '12';
    return null;
  };

  let startMonth = getMonthNum(str) || getMonthNum(event.month.toLowerCase()) || '03';
  let endMonth = startMonth;

  const numbers = str.match(/\d+/g);
  if (!numbers || numbers.length === 0) return null;

  let startDay = numbers[0];
  let endDay = numbers.length > 1 ? numbers[1] : numbers[0];

  if (str.includes('feb') && str.includes('mar')) {
    startMonth = '02';
    endMonth = '03';
  } else if (str.includes('jan') && str.includes('feb')) {
    startMonth = '01';
    endMonth = '02';
  } else if (str.includes('mar') && str.includes('apr')) {
    startMonth = '03';
    endMonth = '04';
  }

  startDay = startDay.padStart(2, '0');
  endDay = endDay.padStart(2, '0');

  const startDateObj = new Date(year, parseInt(startMonth) - 1, parseInt(startDay));
  const endDateObj = new Date(year, parseInt(endMonth) - 1, parseInt(endDay));

  // End date is EXCLUSIVE in Google Calendar/ICS for all-day events
  endDateObj.setDate(endDateObj.getDate() + 1);

  const formatGoogleDate = (d: Date) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}${m}${day}`;
  };

  return {
    start: formatGoogleDate(startDateObj),
    end: formatGoogleDate(endDateObj)
  };
}

export const eventsData: FounderEvent[] = [
  {
    "tag": "B2B",
    "eventName": "Glass Aluminium & Architectural Hardware Expo 2026",
    "exhibitionCentre": "EKA Club",
    "location": "Ahmedabad",
    "startDate": "13-15 Mar",
    "month": "Mar",
    "weblink": "https://10times.com/glass-expo-ahmedabad"
  },
  {
    "tag": "B2B",
    "eventName": "ACE REFLECT - Gandhinagar 2026",
    "exhibitionCentre": "HEC Exhibition Centre",
    "location": "Ahmedabad",
    "startDate": "14-15 Mar",
    "month": "Mar",
    "weblink": "https://10times.com/e1hz-11sf-5gk0-s-ace-reflect-gandhinagar"
  },
  {
    "tag": "B2B",
    "eventName": "ACE REFLECT - Ahmedabad 2026",
    "exhibitionCentre": "Gujarat University Convention and Exhibition Centre",
    "location": "Ahmedabad",
    "startDate": "14-15 Mar",
    "month": "Mar",
    "weblink": "https://10times.com/e1r5-g0dx-0g3p"
  },
  {
    "tag": "B2B",
    "eventName": "India International Travel Mart Ahmedabad 2026",
    "exhibitionCentre": "YMCA International Centre",
    "location": "Ahmedabad",
    "startDate": "20-21 Mar",
    "month": "Mar",
    "weblink": "https://10times.com/iitm-ahmedabad"
  },
  {
    "tag": "B2B",
    "eventName": "India Expo- Ahmedabad 2026",
    "exhibitionCentre": "TBA",
    "location": "Ahmedabad",
    "startDate": "29-Mar",
    "month": "Mar",
    "weblink": "https://10times.com/india-expo-ahmedabad"
  },
  {
    "tag": "B2B",
    "eventName": "Spring India Expo 2026",
    "exhibitionCentre": "TBA",
    "location": "Ahmedabad",
    "startDate": "29-Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/951533e6-04fa-50a7-9f7e-7817f3095119"
  },
  {
    "tag": "B2B",
    "eventName": "Hi Life Exhibition 2026",
    "exhibitionCentre": "The Grand Bhagwati",
    "location": "Ahmedabad",
    "startDate": "28-29 Mar",
    "month": "Mar",
    "weblink": ""
  },
  {
    "tag": "B2B",
    "eventName": "Hi Life Exhibition Bengaluru 2026",
    "exhibitionCentre": "The Lalit",
    "location": "Bengaluru",
    "startDate": "6-8 Mar",
    "month": "Mar",
    "weblink": "https://10times.com/e1zx-5f5s-16xd"
  },
  {
    "tag": "B2B",
    "eventName": "AgTech World 2026",
    "exhibitionCentre": "Parade Ground",
    "location": "Bengaluru",
    "startDate": "10-11 Mar",
    "month": "Mar",
    "weblink": "https://10times.com/e1h0-z8k1-z2pk-k-agtech-world"
  },
  {
    "tag": "B2B",
    "eventName": "Travel & Tourism Fair- Bengaluru 2026",
    "exhibitionCentre": "Parade Ground",
    "location": "Bengaluru",
    "startDate": "13-15 Mar",
    "month": "Mar",
    "weblink": "https://10times.com/travel-tourism-fair-bangalore"
  },
  {
    "tag": "B2B",
    "eventName": "Recommerce Expo 2026",
    "exhibitionCentre": "The Lalit",
    "location": "Bengaluru",
    "startDate": "17-18 Mar",
    "month": "Mar",
    "weblink": ""
  },
  {
    "tag": "B2B",
    "eventName": "IIJS Tritiya and IGJME Tritiya 2026",
    "exhibitionCentre": "Bangalore International Exhibition Centre",
    "location": "Bengaluru",
    "startDate": "21-24 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/b8f3c098-72c4-5a2a-a5a3-ae08762b5be6"
  },
  {
    "tag": "B2B",
    "eventName": "International Engineering Sourcing Show 2026",
    "exhibitionCentre": "TBA",
    "location": "Bengaluru",
    "startDate": "26-28 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/301bf331-9cbe-5110-9cb7-eedb57e9cb03"
  },
  {
    "tag": "B2B",
    "eventName": "Spring India Expo 2026",
    "exhibitionCentre": "TBA",
    "location": "Chennai",
    "startDate": "03-Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/c676f558-fa02-5d1e-bc56-d386b78eec5a"
  },
  {
    "tag": "B2B",
    "eventName": "International Rail Coach Expo 2026",
    "exhibitionCentre": "ICF Stadium",
    "location": "Chennai",
    "startDate": "12-14 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/f2787b2c-1cf7-5b7e-8dcb-80dd36e23fc7"
  },
  {
    "tag": "B2B",
    "eventName": "Automation Expo South 2026",
    "exhibitionCentre": "Chennai Trade Centre",
    "location": "Chennai",
    "startDate": "12-14 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/d5fad5da-3ed0-5f81-a2d5-8c837a1889e4"
  },
  {
    "tag": "B2B",
    "eventName": "Travel & Tourism Fair-Chennai 2026",
    "exhibitionCentre": "Chennai Trade Centre",
    "location": "Chennai",
    "startDate": "20-22 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/cfc07656-ea5e-582f-b0ed-0512277fc273"
  },
  {
    "tag": "B2B",
    "eventName": "Razzus Luxury Automotive 2026",
    "exhibitionCentre": "Island Grounds",
    "location": "Chennai",
    "startDate": "27-29 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/06a7fda2-e928-56e8-a74e-01a6182d74e3"
  },
  {
    "tag": "B2B",
    "eventName": "India Smart Utility Week 2026",
    "exhibitionCentre": "Hotel Lalit",
    "location": "Delhi",
    "startDate": "10-14 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/1f6f6914-e815-5dd9-b04a-0f535f0338f3"
  },
  {
    "tag": "B2B",
    "eventName": "AAHAR - International Food & Hospitality Fair 2026",
    "exhibitionCentre": "Bharat Mandapam",
    "location": "Delhi",
    "startDate": "10-14 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/e105a328-ad1c-5222-a9d0-4b5549ef8f10"
  },
  {
    "tag": "B2B",
    "eventName": "Spring Environmental Summit & Expo 2026",
    "exhibitionCentre": "Bharat Mandapam",
    "location": "Delhi",
    "startDate": "18-20 Mar",
    "month": "Mar",
    "weblink": ""
  },
  {
    "tag": "B2B",
    "eventName": "The Haat of Art 2026",
    "exhibitionCentre": "Bharat Mandapam",
    "location": "Delhi",
    "startDate": "20-22 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/ef6216c4-3731-5a59-ba6e-db57c8746207"
  },
  {
    "tag": "B2B",
    "eventName": "Arogya Sangoshthi 2026",
    "exhibitionCentre": "Bharat Mandapam",
    "location": "Delhi",
    "startDate": "20-22 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/7418bfd4-e397-53ab-9f27-1713f1e81f88"
  },
  {
    "tag": "B2B",
    "eventName": "Convergence India Expo 2026",
    "exhibitionCentre": "Bharat Mandapam",
    "location": "Delhi",
    "startDate": "23-25 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/c0744e7e-8a20-5699-b131-56c41e244dcc"
  },
  {
    "tag": "B2B",
    "eventName": "Internet of Things India Expo 2026",
    "exhibitionCentre": "Bharat Mandapam",
    "location": "Delhi",
    "startDate": "23-25 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/326cf38f-b2a1-5b0c-b87a-3487b39b0345"
  },
  {
    "tag": "B2B",
    "eventName": "Smart Cities India Expo 2026",
    "exhibitionCentre": "Bharat Mandapam",
    "location": "Delhi",
    "startDate": "23-25 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/529e5f98-e75d-53cc-add3-09642f348c3f"
  },
  {
    "tag": "B2B",
    "eventName": "Mobile India Expo 2026",
    "exhibitionCentre": "Bharat Mandapam",
    "location": "Delhi",
    "startDate": "23-25 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/e361126b-fb70-526d-a94b-42aaf2a519a0"
  },
  {
    "tag": "B2B",
    "eventName": "Smart Mobility India Expo 2026",
    "exhibitionCentre": "Bharat Mandapam",
    "location": "Delhi",
    "startDate": "23-25 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/e7ead4aa-a20c-518d-a985-29ad374aec1a"
  },
  {
    "tag": "B2B",
    "eventName": "India Electronics Expo 2026",
    "exhibitionCentre": "Pragati Maidan",
    "location": "Delhi",
    "startDate": "23-25 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/48ae6869-1dd6-5ee7-829d-877b026c81b6"
  },
  {
    "tag": "B2B",
    "eventName": "Fintech India Expo 2026",
    "exhibitionCentre": "Bharat Mandapam",
    "location": "Delhi",
    "startDate": "23-25 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/4a0031fd-3e4d-57c7-842e-2fea6de73a79"
  },
  {
    "tag": "B2B",
    "eventName": "Embedded Tech India Expo 2026",
    "exhibitionCentre": "Bharat Mandapam",
    "location": "Delhi",
    "startDate": "23-25 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/c142df4d-f6a4-533f-80ae-a1ea23f8fe3f"
  },
  {
    "tag": "B2B",
    "eventName": "IndiaSoft 2026",
    "exhibitionCentre": "Bharat Mandapam",
    "location": "Delhi",
    "startDate": "23-25 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/67b480e2-62df-5135-a4f5-6ef458a70ca4"
  },
  {
    "tag": "B2B",
    "eventName": "Digital Gaming India Expo 2026",
    "exhibitionCentre": "Bharat Mandapam",
    "location": "Delhi",
    "startDate": "23-25 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/e5a8aa31-1d0f-529f-91b4-d8a52b95755c"
  },
  {
    "tag": "B2B",
    "eventName": "Startup Hub Expo 2026",
    "exhibitionCentre": "Bharat Mandapam",
    "location": "Delhi",
    "startDate": "23-25 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/ba16c725-c0d8-5231-aec2-3c6241ca1363"
  },
  {
    "tag": "B2B",
    "eventName": "Future Cities India Expo 2026",
    "exhibitionCentre": "Bharat Mandapam",
    "location": "Delhi",
    "startDate": "23-25 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/9659aeb1-8a10-5f1d-80d5-3727da76a2ed"
  },
  {
    "tag": "B2B",
    "eventName": "AI Bharat Expo 2026",
    "exhibitionCentre": "Bharat Mandapam",
    "location": "Delhi",
    "startDate": "23-25 Mar",
    "month": "Mar",
    "weblink": ""
  },
  {
    "tag": "B2B",
    "eventName": "India First Startup Expo Conclave - Startup Ka Mahakumbh 2026",
    "exhibitionCentre": "YashoBhoomi",
    "location": "Delhi",
    "startDate": "9-10 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/7cdd6452-f68b-5190-9f07-c18d69a299a2"
  },
  {
    "tag": "B2B",
    "eventName": "CEM India 2026",
    "exhibitionCentre": "YashoBhoomi",
    "location": "Delhi",
    "startDate": "10-12 Mar",
    "month": "Mar",
    "weblink": ""
  },
  {
    "tag": "B2B",
    "eventName": "Aquamate India 2026",
    "exhibitionCentre": "YashoBhoomi",
    "location": "Delhi",
    "startDate": "10-12 Mar",
    "month": "Mar",
    "weblink": ""
  },
  {
    "tag": "B2B",
    "eventName": "MRO XPO India 2026",
    "exhibitionCentre": "YashoBhoomi",
    "location": "Delhi",
    "startDate": "11-12 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/a5fcfbcf-fdb6-51ca-a668-e8e7c3a1fdac"
  },
  {
    "tag": "B2B",
    "eventName": "IMM India 2026",
    "exhibitionCentre": "YashoBhoomi",
    "location": "Delhi",
    "startDate": "11-14 Mar",
    "month": "Mar",
    "weblink": ""
  },
  {
    "tag": "B2B",
    "eventName": "Horti India Expo 2026",
    "exhibitionCentre": "YashoBhoomi",
    "location": "Delhi",
    "startDate": "12-14 Mar",
    "month": "Mar",
    "weblink": ""
  },
  {
    "tag": "B2B",
    "eventName": "ad:tech New Delhi 2026",
    "exhibitionCentre": "YashoBhoomi",
    "location": "Delhi",
    "startDate": "18-19 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/f0579170-70dc-542b-8422-23404be3108e"
  },
  {
    "tag": "B2B",
    "eventName": "BHARAT ELECTRICITY SUMMIT 2026",
    "exhibitionCentre": "YashoBhoomi",
    "location": "Delhi",
    "startDate": "19-22 Mar",
    "month": "Mar",
    "weblink": ""
  },
  {
    "tag": "B2B",
    "eventName": "Corru Pack Print India 2026",
    "exhibitionCentre": "YashoBhoomi",
    "location": "Delhi",
    "startDate": "19-22 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/11c3da5f-8b79-5660-b770-1cbdc5ef0325"
  },
  {
    "tag": "B2B",
    "eventName": "INOPTICS 2026",
    "exhibitionCentre": "YashoBhoomi",
    "location": "Delhi",
    "startDate": "21-23 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/86f9a647-afc3-5af1-ac91-4328e6d9e401"
  },
  {
    "tag": "B2B",
    "eventName": "India Sporting Goods Fair 2026",
    "exhibitionCentre": "YashoBhoomi",
    "location": "Delhi",
    "startDate": "31-Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/a517fd42-8361-5e9e-a765-6e1df8b4c39a"
  },
  {
    "tag": "B2B",
    "eventName": "Apex Expos 2026",
    "exhibitionCentre": "India Expo Mart",
    "location": "Noida",
    "startDate": "1-2 Mar",
    "month": "Mar",
    "weblink": "https://10times.com/e12h-xhs9-sz2f-5-apex-expos"
  },
  {
    "tag": "B2B",
    "eventName": "Road X India 2026",
    "exhibitionCentre": "INDIA EXPO CENTRE & MART",
    "location": "Noida",
    "startDate": "9-10 Mar",
    "month": "Mar",
    "weblink": "https://10times.com/e1h4-83s4-sprx-h-road-x-india"
  },
  {
    "tag": "B2B",
    "eventName": "Ifss TEch & Leadership Summit 2026",
    "exhibitionCentre": "INDIA EXPO CENTRE & MART",
    "location": "Noida",
    "startDate": "11-14 Mar",
    "month": "Mar",
    "weblink": ""
  },
  {
    "tag": "B2B",
    "eventName": "Oil & Gas Connect Expo 2026",
    "exhibitionCentre": "INDIA EXPO CENTRE & MART",
    "location": "Noida",
    "startDate": "12-14 Mar",
    "month": "Mar",
    "weblink": "https://10times.com/e1hz-2r2f-0g4x-s-oil-gas-connect-expo"
  },
  {
    "tag": "B2B",
    "eventName": "Garment Technology Expo 2026",
    "exhibitionCentre": "INDIA EXPO CENTRE & MART",
    "location": "Noida",
    "startDate": "20-23 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/5401b760-c6dd-5d38-b516-924d19289534"
  },
  {
    "tag": "B2B",
    "eventName": "Spring India Expo 2026",
    "exhibitionCentre": "TBA",
    "location": "Kolkata",
    "startDate": "05-Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/e2b4e58c-36d4-5185-a49a-3441081c8a5d"
  },
  {
    "tag": "B2B",
    "eventName": "Bengal Auto Expo 2026",
    "exhibitionCentre": "Patuli Mela Ground",
    "location": "Kolkata",
    "startDate": "6-8 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/d1b5dd06-1eb8-5948-9500-917f418faec3"
  },
  {
    "tag": "B2B",
    "eventName": "Next-Generation Refractory Solution for the Iron and Steel Industry: Challenges and Emerging Trends 2026",
    "exhibitionCentre": "Vivanta Kolkata EM Bypass",
    "location": "Kolkata",
    "startDate": "12-13 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/3f376941-f865-59ae-9e54-10fe84cb066f"
  },
  {
    "tag": "B2B",
    "eventName": "Kolkata Footwear Fair 2026",
    "exhibitionCentre": "Biswa Bangla Convention Centre",
    "location": "Kolkata",
    "startDate": "18-22 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/f6833f21-a953-5c81-9c36-67c54cac56d0"
  },
  {
    "tag": "B2B",
    "eventName": "India International Motor Show 2026",
    "exhibitionCentre": "CIDCO Exhibition Centre",
    "location": "Mumbai",
    "startDate": "27 Feb To 1 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/00d6ab3a-223a-5c07-a28c-c977fe63fe40"
  },
  {
    "tag": "B2B",
    "eventName": "India International Radiology & Magning Expo 2026",
    "exhibitionCentre": "CIDCO Exhibition Centre",
    "location": "Mumbai",
    "startDate": "6-8 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/2d5e58df-1b14-525e-9100-bba6aa37270c"
  },
  {
    "tag": "B2B",
    "eventName": "India International Neuro Tech Expo 2026",
    "exhibitionCentre": "CIDCO Exhibition Centre",
    "location": "Mumbai",
    "startDate": "6-8 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/016e7e0b-735e-580e-afb9-825fc9bf53d5"
  },
  {
    "tag": "B2B",
    "eventName": "Coinex Mumbai 2026",
    "exhibitionCentre": "Shri Sunderbai Hall",
    "location": "Mumbai",
    "startDate": "6-9 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/4357bade-a88e-5e37-b4aa-93ac2ec137b4"
  },
  {
    "tag": "B2B",
    "eventName": "Crescent Moon Exhibition 2026",
    "exhibitionCentre": "The St. Regis",
    "location": "Mumbai",
    "startDate": "10-Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/ac761039-a756-5a03-a632-30b7ee0a6542"
  },
  {
    "tag": "B2B",
    "eventName": "IAAPI Amusement Expo 2026",
    "exhibitionCentre": "Bombay Exhibition Centre",
    "location": "Mumbai",
    "startDate": "10-12 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/aec5e476-0042-5315-84a6-bec6e88c7b4f"
  },
  {
    "tag": "B2B",
    "eventName": "Annual India Chemical Industry Outlook Conference & Exhibition 2026",
    "exhibitionCentre": "Grand Hyatt Mumbai Hotel & Residences",
    "location": "Mumbai",
    "startDate": "11-12 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/757214e3-612a-57d1-858f-0fba37abb003"
  },
  {
    "tag": "B2B",
    "eventName": "OOH Phoenix Awards & Summit 2026",
    "exhibitionCentre": "Novotel Mumbai International Airport",
    "location": "Mumbai",
    "startDate": "12-Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/fe9f8b0b-03f9-5132-9566-3a5f9ae123ac"
  },
  {
    "tag": "B2B",
    "eventName": "BFSI Bharat World Summit 2026",
    "exhibitionCentre": "Bombay Exhibition Centre",
    "location": "Mumbai",
    "startDate": "12-13 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/ec1ec674-6a6d-5da6-b189-1d02c0ce69cc"
  },
  {
    "tag": "B2B",
    "eventName": "iDAC Mumbai Expo 2026",
    "exhibitionCentre": "Jio World Convention Centre",
    "location": "Mumbai",
    "startDate": "12-14 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/455ecf92-6b9a-572e-a32e-33257899ddc7"
  },
  {
    "tag": "B2B",
    "eventName": "Acrex India Mumbai 2026",
    "exhibitionCentre": "Bombay Exhibition Centre",
    "location": "Mumbai",
    "startDate": "12-14 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/4d397fb0-ce4b-5c84-8e5e-5ace0dac74bd"
  },
  {
    "tag": "B2B",
    "eventName": "Content India 2026",
    "exhibitionCentre": "Taj Lands End",
    "location": "Mumbai",
    "startDate": "16-18 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/42b95ecc-c444-5803-9e32-4603f6ab41f0"
  },
  {
    "tag": "B2B",
    "eventName": "World Aroma Ingredients Congress & Expo 2026",
    "exhibitionCentre": "Fairmont Mumbai",
    "location": "Mumbai",
    "startDate": "16-18 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/282829ed-4252-5454-9327-6358aec935d5"
  },
  {
    "tag": "B2B",
    "eventName": "EduInfra Connect: Design & Build Series 2026",
    "exhibitionCentre": "Jio World Convention Centre",
    "location": "Mumbai",
    "startDate": "17-Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/60d05ce1-7259-5178-9331-415cebe79239"
  },
  {
    "tag": "B2B",
    "eventName": "Break Bulk, Heavylift & Project Forwarding 2026",
    "exhibitionCentre": "Jio World Convention Centre",
    "location": "Mumbai",
    "startDate": "17-18 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/5ebec1f2-22dd-50c5-b616-ed0632672195"
  },
  {
    "tag": "B2B",
    "eventName": "CTL and BHP Conference and Expo 2026",
    "exhibitionCentre": "Jio World Convention Centre",
    "location": "Mumbai",
    "startDate": "17-18 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/6838ab0d-ef7f-592a-8225-4f9179488236"
  },
  {
    "tag": "B2B",
    "eventName": "Mega Cargo Show 2026",
    "exhibitionCentre": "Jio World Convention Centre",
    "location": "Mumbai",
    "startDate": "17-18 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/6a474336-bcf0-576b-851a-6b3b28584344"
  },
  {
    "tag": "B2B",
    "eventName": "International Trade Show on Boiler & Thermal Technology 2026",
    "exhibitionCentre": "Bombay Exhibition Centre",
    "location": "Mumbai",
    "startDate": "19-22 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/f526e71e-45de-5a23-936f-572bb4f5691f"
  },
  {
    "tag": "B2B",
    "eventName": "Corru Pack Print India Expo 2026",
    "exhibitionCentre": "Bombay Exhibition Centre",
    "location": "Mumbai",
    "startDate": "19-22 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/a9bc6117-b4cf-508e-b492-cb9089a64174"
  },
  {
    "tag": "B2B",
    "eventName": "PAPERTEX International Trade Show of Paper, Tissue & Corrugated Boxes 2026",
    "exhibitionCentre": "Bombay Exhibition Centre",
    "location": "Mumbai",
    "startDate": "19-22 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/27b73cb7-756c-5c9e-90b7-33aa6c8b7a73"
  },
  {
    "tag": "B2B",
    "eventName": "Plastiworld 2026",
    "exhibitionCentre": "Jio World Convention Centre",
    "location": "Mumbai",
    "startDate": "23-25 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/f8bef066-14bc-5de4-9f28-531e96072af8"
  },
  {
    "tag": "B2B",
    "eventName": "Wedding Asia - Mumbai 2026",
    "exhibitionCentre": "The St. Regis",
    "location": "Mumbai",
    "startDate": "24-25 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/cd0ed3c6-12f5-5c70-aec8-55c939ed14b9"
  },
  {
    "tag": "B2B",
    "eventName": "World of Sleep 2026",
    "exhibitionCentre": "Bombay Exhibition Centre",
    "location": "Mumbai",
    "startDate": "27-29 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/cbfc5bde-bb83-5684-a0b2-11c44b8464d7"
  },
  {
    "tag": "B2B",
    "eventName": "Mumbai - LTD Edition 2026",
    "exhibitionCentre": "Bombay Exhibition Centre",
    "location": "Mumbai",
    "startDate": "27-Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/0c160cc3-dbe9-5ee2-9ff8-a63f25eab152"
  },
  {
    "tag": "B2B",
    "eventName": "LTD Edition - Sustainable Fashion & Lifestyle Exhibition 2026",
    "exhibitionCentre": "Bombay Exhibition Centre",
    "location": "Mumbai",
    "startDate": "27-Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/b6c8e399-af78-5966-bbef-a92cd8d38ab0"
  },
  {
    "tag": "B2B",
    "eventName": "Organic Food and Beverage Expo 2026",
    "exhibitionCentre": "Bombay Exhibition Centre",
    "location": "Mumbai",
    "startDate": "27-Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/c5b5e046-a67c-51b5-96b2-e0276641de96"
  },
  {
    "tag": "B2B",
    "eventName": "Fashionista Group Exhibition: Fashionista Collective 2026",
    "exhibitionCentre": "Bombay Exhibition Centre",
    "location": "Mumbai",
    "startDate": "27-Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/84109f14-9bfc-5541-b315-3b6094da907b"
  },
  {
    "tag": "B2B",
    "eventName": "Gau Tech Expo 2026",
    "exhibitionCentre": "Agriculture College Ground",
    "location": "Pune",
    "startDate": "20-23 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/d1b6aee3-fa75-5f5a-a513-c94550c8f5c2"
  },
  {
    "tag": "B2B",
    "eventName": "Bioenergy India Expo 2026",
    "exhibitionCentre": "Auto Cluster Exhibition Center",
    "location": "Pune",
    "startDate": "27-29 Mar",
    "month": "Mar",
    "weblink": "https://gtm.whr.ai/internal/event/1eb5887c-08d9-55b9-8b2b-eeea60c70b98"
  }
];
