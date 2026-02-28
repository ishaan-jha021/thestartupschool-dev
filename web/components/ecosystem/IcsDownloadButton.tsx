'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { FounderEvent, parseEventStringDates } from '@/lib/data/events';

export function IcsDownloadButton({ event }: { event: FounderEvent }) {
    const handleDownload = () => {
        const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        const datesInfo = parseEventStringDates(event);

        let dateParams = '';
        if (datesInfo) {
            dateParams = `DTSTART;VALUE=DATE:${datesInfo.start}\nDTEND;VALUE=DATE:${datesInfo.end}\n`;
        } else {
            const today = now.substring(0, 8);
            dateParams = `DTSTART;VALUE=DATE:${today}\n`;
        }

        const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//The Startup School//Founder Calendar//EN
BEGIN:VEVENT
UID:${Math.random().toString(36).substring(2, 10)}@thestartupschool.in
DTSTAMP:${now}
${dateParams.trim()}
SUMMARY:${event.eventName}
LOCATION:${event.exhibitionCentre}, ${event.location}
DESCRIPTION:Dates: ${event.startDate} ${event.month}\\nFind out more: ${event.weblink || 'No link provided.'}
END:VEVENT
END:VCALENDAR`;

        const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${event.eventName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-2.5 px-4 rounded-xl text-sm font-medium transition-colors border border-white/5 hover:border-white/10"
        >
            <Download className="w-4 h-4" />
            iCal
        </button>
    );
}
