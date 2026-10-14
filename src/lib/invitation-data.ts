export const invitation = {
  bride: "فاطمه",
  groom: "علی",
  monogram: "F / A",
  title: "علی و فاطمه‌نین توی مراسمی",
  coverKicker: "F / A",
  coverTitle: "توی شنلیگیمیزه خوش گلمیسینیز",
  openLabel: "دعوتنامه‌نی آچین",
  bismillah: "سئوگی آدینا",
  letterTitle: "سئوگی داستانیمیز",
  letter: "",
  storyTitle: "سئوگی داستانیمیز",
  story: "«عشق ایمیش هر نه وار عالمده،\nعلم بیر قئیلو-قال ایمیش آنجاق.»\n— فضولی\n\nفضولی‌نین بو مصرالارینداکی عشق کیمی، سئوگیمیز ده کؤنلوموزده چیچکلندی. ایندی بو سئوگی‌نی بیر عؤمورلوک یولا چئوییره‌جه‌ییمیز شنلیک گونوموزده سیزی ده یانیمیزدا گؤرمک ایسته‌ریک.",
  detailsTitle: "مراسمین بیلگی‌لری",
  timelineTitle: "شنلیک برنامه‌سی",
  timelineLead: "پنجشنبه، ۳۰ مهر ۱۴۰۵",
  countdownTitle: "گؤروشوموزه قالان زامان",
  countdownPast: "بو گؤزل گون خاطیره‌لرده قالدی",
  rsvpTitle: "دعوتینیزا جواب",
  rsvpLead: "عزیز ............!",
  rsvpHint: "زحمت اولماسا، گله‌جگینیزی بیزه بیلدیرین.",
  rsvpEmail: "fatemehheydarikiya1997@gmail.com",
  locationTitle: "مراسمین آدرسی",
  locationKicker: "گؤروش یئریمیز",
  venueName: "باغ تالار رویال",
  venueAddress: "تبریز، خاوران، جاده باسمنج (بلوار شهدای غواص)، نرسیده به میدان آیت الله شاهرودی (باغ یعقوب)، باغ تالار رویال.",
  jalali: {
    year: 1405,
    month: 7,
    day: 30,
    weekday: "پنجشنبه",
    monthName: "مهر",
    dayName: "سی‌ام",
  },
  timeRange: "۱۶:۰۰",
  timeLead: "باشلانیش ساعاتی: ۱۶:۰۰",
  // 30 Mehr 1405 = 22 October 2026, Asia/Tehran (UTC+03:30)
  startIso: "2026-10-22T12:30:00.000Z",
  endIso: "2026-10-22T18:30:00.000Z",
  schedule: [
    { time: "۱۶:۰۰", title: "خوش گلمیسینیز و مراسمین باشلانیشی" },
    { time: "۱۶:۳۰", title: "شنلیک و سئوینج" },
    { time: "۱۹:۳۰", title: "آخشام یئمه‌یی" },
  ],
  mapsQuery: "باغ تالار رویال تبریز خاوران جاده باسمنج",
  neshanPlace: "https://balad.ir/location?latitude=38.012967&longitude=46.438293&zoom=16.500000",
} as const;

export const rsvpOptions = [
  { id: "yes", label: "گله‌جه‌م", hint: "سئوینجله گله‌جه‌م" },
  { id: "maybe", label: "هله بیلینمیر", hint: "یاخین‌دا خبر وئره‌جه‌م" },
  { id: "no", label: "گله بیلمیه‌جه‌م", hint: "کؤنلوم سیزینله‌دیر" },
] as const;

export type RsvpStatus = (typeof rsvpOptions)[number]["id"];

export function mapsLinks(query: string) {
  void query;
  return [
    {
      id: "google-alt",
      label: "گوگل (مسیریابی)",
      href: `https://www.google.com/maps/dir/?api=1&destination=38.012967%2C46.438293`,
    },
    {
      id: "balad",
      label: "بلد",
      href: invitation.neshanPlace,
    },
    {
      id: "google",
      label: "گوگل‌مپ",
      href: `https://www.google.com/maps/search/?api=1&query=38.012967%2C46.438293`,
    },
    {
      id: "waze",
      label: "ویز",
      href: `https://waze.com/ul?ll=38.012967%2C46.438293&navigate=yes`,
    },
  ] as const;
}

export function calendarUrls() {
  const text = encodeURIComponent(invitation.title);
  const details = encodeURIComponent(
    `${invitation.venueName} — ${invitation.venueAddress}`,
  );
  const location = encodeURIComponent(
    `${invitation.venueName}، ${invitation.venueAddress}`,
  );
  const dates = "20261022T160000/20261022T220000";
  return {
    google: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&ctz=Asia/Tehran&details=${details}&location=${location}`,
  };
}

export function buildIcs(): string {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//AliFatemeh//Invitation//FA",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    "DTSTAMP:20261001T000000Z",
    "DTSTART;TZID=Asia/Tehran:20261022T160000",
    "DTEND;TZID=Asia/Tehran:20261022T220000",
    `SUMMARY:${invitation.title}`,
    `LOCATION:${invitation.venueName}، ${invitation.venueAddress}`,
    `DESCRIPTION:${invitation.story}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
