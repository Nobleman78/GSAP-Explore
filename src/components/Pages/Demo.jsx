import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Demo = () => {
    const [email, setEmail] = useState('');
    const [showScheduler, setShowScheduler] = useState(false);
    const [selectedDuration, setSelectedDuration] = useState('30 mins');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const durations = ['30 mins', '15 mins', '45 mins'];
    const timeSlots = ['19:00', '19:15', '19:30', '19:45', '20:00', '20:15', '20:30', '20:45'];

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (!email || !email.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }
        setShowScheduler(true);
    };

    const handleDateClick = (day) => {
        if (day) {
            setSelectedDate(day);
        }
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    const handleFinalBooking = () => {
        alert(`Meeting booked!\nDate: October ${selectedDate}, 2025\nTime: ${selectedTime}\nDuration: ${selectedDuration}`);
        // Reset everything
        setShowScheduler(false);
        setEmail('');
        setSelectedDate(null);
        setSelectedTime(null);
        setSelectedDuration('30 mins');
    };

    // Calendar days for October 2025
    const calendarDays = [
        [null, null, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24, 25, 26],
        [27, 28, 29, 30, 31, null, null]
    ];

    if (!showScheduler) {
        return (
            <div className='bg-[#096846] pt-10 lg:pt-20 min-h-screen'>
                <section className='text-center max-w-2xl mx-auto space-y-5 text-white py-12 px-4 poppins'>
                    <h2 className='text-2xl lg:text-5xl font-semibold'>Book a demo.</h2>
                    <p className='text-lg lg:text-2xl'>
                        Have a question or need assistance? Contact us.
                    </p>
                </section>

                <div className='bg-white rounded-t-[70px] p-8 md:p-20 lg:my-20 space-y-6'>
                    <div className='text-center space-y-3 poppins'>
                        <h2 className='text-3xl'>Let's meet</h2>
                        <p className='text-gray-600 max-w-md mx-auto'>
                            Enter your email address and we'll connect you with the right person from Tellet HQ
                        </p>
                    </div>

                    <div className='space-y-5 max-w-7xl mx-auto'>
                        <input
                            type='email'
                            placeholder='Enter your Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleEmailSubmit(e);
                                }
                            }}
                            className='w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#096846]'
                        />
                        <button
                            onClick={handleEmailSubmit}
                            disabled={!email || !email.includes('@')}
                            className='w-full bg-[#096846] text-white text-xl py-4 rounded-xl font-semibold hover:bg-[#0b8153] transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400'>
                            Start Booking
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-gray-50 min-h-screen py-8 px-4'>
            <div className='max-w-6xl mx-auto'>
                <div className='grid md:grid-cols-2 gap-6'>
                    {/* Left Panel - Calendar */}
                    <div className='bg-[#096846] text-white rounded-2xl p-8'>
                        <div className='flex flex-col items-center space-y-6'>
                            <div className='w-20 h-20 bg-pink-400 rounded-full flex items-center justify-center'>
                                <span className='text-5xl font-bold text-white'>t</span>
                            </div>

                            <h2 className='text-2xl font-semibold'>Meet with Tellet</h2>

                            <div className='flex items-center space-x-4'>
                                <button className='p-2 hover:bg-[#0b8153] rounded'>
                                    <IoChevronBack size={20} />
                                </button>
                                <span className='text-xl font-semibold'>October 2025</span>
                                <button className='p-2 hover:bg-[#0b8153] rounded'>
                                    <IoChevronForward size={20} />
                                </button>
                            </div>

                            <div className='w-full'>
                                <div className='grid grid-cols-7 gap-2 text-center mb-4'>
                                    {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
                                        <div key={day} className='text-xs font-semibold'>{day}</div>
                                    ))}
                                </div>

                                <div className='space-y-2'>
                                    {calendarDays.map((week, weekIdx) => (
                                        <div key={weekIdx} className='grid grid-cols-7 gap-2'>
                                            {week.map((day, dayIdx) => (
                                                <button
                                                    key={dayIdx}
                                                    onClick={() => handleDateClick(day)}
                                                    disabled={!day}
                                                    className={`aspect-square rounded-lg flex items-center justify-center text-sm
                                                        ${!day ? 'invisible' : ''}
                                                        ${selectedDate === day ? 'bg-white text-[#096846] font-bold' : 'hover:bg-[#0b8153]'}
                                                        ${day && selectedDate !== day ? 'text-white/70' : ''}
                                                    `}>
                                                    {day}
                                                </button>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Time Selection */}
                    <div className='bg-white rounded-2xl p-8 space-y-6'>
                        <div>
                            <h3 className='text-xl font-semibold mb-4 text-gray-800'>How long do you need?</h3>
                            <div className='grid grid-cols-3 gap-3'>
                                {durations.map(duration => (
                                    <button
                                        key={duration}
                                        onClick={() => setSelectedDuration(duration)}
                                        className={`py-3 px-4 rounded-lg border-2 transition
                                            ${selectedDuration === duration
                                                ? 'border-[#096846] bg-gray-100 text-[#096846] font-semibold'
                                                : 'border-gray-300 hover:border-gray-400'
                                            }`}>
                                        {duration}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className='text-xl font-semibold mb-2 text-gray-800'>What time works best?</h3>
                            <p className='text-sm text-gray-600 mb-4'>
                                Showing times for <span className='font-semibold'>27 October 2025</span>
                            </p>

                            <div className='mb-4'>
                                <select className='w-full p-3 border border-gray-300 rounded-lg text-[#096846] font-medium focus:outline-none focus:ring-2 focus:ring-[#096846]'>
                                    <option>UTC +06:00 Almaty, Bishkek, Dacca, Dhaka</option>
                                </select>
                            </div>

                            <div className='space-y-2 max-h-64 overflow-y-auto'>
                                {timeSlots.map(time => (
                                    <button
                                        key={time}
                                        onClick={() => handleTimeSelect(time)}
                                        className={`w-full py-4 rounded-lg border-2 transition text-center
                                            ${selectedTime === time
                                                ? 'border-[#096846] bg-[#096846] text-white font-semibold'
                                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                            }`}>
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={handleFinalBooking}
                            disabled={!selectedDate || !selectedTime}
                            className='w-full bg-[#096846] text-white py-4 rounded-xl font-semibold hover:bg-[#0b8153] transition disabled:bg-gray-400 disabled:cursor-not-allowed'>
                            Confirm Booking
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Demo;