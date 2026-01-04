import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Gift, Utensils, Star, Info } from 'lucide-react';
import { MONTH_NAMES, WEEK_DAYS, getNogaDate, formatNogaDate } from '../utils/nogaCalendar';
import { EUDORIA_EVENTS } from '../utils/events';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  
  const nogaToday = getNogaDate(new Date());
  const nogaView = getNogaDate(currentDate);

  const changeMonth = (offset: number) => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + (offset * 28));
    setCurrentDate(nextDate);
    setSelectedDay(null);
  };

  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  
  const getEventsForDay = (day: number) => {
    return EUDORIA_EVENTS.filter(e => e.month === nogaView.month && e.day === day);
  };

  const selectedDayEvents = selectedDay ? getEventsForDay(selectedDay) : [];

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <CalendarIcon className="text-purple-200" size={24} />
              Noga Calendar
            </h2>
            <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-md">
              Year {nogaView.year}
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <button onClick={() => changeMonth(-1)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ChevronLeft size={28} />
            </button>
            <div className="text-center">
              <h3 className="text-3xl font-bold tracking-tight">{MONTH_NAMES[nogaView.month]}</h3>
            </div>
            <button onClick={() => changeMonth(1)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="p-6">
          <div className="grid grid-cols-7 mb-4">
            {WEEK_DAYS.map(day => (
              <div key={day} className="text-center text-xs font-black text-gray-400 uppercase tracking-widest">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {days.map(day => {
              const isToday = 
                nogaToday.day === day && 
                nogaToday.month === nogaView.month && 
                nogaToday.year === nogaView.year;
              
              const dayEvents = getEventsForDay(day);
              const isSelected = selectedDay === day;

              return (
                <button 
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`
                    relative h-16 sm:h-20 flex flex-col items-center justify-start p-2 rounded-2xl border transition-all
                    ${isToday ? 'bg-indigo-50 border-indigo-200 ring-2 ring-indigo-500 ring-offset-2' : 'border-gray-50 hover:border-indigo-100 hover:bg-indigo-50/30'}
                    ${isSelected ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg' : 'text-gray-700'}
                  `}
                >
                  <span className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-gray-900'}`}>{day}</span>
                  <div className="flex flex-wrap gap-0.5 mt-1 justify-center">
                    {dayEvents.slice(0, 3).map((event, idx) => (
                      <div 
                        key={idx} 
                        className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : event.type === 'birthday' ? 'bg-pink-500' : event.type === 'rest-day' ? 'bg-blue-400' : 'bg-amber-500'}`} 
                      />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Day Details */}
      {selectedDay && (
        <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex justify-between items-center mb-4 border-b pb-4">
            <h4 className="text-lg font-bold text-gray-900">
              {MONTH_NAMES[nogaView.month]} {selectedDay}
            </h4>
            <span className="text-xs text-gray-500 font-medium">Events</span>
          </div>
          
          <div className="space-y-3">
            {selectedDayEvents.length > 0 ? (
              selectedDayEvents.map((event, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className={`p-2 rounded-xl ${
                    event.type === 'birthday' ? 'bg-pink-100 text-pink-600' : 
                    event.type === 'rest-day' ? 'bg-blue-100 text-blue-600' : 
                    'bg-amber-100 text-amber-600'
                  }`}>
                    {event.type === 'birthday' ? <Gift size={20} /> : 
                     event.type === 'rest-day' ? <Utensils size={20} /> : 
                     <Star size={20} />}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{event.title}</p>
                    <p className="text-xs text-gray-500 capitalize">{event.type.replace('-', ' ')}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-gray-400">
                <Info size={32} className="mb-2 opacity-20" />
                <p className="text-sm">No specific events recorded for this day.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Info Card */}
      <div className="bg-indigo-50 rounded-2xl p-4 text-indigo-800 text-xs">
        <p className="font-bold mb-1">Eudorian Chronology Note:</p>
        <p>Current Year: {nogaToday.year}. The calendar is 1,000 years ahead of Gregorian time. Each month starts on Day 1 and ends on Day 28. "Eudora's Day" is observed as a day of rest.</p>
      </div>
    </div>
  );
};

export default Calendar;
