import Cal from "@calcom/embed-react";

const configuredLink = process.env.NEXT_PUBLIC_CALCOM_LINK?.trim();
const calLink = configuredLink?.replace(/^https?:\/\/(www\.)?cal\.com\//, "").replace(/^\/+|\/+$/g, "");

export default function CalBooking() {
  return <section id="schedule" className="cal-booking"><p className="eyebrow">SCHEDULING / ASIA-DHAKA TIMEZONE</p><h2>BOOK A MEETING</h2>{calLink ? <><p>Choose an available time in the calendar. Cal.com will confirm the booking and provide reschedule or cancellation details.</p><div className="cal-frame"><Cal calLink={calLink} calOrigin="https://cal.com" style={{ width: "100%", height: "680px", overflow: "hidden" }} config={{ layout: "month_view", theme: "light" }}/></div><p><a className="text-link" href={`https://cal.com/${calLink}`} target="_blank" rel="noreferrer">OPEN THE SCHEDULER IN A NEW TAB ↗</a></p></> : <div className="booking-pending"><p>The scheduling account and event link have not been configured yet, so no available times can be shown.</p><p>For now, use the hiring or project form above to start a conversation.</p></div>}</section>;
}
