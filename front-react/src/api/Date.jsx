import axios from "axios";
export const CHIC_DOMAIN = "http://localhost:8111";

const CalendarApi = {
  saveDateRange: async function(startDate, endDate, diffInDays) {
    const data = {
      startDate: startDate,
      endDate: endDate,
      diffInDays: diffInDays,
    };
    console.log(data);
    try {
      const response = await axios.post(CHIC_DOMAIN + "/api/save-date-range", data);
      if (response.status === 200) {
        console.log("날짜 범위가 저장되었습니다.");
      } else {
        console.log("날짜 범위 저장에 실패했습니다.");
      }
      return response;
    } catch (error) {
      console.log("날짜 범위 저장 중 오류가 발생했습니다.");
    }
  },
};

export default CalendarApi;