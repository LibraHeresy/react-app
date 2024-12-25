// src/views/count/index.tsx
import { observer } from 'mobx-react';
import counter from '../../store/Counter';
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/add-order")}>
      Go to Add Order Page
    </button>
  );
}

const Page = observer(() => {
  return (
    <div>
      <MyComponent />
      <h3>计数器案例</h3>
      <div>点击次数：{counter.count}</div>
      <button onClick={counter.increment}>加1</button>
      <button onClick={counter.decrement}>减1</button>
      <button onClick={counter.reset}>重置</button>
    </div>
  );
});

export default Page;