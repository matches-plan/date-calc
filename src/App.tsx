import { useEffect, useState } from 'react';
import { addDate, addMonth, addWorkdayWithHoliday } from './utils';

function App() {
  const [startDate, setStartDate] = useState('');
  const [payDate, setPayDate] = useState('');
  const [endDate, setEndDate] = useState('');
  useEffect(() => {
    const eDate = addWorkdayWithHoliday(startDate, 3);
    setPayDate(eDate);

    const payDate = addDate(addMonth(eDate, 1), -1);
    setEndDate(payDate);
  }, [startDate]);

  return (
    <div
      className='App'
      style={{
        margin: '60px',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '260px',
          justifyContent: 'space-between',
        }}
      >
        <label
          style={{
            fontSize: '20px',
          }}
        >
          시작일 설정
        </label>
        <input type='date' onChange={e => setStartDate(e.target!.value!)} />
      </div>
      <div>
        <div
          style={{
            margin: '20px',
            width: '320px',
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
          최초계약기간의 시작일 :
          <input
            type='text'
            disabled
            value={startDate}
            style={{ fontSize: '20px', width: '120px' }}
          />
        </div>
        <div
          style={{
            margin: '20px',
            width: '320px',
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
          종료일 :{' '}
          <input
            type='text'
            disabled
            value={endDate}
            style={{ fontSize: '20px', width: '120px' }}
          />
        </div>
        <div
          style={{
            margin: '20px',
            width: '320px',
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
          3일 프로모션으로 결제일 :{' '}
          <input
            type='text'
            disabled
            value={payDate}
            style={{ fontSize: '20px', width: '120px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
