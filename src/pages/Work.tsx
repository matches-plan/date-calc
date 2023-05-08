import { useState } from 'react';

const price = {
  '--': {
    fee: '',
    additionalFee: '',
    pay: '',
  },
  '2h': {
    fee: '650,000 만원',
    additionalFee: '100,000 만원',
    pay: '1,000,000 만원',
  },
  '3h': {
    fee: '1,000,000 만원',
    additionalFee: '150,000 만원',
    pay: '1,350,000 만원',
  },
  '4h': {
    fee: '1,300,000 만원',
    additionalFee: '200,000 만원',
    pay: '1,650,000 만원',
  },
};

export default function Work() {
  const [fee, setFee] = useState('');
  const [additionalFee, setAdditionalFee] = useState('');
  const [pay, setPay] = useState('');
  return (
    <div style={{ width: '400px' }}>
      <div
        style={{
          display: 'flex',
          width: '180px',
          justifyContent: 'space-between',
        }}
      >
        <label
          style={{
            fontSize: '20px',
          }}
        >
          워크타임
        </label>
        <select
          style={{
            width: '60px',
          }}
          onChange={e => {
            const workTime = e.target.value as '--' | '2h' | '3h' | '4h';
            setFee(price[workTime].fee);
            setAdditionalFee(price[workTime].additionalFee);
            setPay(price[workTime].pay);
          }}
        >
          <option value='--'>--</option>
          <option value='2h'>2h</option>
          <option value='3h'>3h</option>
          <option value='4h'>4h</option>
        </select>
      </div>
      <div>
        <div
          style={{
            margin: '20px',
            width: '360px',
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
          디자이너 보수 :
          <input
            type='text'
            disabled
            style={{ fontSize: '20px', width: '160px', textAlign: 'right' }}
            value={fee}
          />
        </div>
        <div
          style={{
            margin: '20px',
            width: '360px',
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
          최초계약기간 추가 보수 :{' '}
          <input
            type='text'
            disabled
            style={{ fontSize: '20px', width: '160px', textAlign: 'right' }}
            value={additionalFee}
          />
        </div>
        <hr />
        <div
          style={{
            margin: '20px',
            width: '360px',
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
          고객사 결제 :{' '}
          <input
            type='text'
            disabled
            style={{ fontSize: '20px', width: '160px', textAlign: 'right' }}
            value={pay}
          />
        </div>
      </div>
    </div>
  );
}
