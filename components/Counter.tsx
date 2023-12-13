import { useEffect, useState } from "react";

const Counter: React.FC<{ time: string }> = ({ time }) => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(time).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setPartyTime(true);
        clearInterval(interval);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="flex text-lg md:text-2xl gap-x-2 font-bold">
      <div className="flex flex-col">
        {days}
        <p className="text-xs"> jours </p>
      </div>
      <p>:</p>
      <div>
        {hours}
        <p className="text-xs"> heures </p>
      </div>
      <p>:</p>
      <div>
        {minutes}
        <p className="text-xs"> MIN </p>
      </div>
      <p>:</p>
      <div>
        {seconds}
        <p className="text-xs"> SEC </p>
      </div>
    </div>
  );
};

export default Counter;
